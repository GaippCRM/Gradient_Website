import * as Lucide from 'lucide-react';

const icons = [
  'CheckCircle2', 'HelpCircle', 'Info', 'Lightbulb', 'Map', 'Star', 'TrendingUp', 'Zap',
  'Briefcase', 'Home', 'Utensils', 'Bus', 'ShieldCheck', 'CreditCard',
  'Calendar', 'Cloud', 'Thermometer', 'MapPin', 'Languages', 'Clock', 'Coins', 'Users', 'GraduationCap', 'ChevronRight',
  'Plus', 'Minus'
];

icons.forEach(name => {
  const icon = Lucide[name];
  console.log(`${name}: ${typeof icon === 'function' || (typeof icon === 'object' && icon !== null) ? 'OK' : 'MISSING'}`);
});
