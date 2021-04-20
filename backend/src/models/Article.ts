import mongoose, { Document, model, Schema, Model } from 'mongoose';

export interface Article {
  title: string;
  content: string;
  avatar: string;
  postBy: mongoose.Types.ObjectId;
  comment: Array<mongoose.Types.ObjectId>;
}

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    avatar: {
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

const Article =
  (mongoose.models.Article as Model<Document<Article>>) ||
  model<Document<Article>, Model<Document<Article>>>('Article', ArticleSchema);

export default Article;
