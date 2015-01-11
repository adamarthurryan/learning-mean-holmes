var ctrl = require('../app_server/controllers/main');

//route the root path to the main controller's index method
module.exports = function(app) {
  app.get('/', ctrl.index); 
}  

