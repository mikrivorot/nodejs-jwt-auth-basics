const mongoose = require('mongoose');
try {
  mongoose.connect(
    'mongodb+srv://abc:abc@cluster0.yairg.mongodb.net/AuthDB?retryWrites=true&w=majority'
  );
} catch (e) {
  debugger;
}

const userSchema = {
  username: {
    type: String,
  },
  password: {
    type: String,
  },
};

const User = mongoose.model('User', userSchema);

const db = {
  insertPromise: async function ({ username, password }) {
    const userDocument = new User({ username, password });
    return userDocument.save();
  },
  findOnePromise: async function ({ username }) {
    return User.findOne({ username }).exec();
  },
};

module.exports = db;
