const { Role } = require('../db/models');

class RoleController {
  static async all(req, res) {
    const roles = await Role.findAll();
    res.status(200).json({
      data: roles
    });
  }
}

module.exports = RoleController;