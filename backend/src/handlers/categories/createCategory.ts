import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import createError from 'http-errors';
import { adminMiddleware } from '@src/middlewares/middy';
import Category from '@src/models/Category';

// @ts-ignore
const createCategory: APIGatewayProxyHandler = async (event) => {
  const { name } = JSON.parse(event.body);
  try {
    const category = new Category({ name });
    const doc = await category.save();
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

export const handler = adminMiddleware(createCategory);
