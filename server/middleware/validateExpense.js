const validateExpense = (req, res, next) => {
  const { title, amount, category, date } = req.body;

  if (!title || !amount || !category || !date) {
    return res.status(400).json({
      message: "Title, amount, category and date are required"
    });
  }

  next(); // move to controller
};

module.exports = validateExpense;
