import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SurgicalAI - Hair Transplant Visualization',
  description: 'AI-powered hair transplant visualization tool',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-geist" suppressHydrationWarning>{children}</body>
    </html>
  );
}
