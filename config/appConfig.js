let appConfig = {};
appConfig.port = 3001;

appConfig.allowedCrossOrigin = "*";
appConfig.dev = "dev";
appConfig.db = {
    host: 'localhost',
    port: 27017,
    name: 'blogappDb'
}
appConfig.apiVersion = "/api/v1";

module.exports = {
    port: appConfig.port,
    allowedCrossOrigin: appConfig.allowedCrossOrigin,
    environment: appConfig.env,
     db : appConfig.db,
    apiVersion: appConfig.apiVersion
}
