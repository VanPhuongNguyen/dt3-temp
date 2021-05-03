import mongoose, { Document, model, Schema, Model } from 'mongoose';

export interface Comment {
  content: string;
  postBy: mongoose.Types.ObjectId;
  comments: Array<mongoose.Types.ObjectId>;
}

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    postBy: {
      type: mongoose.Types.ObjectId,
      required: true,
      href: 'User',
    },
    comments: [{ type: mongoose.Types.ObjectId, href: 'Comment' }],
  },
  {
    timestamps: true,
  },
);

const Comment =
  (mongoose.models.Comment as Model<Document<Comment>>) ||
  model<Document<Comment>, Model<Document<Comment>>>('Comment', CommentSchema);

export default Comment;
