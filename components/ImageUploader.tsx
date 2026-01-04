"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Sparkles, Loader2, ArrowLeft, Download } from "lucide-react";
import ProgressionGrid from "./ProgressionGrid";

const SAMPLE_IMAGES = [
  "/files_1487381-1767543391582-image.png",
];

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSampleSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setGeneratedImage(null);
    setError(null);
  };

  const generateResult = async () => {
    if (!selectedImage) return;

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: selectedImage,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate image");
      }

      const data = await response.json();
      setGeneratedImage(data.imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsGenerating(false);
    }
  };

  const reset = () => {
    setSelectedImage(null);
    setGeneratedImage(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground tracking-tight">SurgicalAI</span>
            </div>
            <Button onClick={() => window.location.reload()} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {generatedImage ? (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-headline-md text-foreground mb-2">Your Complete Journey Timeline</h2>
              <p className="text-muted-foreground">See your transformation unfold month by month</p>
            </div>
            <ProgressionGrid beforeImage={selectedImage!} generatedImage={generatedImage} />
            <div className="flex justify-center gap-4">
              <Button onClick={reset} variant="outline" size="lg">
                Try Another Photo
              </Button>
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = generatedImage;
                  link.download = "hair-transplant-result.jpg";
                  link.click();
                }}
                className="bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Final Result
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-headline-md text-foreground mb-2">Upload Your Photo</h2>
              <p className="text-muted-foreground">
                Choose a photo or upload your own to see your potential results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-section-md text-foreground mb-4">
                    {selectedImage ? "Selected Photo" : "Upload Your Photo"}
                  </h3>
                  {selectedImage ? (
                    <div className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={selectedImage}
                          alt="Selected"
                          className="w-full aspect-[4/3] object-cover rounded-lg"
                        />
                        <label
                          htmlFor="file-upload"
                          className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100"
                        >
                          <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-lg">
                            Change Photo
                          </span>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                      </div>
                      <Button
                        onClick={generateResult}
                        disabled={isGenerating}
                        size="lg"
                        className="w-full"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Generating Result...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-5 w-5" />
                            Generate Result
                          </>
                        )}
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors aspect-[4/3] flex flex-col items-center justify-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                        <p className="text-sm text-muted-foreground/70">PNG, JPG up to 10MB</p>
                      </label>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-section-md text-foreground mb-4">Or Try a Sample</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {SAMPLE_IMAGES.map((imageUrl, index) => (
                      <button
                        key={index}
                        onClick={() => handleSampleSelect(imageUrl)}
                        className={`rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === imageUrl
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        <img
                          src={imageUrl}
                          alt={`Sample ${index + 1}`}
                          className="w-full h-24 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {error && (
              <Card className="border-destructive/50 bg-destructive/10">
                <CardContent className="pt-6">
                  <p className="text-destructive text-center">{error}</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
