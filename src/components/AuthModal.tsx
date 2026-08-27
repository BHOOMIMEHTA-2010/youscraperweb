import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { OfficialLogoEmblem } from './Logo';
import {
  X,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  ShieldCheck,
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    authModalView,
    openAuthModal,
    closeAuthModal,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    sendPasswordReset,
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isAuthModalOpen) return null;

  const resetForm = () => {
    setError(null);
    setSuccessMsg(null);
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in cancelled. Please try again.');
      } else {
        setError(err.message || 'Failed to sign in with Google. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (authModalView === 'signin') {
        await signInWithEmail(email, password);
      } else if (authModalView === 'signup') {
        if (!name.trim()) {
          setError('Please enter your full name');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }
        await signUpWithEmail(email, password, name, phone);
      } else if (authModalView === 'forgot') {
        if (!email.trim()) {
          setError('Please enter your email address');
          setLoading(false);
          return;
        }
        await sendPasswordReset(email);
        setSuccessMsg('Password reset link sent! Check your inbox.');
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please check your credentials.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists. Try signing in.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Please use at least 6 characters.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError(err.message || 'Authentication failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#12241A]/70 backdrop-blur-sm transition-opacity"
        onClick={closeAuthModal}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#1A5C3A]/15 overflow-hidden z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF8F3] hover:bg-[#F0ECE1] text-[#56685E] hover:text-[#17201B] flex items-center justify-center transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Banner */}
        <div className="bg-gradient-to-br from-[#1A5C3A] to-[#124027] p-6 text-white text-center relative overflow-hidden">
          {/* Subtle nature circle behind logo */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#D4A574]/15 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex justify-center mb-3">
            <OfficialLogoEmblem size={52} className="shadow-lg rounded-full" />
          </div>

          <h3 className="font-heading font-extrabold text-2xl tracking-tight text-white">
            {authModalView === 'signin' && 'Welcome Back'}
            {authModalView === 'signup' && 'Create Your Account'}
            {authModalView === 'forgot' && 'Reset Password'}
          </h3>

          <p className="text-xs text-emerald-100/80 mt-1 max-w-xs mx-auto">
            {authModalView === 'signin' && 'Sign in to manage and track your doorstep scrap pickups'}
            {authModalView === 'signup' && 'Join the circular recycling network and schedule instant pickups'}
            {authModalView === 'forgot' && "Enter your email and we'll send recovery instructions"}
          </p>
        </div>

        {/* Tabs for switching */}
        {authModalView !== 'forgot' && (
          <div className="grid grid-cols-2 p-1.5 bg-[#F5F2EB] mx-6 mt-6 rounded-2xl border border-[#1A5C3A]/10">
            <button
              type="button"
              onClick={() => {
                resetForm();
                openAuthModal('signin');
              }}
              className={`py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                authModalView === 'signin'
                  ? 'bg-white text-[#1A5C3A] shadow-sm'
                  : 'text-[#56685E] hover:text-[#17201B]'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                resetForm();
                openAuthModal('signup');
              }}
              className={`py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                authModalView === 'signup'
                  ? 'bg-white text-[#1A5C3A] shadow-sm'
                  : 'text-[#56685E] hover:text-[#17201B]'
              }`}
            >
              Create Account
            </button>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-7 pt-4">
          
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {successMsg && (
            <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Google One-Click Button */}
          {authModalView !== 'forgot' && (
            <>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-2xl border border-[#1A5C3A]/20 bg-white hover:bg-[#FAF8F3] text-[#17201B] font-semibold text-sm transition-all shadow-sm hover:shadow active:scale-[0.99] cursor-pointer disabled:opacity-50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-[#1A5C3A]/10"></div>
                <span className="px-3 text-[11px] font-semibold text-[#86998F] uppercase tracking-wider">
                  Or with email
                </span>
                <div className="flex-grow border-t border-[#1A5C3A]/10"></div>
              </div>
            </>
          )}

          {/* Email / Password Form */}
          <form onSubmit={handleEmailAuth} className="space-y-3.5">
            {/* Full Name for Sign Up */}
            {authModalView === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-[#17201B] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86998F]" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#1A5C3A]/20 bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] text-[#17201B]"
                  />
                </div>
              </div>
            )}

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-[#17201B] mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86998F]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#1A5C3A]/20 bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] text-[#17201B]"
                />
              </div>
            </div>

            {/* Phone for Sign Up */}
            {authModalView === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-[#17201B] mb-1">
                  Mobile Number <span className="text-xs text-[#86998F] font-normal">(for pickup updates)</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86998F]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#1A5C3A]/20 bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] text-[#17201B]"
                  />
                </div>
              </div>
            )}

            {/* Password */}
            {authModalView !== 'forgot' && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-[#17201B]">
                    Password <span className="text-red-500">*</span>
                  </label>
                  {authModalView === 'signin' && (
                    <button
                      type="button"
                      onClick={() => {
                        resetForm();
                        openAuthModal('forgot');
                      }}
                      className="text-[11px] font-semibold text-[#1A5C3A] hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86998F]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-[#1A5C3A]/20 bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] text-[#17201B]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#86998F] hover:text-[#17201B] cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 px-6 rounded-2xl bg-[#1A5C3A] hover:bg-[#14472D] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>
                    {authModalView === 'signin' && 'Sign In to Dashboard'}
                    {authModalView === 'signup' && 'Create Account & Book'}
                    {authModalView === 'forgot' && 'Send Reset Email'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#D4A574]" />
                </>
              )}
            </button>
          </form>

          {/* Back to signin for forgot view */}
          {authModalView === 'forgot' && (
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  openAuthModal('signin');
                }}
                className="text-xs font-bold text-[#1A5C3A] hover:underline cursor-pointer"
              >
                ← Back to Sign In
              </button>
            </div>
          )}

          {/* Footer Security Badge */}
          <div className="mt-6 pt-4 border-t border-[#1A5C3A]/10 flex items-center justify-center gap-2 text-[11px] text-[#56685E]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1A5C3A]" />
            <span>Encrypted & secure with Firebase Authentication</span>
          </div>

        </div>

      </div>
    </div>
  );
};
