import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ActivityStatus {
  SEEN = "SEEN",
  UNSEEN = "UNSEEN",
  TAPPED = "TAPPED"
}

export enum ActivityVerbs {
  FOLLOW = "FOLLOW",
  FRIEND = "FRIEND",
  COLLAB = "COLLAB",
  LIKE = "LIKE",
  EVENT = "EVENT",
  TICKET_PUCHASE = "TICKET_PUCHASE",
  DIRECT_MESSAGE = "DIRECT_MESSAGE",
  POPULARITY = "POPULARITY",
  SUCCESSFUL_UPLOAD_POST = "SUCCESSFUL_UPLOAD_POST",
  FAILED_UPLOAD_POST = "FAILED_UPLOAD_POST"
}

export declare class ActivityActor {
  readonly actorID?: string;
  readonly alias?: string;
  readonly profileImage?: string;
  constructor(init: ModelInit<ActivityActor>);
}

type ActivityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Activity {
  readonly id: string;
  readonly actor?: ActivityActor;
  readonly verb?: ActivityVerbs | keyof typeof ActivityVerbs;
  readonly group?: string;
  readonly data?: string;
  readonly status?: ActivityStatus | keyof typeof ActivityStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Activity, ActivityMetaData>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity, ActivityMetaData>) => MutableModel<Activity, ActivityMetaData> | void): Activity;
}