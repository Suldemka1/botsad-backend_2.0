'use strict';

/**
 *  appeal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::appeal.appeal', () => ({
  async create(ctx) {
    const {data} = ctx.request.body
    const files = ctx.request.files

    const parsedData = JSON.parse(data)

    const entry = await strapi.entityService.create('api::appeal.appeal', {
      data: {
        ...parsedData
      },

      files: {
        file: files['files.media']
      }
    })

    ctx.send(entry)

    return entry
  }
}));
