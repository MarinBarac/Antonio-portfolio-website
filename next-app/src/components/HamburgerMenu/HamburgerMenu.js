import clsx from 'clsx';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = ({showNavigation, onClick}) => {
    const containerClass = clsx({
        [styles.container]: true,
        [styles.active]: showNavigation
    })

    return <div className={containerClass} onClick={onClick}>
        <div className={clsx(styles.bar, styles.first)}/>
        <div className={clsx(styles.bar, styles.second)}/>
        <div className={clsx(styles.bar, styles.third)}/>
    </div>
}

export default HamburgerMenu;