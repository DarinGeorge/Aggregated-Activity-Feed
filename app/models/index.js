// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ActivityStatus = {
  "SEEN": "SEEN",
  "UNSEEN": "UNSEEN",
  "TAPPED": "TAPPED"
};

const ActivityVerbs = {
  "FOLLOW": "FOLLOW",
  "FRIEND": "FRIEND",
  "COLLAB": "COLLAB",
  "LIKE": "LIKE",
  "EVENT": "EVENT",
  "TICKET_PUCHASE": "TICKET_PUCHASE",
  "DIRECT_MESSAGE": "DIRECT_MESSAGE",
  "POPULARITY": "POPULARITY",
  "SUCCESSFUL_UPLOAD_POST": "SUCCESSFUL_UPLOAD_POST",
  "FAILED_UPLOAD_POST": "FAILED_UPLOAD_POST"
};

const { Activity, ActivityActor } = initSchema(schema);

export {
  Activity,
  ActivityStatus,
  ActivityVerbs,
  ActivityActor
};