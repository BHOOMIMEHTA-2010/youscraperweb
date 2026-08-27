import express, { Request, Response } from 'express';
import path from 'path';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';
import { sellerLeadSchema, collectorLeadSchema, collegeLeadSchema } from './src/lib/validation';
import {
  saveSellerLeadToFirestore,
  saveCollectorLeadToFirestore,
  saveCollegeLeadToFirestore,
} from './src/lib/serverFirebase';

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory fallback
const inMemoryStore = {
  sellerLeads: [] as Array<any>,
  collectorLeads: [] as Array<any>,
  collegeLeads: [] as Array<any>,
};

// Health endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    firebaseConfigured: true,
    firebaseProject: 'yourscraper-dccec',
  });
});

// 1. Seller Leads API
app.post('/api/seller-leads', async (req: Request, res: Response): Promise<void> => {
  try {
    const result = sellerLeadSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const { website_honeypot, ...validData } = result.data;
    if (website_honeypot && website_honeypot.length > 0) {
      res.status(200).json({
        success: true,
        message: "Thanks! We've received your details. We'll review your information and get back to you.",
      });
      return;
    }

    let recordId: string = crypto.randomUUID();

    const leadRecord: Record<string, any> = {
      id: recordId,
      user_id: validData.user_id || null,
      name: validData.name,
      email: validData.email,
      phone: validData.phone,
      city: validData.city,
      device_type: validData.device_type,
      condition: validData.condition,
      additional_details: validData.additional_details || null,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    try {
      const docId = await saveSellerLeadToFirestore(leadRecord);
      recordId = docId;
      leadRecord.id = docId;
    } catch (dbErr: any) {
      console.warn('Firestore write notice (using fallback):', dbErr?.message);
      inMemoryStore.sellerLeads.push(leadRecord);
    }

    res.status(201).json({
      success: true,
      message: "Thanks! We've received your details. We'll review your information and get back to you.",
      data: { id: recordId },
    });
  } catch (err: any) {
    console.error('Error in /api/seller-leads:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to submit seller lead. Please try again.',
    });
  }
});

// 2. Collector Leads API
app.post('/api/collector-leads', async (req: Request, res: Response): Promise<void> => {
  try {
    const result = collectorLeadSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const { website_honeypot, ...validData } = result.data;
    if (website_honeypot && website_honeypot.length > 0) {
      res.status(200).json({
        success: true,
        message: "You're on the list. We'll contact you as the YourScraper network grows.",
      });
      return;
    }

    let recordId: string = crypto.randomUUID();

    const leadRecord: Record<string, any> = {
      id: recordId,
      name: validData.name,
      business_name: validData.business_name,
      email: validData.email,
      phone: validData.phone,
      city: validData.city,
      business_type: validData.business_type,
      monthly_volume: validData.monthly_volume,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    try {
      const docId = await saveCollectorLeadToFirestore(leadRecord);
      recordId = docId;
      leadRecord.id = docId;
    } catch (dbErr: any) {
      console.warn('Firestore write notice (using fallback):', dbErr?.message);
      inMemoryStore.collectorLeads.push(leadRecord);
    }

    res.status(201).json({
      success: true,
      message: "You're on the list. We'll contact you as the YourScraper network grows.",
      data: { id: recordId },
    });
  } catch (err: any) {
    console.error('Error in /api/collector-leads:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to join bulk network. Please try again.',
    });
  }
});

// 3. College Leads API
app.post('/api/college-leads', async (req: Request, res: Response): Promise<void> => {
  try {
    const result = collegeLeadSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: result.error.flatten().fieldErrors,
      });
      return;
    }

    const { website_honeypot, ...validData } = result.data;
    if (website_honeypot && website_honeypot.length > 0) {
      res.status(200).json({
        success: true,
        message: "Thanks! We'll be in touch.",
      });
      return;
    }

    let recordId: string = crypto.randomUUID();

    const leadRecord: Record<string, any> = {
      id: recordId,
      name: validData.name,
      organization: validData.organization,
      email: validData.email,
      phone: validData.phone,
      message: validData.message || null,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    try {
      const docId = await saveCollegeLeadToFirestore(leadRecord);
      recordId = docId;
      leadRecord.id = docId;
    } catch (dbErr: any) {
      console.warn('Firestore write notice (using fallback):', dbErr?.message);
      inMemoryStore.collegeLeads.push(leadRecord);
    }

    res.status(201).json({
      success: true,
      message: "Thanks! We'll be in touch.",
      data: { id: recordId },
    });
  } catch (err: any) {
    console.error('Error in /api/college-leads:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to submit organization inquiry. Please try again.',
    });
  }
});

// Vite Middleware or Static Files
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`YourScraper server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
