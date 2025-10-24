const cloudinary = require('cloudinary').v2;

// Replace with your real credentials
cloudinary.config({
  cloud_name: 'medicarde',
  api_key: '991417681998733',
  api_secret: 'E-uD0jQ30byPZ8DZSyN5AkNcVyI',
});

// Ping Cloudinary to test connection
cloudinary.api.ping((error, result) => {
  if (error) console.error('Ping failed:', error);
  else console.log('Ping success:', result);
});
