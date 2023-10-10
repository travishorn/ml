import { NODE_ENV } from '$env/static/private';
import knex from 'knex';
import knexConfig from '../../../knexfile.js';

export const db = knex(knexConfig[NODE_ENV]);
