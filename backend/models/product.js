const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the product name"],
    trim: true,
    maxLength: [100, "Product cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the product price"],
    maxLength: [10, "Product cannot exceed 10 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter the product description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select the product category"],
    enum: {
      values: [
        "Electronics",
        "Photography",
        "Accessories",
        "Food",
        "Books",
        "Tools",
        "Health",
        "Sports",
        "Kitchen",
      ],
      message: "Please select the product category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter the product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter the product seller"],
    minLength: [5, "Product cannot exceed 10 characters"],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
