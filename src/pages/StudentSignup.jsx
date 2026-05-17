import React, { useState } from 'react';
import { GraduationCap, Briefcase, Brain, Heart, Cpu, Wrench, Compass, ChevronRight, ChevronLeft, CheckCircle2, Flag, Map, Globe, Navigation, Leaf, CircleDollarSign, Coins, Banknote, Diamond, Check, X, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const StudentSignup = () => {
  const [step, setStep] = useState(1);
  const [selectedField, setSelectedField] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedIntakes, setSelectedIntakes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedEnglishTest, setSelectedEnglishTest] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    { id: 'business', label: 'Business', icon: Briefcase, color: 'bg-pink-500' },
    { id: 'data-science', label: 'Data Science', icon: Brain, color: 'bg-blue-500' },
    { id: 'nursing', label: 'Nursing', icon: Heart, color: 'bg-orange-400' },
    { id: 'ai', label: 'Artificial Intelligence', icon: Cpu, color: 'bg-purple-500' },
    { id: 'engineering', label: 'Engineering', icon: Wrench, color: 'bg-green-500' },
    { id: 'unsure', label: 'Not sure yet', icon: Compass, color: 'bg-slate-500' },
  ];

  const destinations = [
    { id: 'usa', label: 'USA', icon: Flag, color: 'bg-red-500' },
    { id: 'germany', label: 'Germany', icon: Map, color: 'bg-[#d9381e]' },
    { id: 'uk', label: 'UK', icon: Globe, color: 'bg-[#1e3a8a]' },
    { id: 'australia', label: 'Australia', icon: Navigation, color: 'bg-[#38bdf8]' },
    { id: 'ireland', label: 'Ireland', icon: Leaf, color: 'bg-[#10b981]' },
    { id: 'unsure_dest', label: 'Not sure yet', icon: Compass, color: 'bg-slate-500' },
  ];

  const intakes = [
    { id: 'mar2026', month: 'March', year: '2026' },
    { id: 'apr2026', month: 'April', year: '2026' },
    { id: 'may2026', month: 'May', year: '2026' },
    { id: 'jun2026', month: 'June', year: '2026' },
    { id: 'jul2026', month: 'July', year: '2026' },
    { id: 'aug2026', month: 'August', year: '2026' },
    { id: 'sep2026', month: 'September', year: '2026' },
    { id: 'oct2026', month: 'October', year: '2026' },
    { id: 'nov2026', month: 'November', year: '2026' },
    { id: 'dec2026', month: 'December', year: '2026' },
    { id: 'jan2027', month: 'January', year: '2027', disabled: true },
    { id: 'feb2027', month: 'February', year: '2027', disabled: true },
  ];

  const budgets = [
    { id: 'under_15k', label: 'Under $15K', icon: CircleDollarSign, color: 'bg-green-500' },
    { id: '15k_25k', label: '$15K - $25K', icon: Coins, color: 'bg-orange-500' },
    { id: '25k_40k', label: '$25K - $40K', icon: Banknote, color: 'bg-blue-500' },
    { id: 'over_40k', label: 'Over $40K', icon: Diamond, color: 'bg-purple-500' },
  ];

  const testOptions = [
    { id: 'yes', label: 'Yes', icon: Check, color: 'bg-[#22c55e]' },
    { id: 'no', label: 'No', icon: X, color: 'bg-[#ef4444]' },
  ];

  const toggleIntake = (id) => {
    if (selectedIntakes.includes(id)) {
      setSelectedIntakes(selectedIntakes.filter(i => i !== id));
    } else {
      setSelectedIntakes([...selectedIntakes, id]);
    }
  };

  const handleContinue = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (step > 1) setStep(step - 1);
  };

  const getProgressStr = () => {
    if (step === 1) return '17%';
    if (step === 2) return '20%';
    if (step === 3) return '40%';
    if (step === 4) return '60%';
    if (step === 5) return '80%';
    if (step === 6) return '100%';
    return `${Math.round((step / 6) * 100)}%`;
  };

  const isContinueDisabled = () => {
    if (step === 1) return !selectedField;
    if (step === 2) return !selectedDestination;
    if (step === 3) return selectedIntakes.length === 0;
    if (step === 4) return !selectedBudget;
    if (step === 5) return !selectedEnglishTest;
    if (step === 6) {
      return !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || formData.password !== formData.confirmPassword;
    }
    return false;
  };

  const signupSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gradient-edu.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Student Registration",
          "item": "https://gradient-edu.com/student-signup"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-700">
      <SEO 
        title="Student Registration & Profile Setup | Gradient Edu"
        description="Create your free Gradient Edu student account. Set your study preferences, select your target intakes, specify your budget, and search matches dynamically."
        schemaMarkup={signupSchemas}
      />
      
      <main className="flex-grow flex flex-col items-center p-4 md:p-8 pt-12 md:pt-16">
        
        <div className="w-full max-w-[700px] mt-2 mb-16">
          
          {/* Progress Header */}
          <div className="flex justify-between items-end mb-2 px-1">
            <span className="text-[14px] font-medium text-gray-500 tracking-wide">Step {step} of 6</span>
            <span className="text-[14px] font-bold text-blue-600">{getProgressStr()} Complete</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-12 overflow-hidden flex relative">
            <motion.div 
              animate={{ width: getProgressStr() }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                {/* Main Icon */}
                <div className="w-[72px] h-[72px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200 mb-8 mt-2">
                  <GraduationCap className="text-white" size={36} strokeWidth={2} />
                </div>

                <h1 className="text-2xl md:text-[32px] font-bold text-[#1e293b] mb-3 tracking-tight">
                  What do you want to study?
                </h1>
                <p className="text-[#64748b] text-[15px] max-w-sm">
                  Choose your field of interest
                </p>

                {/* Grid of Interests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-10 w-full max-w-[620px] mx-auto text-left">
                  {fields.map((field, idx) => {
                    const isSelected = selectedField === field.id;
                    return (
                      <motion.button
                        key={field.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        onClick={() => setSelectedField(field.id)}
                        className={`relative flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center text-white ${field.color} shadow-sm`}>
                          <field.icon size={20} strokeWidth={2} />
                        </div>
                        <span className={`font-semibold text-[15px] ${isSelected ? 'text-[#1e293b]' : 'text-[#334155]'}`}>
                          {field.label}
                        </span>
                        
                        {/* Selected Checkmark Overlay */}
                        {isSelected && (
                          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-blue-500">
                            <CheckCircle2 size={20} strokeWidth={2.5} />
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center mt-6"
              >
                <h1 className="text-2xl md:text-[32px] font-bold text-[#1e293b] mb-3 tracking-tight">
                  Where do you want to study?
                </h1>
                <p className="text-[#64748b] text-[15px] max-w-sm">
                  Select a destination country
                </p>

                {/* Grid of Destinations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-12 w-full max-w-[620px] mx-auto text-left">
                  {destinations.map((dest, idx) => {
                    const isSelected = selectedDestination === dest.id;
                    return (
                      <motion.button
                        key={dest.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        onClick={() => setSelectedDestination(dest.id)}
                        className={`relative flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center text-white ${dest.color} shadow-sm`}>
                          <dest.icon size={20} strokeWidth={2} />
                        </div>
                        <span className={`font-semibold text-[15px] ${isSelected ? 'text-[#1e293b]' : 'text-[#334155]'}`}>
                          {dest.label}
                        </span>
                        
                        {/* Selected Checkmark Overlay */}
                        {isSelected && (
                          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-blue-500">
                            <CheckCircle2 size={20} strokeWidth={2.5} />
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center mt-6"
              >
                <h1 className="text-2xl md:text-[32px] font-bold text-[#1e293b] mb-3 tracking-tight">
                  When do you want to start?
                </h1>
                <p className="text-[#64748b] text-[15px] max-w-sm">
                  Select your preferred intake month
                </p>

                {/* Grid of Intakes */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-[700px] mx-auto">
                  {intakes.map((intake, idx) => {
                    const isSelected = selectedIntakes.includes(intake.id);
                    return (
                      <motion.button
                        key={intake.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: Math.floor(idx / 4) * 0.05 }}
                        onClick={() => !intake.disabled && toggleIntake(intake.id)}
                        disabled={intake.disabled}
                        className={`relative flex flex-col items-center justify-center py-5 rounded-xl border transition-all duration-200 ${
                          intake.disabled
                            ? 'bg-gray-100 border-gray-100 opacity-60 cursor-not-allowed'
                            : isSelected 
                              ? 'border-indigo-400 bg-indigo-50/50 shadow-sm' 
                              : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <span className={`font-semibold text-[15px] mb-1 ${
                          intake.disabled ? 'text-gray-400' : isSelected ? 'text-indigo-900' : 'text-[#1e293b]'
                        }`}>
                          {intake.month}
                        </span>
                        <span className={`text-[13px] ${
                          intake.disabled ? 'text-gray-400' : isSelected ? 'text-indigo-600' : 'text-gray-500'
                        }`}>
                          {intake.year}
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center mt-6"
              >
                <h1 className="text-2xl md:text-[32px] font-bold text-[#1e293b] mb-3 tracking-tight">
                  What is your budget?
                </h1>
                <p className="text-[#64748b] text-[15px] max-w-sm">
                  Select your estimated budget range
                </p>

                {/* Grid of Budgets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-12 w-full max-w-[620px] mx-auto text-left">
                  {budgets.map((budget, idx) => {
                    const isSelected = selectedBudget === budget.id;
                    return (
                      <motion.button
                        key={budget.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        onClick={() => setSelectedBudget(budget.id)}
                        className={`relative flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center text-white ${budget.color} shadow-sm`}>
                          <budget.icon size={20} strokeWidth={2} />
                        </div>
                        <span className={`font-semibold text-[15px] ${isSelected ? 'text-[#1e293b]' : 'text-[#334155]'}`}>
                          {budget.label}
                        </span>
                        
                        {/* Selected Checkmark Overlay */}
                        {isSelected && (
                          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-blue-500">
                            <CheckCircle2 size={20} strokeWidth={2.5} />
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center mt-6"
              >
                <h1 className="text-2xl md:text-[32px] font-bold text-[#1e293b] mb-3 tracking-tight">
                  IELTS/English test status
                </h1>
                <p className="text-[#64748b] text-[15px] max-w-sm">
                  Have you taken an English valid test?
                </p>

                {/* Grid of Test Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-12 w-full max-w-[620px] mx-auto text-left">
                  {testOptions.map((option, idx) => {
                    const isSelected = selectedEnglishTest === option.id;
                    return (
                      <motion.button
                        key={option.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        onClick={() => setSelectedEnglishTest(option.id)}
                        className={`relative flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-200 ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center text-white ${option.color} shadow-sm`}>
                          <option.icon size={20} strokeWidth={3} />
                        </div>
                        <span className={`font-semibold text-[15px] ${isSelected ? 'text-[#1e293b]' : 'text-[#334155]'}`}>
                          {option.label}
                        </span>
                        
                        {isSelected && (
                          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-blue-500">
                            <CheckCircle2 size={20} strokeWidth={2.5} />
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div 
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center mt-6 w-full"
              >
                <h1 className="text-2xl md:text-[32px] font-bold text-[#1e293b] mb-3 tracking-tight">
                  Let's create your profile
                </h1>
                <p className="text-[#64748b] text-[15px] mb-10">
                  Save your preferences and see your course matches
                </p>

                <div className="w-full max-w-[660px] text-left space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] text-[#64748b] mb-1.5 ml-1">First Name <span className="text-red-500">*</span></label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all text-[#1e293b] text-[15px]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#64748b] mb-1.5 ml-1">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all text-[#1e293b] text-[15px]" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[13px] text-[#64748b] mb-1.5 ml-1">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all text-[#1e293b] text-[15px]" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[13px] text-[#64748b] mb-1.5 ml-1">Phone Number <span className="text-red-500">*</span></label>
                    <div className="flex border border-gray-200 rounded-xl bg-white overflow-hidden focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
                      <div className="flex items-center gap-1.5 bg-gray-50/50 px-4 py-3.5 border-r border-gray-200 cursor-pointer">
                         <span className="text-lg">🇬🇧</span>
                         <ChevronDown size={14} className="text-gray-500" />
                      </div>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+44 | United Kingdom" className="w-full px-4 py-3.5 focus:outline-none text-[#1e293b] text-[15px] bg-transparent" />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-[13px] text-[#64748b] mb-1.5 ml-1">Country of Residence <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select name="country" value={formData.country} onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all text-[#1e293b] text-[15px] bg-white">
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>India</option>
                        <option>Australia</option>
                        <option>Canada</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Passwords */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] text-[#64748b] mb-1.5 ml-1">Create Password <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all text-[#1e293b] text-[15px]" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#64748b] mb-1.5 ml-1">Confirm Password <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all text-[#1e293b] text-[15px]" />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                          {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Form Actions */}
          <div className={`w-full max-w-[700px] mx-auto border-t border-gray-200 mt-16 pt-8 flex ${step > 1 ? 'justify-between items-center' : 'justify-end'}`}>
            {step > 1 && (
              <button 
                onClick={handleBack}
                className="flex items-center gap-2 px-2 py-2 text-[#64748b] hover:text-[#1e293b] font-medium transition-colors"
              >
                <ChevronLeft size={18} strokeWidth={2.5} /> Back
              </button>
            )}

            <button 
              disabled={isContinueDisabled()}
              onClick={handleContinue}
              className={`flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold text-[15px] transition-all duration-300 min-w-[140px] ${
                !isContinueDisabled()
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5' 
                  : 'bg-[#e2e8f0] text-[#94a3b8] cursor-not-allowed'
              }`}
            >
              {step === 6 ? 'Submit' : <>Continue <ChevronRight size={18} strokeWidth={2.5} /></>}
            </button>
          </div>

        </div>
      </main>

    </div>
  );
};

export default StudentSignup;
