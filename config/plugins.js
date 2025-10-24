// ./config/plugins.js
module.exports = ({ env }) => {
   
  
    return {
      upload: {
        config: {
          provider: 'cloudinary', // ✅ keep this
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
  