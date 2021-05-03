import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import createError from 'http-errors';
import { commonMiddleware } from '@src/middlewares/middy';
import Article from '@src/models/Article';
import Comment from '@src/models/Comment';
import Category from '@src/models/Category';
import User from '@src/models/User';
import { Error } from 'mongoose';

const readArticle: APIGatewayProxyHandler = async (event) => {
  const id = event.pathParameters.id;

  try {
    const article = await Article.findByIdAndUpdate(
      id,
      {
        $inc: { view: 1 },
      },
      { new: true },
    )
      .populate({
        path: 'comments',
        model: Comment,
        populate: [
          {
            path: 'postBy',
            model: User,
            select: 'firstName lastName avatar',
          },
          {
            path: 'comments',
            model: Comment,
            populate: {
              path: 'postBy',
              model: User,
              select: 'firstName lastName avatar',
            },
          },
        ],
      })
      .populate({
        path: 'category',
        model: Category,
      });

    if (!article) {
      throw new Error('No article found.');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ article }),
    };
  } catch (error) {
    throw new createError.InternalServerError(
      JSON.stringify({ message: error.message }),
    );
  }
};

export const handler = commonMiddleware(readArticle);