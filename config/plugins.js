// ./config/plugins.js
const cloudinaryProvider = require('@strapi/provider-upload-cloudinary');

module.exports = ({ env }) => {
 

  return {
    upload: {
      config: {
        provider: 'upload-cloudinary',
        providerPackage: cloudinaryProvider, // 👈 manually link provider package
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
