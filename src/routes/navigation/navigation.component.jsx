import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as ShopLogo } from '../../assets/shopping-bag.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      {/*Fragment is useful when you don't want to render some specific html element*/}
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <ShopLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet /> {/*Outlet adds other components on page except this one*/}
    </Fragment>
  );
};

export default Navigation;
