// import the user controller module
const userController = require("../controllers/user.controller");

/**
 * @desc - export the route module with defined routes
 * @param app - is the express instance
 */
module.exports = (app) => {
  // first parameter of the route function is string that contain our end pont
  app.route("/api/v1/users")
    .get(userController.getUsers) // request type. In this case HTTP GET
    .post(userController.create)
    .put(userController.update);

  app.route("/api/v1/users/:userId")
    .get(userController.getUserById)  
    .delete(userController.delete)

  app.route("/api/v1/users/:userId/comments")
    .post(userController.createComment)
}