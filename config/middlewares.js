module.exports = [
  'strapi::errors',
  'strapi::security',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     origin: ['http://localhost', 'https://api.cit.rtuva.ru', 'https://www.mysite.com'],
  //   }
  // },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       directives: {
  //         'img-src': ['*'],
  //       },
  //     }
  //   },
  // },
];
