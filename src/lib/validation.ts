import { z } from 'zod';

export const sellerLeadSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().min(8, 'Please enter a valid phone number').max(20, 'Phone number is too long'),
  city: z.string().trim().min(2, 'Please enter your city').max(100, 'City is too long'),
  device_type: z.enum([
    'Plastic',
    'Paper',
    'Cardboard',
    'Glass',
    'Metal',
    'E-waste / Electronics',
    'Textiles',
    'Furniture',
    'Household Recyclables',
    'Commercial & Industrial',
    'Other',
    'Smartphone',
    'Laptop',
    'Tablet',
    'Desktop',
    'Monitor',
    'Gaming Console',
    'Wearable',
    'Home Appliance',
    'Scrap Metal & Iron',
    'Plastic & Packaging',
    'Paper & Cardboard',
    'Vehicle & Auto Scrap',
    'Batteries & Inverters',
    'Industrial Scrap',
  ], { message: 'Please select a material / item category' }),
  condition: z.enum([
    'Working',
    'Damaged',
    'Not Working',
    'Not Sure',
  ], { message: 'Please select device condition' }),
  additional_details: z.string().trim().max(1000, 'Details cannot exceed 1000 characters').optional().default(''),
  user_id: z.string().nullable().optional(),
  website_honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type SellerLeadInput = z.infer<typeof sellerLeadSchema>;

export const collectorLeadSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  business_name: z.string().trim().min(2, 'Business name must be at least 2 characters').max(150, 'Business name is too long'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().min(8, 'Please enter a valid phone number').max(20, 'Phone number is too long'),
  city: z.string().trim().min(2, 'Please enter your city').max(100, 'City is too long'),
  business_type: z.enum([
    'Scrap Collector',
    'Recycler',
    'Refurbisher',
    'Bulk Buyer',
    'Other',
  ], { message: 'Please select your business type' }),
  monthly_volume: z.enum([
    'Small',
    'Medium',
    'Large',
    'Not Sure',
  ], { message: 'Please select estimated monthly volume' }),
  website_honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type CollectorLeadInput = z.infer<typeof collectorLeadSchema>;

export const collegeLeadSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  organization: z.string().trim().min(2, 'Institution or organization name is required').max(150, 'Organization name is too long'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().min(8, 'Please enter a valid phone number').max(20, 'Phone number is too long'),
  message: z.string().trim().max(1500, 'Message cannot exceed 1500 characters').optional().default(''),
  website_honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type CollegeLeadInput = z.infer<typeof collegeLeadSchema>;
