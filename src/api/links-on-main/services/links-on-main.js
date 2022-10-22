'use strict';

/**
 * links-on-main service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::links-on-main.links-on-main');
