const User = require('../models/user');
const csv = require('csvtojson');
const { v4: uuidv4 } = require('uuid');

const importUser = async (req, res) => {
     const batchId = uuidv4();
     try {
          const data = await csv().fromFile(req.file.path);
          const insertableData = data.map((d) => {
               return {
                    name: d.Name,
                    email: d.Email,
                    mobileNumber: d.Phone,
                    pinCode: d.Pincode,
                    batchId,
               };
          });
          await User.insertMany(insertableData);
          res.send({
               status: 201,
               success: true,
               msg: 'Imported CSV',
          });
     } catch (error) {
          res.send({ status: 400, success: false, msg: error.message });

          // remove any partial insertion
          await User.deleteMany({
               batchId,
          });
     }
};

module.exports = {
     importUser,
};
