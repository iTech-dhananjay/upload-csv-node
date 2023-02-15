const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name: {
          type: String,
     },
     email: {
          type: String,
          unique: true,
          match: [
               /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
               'Please enter a valid email address',
          ],
     },
     mobileNumber: {
          type: Number,
          unique: true,
     },
     pinCode: {
          type: Number,
          maxLength: 6,
     },
     batchId: {
          type: String,
     },
});

module.exports = mongoose.model('User', userSchema);
