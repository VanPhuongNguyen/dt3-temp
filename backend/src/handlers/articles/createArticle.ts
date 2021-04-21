import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import createError from 'http-errors';
import { adminMiddleware } from '@src/middlewares/middy';
import Article from '@src/models/Article';

const createArticle: APIGatewayProxyHandler = async (event) => {
  try {
    const article = new Article(JSON.parse(event.body));
    const doc = await article.save();
    return {
      statusCode: 200,
      body: JSON.stringify({ category: doc }),
    };
  } catch (error) {
    throw new createError.InternalServerError(
      JSON.stringify({ message: error.message }),
    );
  }
};

export const handler = adminMiddleware(createArticle);
