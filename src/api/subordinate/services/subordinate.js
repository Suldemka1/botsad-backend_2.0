'use strict';

/**
 * subordinate service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subordinate.subordinate');
