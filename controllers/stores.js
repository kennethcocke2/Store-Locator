const Store = require("../models/Store");

// @desc Get all stores
// @rout GET /api/v1/stores
// @access Public
exports.getStores = async (req, res, next) => {
  try {
    const stores = await stores.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (error) {
    console.error(err);
    if (err.code === 1100) {
      return res.status(400).json({ error: "This store already exists" });
    }
    res.status(500).json({ error: "Server error " });
  }
};

// @desc Create a  stores
// @route POst /api/v1/stores
// @access Public
exports.addStore = async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Server error " });
  }
};
