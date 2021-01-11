import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.pic}>
                <img src='https://goarctic.ru/upload/iblock/444/4445f76ff7261804dfc52f8531daa7a4.jpg' alt='pic.'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
            ava+description
        </div>

        </div>)
}

export default ProfileInfo;
