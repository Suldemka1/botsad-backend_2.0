'use strict';

/**
 *  subordinate controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::subordinate.subordinate');
