import { GetRecord, State, UseImmerStore } from '../types';

export const generateStateTrackedHooksSelectors = <T extends State>(
  store: UseImmerStore<T>,
  trackedStore: () => T
) => {
  const selectors: GetRecord<T> = {} as any;

  Object.keys((store as any).getState()).forEach((key) => {
    selectors[key as keyof T] = () => {
      return trackedStore()[key as keyof T];
    };
  });

  return selectors;
};