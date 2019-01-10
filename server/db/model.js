const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schemas = require("./schemas");

for (let m in schemas) {
  mongoose.model(m, new Schema(schemas[m]));
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
};
