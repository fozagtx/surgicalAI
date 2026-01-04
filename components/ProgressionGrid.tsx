"use client";

interface ProgressionGridProps {
  beforeImage: string;
  generatedImage: string;
}

export default function ProgressionGrid({ beforeImage, generatedImage }: ProgressionGridProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-slate-900 p-4 rounded-xl shadow-2xl">
        <img
          src={generatedImage}
          alt="Hair transplant progression timeline showing 8 stages from before to final result"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
