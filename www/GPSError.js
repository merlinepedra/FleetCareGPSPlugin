/**
 * GPS error object
 * @constructor
 * @param code
 * @param message
 */
var GPSError = function (code, message) {
    this.code = code || null;
    this.message = message || '';
};

GPSError.UNKNOWN_ERROR = 0;
GPSError.PROVIDER_ERROR = 1;
GPSError.SERVICE_INITIALIZE_ERROR = 2;
GPSError.ROUTE_NOT_FOUND = 3;
GPSError.SERVICE_FINALIZE_ERROR = 4;


module.exports = GPSError;