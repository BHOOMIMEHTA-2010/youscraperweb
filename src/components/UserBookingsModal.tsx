import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { OfficialLogoEmblem } from './Logo';
import {
  X,
  Smartphone,
  Laptop,
  Monitor,
  Gamepad2,
  Watch,
  HelpCircle,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  PlusCircle,
  RefreshCw,
  Tv,
  Wrench,
  Boxes,
  FileText,
  Car,
  BatteryCharging,
  Factory,
  Package,
  Home,
  Shirt,
} from 'lucide-react';

interface BookingItem {
  id: string;
  device_type: string;
  condition: string;
  city: string;
  status: string;
  created_at?: any;
  name?: string;
  email?: string;
  phone?: string;
  additional_details?: string;
  estimated_value?: string;
}

export const UserBookingsModal: React.FC = () => {
  const { user, profile, isBookingsOpen, closeBookingsModal } = useAuth();
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !isBookingsOpen) return;

    setLoading(true);
    // Real-time listener for user bookings
    const colRef = collection(db, 'seller_leads');
    
    // Query by user_id or email
    const q = query(
      colRef,
      where('user_id', '==', user.uid)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items: BookingItem[] = [];
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() } as BookingItem);
        });

        // Sort locally by date descending
        items.sort((a, b) => {
          const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
          const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
          return dateB - dateA;
        });

        setBookings(items);
        setLoading(false);
      },
      (err) => {
        console.warn('Firestore real-time booking fetch note:', err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user, isBookingsOpen]);

  if (!isBookingsOpen || !user) return null;

  const getDeviceIcon = (type: string) => {
    const lower = type.toLowerCase();
    if (lower.includes('textile') || lower.includes('cloth') || lower.includes('fabric')) return <Shirt className="w-5 h-5" />;
    if (lower.includes('furniture') || lower.includes('table') || lower.includes('chair')) return <Home className="w-5 h-5" />;
    if (lower.includes('glass') || lower.includes('bottle')) return <Sparkles className="w-5 h-5" />;
    if (lower.includes('phone') || lower.includes('tablet') || lower.includes('smartphone')) return <Smartphone className="w-5 h-5" />;
    if (lower.includes('laptop') || lower.includes('pc')) return <Laptop className="w-5 h-5" />;
    if (lower.includes('monitor') || lower.includes('desktop')) return <Monitor className="w-5 h-5" />;
    if (lower.includes('appliance') || lower.includes('tv') || lower.includes('household') || lower.includes('refrigerator')) return <Tv className="w-5 h-5" />;
    if (lower.includes('metal') || lower.includes('copper') || lower.includes('iron') || lower.includes('aluminum')) return <Wrench className="w-5 h-5" />;
    if (lower.includes('plastic')) return <Boxes className="w-5 h-5" />;
    if (lower.includes('paper') || lower.includes('cardboard')) return <FileText className="w-5 h-5" />;
    if (lower.includes('vehicle') || lower.includes('car') || lower.includes('bike')) return <Car className="w-5 h-5" />;
    if (lower.includes('battery') || lower.includes('batteries')) return <BatteryCharging className="w-5 h-5" />;
    if (lower.includes('industrial') || lower.includes('factory')) return <Factory className="w-5 h-5" />;
    if (lower.includes('console') || lower.includes('gaming')) return <Gamepad2 className="w-5 h-5" />;
    if (lower.includes('watch') || lower.includes('wearable')) return <Watch className="w-5 h-5" />;
    return <Package className="w-5 h-5" />;
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'scheduled':
      case 'pickup scheduled':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            <Truck className="w-3.5 h-3.5 text-amber-700" />
            Pickup Scheduled
          </span>
        );
      case 'completed':
      case 'recycled':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            Completed & Paid
          </span>
        );
      case 'under appraisal':
      case 'reviewed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-300">
            <RefreshCw className="w-3.5 h-3.5 text-blue-700" />
            Appraisal in Progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FAF8F3] text-[#1A5C3A] border border-[#1A5C3A]/20">
            <Clock className="w-3.5 h-3.5 text-[#1A5C3A]" />
            Request Submitted
          </span>
        );
    }
  };

  const scrollToSellerForm = () => {
    closeBookingsModal();
    const el = document.querySelector('#sellers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#12241A]/70 backdrop-blur-sm transition-opacity"
        onClick={closeBookingsModal}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#1A5C3A]/15 overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#1A5C3A] to-[#124027] p-6 text-white flex items-center justify-between relative overflow-hidden flex-shrink-0">
          <div className="flex items-center gap-3.5">
            <OfficialLogoEmblem size={44} className="shadow-md rounded-full" />
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-tight">
                My Scrap Bookings
              </h3>
              <p className="text-xs text-emerald-100/80 mt-0.5">
                Logged in as <span className="font-semibold text-white">{profile?.displayName || user.email}</span>
              </p>
            </div>
          </div>

          <button
            onClick={closeBookingsModal}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Header Strip */}
        <div className="bg-[#FAF8F3] px-6 py-3.5 border-b border-[#1A5C3A]/10 flex items-center justify-between flex-shrink-0">
          <span className="text-xs font-bold text-[#56685E]">
            {bookings.length} {bookings.length === 1 ? 'Item / Scrap Batch' : 'Items / Scrap Batches'} Registered
          </span>
          <button
            onClick={scrollToSellerForm}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A5C3A] hover:bg-[#14472D] text-white text-xs font-bold transition-all shadow-sm cursor-pointer hover:scale-105"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#D4A574]" />
            <span>Book New Scrap Pickup</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 flex-grow bg-[#FCFBF8]">
          {loading ? (
            <div className="py-16 text-center">
              <div className="w-8 h-8 border-3 border-[#1A5C3A]/30 border-t-[#1A5C3A] rounded-full animate-spin mx-auto mb-3" />
              <p className="text-xs font-semibold text-[#56685E]">Loading your booking dashboard...</p>
            </div>
          ) : bookings.length === 0 ? (
            /* Empty State */
            <div className="py-12 text-center max-w-sm mx-auto">
              <div className="w-16 h-16 rounded-3xl bg-[#1A5C3A]/10 text-[#1A5C3A] flex items-center justify-center mx-auto mb-4 border border-[#1A5C3A]/15">
                <Truck className="w-8 h-8 text-[#1A5C3A]" />
              </div>
              <h4 className="font-heading font-bold text-lg text-[#17201B] mb-2">
                No active bookings yet
              </h4>
              <p className="text-xs text-[#56685E] leading-relaxed mb-6">
                Have scrap metals, plastics, appliances, paper, vehicle scrap, or electronics? Get a fair price appraisal and free doorstep pickup in minutes.
              </p>
              <button
                onClick={scrollToSellerForm}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A5C3A] hover:bg-[#14472D] text-white text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105"
              >
                <span>Schedule Your First Pickup</span>
                <ArrowRight className="w-4 h-4 text-[#D4A574]" />
              </button>
            </div>
          ) : (
            /* Bookings List */
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-2xl p-5 border border-[#1A5C3A]/15 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1A5C3A]/10 text-[#1A5C3A] flex items-center justify-center flex-shrink-0">
                      {getDeviceIcon(booking.device_type)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#17201B]">
                        {booking.device_type}
                      </h4>
                      <p className="text-xs text-[#56685E]">
                        Condition: <span className="font-semibold text-[#17201B]">{booking.condition}</span>
                      </p>
                    </div>
                  </div>

                  <div>{getStatusBadge(booking.status)}</div>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-t border-b border-[#1A5C3A]/10 text-xs my-2">
                  <div className="flex items-center gap-2 text-[#56685E]">
                    <MapPin className="w-3.5 h-3.5 text-[#1A5C3A] flex-shrink-0" />
                    <span className="truncate">{booking.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#56685E]">
                    <Calendar className="w-3.5 h-3.5 text-[#1A5C3A] flex-shrink-0" />
                    <span>
                      {booking.created_at
                        ? new Date(booking.created_at).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })
                        : 'Recent'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#56685E] col-span-2 sm:col-span-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1A5C3A] flex-shrink-0" />
                    <span className="truncate">Ref: #{booking.id.slice(-6).toUpperCase()}</span>
                  </div>
                </div>

                {/* Additional details note */}
                {booking.additional_details && (
                  <p className="text-[11px] text-[#56685E] bg-[#FAF8F3] p-2.5 rounded-xl mt-2 border border-[#1A5C3A]/10 italic">
                    "{booking.additional_details}"
                  </p>
                )}

                {/* Bottom Tracker / Next Step note */}
                <div className="mt-3 flex items-center justify-between text-xs pt-1">
                  <div className="flex items-center gap-1.5 text-[#1A5C3A] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A574]" />
                    <span>Free Doorstep Logistics Guarantee</span>
                  </div>
                  <span className="text-[11px] text-[#86998F]">
                    Pickup Team will call within 24h
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-white border-t border-[#1A5C3A]/10 flex-shrink-0 text-center text-xs text-[#56685E] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#1A5C3A]" />
          <span>Real-time tracking synced directly with your verified account</span>
        </div>

      </div>
    </div>
  );
};
