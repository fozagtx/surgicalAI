# SurgicalAI Setup Guide

## Decart API Configuration

To enable the hair transplant AI generation feature, you need to configure your Decart API credentials.

### Getting Your Decart API Credentials

1. Visit [Decart Platform](https://decart.ai/) and create an account
2. Navigate to your dashboard and locate your API settings
3. Copy your **API Key**

### Configuring the Application

1. Open the `.env` file in the root directory
2. Replace the placeholder value with your actual API key:

```env
DECART_API_KEY=your_actual_api_key_here
```

### Testing the Application

Once configured, you can:
1. Upload your own photo or select from sample images
2. Click "Generate Hair Transplant Result"
3. View the before/after comparison with the interactive slider
4. Download your results

## Features

- **Beautiful Landing Page**: Professional medical-themed design with teal branding
- **Interactive Before/After Slider**: Drag to compare original and generated images
- **Sample Images**: Test with Unsplash images of real people
- **File Upload**: Upload your own photos for personalized results
- **AI Generation**: Powered by Decart API for realistic hair transplant visualization
- **Responsive Design**: Works perfectly on mobile and desktop

## Technology Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- Decart AI API (Lucy Pro i2i model)
- Unsplash Images

## Notes

- The AI generates simulated results and may vary from actual medical procedures
- For best results, use clear, front-facing photos with good lighting
- Processing time may vary depending on API response times
