import React, { useState } from 'react';
import { collegeLeadSchema } from '../lib/validation';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldAlert,
  Calendar,
  BarChart3,
  Sparkles,
  TreePine,
} from 'lucide-react';

export const CollegeSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
    website_honeypot: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validation = collegeLeadSchema.safeParse(formData);
    if (!validation.success) {
      const formattedErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        if (!formattedErrors[key]) {
          formattedErrors[key] = issue.message;
        }
      });
      setFieldErrors(formattedErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/college-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        try {
          confetti({
            particleCount: 75,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#1A5C3A', '#D4A574', '#58C28A'],
          });
        } catch {
          // ignore
        }
      } else {
        setSubmitError(data.message || 'Failed to submit demo request.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      message: '',
      website_honeypot: '',
    });
    setFieldErrors({});
    setSubmitError(null);
  };

  return (
    <section id="colleges" className="py-20 lg:py-28 bg-[#F7F5EF] relative overflow-hidden text-[#17201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Organization & Campus Offerings */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] text-xs font-semibold uppercase tracking-wider mb-6">
                <GraduationCap className="w-3.5 h-3.5" />
                Institutions & Campuses
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#17201B] tracking-tight leading-[1.15] mb-6">
                Make your campus or organization more circular.
              </h2>

              <p className="text-[#56685E] text-base sm:text-lg leading-relaxed mb-8">
                YourScraper helps universities, tech parks, and corporate enterprises organize dedicated recycling and scrap collection drives—covering e-waste, paper, plastics, scrap metals, and surplus inventory—with certified downstream recyclers.
              </p>
            </div>

            {/* 4 Feature Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Capability 1: Active */}
              <div className="p-5 rounded-2xl bg-white border border-[#1A5C3A]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#1A5C3A]/10 text-[#1A5C3A] flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#17201B] mb-1">
                  Organized Recycling Drives
                </h4>
                <p className="text-xs text-[#56685E] leading-relaxed">
                  Turnkey multi-waste bins, awareness collateral, and scheduled bulk pickup from your premises.
                </p>
              </div>

              {/* Capability 2: Active */}
              <div className="p-5 rounded-2xl bg-white border border-[#1A5C3A]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#1A5C3A]/10 text-[#1A5C3A] flex items-center justify-center mb-3">
                  <TreePine className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#17201B] mb-1">
                  Responsible Recycling Partnerships
                </h4>
                <p className="text-xs text-[#56685E] leading-relaxed">
                  Vetted authorized processing facilities guaranteeing zero landfill diversion across all material streams.
                </p>
              </div>

              {/* Capability 3: Coming Soon */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200/70 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F5EF] text-[#56685E] flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4A574]/20 text-[#8c6031] text-[10px] font-bold uppercase tracking-wider">
                    COMING SOON
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#17201B] mb-1">
                  Collection Tracking
                </h4>
                <p className="text-xs text-[#56685E] leading-relaxed">
                  Real-time visibility into collection bin weights and automated pickup triggers.
                </p>
              </div>

              {/* Capability 4: Coming Soon */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200/70 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F5EF] text-[#56685E] flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4A574]/20 text-[#8c6031] text-[10px] font-bold uppercase tracking-wider">
                    COMING SOON
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-sm text-[#17201B] mb-1">
                  Impact Reporting & ESG
                </h4>
                <p className="text-xs text-[#56685E] leading-relaxed">
                  Automated sustainability certificates and materials recovery metrics for governance.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Organization Demo Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-[#1A5C3A]/15 shadow-lg">
            
            {isSubmitted ? (
              /* Success State */
              <div className="py-12 text-center max-w-md mx-auto animate-in fade-in duration-300">
                <div className="w-20 h-20 rounded-full bg-[#1A5C3A] text-[#D4A574] flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#17201B] mb-3">
                  Thanks! We’ll be in touch.
                </h3>
                <p className="text-[#56685E] text-base leading-relaxed mb-8">
                  Our institutional coordinator will connect with {formData.organization || 'your organization'} within 24–48 hours to schedule a campus recycling & scrap strategy call.
                </p>

                <button
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A5C3A] text-white font-medium text-sm hover:bg-[#124229] transition-colors shadow-sm"
                >
                  <span>Submit Another Request</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A574]" />
                </button>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A5C3A] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Institutional Partnerships
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#17201B]">
                    Schedule a Consultation
                  </h3>
                  <p className="text-xs text-[#56685E] mt-1">
                    Plan a recycling drive for your college campus, corporate facility, or community
                  </p>
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="college_website_honeypot">Leave blank</label>
                  <input
                    type="text"
                    id="college_website_honeypot"
                    name="website_honeypot"
                    value={formData.website_honeypot}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="college_name" className="block text-xs font-semibold text-[#17201B] mb-1">
                    Representative Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="college_name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Dr. Priya Sharma / Ankit Verma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF]/60 border text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all ${
                      fieldErrors.name ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Institution / Organization */}
                <div>
                  <label htmlFor="college_org" className="block text-xs font-semibold text-[#17201B] mb-1">
                    Institution / University / Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="college_org"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="e.g. National Institute of Technology / Tech Park Ltd"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF]/60 border text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all ${
                      fieldErrors.organization ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                  {fieldErrors.organization && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {fieldErrors.organization}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="college_email" className="block text-xs font-semibold text-[#17201B] mb-1">
                      Official Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="college_email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. priya@university.edu"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF]/60 border text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all ${
                        fieldErrors.email ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="college_phone" className="block text-xs font-semibold text-[#17201B] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="college_phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98450 12345"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F5EF]/60 border text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all ${
                        fieldErrors.phone ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="college_message" className="block text-xs font-semibold text-[#17201B] mb-1">
                    Requirements / Estimated Drive Timeline (Optional)
                  </label>
                  <textarea
                    id="college_message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your campus size, estimated hardware volume, or preferred month for the drive..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF]/60 border border-gray-200 text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all resize-none"
                  />
                </div>

                {submitError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-college-demo-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1A5C3A] hover:bg-[#124229] disabled:opacity-70 text-white font-bold text-base transition-all duration-200 shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Scheduling Demo...</span>
                    </>
                  ) : (
                    <>
                      <span>Schedule a Demo</span>
                      <ArrowRight className="w-5 h-5 text-[#D4A574]" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
