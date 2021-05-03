import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import createError from 'http-errors';
import { commonMiddleware } from '@src/middlewares/middy';
import Article from '@src/models/Article';
import Category from '@src/models/Category';
import { Error } from 'mongoose';

const listArticles: APIGatewayProxyHandler = async (event) => {
  const categoryId = event.queryStringParameters.category
    ? event.queryStringParameters.category
    : null;
  const skip = event.queryStringParameters.skip
    ? parseInt(event.queryStringParameters.skip)
    : 0;
  const limit = event.queryStringParameters.limit
    ? parseInt(event.queryStringParameters.limit)
    : 6;
  const sortBy = event.queryStringParameters.sortBy
    ? event.queryStringParameters.sortBy
    : 'createdAt';
  const order = event.queryStringParameters.order
    ? event.queryStringParameters.order
    : 'desc';
  try {
    const articles = await Article.find({
      category: categoryId ? categoryId : { $exists: true },
    })
      .skip(skip)
      .limit(limit)
      .sort([[sortBy, order]])
      .populate({
        path: 'category',
        model: Category,
      });

    if (!articles) {
      throw new Error('No article found.');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ articles }),
    };
  } catch (error) {
    throw new createError.InternalServerError(
      JSON.stringify({ message: error.message }),
    );
  }
};

export const handler = commonMiddleware(listArticles);
