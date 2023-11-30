'use strict';

/**
 * event-fighter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-fighter.event-fighter');
