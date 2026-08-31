import React, { useState, useEffect } from 'react';
import { DeviceType, DeviceCondition } from '../types';
import { sellerLeadSchema } from '../lib/validation';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';
import {
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  UserCheck,
  Package,
  LogIn,
  Layers,
  Wrench,
  Boxes,
  FileText,
  Home,
  Shirt,
  Tv,
} from 'lucide-react';

const DEVICE_OPTIONS: Array<{ type: DeviceType; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { type: 'Plastic', label: 'Plastic', icon: Boxes },
  { type: 'Paper', label: 'Paper', icon: FileText },
  { type: 'Cardboard', label: 'Cardboard', icon: Package },
  { type: 'Glass', label: 'Glass', icon: Sparkles },
  { type: 'Metal', label: 'Metal', icon: Wrench },
  { type: 'E-waste / Electronics', label: 'E-waste / Electronics', icon: Smartphone },
  { type: 'Textiles', label: 'Textiles', icon: Shirt },
  { type: 'Furniture', label: 'Furniture', icon: Home },
  { type: 'Household Recyclables', label: 'Household Recyclables', icon: Tv },
  { type: 'Other', label: 'Other', icon: Layers },
];

const CONDITION_OPTIONS: Array<{ condition: DeviceCondition; label: string; desc: string }> = [
  { condition: 'Working', label: 'Good / Reusable Condition', desc: 'Functional, intact or reusable materials' },
  { condition: 'Damaged', label: 'Partially Damaged / Scrap', desc: 'Cosmetic wear, cracked, dented, or repairable' },
  { condition: 'Not Working', label: 'Broken / Complete Scrap', desc: 'Non-functional, broken, or raw scrap material' },
  { condition: 'Not Sure', label: 'Mixed / Unsorted Scrap', desc: 'Assorted materials, bulk batch, or untested' },
];

export const SellerLeadForm: React.FC = () => {
  const { user, profile, openAuthModal, openBookingsModal } = useAuth();

  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('Plastic');
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
  const [submittedBookingId, setSubmittedBookingId] = useState<string | null>(null);

  // Auto-populate when logged-in user changes
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: prev.name || profile?.displayName || '',
        email: prev.email || user.email || '',
        phone: prev.phone || profile?.phone || '',
      }));
    }
  }, [user, profile]);

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
      user_id: user?.uid || null,
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
        if (data.data?.id) {
          setSubmittedBookingId(data.data.id);
        }
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
        setSubmitError(data.message || 'Unable to submit your request. Please check your information.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmittedBookingId(null);
    setFormData({
      name: user ? profile?.displayName || '' : '',
      email: user ? user.email || '' : '',
      phone: user ? profile?.phone || '' : '',
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1A5C3A]" />
            All Recyclable Materials • Free Doorstep Pickup
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#17201B] tracking-tight mb-4">
            Got recyclable materials sitting around?
          </h2>
          <p className="text-base sm:text-lg text-[#56685E] font-normal leading-relaxed">
            Tell us what you have. We'll take it from there.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#F7F5EF] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#1A5C3A]/15 shadow-lg relative">
          
          {/* User Sign In Status Banner */}
          {!isSubmitted && (
            <div className="mb-8">
              {user ? (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between gap-3 text-xs text-emerald-900">
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                    <span>
                      Signed in as <strong className="font-bold">{profile?.displayName || user.email}</strong>. This pickup will link to your dashboard.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={openBookingsModal}
                    className="inline-flex items-center gap-1 font-bold text-emerald-800 hover:text-emerald-950 underline flex-shrink-0 cursor-pointer"
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>View My Bookings</span>
                  </button>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 flex flex-wrap items-center justify-between gap-2.5 text-xs text-amber-900">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0" />
                    <span>
                      Already have an account or want live tracking?
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openAuthModal('signin')}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-200/80 hover:bg-amber-300 text-amber-950 font-bold text-xs transition-colors cursor-pointer"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Sign In to Track</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {isSubmitted ? (
            /* Success State */
            <div className="py-10 sm:py-14 text-center max-w-lg mx-auto animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-[#1A5C3A] text-[#D4A574] flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#17201B] mb-3">
                Pickup Request Confirmed!
              </h3>
              <p className="text-[#56685E] text-sm sm:text-base leading-relaxed mb-6">
                We’ve received your scrap and material specifications. Our valuation specialist will contact you within 24 hours to confirm your price quote and dispatch the doorstep pickup team.
              </p>
              
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 mb-6 text-left text-xs text-[#56685E] space-y-1.5 shadow-sm">
                {submittedBookingId && (
                  <div className="flex justify-between pb-1.5 border-b border-gray-100 font-semibold text-[#1A5C3A]">
                    <span>Reference ID:</span>
                    <span>#{submittedBookingId.slice(-8).toUpperCase()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-medium text-[#17201B]">Category:</span>
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
                <div className="flex justify-between">
                  <span className="font-medium text-[#17201B]">Pickup City:</span>
                  <span>{formData.city}</span>
                </div>
              </div>

              {/* Action buttons based on auth state */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {user ? (
                  <button
                    onClick={openBookingsModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A5C3A] text-white font-bold text-sm hover:bg-[#124229] transition-all shadow-md cursor-pointer hover:scale-105"
                  >
                    <Package className="w-4 h-4 text-[#D4A574]" />
                    <span>View in My Bookings</span>
                  </button>
                ) : (
                  <button
                    onClick={() => openAuthModal('signup')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A5C3A] text-white font-bold text-sm hover:bg-[#124229] transition-all shadow-md cursor-pointer hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 text-[#D4A574]" />
                    <span>Create Account to Track</span>
                  </button>
                )}

                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#17201B] font-semibold text-sm hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer"
                >
                  <span>Submit Another Item / Batch</span>
                  <ArrowRight className="w-4 h-4 text-[#1A5C3A]" />
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-10" noValidate>
              
              {/* Step 1: Select Category */}
              <div>
                <label className="block font-heading font-bold text-lg text-[#17201B] mb-1">
                  1. Select Scrap / Material Category
                </label>
                <p className="text-xs sm:text-sm text-[#56685E] mb-5">
                  Choose the category that matches your scrap items or materials
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {DEVICE_OPTIONS.map((item) => {
                    const Icon = item.icon;
                    const isSelected = selectedDevice === item.type;
                    return (
                      <button
                        key={item.type}
                        type="button"
                        onClick={() => setSelectedDevice(item.type)}
                        className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#1A5C3A] text-white border-[#1A5C3A] shadow-md scale-[1.02]'
                            : 'bg-white text-[#17201B] border-gray-200/90 hover:border-[#1A5C3A]/50 hover:bg-white/80'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl mb-2 ${isSelected ? 'bg-white/15 text-[#D4A574]' : 'bg-[#F7F5EF] text-[#1A5C3A]'}`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="font-medium text-xs sm:text-xs leading-tight line-clamp-2">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Material Condition */}
              <div>
                <label className="block font-heading font-bold text-lg text-[#17201B] mb-1">
                  2. Material / Item Condition
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
                  Where should our appraisal and collection team coordinate with you?
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
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="e.g. rahul@example.com"
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

                  {/* Additional Details & Quick Weight Selector */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#17201B] mb-2">
                      Approximate Volume / Weight (Optional)
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['< 10 kg', '10 – 50 kg', '50 – 200 kg', '200+ kg / Bulk Batch', 'Single Item'].map((qty) => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              additional_details: prev.additional_details
                                ? prev.additional_details.includes(qty)
                                  ? prev.additional_details
                                  : `${prev.additional_details}, Est. Qty: ${qty}`
                                : `Est. Qty: ${qty}`,
                            }));
                          }}
                          className="px-3 py-1.5 rounded-lg bg-white border border-[#1A5C3A]/20 text-xs font-semibold text-[#1A5C3A] hover:bg-[#1A5C3A] hover:text-white transition-all cursor-pointer shadow-2xs"
                        >
                          + {qty}
                        </button>
                      ))}
                    </div>

                    <label htmlFor="additional_details" className="block text-xs font-semibold text-[#17201B] mb-1">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="additional_details"
                      name="additional_details"
                      rows={3}
                      value={formData.additional_details}
                      onChange={handleInputChange}
                      placeholder="e.g. Estimated quantity or weight, metal type, brand/model, scrap condition, or specific items"
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
