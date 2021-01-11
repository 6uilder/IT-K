import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src="https://avatars.mds.yandex.net/get-zen_doc/171120/pub_5aa5b181799d9d32b20c5427_5aa5b18477d0e601d3c37dc0/scale_1200" alt="pic"/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;