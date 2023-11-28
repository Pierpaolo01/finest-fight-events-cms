'use strict';

/**
 * event-ticket service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-ticket.event-ticket');
