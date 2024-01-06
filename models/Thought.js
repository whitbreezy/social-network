const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a thought model
const thoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            return date.toISOString();
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
    },
    {
    timestamps: true,
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;