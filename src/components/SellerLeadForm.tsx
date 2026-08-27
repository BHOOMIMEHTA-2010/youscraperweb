import React, { useState } from 'react';
import { DeviceType, DeviceCondition } from '../types';
import { sellerLeadSchema } from '../lib/validation';
import confetti from 'canvas-confetti';
import {
  Smartphone,
  Laptop,
  Tablet,
  Monitor,
  Gamepad2,
  Watch,
  Cpu,
  Tv,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

const DEVICE_OPTIONS: Array<{ type: DeviceType; icon: React.ComponentType<{ className?: string }> }> = [
  { type: 'Smartphone', icon: Smartphone },
  { type: 'Laptop', icon: Laptop },
  { type: 'Tablet', icon: Tablet },
  { type: 'Desktop', icon: Monitor },
  { type: 'Monitor', icon: Tv },
  { type: 'Gaming Console', icon: Gamepad2 },
  { type: 'Wearable', icon: Watch },
  { type: 'Other', icon: Cpu },
];

const CONDITION_OPTIONS: Array<{ condition: DeviceCondition; label: string; desc: string }> = [
  { condition: 'Working', label: 'Working', desc: 'Powers on, screen and core functions intact' },
  { condition: 'Damaged', label: 'Damaged', desc: 'Cracked screen, battery wear, or cosmetic flaws' },
  { condition: 'Not Working', label: 'Not Working', desc: 'Dead motherboard, water damage, or no power' },
  { condition: 'Not Sure', label: 'Not Sure', desc: 'Untested or missing accessories' },
];

export const SellerLeadForm: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('Smartphone');
  const [selectedCondition, setSelectedCondition] = useState<DeviceCondition>('Working');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    additional_details: '',
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

    const payload = {
      ...formData,
      device_type: selectedDevice,
      condition: selectedCondition,
    };

    // Client-side Zod validation
    const validation = sellerLeadSchema.safeParse(payload);
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
      const response = await fetch('/api/seller-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#1A5C3A', '#D4A574', '#58C28A'],
          });
        } catch {
          // ignore confetti if unsupported
        }
      } else {
        setSubmitError(data.message || 'Unable to submit your device. Please check your information.');
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
      email: '',
      phone: '',
      city: '',
      additional_details: '',
      website_honeypot: '',
    });
    setFieldErrors({});
    setSubmitError(null);
  };

  return (
    <section id="sellers" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden text-[#17201B]">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#D4A574]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#1A5C3A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Form Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1A5C3A]" />
            Direct Device Valuation
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#17201B] tracking-tight mb-4">
            Got an old device sitting around?
          </h2>
          <p className="text-base sm:text-lg text-[#56685E] font-normal leading-relaxed">
            Tell us what you have. We’ll take it from there.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#F7F5EF] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#1A5C3A]/15 shadow-lg relative">
          
          {isSubmitted ? (
            /* Success State */
            <div className="py-12 sm:py-16 text-center max-w-lg mx-auto animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-[#1A5C3A] text-[#D4A574] flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#17201B] mb-3">
                Thanks! We’ve received your details.
              </h3>
              <p className="text-[#56685E] text-base leading-relaxed mb-8">
                We’ll review your information and get back to you shortly via phone or email with our honest appraisal and free doorstep pickup schedule.
              </p>
              
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 mb-8 text-left text-xs text-[#56685E] space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium text-[#17201B]">Device:</span>
                  <span>{selectedDevice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#17201B]">Condition:</span>
                  <span>{selectedCondition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#17201B]">Contact:</span>
                  <span>{formData.name} ({formData.phone})</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A5C3A] text-white font-medium text-sm hover:bg-[#124229] transition-colors shadow-sm"
              >
                <span>Submit Another Device</span>
                <ArrowRight className="w-4 h-4 text-[#D4A574]" />
              </button>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-10" noValidate>
              
              {/* Step 1: Select Device Type */}
              <div>
                <label className="block font-heading font-bold text-lg text-[#17201B] mb-1">
                  1. Select Device Type
                </label>
                <p className="text-xs sm:text-sm text-[#56685E] mb-5">
                  Choose the category that matches your hardware
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {DEVICE_OPTIONS.map((item) => {
                    const Icon = item.icon;
                    const isSelected = selectedDevice === item.type;
                    return (
                      <button
                        key={item.type}
                        type="button"
                        onClick={() => setSelectedDevice(item.type)}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#1A5C3A] text-white border-[#1A5C3A] shadow-md scale-[1.02]'
                            : 'bg-white text-[#17201B] border-gray-200/90 hover:border-[#1A5C3A]/50 hover:bg-white/80'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl mb-2 ${isSelected ? 'bg-white/15 text-[#D4A574]' : 'bg-[#F7F5EF] text-[#1A5C3A]'}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm">{item.type}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Device Condition */}
              <div>
                <label className="block font-heading font-bold text-lg text-[#17201B] mb-1">
                  2. Device Condition
                </label>
                <p className="text-xs sm:text-sm text-[#56685E] mb-5">
                  Honest evaluation ensures smooth pickup with zero renegotiations
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {CONDITION_OPTIONS.map((item) => {
                    const isSelected = selectedCondition === item.condition;
                    return (
                      <button
                        key={item.condition}
                        type="button"
                        onClick={() => setSelectedCondition(item.condition)}
                        className={`flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#1A5C3A] ring-2 ring-[#1A5C3A]/20 shadow-sm'
                            : 'bg-white/80 border-gray-200/80 hover:bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-[#1A5C3A] bg-[#1A5C3A]' : 'border-gray-300'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div>
                          <span className="font-heading font-semibold text-sm text-[#17201B] block">
                            {item.label}
                          </span>
                          <span className="text-xs text-[#56685E] leading-relaxed block mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Contact & Location Info */}
              <div>
                <label className="block font-heading font-bold text-lg text-[#17201B] mb-1">
                  3. Contact & Pickup Details
                </label>
                <p className="text-xs sm:text-sm text-[#56685E] mb-5">
                  Where should we reach you for the valuation and free collection?
                </p>

                {/* Honeypot field (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_honeypot">Leave blank</label>
                  <input
                    type="text"
                    id="website_honeypot"
                    name="website_honeypot"
                    value={formData.website_honeypot}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#17201B] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all ${
                        fieldErrors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#17201B] mb-1">
                      Phone / Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all ${
                        fieldErrors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#17201B] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all ${
                        fieldErrors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-xs font-semibold text-[#17201B] mb-1">
                      City / Area <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai, Bengaluru, Delhi NCR"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all ${
                        fieldErrors.city ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'
                      }`}
                    />
                    {fieldErrors.city && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.city}
                      </p>
                    )}
                  </div>

                  {/* Additional Details */}
                  <div className="sm:col-span-2">
                    <label htmlFor="additional_details" className="block text-xs font-semibold text-[#17201B] mb-1">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="additional_details"
                      name="additional_details"
                      rows={3}
                      value={formData.additional_details}
                      onChange={handleInputChange}
                      placeholder="e.g. Brand, model year, storage size, charger included, or any specific defect"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#17201B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] transition-all resize-none"
                    />
                  </div>

                </div>
              </div>

              {/* Submit Error Warning */}
              {submitError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#56685E]">
                  🔒 Your data is safe. We never sell your personal contact info.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-seller-valuation-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1A5C3A] hover:bg-[#124229] disabled:opacity-70 text-white font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit for Valuation</span>
                      <ArrowRight className="w-5 h-5 text-[#D4A574]" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
