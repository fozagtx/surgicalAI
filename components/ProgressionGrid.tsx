"use client";

interface ProgressionGridProps {
  beforeImage: string;
  generatedImage: string;
}

const PROGRESSION_STAGES = [
  { label: "Before", sublabel: "(Current)", useOriginal: true, opacity: 1 },
  { label: "Grafting", sublabel: "(Day 0)", useOriginal: true, opacity: 0.95 },
  { label: "Month 1", sublabel: "(Shedding Phase)", useOriginal: true, opacity: 0.85 },
  { label: "Month 3", sublabel: "(Early Growth)", useOriginal: false, opacity: 0.3 },
  { label: "Month 5", sublabel: "(Noticeable Growth)", useOriginal: false, opacity: 0.5 },
  { label: "Month 8", sublabel: "(Significant Density)", useOriginal: false, opacity: 0.75 },
  { label: "Month 10", sublabel: "(Nearing Final Result)", useOriginal: false, opacity: 0.9 },
  { label: "Month 12", sublabel: "(Final Result)", useOriginal: false, opacity: 1 },
];

export default function ProgressionGrid({ beforeImage, generatedImage }: ProgressionGridProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-4 gap-1 md:gap-2 bg-black p-2 md:p-3 rounded-xl">
        {PROGRESSION_STAGES.map((stage, index) => (
          <div key={index} className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-slate-900 relative">
              {/* Base layer - before image */}
              <img
                src={beforeImage}
                alt={`${stage.label} ${stage.sublabel}`}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Overlay layer - generated image with varying opacity for transition effect */}
              {!stage.useOriginal && (
                <img
                  src={generatedImage}
                  alt={`${stage.label} ${stage.sublabel}`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ opacity: stage.opacity }}
                />
              )}
              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-8 pb-2 px-1">
                <p className="text-white text-[10px] md:text-sm font-semibold text-center leading-tight">
                  {stage.label}
                </p>
                <p className="text-white/70 text-[8px] md:text-xs text-center leading-tight">
                  {stage.sublabel}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
