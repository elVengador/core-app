import { GraphQLClient } from 'graphql-request';
import { API_HOST, API_PORT } from '../../core.enviroments';

const PROTOCOL = process.env.NODE_ENV === 'development'? "http":"https"
const endpoint = `${PROTOCOL}://${API_HOST}:${API_PORT}/graphql`
export const gqlClient = new GraphQLClient(endpoint, { headers: {} })
