/* EmployeeRosterPage actions */

// #region OPEN_MODAL
export const OPEN_MODAL = 'OPEN_MODAL';
export type OPEN_MODAL = typeof OPEN_MODAL;

export interface OpenAction {
  type: OPEN_MODAL;
  id: string;
}

export function handleOpenModal(id: string): OpenAction {
  return {
    type: OPEN_MODAL,
    id
  };
}
//#endregion

// #region CLOSE_MODAL
export const CLOSE_MODAL = 'CLOSE_MODAL';
export type CLOSE_MODAL = typeof CLOSE_MODAL;

export interface CloseAction {
  type: CLOSE_MODAL;
  id: string;
}

export function handleCloseModal(id: string): CloseAction {
  return {
    type: CLOSE_MODAL,
    id
  };
}
//#endregion