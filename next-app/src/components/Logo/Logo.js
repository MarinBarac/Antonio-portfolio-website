import Image from 'next/image';

import LogoImage from "@assets/images/Logo.png"

import styles from './Logo.module.scss';

const Logo = () => {
    return <div className={styles.container}>
        <Image src={LogoImage.src} width={116} height={29}/>
    </div>
}

export default Logo;