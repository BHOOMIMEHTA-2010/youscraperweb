export type DeviceType =
  | 'Smartphone'
  | 'Laptop'
  | 'Tablet'
  | 'Desktop'
  | 'Monitor'
  | 'Gaming Console'
  | 'Wearable'
  | 'Other';

export type DeviceCondition =
  | 'Working'
  | 'Damaged'
  | 'Not Working'
  | 'Not Sure';

export type CollectorBusinessType =
  | 'Scrap Collector'
  | 'Recycler'
  | 'Refurbisher'
  | 'Bulk Buyer'
  | 'Other';

export type MonthlyVolume =
  | 'Small'
  | 'Medium'
  | 'Large'
  | 'Not Sure';

export type LeadStatus = 'pending' | 'reviewed' | 'contacted' | 'archived';

export interface SellerLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  device_type: DeviceType;
  condition: DeviceCondition;
  additional_details?: string;
  status: LeadStatus;
  created_at: string;
}

export interface CollectorLead {
  id: string;
  name: string;
  business_name: string;
  email: string;
  phone: string;
  city: string;
  business_type: CollectorBusinessType;
  monthly_volume: MonthlyVolume;
  status: LeadStatus;
  created_at: string;
}

export interface CollegeLead {
  id: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  message?: string;
  status: LeadStatus;
  created_at: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}
