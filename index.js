const {isWebhookRequest} = require("./auth/requests_utils");
const {isDashboardRequest} = require("./auth/requests_utils");
const {isGDPRWebhookRequest} = require("./auth/requests_utils");

// Request Utils
exports.isDashboardRequest = isDashboardRequest
exports.isWebhookRequest = isWebhookRequest
exports.isGDPRWebhookRequest = isGDPRWebhookRequest
