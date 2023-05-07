const db = require('../../config/mongoose');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const bcrypt = require('bcryptjs');


const User = require('../user');
const Category = require('../category');
const Record = require('../record');
const SEED_USERS = require('../seedsData/user.json');
const SEED_RECORDS = require('../seedsData/record.json');


SEED_USERS[0].recordsList = [0, 1, 2, 4];
SEED_USERS[1].recordsList = [3];

db.once('open', async () => {
  try {
    // 撈出資料庫的資料
    const categoryData = await Category.find({});
    return Promise.all(
      
      SEED_USERS.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        const createdUser = await User.create({
          name: user.name,
          email: user.email,
          password: hash,
        });

        
        const userRecords = user.recordsList.map((index) => {
          
          const record = SEED_RECORDS[index];
          
          record.userId = createdUser._id;

          const referenceCategory = categoryData.find((data) => {
            return data.name === record.category;
          });
          record.categoryId = referenceCategory._id;
          return record;
        });
        await Record.create(userRecords);
      })
    )
      .then(() => {
        console.log('all done');
        process.exit();
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
});
