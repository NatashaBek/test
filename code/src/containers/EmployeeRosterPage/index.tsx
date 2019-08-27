import React from 'react';
import { connect } from 'react-redux';
import EmployeeRoster from '../../components/EmployeeRoster/index';
import { getModal } from '../../containers/EmployeeRosterPage/selectors';
import { handleOpenModal, handleCloseModal } from '../../containers/EmployeeRosterPage/actions';
import Header from '../../components/Header';
import { companyInfo, employees } from '../../common/statics';

type Props = {
  modal: { [key: string]: boolean };
  closeModal: (modal: string) => void;
  openModal: (modal: string) => void;
};

type State = {};

class EmployeeRosterPage extends React.Component<Props, State> {

  render() {
    const { modal, closeModal, openModal } = this.props;
    return (
      <div>
        <Header companyInfo={companyInfo} />
        {employees.map((value: any, key: number) => { return <EmployeeRoster key={key} employees={value}
          modal={modal}
          openModal={openModal}
          closeModal={closeModal} /> })
        }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    modal: getModal(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    openModal: (modal: string) => dispatch(handleOpenModal(modal)),
    closeModal: (modal: string) => dispatch(handleCloseModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeRosterPage);