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

    const prompt = "Transform this person to show a successful hair transplant result with a full, natural-looking hairline and dense hair coverage. The person should have a healthy, youthful appearance with restored hair that matches their facial features and age. Make it photorealistic, high quality, with natural lighting.";

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
    const base64 = btoa(
      String.fromCharCode.apply(null, Array.from(uint8Array))
    );
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
