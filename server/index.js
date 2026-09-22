import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { initialProducts } from './data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(rootDir, 'public')));

// In-memory collections for active server lifecycle
let products = [...initialProducts];
const enquiries = [];
const careerApplications = [];

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'WellBee Pharmaceutical API'
  });
});

// 2. Get All Products (with Search & Category Filters)
app.get('/api/products', (req, res) => {
  const { category, search } = req.query;

  let filtered = [...products];

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.brandName.toLowerCase().includes(q) ||
      p.genericName.toLowerCase().includes(q) ||
      p.composition.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.specialty.toLowerCase().includes(q) ||
      p.indications.some(ind => ind.toLowerCase().includes(q))
    );
  }

  res.json({
    count: filtered.length,
    products: filtered
  });
});

// 3. Get Single Product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product formulation not found' });
  }
  res.json(product);
});

// 4. Submit Business & Distributor Enquiry (Section 13)
app.post('/api/enquiries', (req, res) => {
  const { enquiryType, name, organization, email, phone, territory, message, captchaAnswer } = req.body;

  // Validation
  if (!enquiryType || !name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Required fields are missing.' });
  }

  if (parseInt(captchaAnswer, 10) !== 12) {
    return res.status(400).json({ error: 'Security verification failed.' });
  }

  const ticketNumber = `WB-${Math.floor(10000 + Math.random() * 90000)}`;
  const record = {
    id: ticketNumber,
    enquiryType,
    name,
    organization: organization || 'N/A',
    email,
    phone,
    territory: territory || 'Unspecified',
    message,
    createdAt: new Date().toISOString()
  };

  enquiries.push(record);
  console.log(`[ENQUIRY RECEIVED] Ticket: ${ticketNumber} from ${name} (${enquiryType})`);

  res.status(201).json({
    success: true,
    message: 'Business enquiry successfully registered with WellBee Commercial Desk.',
    ticketId: ticketNumber,
    receivedAt: record.createdAt
  });
});

// 5. Submit Career Application (Section 14)
app.post('/api/careers/apply', (req, res) => {
  const { position, name, email, phone, experience, message } = req.body;

  if (!name || !email || !phone || !position) {
    return res.status(400).json({ error: 'Name, email, phone, and position are required.' });
  }

  const appId = `APP-${Math.floor(1000 + Math.random() * 9000)}`;
  const record = {
    id: appId,
    position,
    name,
    email,
    phone,
    experience: experience || 'Not specified',
    message: message || '',
    submittedAt: new Date().toISOString()
  };

  careerApplications.push(record);
  console.log(`[CAREER APPLICATION] ${appId} for ${position} by ${name}`);

  res.status(201).json({
    success: true,
    applicationId: appId,
    message: 'Application successfully received by Talent Acquisition.'
  });
});

// Production client serving
app.use(express.static(path.join(rootDir, 'dist')));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(rootDir, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`WellBee Pharmaceutical Backend running on http://localhost:${PORT}`);
});
