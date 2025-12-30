export const demoScenarios = [
  {
    id: 'sales',
    title: 'Sales Inquiry',
    icon: '🛒',
    data: {
      name: 'Sarah Chen',
      email: 'sarah.chen@techventures.com',
      company: 'TechVentures Inc',
      message: "I saw your presentation at the Automation Summit last week. We're a mid-sized manufacturing company looking to automate our order processing workflow. Could you provide information about your enterprise pricing and implementation timeline for a team of about 50 users?"
    }
  },
  {
    id: 'urgent-technical',
    title: 'Urgent Technical Issue',
    icon: '🔧',
    data: {
      name: 'Marcus Johnson',
      email: 'm.johnson@globalretail.com',
      company: 'Global Retail Solutions',
      message: "URGENT: Our API integration has been returning 500 errors for the past 3 hours. This is blocking all order syncs between our e-commerce platform and inventory system. We're losing orders and need immediate assistance. Error code: ERR_API_TIMEOUT_503"
    }
  },
  {
    id: 'billing',
    title: 'Billing Question',
    icon: '💳',
    data: {
      name: 'Jennifer Walsh',
      email: 'j.walsh@coastalfinance.com',
      company: 'Coastal Finance Group',
      message: "I noticed we were charged twice on our last invoice (INV-2024-1847). The duplicate charge appeared on January 12th. Can you please review and process a refund for the duplicate payment? Our accounting team needs this resolved before end of month close."
    }
  },
  {
    id: 'escalation',
    title: 'Escalation / Angry Customer',
    icon: '🚨',
    data: {
      name: 'Robert Martinez',
      email: 'robert.m@nationwide-logistics.com',
      company: 'Nationwide Logistics',
      message: "This is absolutely unacceptable. I've contacted support THREE times about our data sync failures and each time I'm told it's being escalated. It's been two weeks and our operations are still impacted. If this isn't resolved by end of business tomorrow, we will be terminating our contract and seeking legal counsel regarding the damages to our business. I need to speak with someone in leadership immediately."
    }
  },
  {
    id: 'general',
    title: 'General Inquiry',
    icon: '❓',
    data: {
      name: 'Emily Thompson',
      email: 'emily.t@startuplab.io',
      company: 'StartupLab',
      message: "Hi there! We're a small startup exploring automation tools for the first time. Does your platform integrate with Airtable and Slack? Also, do you offer any training resources or onboarding support for teams new to workflow automation?"
    }
  }
];

export const categoryIcons = {
  'sales': '🛒',
  'technical_support': '🔧',
  'billing': '💳',
  'general_inquiry': '❓',
  'escalation': '🚨'
};

export const sentimentEmojis = {
  'positive': '😊',
  'neutral': '😐',
  'frustrated': '😤',
  'angry': '😠'
};
