import mongoose, { Document, model, Schema, Model } from 'mongoose';

export interface Comment {
  content: string;
  commentFor: mongoose.Types.ObjectId;
  postBy: mongoose.Types.ObjectId;
  comment: Array<mongoose.Types.ObjectId>;
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
    comment: [{ type: mongoose.Types.ObjectId, href: 'Comment' }],
  },
  {
    timestamps: true,
  },
);

const Comment =
  (mongoose.models.Comment as Model<Document<Comment>>) ||
  model<Document<Comment>, Model<Document<Comment>>>('Comment', CommentSchema);

export default Comment;
