// ./config/plugins.js
module.exports = ({ env }) => {
   
  
    return {
      upload: {
        config: {
          provider: 'cloudinary', // ✅ keep this
          providerOptions: {
            CLOUDINARY_NAME: env('CLOUDINARY_NAME'),
            CLOUDINARY_KEY: env('CLOUDINARY_KEY'),
            CLOUDINARY_SECRET: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
    };
  };
  