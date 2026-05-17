import * as Lucide from 'lucide-react';

const iconsToCheck = [
  'CheckCircle2', 
  'HelpCircle', 
  'Info', 
  'Lightbulb', 
  'Map', 
  'Star', 
  'TrendingUp', 
  'Zap',
  'Briefcase',
  'Home',
  'Utensils',
  'Bus',
  'ShieldCheck',
  'CreditCard'
];

iconsToCheck.forEach(icon => {
  if (Lucide[icon]) {
    console.log(`${icon}: OK`);
  } else {
    console.log(`${icon}: MISSING`);
  }
});
