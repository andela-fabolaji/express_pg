const { Meal } = require('../db/models');
const hasPermission = require('../utils/permission');

class MealController {
  static async create(req, res) {
    const allow = hasPermission('create_meal', req);
    if (!allow) res.status(403).json({
      msg: 'You are not authorized to create a meal',
      user: req.user,
      allow
    });

    try {
      let meal = await Meal.create({
        ...req.body,
        price: parseInt(req.body.price),
        quantity: parseInt(req.body.quantity),
        catererId: req.user.id
      });
      if (meal) {
        meal = meal.get({ plain: true });
        res.status(201).json({
          msg: 'meal successfully created',
          data: meal
        });
      }
    } catch(e) {
      res.status(500).json({
        msg: 'an error occured while trying to create meal',
        error: e
      });
    }
  }
}

module.exports = MealController;