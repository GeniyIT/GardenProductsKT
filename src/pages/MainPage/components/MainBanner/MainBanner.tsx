import { FC } from 'react';
import styles from './MainBanner.module.css';

interface IMainBannerProps {
    title: string
}

export const MainBanner: FC<IMainBannerProps> = ({ title }) => {
    return (
        <div className={styles.main_banner}>
            <h1 className={styles.main_banner_title}>{title}</h1>
            <button className={styles.main_banner_button}> Check out </button>
        </div>
    )
}
