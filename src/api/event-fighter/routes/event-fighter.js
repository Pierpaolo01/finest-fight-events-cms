'use strict';

/**
 * event-fighter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event-fighter.event-fighter');
