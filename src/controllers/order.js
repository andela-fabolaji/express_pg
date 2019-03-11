const { Order, Meal } = require('../db/models');
const hasPermission = require('../utils/permission');

class OrderController {
  static async create(req, res) {
    const allow = hasPermission('create_order', req);
    if (!allow) return res.status(403).json({
      msg: 'You are not authorized to create a meal',
      user: req.user,
      allow
    });

    try {
      // let order = await Order.create({
      //   userId: req.user.id,
      //   quantity: req.body.quantity,
      //   fulfilled: false
      // });
      // console.log('order', order.dataValues, parseInt(req.body.mealId, 10), '----------------')
      let order = await Order.findOne({
        where: {
          id: 1
        },
        attributes: ['id']
      });
      let meal = await Meal.findOne({
        where: {
          id: parseInt(req.body.mealId, 10),
        },
        attributes: ['id']
      });
      console.log('meal', meal, '----------------')
      const setMeal = await order.setMeals([meal.dataValues.id]);
      console.log('set meal', setMeal);
      
      res.status(201).json({
        data: meal
      });
    } catch (e) {
      res.status(500).json({
        msg: 'an error occured while trying to create order',
        error: e
      });
    }
  }
}

module.exports = OrderController;