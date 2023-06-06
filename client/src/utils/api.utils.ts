import { GraphQLClient } from 'graphql-request';
import {API_URL} from '../config/api';

const client = new GraphQLClient(API_URL);

export const request = async (query: string, variables?: any, isMutation = false, token?: string) => {
  try {
    const headers: { [key: string]: string } = {};

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    client.setHeaders(headers);

    const response = await client.request(query, variables, {
      ...(isMutation && { method: 'POST' })
    });
    
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error sending request to GraphQL API');
  }
};
