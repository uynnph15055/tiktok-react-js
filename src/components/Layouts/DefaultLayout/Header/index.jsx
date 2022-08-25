import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Header = () => {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img
               className={cx('logo')}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJAh5gMOZxzm-EU_9_ox_MPQBo8H459t_cR2sPlWphrrBAiss-XLgoOpCe_T6PmflsQ&usqp=CAU"
               alt=""
            />
            <div className="">Nguyen ngoc Uy</div>
         </div>
      </header>
   );
};

export default Header;
