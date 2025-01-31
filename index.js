const express = require('express');
const path = require('path'); // Import path module to resolve file paths
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// In-memory data for vendors (hardcoded for simplicity)
const vendors = [
  { id: 1, name: 'Vendor 1', location: 'Hyderabad', services: ['Wash', 'Dry-Cleaning', 'Ironing'], latitude: 17.385044, longitude: 78.486671 },
  { id: 2, name: 'Vendor 2', location: 'Bangalore', services: ['Wash', 'Ironing'], latitude: 12.971599, longitude: 77.594566 },
  { id: 3, name: 'Vendor 3', location: 'Chennai', services: ['Wash', 'Dry-Cleaning'], latitude: 13.082680, longitude: 80.270721 },
  { id: 4, name: 'Vendor 4', location: 'Mumbai', services: ['Wash', 'Ironing'], latitude: 19.076090, longitude: 72.877426 },
  { id: 5, name: 'Vendor 5', location: 'Delhi', services: ['Wash & Fold', 'Ironing'], latitude: 28.704060, longitude: 77.102493 }
];

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory

// Endpoint to search vendors by location
app.get('/api/vendors/location', (req, res) => {
  const { location } = req.query;
  const filteredVendors = vendors.filter(vendor => vendor.location.toLowerCase() === location.toLowerCase());
  res.json(filteredVendors);
});

// Endpoint to search vendors by service
app.get('/api/vendors/service', (req, res) => {
  const { service_name } = req.query;
  const filteredVendors = vendors.filter(vendor => vendor.services.includes(service_name));
  res.json(filteredVendors);
});

// Serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'layout.html')); // Serve the index.html file
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
