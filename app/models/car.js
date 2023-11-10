var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
  name: String,
  matricula: String,
  dataRegisto: {type: Date, default: Date.now()},
  dono: {type: Schema.Types.ObjectId, ref: 'Bear'}
});

module.exports = mongoose.model('Car', CarSchema);
