import Link from "next/link";
import styles from "../../layout.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrap}>
                <div className={styles.footerLogo}>
                    <Link href="/" legacyBehavior>
                        <a>
                            <img src="/images/logo.jpg" alt="ロゴ" className={styles.logoImage} />
                        </a>  
                    </Link>
                </div>
                <ul className={styles.footerList}>
                    <li className={styles.footerListStyle}>会社概要</li>
                    <li className={styles.footerListStyle}>特定商法取引法に基づく表記</li>
                    <li className={styles.footerListStyle}>利用規約</li>
                    <li className={styles.footerListStyle}>プライバシーポリシー</li>    
                </ul>
                <p>copylight&copy; THEATER.All Rights Reserved.</p>
            </div>
            
        </footer>
    )
}

export default Footer;