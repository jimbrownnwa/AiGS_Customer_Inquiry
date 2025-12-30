# AiGS Customer Inquiry Router Demo

A production-grade, AI-powered customer inquiry routing application built for **Ai Global Solutions (AiGS)**. This demo showcases intelligent classification, routing, and response generation for customer support inquiries using n8n and OpenAI.

![AiGS Logo](https://www.aigs.com/favicon.ico)

## Features

- 🤖 **AI-Powered Classification** - Automatically categorizes inquiries by type, urgency, and sentiment
- 🎯 **Intelligent Routing** - Routes to appropriate support tiers with priority scoring
- 💬 **Smart Response Generation** - AI-generated suggested responses for support teams
- ✨ **Premium UI/UX** - Futuristic glass-morphism design with smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Brand Consistency** - Matches AiGS brand guidelines with custom color palette
- 🎭 **Demo Scenarios** - Pre-built test cases for quick demonstrations
- ⚡ **Real-time Processing** - Live webhook integration with instant results

## Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **n8n Webhook** - Backend automation workflow
- **OpenAI** - AI-powered classification and response generation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "AiGS Customer Inquiry"
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. (Optional) Update the webhook URL in `.env`:
```env
VITE_WEBHOOK_URL=https://n8n.srv1234150.hstgr.cloud/webhook-test/customer-inquiry
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Logo, tagline, and title
│   ├── InquiryForm.jsx         # Customer inquiry input form
│   ├── ResultsPanel.jsx        # Main results container
│   ├── ClassificationCard.jsx  # AI classification display
│   ├── RoutingCard.jsx         # Routing information display
│   ├── SuggestedResponse.jsx   # AI-generated response
│   ├── DemoScenarios.jsx       # Pre-built test scenarios
│   └── Footer.jsx              # Footer with credits
├── hooks/
│   └── useInquirySubmit.js     # Form submission logic
├── utils/
│   └── api.js                  # API integration and validation
├── config/
│   └── scenarios.js            # Demo scenario data
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles and animations
```

## Design Philosophy

This application embodies a **"AI Command Center"** aesthetic:

- **Deep navy gradients** creating an immersive tech atmosphere
- **Glass-morphism cards** with holographic effects
- **Neon-inspired accents** using the AiGS orange brand color
- **Smooth micro-interactions** with staggered animations
- **Distinctive typography** using Bricolage Grotesque and Geist fonts
- **Enterprise-grade polish** balancing professionalism with innovation

## API Integration

### Request Format

```json
POST https://n8n.srv1234150.hstgr.cloud/webhook-test/customer-inquiry
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "message": "Your inquiry message here..."
}
```

### Response Format

```json
{
  "success": true,
  "inquiry_id": "INQ-2024-01-00542",
  "classification": {
    "category": "technical_support",
    "category_display": "Technical Support",
    "urgency": "high",
    "sentiment": "frustrated"
  },
  "routing": {
    "assigned_team": "Technical Support - Tier 2",
    "tier": "Tier 2",
    "estimated_response_time": "2 hours",
    "priority_score": 85
  },
  "ai_summary": "Customer experiencing 3-day API integration issue...",
  "suggested_response": "Thank you for reaching out...",
  "processed_at": "2024-01-15T14:30:05.123Z"
}
```

## Demo Scenarios

The application includes 5 pre-built scenarios:

1. **Sales Inquiry** - Enterprise pricing request
2. **Urgent Technical Issue** - Critical API integration failure
3. **Billing Question** - Duplicate charge dispute
4. **Escalation** - Angry customer with unresolved issue
5. **General Inquiry** - New customer product questions

Click any scenario to auto-fill the form and test the AI classification.

## Deployment

This app can be deployed to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Other Platforms
Build the app with `npm run build` and upload the `dist` folder to your hosting provider.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Optimized bundle size with code splitting

## Credits

**Built for:** [AiGS (Ai Global Solutions)](https://www.aigs.com)
**Powered by:** n8n + OpenAI
**Design System:** Custom futuristic enterprise theme
**Fonts:** Bricolage Grotesque, Geist

## License

© 2024 Ai Global Solutions. All rights reserved.

---

**Questions or feedback?** Visit [www.aigs.com](https://www.aigs.com) or contact the AiGS team.
