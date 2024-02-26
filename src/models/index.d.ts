import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type EagerSummarys = {
  readonly id: number;
  readonly title: string;
  readonly items: (Item | null)[];
}

type LazySummarys = {
  readonly id: number;
  readonly title: string;
  readonly items: (Item | null)[];
}

export declare type Summarys = LazyLoading extends LazyLoadingDisabled ? EagerSummarys : LazySummarys

export declare const Summarys: (new (init: ModelInit<Summarys>) => Summarys)

type EagerItem = {
  readonly id: number;
  readonly title: string;
  readonly value: string;
}

type LazyItem = {
  readonly id: number;
  readonly title: string;
  readonly value: string;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item)

type EagerRequirements = {
  readonly id: number;
  readonly title: string;
  readonly items: (Item | null)[];
}

type LazyRequirements = {
  readonly id: number;
  readonly title: string;
  readonly items: (Item | null)[];
}

export declare type Requirements = LazyLoading extends LazyLoadingDisabled ? EagerRequirements : LazyRequirements

export declare const Requirements: (new (init: ModelInit<Requirements>) => Requirements)

type PlanMetaData = {
  readOnlyFields: 'updatedAt';
}

type EagerPlan = {
  readonly id: string;
  readonly planId: string;
  readonly title: string;
  readonly image: string;
  readonly createdAt: string;
  readonly summary: string;
  readonly activeAreaIndex: number;
  readonly internalAreaValue: number;
  readonly desksValue: number;
  readonly peopleValue: number;
  readonly summaryArray: (Summarys | null)[];
  readonly requirementsArray: (Requirements | null)[];
  readonly owner: string;
  readonly updatedAt?: string | null;
}

type LazyPlan = {
  readonly id: string;
  readonly planId: string;
  readonly title: string;
  readonly image: string;
  readonly createdAt: string;
  readonly summary: string;
  readonly activeAreaIndex: number;
  readonly internalAreaValue: number;
  readonly desksValue: number;
  readonly peopleValue: number;
  readonly summaryArray: (Summarys | null)[];
  readonly requirementsArray: (Requirements | null)[];
  readonly owner: string;
  readonly updatedAt?: string | null;
}

export declare type Plan = LazyLoading extends LazyLoadingDisabled ? EagerPlan : LazyPlan

export declare const Plan: (new (init: ModelInit<Plan, PlanMetaData>) => Plan) & {
  copyOf(source: Plan, mutator: (draft: MutableModel<Plan, PlanMetaData>) => MutableModel<Plan, PlanMetaData> | void): Plan;
}