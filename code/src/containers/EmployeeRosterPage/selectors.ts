import { createSelector } from 'reselect';

// Selectors must be PURE functions otherwise they may produce unpredictable errors

export const getModal = createSelector(
    (state: any) => state.modal,
    (result) => result
  );
  
  export const getEmpDetails = createSelector(
    (state: any) => state.empDetails,
    (result) => result
);