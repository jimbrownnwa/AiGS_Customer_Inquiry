Project Overview
Build a single-page React application that demonstrates an AI-powered customer inquiry routing system. This is a demo/portfolio piece for AiGS (Ai Global Solutions), an automation consultancy. The app submits customer inquiries to an n8n webhook and displays the AI-generated classification, routing, and suggested response in real-time.
Tech Stack

React (Vite or Create React App)
Tailwind CSS for styling
No additional UI libraries needed—keep it clean and lightweight

Brand Guidelines
Company: AiGS (Ai Global Solutions)
Tagline: "AI-Powered Process Automation & Data Intelligence"
Color Palette (from their website):

Primary: Deep blue/navy (#1a365d or similar)
Accent: Bright blue (#3182ce)
Success: Green (#38a169)
Warning: Orange (#dd6b20)
Critical: Red (#e53e3e)
Background: Light gray (#f7fafc)
Text: Dark gray (#2d3748)

Tone: Professional, enterprise-grade, but approachable
Webhook Integration
Endpoint: https://n8n.srv1234150.hstgr.cloud/webhook-test/customer-inquiry
Method: POST
Request Headers:
Content-Type: application/json
Request Body:
json{
  "name": "string (required)",
  "email": "string (required)", 
  "company": "string (optional)",
  "message": "string (required)"
}

Response Body:
json{
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
  "ai_summary": "Customer experiencing 3-day API integration issue affecting production systems.",
  "suggested_response": "Thank you for reaching out about your API integration issues. I understand this is affecting your production system, and I'm treating this as a high-priority matter. A senior technical support specialist will contact you within the next 2 hours to help resolve this.",
  "processed_at": "2024-01-15T14:30:05.123Z"
}
```

### UI Components

#### 1. Header
- AiGS logo/text
- Tagline
- Subtitle: "Customer Inquiry Router Demo"

#### 2. Inquiry Form (left side or top)
- **Name** - text input, required
- **Email** - email input, required
- **Company** - text input, optional
- **Message** - textarea, required, 4-6 rows
- **Submit button** - "Submit Inquiry"
- Loading state with spinner during API call
- Client-side validation with friendly error messages

#### 3. Results Panel (right side or below form)
Only visible after successful submission. Display:

**Inquiry ID** - small, muted text at top

**Classification Card:**
- Category with icon (use emoji or simple icons)
  - 🛒 Sales
  - 🔧 Technical Support
  - 💳 Billing
  - ❓ General Inquiry
  - 🚨 Escalation
- Urgency badge (color-coded: low=green, medium=yellow, high=orange, critical=red)
- Sentiment indicator (positive=😊, neutral=😐, frustrated=😤, angry=😠)

**Routing Card:**
- Assigned Team
- Tier
- Estimated Response Time
- Priority Score (as a progress bar or numerical badge)

**AI Summary** - in a highlighted box

**Suggested Response** - in a styled blockquote or card, with a "Copy to Clipboard" button

**Processing time** - small text showing when processed

#### 4. Demo Scenarios Panel
A collapsible or sidebar section with pre-built test scenarios. Clicking one fills the form with sample data:

**Scenario 1: Sales Inquiry**
```
Name: Sarah Chen
Email: sarah.chen@techventures.com
Company: TechVentures Inc
Message: I saw your presentation at the Automation Summit last week. We're a mid-sized manufacturing company looking to automate our order processing workflow. Could you provide information about your enterprise pricing and implementation timeline for a team of about 50 users?
```

**Scenario 2: Urgent Technical Issue**
```
Name: Marcus Johnson
Email: m.johnson@globalretail.com
Company: Global Retail Solutions
Message: URGENT: Our API integration has been returning 500 errors for the past 3 hours. This is blocking all order syncs between our e-commerce platform and inventory system. We're losing orders and need immediate assistance. Error code: ERR_API_TIMEOUT_503
```

**Scenario 3: Billing Question**
```
Name: Jennifer Walsh
Email: j.walsh@coastalfinance.com
Company: Coastal Finance Group
Message: I noticed we were charged twice on our last invoice (INV-2024-1847). The duplicate charge appeared on January 12th. Can you please review and process a refund for the duplicate payment? Our accounting team needs this resolved before end of month close.
```

**Scenario 4: Escalation / Angry Customer**
```
Name: Robert Martinez
Email: robert.m@nationwide-logistics.com
Company: Nationwide Logistics
Message: This is absolutely unacceptable. I've contacted support THREE times about our data sync failures and each time I'm told it's being escalated. It's been two weeks and our operations are still impacted. If this isn't resolved by end of business tomorrow, we will be terminating our contract and seeking legal counsel regarding the damages to our business. I need to speak with someone in leadership immediately.
```

**Scenario 5: General Inquiry**
```
Name: Emily Thompson
Email: emily.t@startuplab.io
Company: StartupLab
Message: Hi there! We're a small startup exploring automation tools for the first time. Does your platform integrate with Airtable and Slack? Also, do you offer any training resources or onboarding support for teams new to workflow automation?
5. Footer
"Powered by n8n + OpenAI"
"Demo by AiGS"
Link to AiGS website (https://www.aigs.com)

Configuration
Create a config file or environment variable for the webhook URL:
javascriptconst WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || 'http://localhost:5678/webhook/customer-inquiry';
```

### Error Handling

- Network errors: Show friendly message with retry button
- Validation errors: Inline field errors
- API errors: Display error message from response if available
- Timeout: Set 30-second timeout with appropriate message

### Responsive Design

- Desktop: Two-column layout (form left, results right)
- Tablet: Stacked layout
- Mobile: Full-width stacked, collapsible demo scenarios

### Nice-to-Have Features (if time permits)

1. Dark mode toggle
2. Animation on results appearing (fade in, slide up)
3. Confetti or subtle celebration animation for "Sales" category
4. Sound effect option for critical/escalation (off by default)
5. "Share Results" button that copies a summary to clipboard
6. History panel showing previous submissions (localStorage)

### File Structure Suggestion
```
src/
├── components/
│   ├── Header.jsx
│   ├── InquiryForm.jsx
│   ├── ResultsPanel.jsx
│   ├── ClassificationCard.jsx
│   ├── RoutingCard.jsx
│   ├── SuggestedResponse.jsx
│   ├── DemoScenarios.jsx
│   └── Footer.jsx
├── hooks/
│   └── useInquirySubmit.js
├── utils/
│   └── api.js
├── config/
│   └── scenarios.js
├── App.jsx
├── index.css
└── main.jsx
Deliverables

Fully functional React application
README with setup instructions
Environment variable example (.env.example)
Build ready for deployment (Vercel, Netlify, or static hosting)