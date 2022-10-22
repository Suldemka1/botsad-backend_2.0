'use strict';

/**
 * press-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::press-service.press-service');
