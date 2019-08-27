import React from 'react';
import style from '../App/App.css';
import { connect } from 'react-redux';
import EmployeeRosterPage from '../../containers/EmployeeRosterPage';
type Props = { };

class App extends React.Component<Props, {}> {
  render() : any {
    return (
      <div className={style.base}>
      <EmployeeRosterPage />
    </div>
    );
  }
}

const mapState = (state: any) => {
  return{
  };
 };

export default connect(mapState)(App);