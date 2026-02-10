//file to define models in our table    

const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {

    title: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }

  },

  {
    timestamps: true
  }
  
);

//mongoose.model converts expenseSchema into Expense model
module.exports = mongoose.model("Expense", expenseSchema);
