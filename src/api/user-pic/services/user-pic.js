'use strict';

/**
 * user-pic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-pic.user-pic');
