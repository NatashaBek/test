import { combineReducers } from 'redux';
import EmployeeRosterPage from './containers/EmployeeRosterPage/reducer';

const rootReducer = (routerReducer: any) => {
    return combineReducers({
      location: routerReducer,
      EmployeeRosterPage,
   });
 };

export default rootReducer;