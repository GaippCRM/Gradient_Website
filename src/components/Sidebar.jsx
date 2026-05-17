import React from 'react';
import {
  Timer,
  Cloud,
  Key,
  MapPin,
  Languages,
  Clock,
  Flag,
  UserCheck,
  CreditCard
} from 'lucide-react';

const getNextThreeMonths = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonthIndex = new Date().getMonth();
  return [
    months[currentMonthIndex],
    months[(currentMonthIndex + 1) % 12],
    months[(currentMonthIndex + 2) % 12]
  ];
};

const defaultTemperatures = [
  { city: 'London',     range: '4°C to 14°C' },
  { city: 'Manchester', range: '4°C to 13°C' },
  { city: 'Edinburgh',  range: '2°C to 13°C' },
  { city: 'Birmingham', range: '3°C to 13°C' },
];

const Sidebar = ({
  startDates = getNextThreeMonths(),
  temperatureTitle = 'Temperature',
  temperatureSubtitle = "In the UK, you'll experience a temperate climate, with mild summers, cool winters, and frequent rainfall throughout the year.",
  temperatures = defaultTemperatures,
  seasons = [
    { label: 'Spring', dates: 'Mar – May', emoji: '🌤' },
    { label: 'Summer', dates: 'Jun – Aug', emoji: '☀️' },
    { label: 'Autumn', dates: 'Sep – Nov', emoji: '🌬' },
    { label: 'Winter', dates: 'Dec – Feb', emoji: '🌨' },
  ],
  insights = [
    { label: 'Capital',    value: 'London',                    icon: MapPin },
    { label: 'Language',   value: 'English',                   icon: Languages },
    { label: 'Time',       value: 'GMT+0 or GMT+1',            icon: Clock },
    { label: 'Currency',   value: 'Great Britain Pound (GBP)', icon: CreditCard },
    { label: 'Population', value: '69M',                       icon: Flag },
    { label: 'Immigrants', value: '16%',                       icon: UserCheck },
  ],
}) => {
  const [liveTemps, setLiveTemps] = React.useState({});
  const [loadingTemps, setLoadingTemps] = React.useState(true);

  React.useEffect(() => {
    const fetchTemps = async () => {
      setLoadingTemps(true);
      const newTemps = {};
      for (const item of temperatures) {
        try {
          const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${item.city}&count=1&format=json`);
          const geoData = await geoRes.json();
          if (geoData.results && geoData.results.length > 0) {
            const { latitude, longitude } = geoData.results[0];
            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const weatherData = await weatherRes.json();
            newTemps[item.city] = `${Math.round(weatherData.current_weather.temperature)}°C`;
          } else {
            newTemps[item.city] = item.range; // fallback
          }
        } catch (e) {
          console.error('Error fetching temp for', item.city, e);
          newTemps[item.city] = item.range; // fallback
        }
      }
      setLiveTemps(newTemps);
      setLoadingTemps(false);
    };
    
    fetchTemps();
  }, [temperatures]);

  return (
    <div className="space-y-5 sticky top-[100px]">

      {/* Start Date */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100">
        <h4 className="flex items-center gap-2 font-semibold text-gray-700 mb-4 text-[15px]">
          <Timer className="text-purple-500" size={18} />
          Start date
        </h4>
        <div className="flex flex-wrap gap-2">
          {startDates.map((month) => (
            <button
              key={month}
              className="px-5 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-[14px] font-normal hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Temperature Card */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-5">
        <div>
          <h4 className="flex items-center gap-2 font-bold text-gray-900 text-xl mb-2">
            <span className="text-2xl">🌡️</span>
            {temperatureTitle}
          </h4>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            {temperatureSubtitle}
          </p>
        </div>

        {/* City temps */}
        <div className="border border-gray-100 rounded-2xl p-4">
          <h5 className="flex items-center gap-2 text-[13px] text-gray-500 font-medium mb-3">
            <Cloud className="text-purple-400" size={16} />
            Current Temperature
          </h5>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {temperatures.map((item, idx) => (
              <div key={idx}>
                <p className={`text-[13px] font-semibold mb-0.5 ${
                  idx === 1 ? 'text-orange-500' : idx === 2 ? 'text-blue-600' : idx === 3 ? 'text-blue-500' : 'text-gray-700'
                }`}>
                  {item.city}
                </p>
                <p className="text-[12px] text-gray-500">
                  {loadingTemps ? <span className="animate-pulse">Loading...</span> : (liveTemps[item.city] || item.range)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seasons */}
        <div className="border border-gray-100 rounded-2xl p-4">
          <h5 className="flex items-center gap-2 text-[13px] text-gray-500 font-medium mb-4">
            <Cloud className="text-purple-400" size={16} />
            Seasons
          </h5>
          <div className="grid grid-cols-4 gap-2 text-center">
            {seasons.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{s.emoji}</span>
                <span className="text-[12px] font-semibold text-gray-700">{s.label}</span>
                <span className="text-[11px] text-gray-400">{s.dates}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100">
        <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-5 text-[17px]">
          <Key className="text-purple-500" size={18} />
          Key insights
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {insights.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="flex items-center gap-1.5 text-purple-500 text-[12px] font-medium mb-2">
                <item.icon size={14} />
                {item.label}
              </div>
              <div className="text-[15px] font-normal text-gray-800">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
