const { Meal, User } = require('../db/models/');

class MenuController {
  static async all(req, res) {
    try {
      let statusCode = 200;
      let msg = 'menu successfully retrieved';
      
      let menu = await Meal.findAll({
        where: { publish: true },
        attributes: ['id', 'name', 'description', 'price', 'quantity'],
        include: [User]
      });

      if (!menu.length) {
        msg = 'There\'s no menu available at the moment.';
        statusCode = 404;
      }

      res.status(statusCode).json({
        msg,
        data: menu
      });
    } catch(e) {
      res.status(500).json({
        msg: 'an error occured while trying get menu',
        error: e
      });
    }
  }
}

module.exports = MenuController;