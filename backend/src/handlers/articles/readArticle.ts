import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import createError from 'http-errors';
import { commonMiddleware } from '@src/middlewares/middy';
import Article from '@src/models/Article';
import { Error } from 'mongoose';

const readArticle: APIGatewayProxyHandler = async (event) => {
  const id = event.pathParameters.id;

  try {
    const article = await Article.findById(id);

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
