var ctrl = require('../app_server/controllers/main');

module.exports = function(app) {
  //route the root path to the main controller's index method
  app.get('/', ctrl.index); 
}  

