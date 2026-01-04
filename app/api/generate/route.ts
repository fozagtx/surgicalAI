import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Image URL is required" },
        { status: 400 }
      );
    }

    const decartApiKey = process.env.DECART_API_KEY;

    if (!decartApiKey) {
      return NextResponse.json(
        { error: "Decart API key not configured" },
        { status: 500 }
      );
    }

    const prompt = `Create a professional hair transplant progression timeline grid showing 8 stages of hair restoration for this person. Layout: 2 rows x 4 columns on dark background.

Row 1 (left to right):
1. "Before (Current)" - Original bald/balding state
2. "Grafting (Day 0)" - Post-surgery with visible grafts
3. "Month 1 (Shedding Phase)" - Initial shedding period
4. "Month 3 (Early Growth)" - Early hair growth beginning

Row 2 (left to right):
5. "Month 5 (Noticeable Growth)" - Visible hair growth
6. "Month 8 (Significant Density)" - Fuller coverage
7. "Month 10 (Nearing Final Result)" - Near-complete result
8. "Month 12 (Final Result)" - Full natural hairline with dense coverage

Each image should show the same person's face consistently. Include white text labels below each image. Make it photorealistic, high quality, professional medical visualization style with dark/black background.`;

    let imageBlob: Blob;

    if (imageUrl.startsWith("data:")) {
      const base64Data = imageUrl.split(",")[1];
      const mimeType = imageUrl.match(/data:([^;]+)/)?.[1] || "image/jpeg";
      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      imageBlob = new Blob([bytes], { type: mimeType });
    } else if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        return NextResponse.json(
          { error: "Failed to fetch image from URL" },
          { status: 400 }
        );
      }
      imageBlob = await imageResponse.blob();
    } else if (imageUrl.startsWith("/")) {
      const url = new URL(request.url);
      const publicUrl = `${url.protocol}//${url.host}${imageUrl}`;
      const imageResponse = await fetch(publicUrl);
      if (!imageResponse.ok) {
        return NextResponse.json(
          { error: "Failed to fetch image from local path" },
          { status: 400 }
        );
      }
      imageBlob = await imageResponse.blob();
    } else {
      return NextResponse.json(
        { error: "Invalid image URL format" },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("data", imageBlob, "image.jpg");

    const response = await fetch(
      "https://api.decart.ai/v1/generate/lucy-pro-i2i",
      {
        method: "POST",
        headers: {
          "x-api-key": decartApiKey,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Decart API error:", errorText);
      return NextResponse.json(
        { error: `API error: ${response.status} - ${errorText.substring(0, 200)}` },
        { status: response.status }
      );
    }

    const resultBlob = await response.blob();
    const arrayBuffer = await resultBlob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Convert to base64 in chunks to avoid stack overflow
    let binaryString = '';
    const chunkSize = 8192;
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.subarray(i, Math.min(i + chunkSize, uint8Array.length));
      binaryString += String.fromCharCode.apply(null, Array.from(chunk));
    }
    const base64 = btoa(binaryString);
    const generatedImageUrl = `data:${resultBlob.type};base64,${base64}`;

    return NextResponse.json({
      imageUrl: generatedImageUrl,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
