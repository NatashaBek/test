/* EmployeeRosterPage reducer  */

import * as actions from './actions'

const initialState = {
  modal: ''
};

const EmployeeRosterPage = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return { ...state, modal: action.modalId };;

    case actions.CLOSE_MODAL:
      return { ...state, modal: '' };
    
      case 'SELECTED_EMP_DETAILS':
      return { ...state, empDetails: action.payload };

    default:
      return state;
  }
}

export default EmployeeRosterPage;