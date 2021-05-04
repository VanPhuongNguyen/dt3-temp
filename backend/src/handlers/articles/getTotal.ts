import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import createError from 'http-errors';
import { commonMiddleware } from '@src/middlewares/middy';
import Article from '@src/models/Article';
import { Error } from 'mongoose';

const getTotal: APIGatewayProxyHandler = async (event) => {
  const findArgs = event.queryStringParameters;

  try {
    const size = await Article.count(findArgs);

    if (!size) {
      throw new Error('No article found.');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ size }),
    };
  } catch (error) {
    throw new createError.InternalServerError(
      JSON.stringify({ message: error.message }),
    );
  }
};

export const handler = commonMiddleware(getTotal);
