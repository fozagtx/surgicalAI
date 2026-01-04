# SurgicalAI

AI-powered hair transplant visualization tool. Upload a photo and see realistic predictions of your hair transplant results.

## Features

- Upload your photo or use a sample image
- AI-generated hair transplant predictions
- Before/after comparison view
- 12-month progression timeline visualization
- Download your results

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fozagtx/surgicalAI.git
cd surgicalAI
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
surgicalAI/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── api/              # API routes
│       └── generate/     # Image generation endpoint
├── components/           # React components
│   ├── ui/               # Shadcn/ui components
│   ├── ImageUploader.tsx # Photo upload component
│   ├── ProgressionGrid.tsx # Timeline grid component
│   └── BeforeAfterSlider.tsx # Comparison slider
├── public/               # Static assets
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
```

## Usage

1. Visit the landing page
2. Click "Try Now" or "Get Your Preview"
3. Upload your photo or select a sample
4. Click "Generate Result"
5. View your predicted transformation
6. Download your results

## Disclaimer

Results are AI-generated simulations and may vary from actual surgical procedures. This tool is for visualization purposes only and should not be considered medical advice.

## License

MIT
