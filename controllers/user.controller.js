
/**
 * @desc - module for get all users.
 */
module.exports.getUsers = (req, res) => {
  const user = [{
    firstName: "Ajantha",
    lastName: "Bandara"
  }];

  return res.status(200).json(user);
}