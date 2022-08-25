import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

const DefauLayout = ({ children }) => {
   return (
      <>
         <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
               <Sidebar />
               <div className="content">{children}</div>
            </div>
         </div>
      </>
   );
};

export default DefauLayout;
