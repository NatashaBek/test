/*  Header  */

import * as React from 'react';
import * as styles from './styles.css';
import { dateTimeFormatOrHyphen } from '../../common/utils';

type Props = {
  companyInfo: any
};

const Header: React.StatelessComponent<Props> = ({ companyInfo }) => {
  return (
    <div>
      <header>
        <span><h1>{companyInfo.companyName}</h1>{companyInfo.companyMotto}
          <span className={styles.rightAlignment}>Since {dateTimeFormatOrHyphen(companyInfo.companyEst)}</span>
        </span>
        <hr />
        <br />
        <h3>Our Employees</h3>
        <hr />
      </header>
    </div>
  );
}

export default Header;