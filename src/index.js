'use strict';

module.exports = {
  /**
   * Runs before your application is initialized.
   */
  register({ strapi }) {
    // ✅ Ensure Strapi trusts Render's proxy
    if (strapi && strapi.server && strapi.server.app) {
      strapi.server.app.proxy = true;
      strapi.log.info('✅ Proxy trust enabled for HTTPS on Render');
    }
  },

  /**
   * Runs before your application gets started.
   */
  bootstrap({ strapi }) {
    // Optional safety check for forwarded HTTPS
    strapi.server.httpServer.on('request', (req, res) => {
      if (req.headers['x-forwarded-proto'] === 'https') {
        req.secure = true;
      }
    });
  },
};
