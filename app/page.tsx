"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Sparkles, Image as ImageIcon, ArrowRight } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";

export default function Home() {
  const [showApp, setShowApp] = useState(false);

  if (showApp) {
    return <ImageUploader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <nav className="bg-card/90 backdrop-blur-md rounded-full border border-border shadow-lg">
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-foreground tracking-tight">SurgicalAI</span>
            </div>
            <Button onClick={() => setShowApp(true)} className="bg-primary hover:bg-primary/90 rounded-full">
              Try Now
            </Button>
          </div>
        </nav>
      </div>

      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Visualize Your Hair Transplant
            <span className="block text-primary mt-2">Before You Commit</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            See realistic predictions of your hair transplant results using advanced AI technology.
            Upload your photo and instantly visualize your transformation.
          </p>
          <Button
            onClick={() => setShowApp(true)}
            className="bg-primary hover:bg-primary/90 rounded-full px-8 h-11"
          >
            Get Your Preview
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4 tracking-tight">
            See The Transformation
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From your current look to your future appearance - visualize the complete journey
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="flex-1 max-w-md">
              <div className="bg-card rounded-2xl shadow-lg p-3 border border-border">
                <img
                  src="/before-comparison.png"
                  alt="Before - Current hair condition"
                  className="w-full rounded-xl aspect-square object-cover"
                />
              </div>
              <p className="text-center mt-4 text-lg font-semibold text-foreground">Before</p>
              <p className="text-center text-sm text-muted-foreground">Current condition</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-primary rounded-full p-4 shadow-lg">
                <ArrowRight className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="bg-card rounded-2xl shadow-lg p-3 border border-border">
                <img
                  src="/after-comparison.png"
                  alt="After - Final result prediction"
                  className="w-full rounded-xl aspect-square object-cover"
                />
              </div>
              <p className="text-center mt-4 text-lg font-semibold text-foreground">After</p>
              <p className="text-center text-sm text-muted-foreground">Predicted result</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6 tracking-tight">
            Your Complete Journey Timeline
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            See your transformation unfold month by month, from grafting day to final results
          </p>
          <div className="bg-card rounded-2xl shadow-lg p-4 border border-border">
            <img
              src="/image.png"
              alt="Hair transplant progression timeline showing 12 months of growth stages"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 tracking-tight">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">1. Upload Photo</h3>
                <p className="text-muted-foreground">
                  Upload a clear photo of your current hair condition
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">2. AI Processing</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your photo and generates realistic results
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">3. View Results</h3>
                <p className="text-muted-foreground">
                  See your predicted transformation instantly
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6 tracking-tight">
            Ready to See Your Future?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands who have visualized their transformation
          </p>
          <Button
            onClick={() => setShowApp(true)}
            className="bg-card text-primary hover:bg-card/90 rounded-full px-8 h-11"
          >
            Start Your Preview
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-muted py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-background tracking-tight">SurgicalAI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-powered hair transplant visualization. Results are simulated and may vary from actual procedures.
          </p>
        </div>
      </footer>
    </div>
  );
}
