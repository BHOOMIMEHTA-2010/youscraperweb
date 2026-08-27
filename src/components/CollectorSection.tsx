import React, { useState } from 'react';
import { CollectorBusinessType, MonthlyVolume } from '../types';
import { collectorLeadSchema } from '../lib/validation';
import confetti from 'canvas-confetti';
import {
  Truck,
  Building2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldAlert,
  Boxes,
  Users,
  Award,
} from 'lucide-react';

const BUSINESS_TYPES: CollectorBusinessType[] = [
  'Scrap Collector',
  'Recycler',
  'Refurbisher',
  'Bulk Buyer',
  'Other',
];

const VOLUMES: Array<{ value: MonthlyVolume; label: string; detail: string }> = [
  { value: 'Small', label: 'Small Volume', detail: '< 500 kg / month' },
  { value: 'Medium', label: 'Medium Volume', detail: '500 kg – 2 Tons / month' },
  { value: 'Large', label: 'Large / Enterprise', detail: '> 2 Tons / month' },
  { value: 'Not Sure', label: 'Not Sure Yet', detail: 'Evaluating scrap scale' },
];

export const CollectorSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    email: '',
    phone: '',
    city: '',
    business_type: 'Scrap Collector' as CollectorBusinessType,
    monthly_volume: 'Medium' as MonthlyVolume,
    website_honeypot: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    const validation = collectorLeadSchema.safeParse(formData);
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
      const response = await fetch('/api/collector-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#D4A574', '#1A5C3A', '#FFFFFF'],
          });
        } catch {
          // ignore
        }
      } else {
        setSubmitError(data.message || 'Failed to submit network application.');
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
      business_name: '',
      email: '',
      phone: '',
      city: '',
      business_type: 'Scrap Collector',
      monthly_volume: 'Medium',
      website_honeypot: '',
    });
    setFieldErrors({});
    setSubmitError(null);
  };

  return (
    <section id="collectors" className="py-20 lg:py-28 bg-[#123E26] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4A574]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#2E7D52]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Information & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
                <Truck className="w-3.5 h-3.5" />
                B2B Bulk Scrap Network
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">
                Are you a scrap collector or recycler?
              </h2>

              <h3 className="font-heading font-medium text-xl text-[#D4A574] mb-6">
                Join our growing bulk network.
              </h3>

              <p className="text-emerald-100/80 text-base leading-relaxed mb-8">
                YourScraper is building a network connecting collectors, recyclers, refurbishers and bulk buyers with future opportunities to source electronic scrap.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-[#D4A574] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Aggregated Supply Inflow</h4>
                  <p className="text-xs text-emerald-100/70 mt-0.5">
                    Access steady, segregated electronic scrap streams directly from households and corporate campuses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-[#58C28A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Direct Industry Connection</h4>
                  <p className="text-xs text-emerald-100/70 mt-0.5">
                    Connect with vetted refurbishers and certified metal smelters across regional hubs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-[#D4A574] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Organized E-Waste Economy</h4>
                  <p className="text-xs text-emerald-100/70 mt-0.5">
                    Upgrade from informal scrap trading to a verified, tech-enabled circular network.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Collector Application Form */}
          <div className="lg:col-span-7 bg-[#174b2f] rounded-3xl p-6 sm:p-10 border border-[#D4A574]/30 shadow-2xl relative">
            
            {isSubmitted ? (
              /* Success State */
              <div className="py-12 text-center max-w-md mx-auto animate-in fade-in duration-300">
                <div className="w-20 h-20 rounded-full bg-[#D4A574] text-[#17201B] flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  You’re on the list.
                </h3>
                <p className="text-emerald-100/80 text-base leading-relaxed mb-8">
                  We’ll contact you as the YourScraper network grows and bulk sourcing opportunities open in your region.
                </p>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-left text-xs text-emerald-100/90 space-y-1.5 mb-8">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">Business:</span>
                    <span>{formData.business_name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-white">Type:</span>
                    <span>{formData.business_type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-white">Estimated Volume:</span>
                    <span>{formData.monthly_volume}</span>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A574] text-[#17201B] font-bold text-sm hover:bg-[#c6945f] transition-colors"
                >
                  <span>Submit Another Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Collector Form */
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white mb-1">
                    Join the YourScraper Bulk Network
                  </h3>
                  <p className="text-xs text-emerald-100/70">
                    Tell us about your scrap collection or recycling operations
                  </p>
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="collector_website_honeypot">Leave blank</label>
                  <input
                    type="text"
                    id="collector_website_honeypot"
                    name="website_honeypot"
                    value={formData.website_honeypot}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Contact Name */}
                  <div>
                    <label htmlFor="collector_name" className="block text-xs font-semibold text-white mb-1">
                      Contact Person Name <span className="text-[#D4A574]">*</span>
                    </label>
                    <input
                      type="text"
                      id="collector_name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-sm text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all ${
                        fieldErrors.name ? 'border-red-400' : 'border-white/20'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="collector_business_name" className="block text-xs font-semibold text-white mb-1">
                      Business / Firm Name <span className="text-[#D4A574]">*</span>
                    </label>
                    <input
                      type="text"
                      id="collector_business_name"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleInputChange}
                      placeholder="e.g. EcoMetals Scrap Corp"
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-sm text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all ${
                        fieldErrors.business_name ? 'border-red-400' : 'border-white/20'
                      }`}
                    />
                    {fieldErrors.business_name && (
                      <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.business_name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="collector_email" className="block text-xs font-semibold text-white mb-1">
                      Business Email <span className="text-[#D4A574]">*</span>
                    </label>
                    <input
                      type="email"
                      id="collector_email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. info@ecometals.in"
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-sm text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all ${
                        fieldErrors.email ? 'border-red-400' : 'border-white/20'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="collector_phone" className="block text-xs font-semibold text-white mb-1">
                      Phone Number <span className="text-[#D4A574]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="collector_phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98200 11223"
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-sm text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all ${
                        fieldErrors.phone ? 'border-red-400' : 'border-white/20'
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div className="sm:col-span-2">
                    <label htmlFor="collector_city" className="block text-xs font-semibold text-white mb-1">
                      Operating City / State <span className="text-[#D4A574]">*</span>
                    </label>
                    <input
                      type="text"
                      id="collector_city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Ahmedabad, Gujarat"
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-sm text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all ${
                        fieldErrors.city ? 'border-red-400' : 'border-white/20'
                      }`}
                    />
                    {fieldErrors.city && (
                      <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.city}
                      </p>
                    )}
                  </div>

                  {/* Business Type */}
                  <div className="sm:col-span-2">
                    <label htmlFor="collector_business_type" className="block text-xs font-semibold text-white mb-1">
                      Business Type <span className="text-[#D4A574]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                      {BUSINESS_TYPES.map((type) => {
                        const isSelected = formData.business_type === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, business_type: type }))}
                            className={`px-3.5 py-2.5 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#D4A574] text-[#17201B] border-[#D4A574] font-semibold shadow-sm'
                                : 'bg-white/5 text-white/90 border-white/15 hover:bg-white/10'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Monthly Volume */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-white mb-2">
                      Estimated Monthly Volume <span className="text-[#D4A574]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {VOLUMES.map((vol) => {
                        const isSelected = formData.monthly_volume === vol.value;
                        return (
                          <button
                            key={vol.value}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, monthly_volume: vol.value }))}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-white/20 border-[#D4A574] ring-1 ring-[#D4A574]'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                            }`}
                          >
                            <div className="font-medium text-xs text-white">{vol.label}</div>
                            <div className="text-[11px] text-emerald-200/70">{vol.detail}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {submitError && (
                  <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-400 text-red-200 text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-collector-network-btn"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D4A574] hover:bg-[#c6945f] disabled:opacity-70 text-[#17201B] font-bold text-base transition-all duration-200 shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Bulk Network</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
