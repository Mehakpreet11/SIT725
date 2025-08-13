const food=require('../Services/foodData')


  
  
  exports.getAllFood = (req, res) => {
    const items = food.getFoodItems();
    res.json({
      status: 200,
      data: items,
      message: 'Food menu retrieved successfully'
    });
  };

  