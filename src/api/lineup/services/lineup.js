'use strict';

/**
 * lineup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lineup.lineup');
