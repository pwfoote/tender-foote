const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Please enter your username"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email address"],
    match: [/.+@.+\..+/]
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thoughts",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  // toJSON: {
  //   virtuals: false,
  //   getters: true,
  // },
  // id: false,
});

// get total count of friends on retrieval
// userSchema.virtual("friends").get(function () {
//   return this.friends.length;
// });

// create the user model using userSchema
const User = model('User', userSchema);

// export the model
module.exports = User;