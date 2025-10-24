// ./config/plugins.js
module.exports = ({ env }) => {
    console.log('🧩 Loading Strapi plugin configuration...');
    console.log('🌥️ CLOUDINARY_NAME:', env('CLOUDINARY_NAME'));
    console.log('🌥️ CLOUDINARY_KEY:', env('CLOUDINARY_KEY') ? '✅ Loaded' : '❌ Missing');
    console.log('🌥️ CLOUDINARY_SECRET:', env('CLOUDINARY_SECRET') ? '✅ Loaded' : '❌ Missing');
  
    return {
      upload: {
        config: {
          provider: 'upload-cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
    };
  };
  