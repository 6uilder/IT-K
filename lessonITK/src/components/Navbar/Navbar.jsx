import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
    let friendItem = props.state.friends.map(f => <span>{f.name}</span>)
    return  <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activ}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activ}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activ}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activ}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activ}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.activ}>Settings</NavLink>
        </div>
        <div className={s.friends}>
            {friendItem}
        </div>
    
    </nav>
}

export default Navbar;
