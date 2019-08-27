/*  EmployeeRosterComponent  */

import * as React from 'react';
import * as styles from './styles.css';
import Modal from 'react-responsive-modal';
import { truncatedString, dateTimeFormatOrHyphen } from '../../common/utils';

type Props = {
  modal: { [key: string]: boolean };
  closeModal: (modal: string) => void;
  openModal: (modal: string) => void;
  employees: any;
};

type State = {};

class EmployeeRoster extends React.Component<Props, State> {
  state = { showModal: false, styleCheck: false };

  handleOpenModal = () => {
    this.props.openModal('empModal');
    this.setState({ showModal: true, styleCheck: true })
  }

  handleCloseModal = () => {
    this.props.closeModal('empModal');
    this.setState({ showModal: false, styleCheck: false })
  }

  selectedEmpCard = { backgroundColor: 'darkorange' }

  render() {
    const { showModal, styleCheck } = this.state;
    const { employees } = this.props;

    return (
      <div>
        <Modal open={showModal} onClose={this.handleCloseModal} center>
          <div>
            <img src={employees.avatar} alt="" />
            <div className={styles.modalHeader}>
              <h2 >{employees.firstName + ' ' + employees.lastName}</h2>
              <hr />
            </div>
          </div>
          <div className={styles.modalText}>
            {employees.jobTitle}<br />{employees.age}<br />{dateTimeFormatOrHyphen(employees.dateJoined)}
          </div>
          <div className={styles.modalBio}>
            {employees.bio}
          </div>
        </Modal>

        <div className={styles.wrapper}>
          <div className={styles.interactiveDiv} style={styleCheck ? this.selectedEmpCard : undefined} onClick={this.handleOpenModal}>
            <img src={employees.avatar} alt="" />
            <h3>{employees.firstName + ' ' + employees.lastName}</h3>
            {truncatedString(employees.bio, 120)}
          </div>
        </div>
      </div>
    );
  };
}

export default EmployeeRoster;