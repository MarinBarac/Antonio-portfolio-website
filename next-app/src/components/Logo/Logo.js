import Image from 'next/image';
import Link from 'next/link';

import LogoImage from "@assets/images/Logo.png"

import styles from './Logo.module.scss';

const Logo = () => {
    return <Link href="/" className={styles.container}>
        <Image src={LogoImage.src} alt="Logo" width={116} height={29}/>
    </Link>
}

export default Logo;