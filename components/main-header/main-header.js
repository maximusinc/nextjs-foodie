import Link from 'next/link';
import logoImage from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from 'next/image';
import MainHeaderBackground from '@/components/main-header/main-header-background';
import NavLink from '@/components/main-header/nav-link';

export default function MainHeader() {

  return (
    <>
    <MainHeaderBackground />
    <header className={styles.header} >
      <Link href="/">
        <Image className={styles.logo} src={logoImage} alt="A plate with food on it" priority width={100} />
        NextLevel Food
      </Link>

      <nav className={styles.nav} >
        <ul>
          <li>
            <NavLink href="/meals" > Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community" >Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}