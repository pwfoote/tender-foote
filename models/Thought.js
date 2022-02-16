//const { timeStamp } = require("console");
const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const thoughtSchema = new Schema(
  {
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: true,
    ref: 'User'
  },
    reactions: [ReactionSchema],
},
  {
     toJSON:{  
       virtuals: true,
      getters: true,
     },
     id: false,
  }
);

// get total count of reactions and replies on retrieval
//  thoughtSchema.virtual("reactionsCount").get(function () {
//   return this.reactions.length;
//  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;