import { GraphQLClient } from 'graphql-request';
import { API_HOST, API_PORT } from '../../core.enviroments';

const endpoint = `http://${API_HOST}:${API_PORT}/graphql`
export const gqlClient = new GraphQLClient(endpoint, { headers: {} })
