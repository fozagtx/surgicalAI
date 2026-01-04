"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Sparkles, Image as ImageIcon, CheckCircle } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Home() {
  const [showApp, setShowApp] = useState(false);

  if (showApp) {
    return <ImageUploader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <nav className="bg-white/90 backdrop-blur-md rounded-full border border-slate-200 shadow-lg">
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-7 w-7 text-teal-600" />
              <span className="text-xl font-bold text-slate-800 font-geist tracking-tight">SurgicalAI</span>
            </div>
            <Button onClick={() => setShowApp(true)} className="bg-teal-600 hover:bg-teal-700 rounded-full">
              Try Now
            </Button>
          </div>
        </nav>
      </div>

      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-geist tracking-tight">
            Visualize Your Hair Transplant
            <span className="block text-teal-600 mt-2">Before You Commit</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            See realistic predictions of your hair transplant results using advanced AI technology.
            Upload your photo and instantly visualize your transformation.
          </p>
          <Button
            onClick={() => setShowApp(true)}
            className="bg-teal-600 hover:bg-teal-700 rounded-full px-8 h-11"
          >
            Get Your Preview
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6 font-geist tracking-tight">
            Your Complete Journey Timeline
          </h2>
          <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
            See your transformation unfold month by month, from grafting day to final results
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-teal-100">
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
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-geist tracking-tight">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-teal-100 bg-white">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">1. Upload Photo</h3>
                <p className="text-slate-600">
                  Upload a clear photo of your current hair condition
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 bg-white">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">2. AI Processing</h3>
                <p className="text-slate-600">
                  Our AI analyzes your photo and generates realistic results
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-100 bg-white">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">3. View Results</h3>
                <p className="text-slate-600">
                  Compare before and after with an interactive slider
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4 font-geist tracking-tight">
            Example Results
          </h2>
          <p className="text-center text-slate-600 mb-12">
            See the transformative power of AI-generated predictions
          </p>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
            afterImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop"
          />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-geist tracking-tight">
            Ready to See Your Future?
          </h2>
          <p className="text-xl text-teal-50 mb-8">
            Join thousands who have visualized their transformation
          </p>
          <Button
            onClick={() => setShowApp(true)}
            className="bg-white text-teal-600 hover:bg-slate-100 rounded-full px-8 h-11"
          >
            Start Your Preview
          </Button>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold text-white font-geist tracking-tight">SurgicalAI</span>
          </div>
          <p className="text-sm">
            AI-powered hair transplant visualization. Results are simulated and may vary from actual procedures.
          </p>
        </div>
      </footer>
    </div>
  );
}
