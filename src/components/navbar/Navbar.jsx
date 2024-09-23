import Image from "next/image"
import styles from "./navbar.module.css"
import Link from "next/link"
import {ThemeToggle,AuthLinks} from "../index.js"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s.svg" alt="facebook" width={24} height={24} />
        <Image className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="instagram" width={24} height={24} />
        <Image className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s.svg" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>TechnoHub</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar
