import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import createError from 'http-errors';
import { commonMiddleware } from '@src/middlewares/middy';
import Article from '@src/models/Article';
import { Error } from 'mongoose';

const listArticles: APIGatewayProxyHandler = async (event) => {
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
    const articles = await Article.find()
      .skip(skip)
      .limit(limit)
      .sort([[sortBy, order]]);

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
