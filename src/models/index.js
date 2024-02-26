// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Plan, Summarys, Item, Requirements } = initSchema(schema);

export {
  Plan,
  Summarys,
  Item,
  Requirements
};