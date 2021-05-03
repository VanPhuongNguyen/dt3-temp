import mongoose, { Document, model, Schema, Model } from 'mongoose';

export interface Category {
  name: string;
}

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const Category =
  (mongoose.models.Category as Model<Document<Category>>) ||
  model<Document<Category>, Model<Document<Category>>>(
    'Category',
    CategorySchema,
  );

export default Category;
