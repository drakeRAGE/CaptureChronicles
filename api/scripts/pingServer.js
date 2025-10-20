// This file is been used to make the site active bcz of render's active site limitation
const url = process.env.BACKEND_URL || 'http://localhost:3000';

const pingServer = async () => {
  try {
    const res = await fetch(url + '/api');
    if (!res.ok) {
      console.log(`${new Date().toISOString()} - Ping failed with status: ${res.status}`);
    }
  } catch (err) {
    console.error(`${new Date().toISOString()} - Ping error:`, err.message);
  }
};

// Ping every 4 minutes
setInterval(() => {
  pingServer();
}, 4 * 60 * 1000);

// Start up babe
pingServer();
