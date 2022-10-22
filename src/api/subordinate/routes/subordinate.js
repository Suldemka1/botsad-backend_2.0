'use strict';

/**
 * subordinate router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::subordinate.subordinate');
