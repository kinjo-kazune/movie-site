// import { Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";
import styles from "../../layout.module.css"
import utilStyles from "../../../styles/utils.module.css"
import PrimaryButton from "../../atoms/button/PrimaryButton";
import Link from "next/link";
import SecondaryButton from "../../atoms/button/SecondaryButton";


export const Header = memo(() => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrap}>
                <Link href="/" className={styles.headerLogo} legacyBehavior>
                    <a>
                    <img src="/images/logo.jpg" alt="ロゴ" className={styles.logoImage} />
                    </a>
                </Link>
                <nav className={styles.headerNav}>
                    <ul className={styles.listStyle}>
                        <li className={styles.list}>
                            <Link href="/pages/theaters"  className={styles.headerList}>
                                <div className={utilStyles.headerText}>劇場一覧</div>
                                <div className={utilStyles.headerTextSub}>THEATER</div>
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/pages/movies"  className={styles.headerList}>
                                <div className={utilStyles.headerText}>作品一覧</div>
                                <div className={utilStyles.headerTextSub}>MOVIE</div>
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/pages/advance-ticket"  className={styles.headerList}>
                                <div className={utilStyles.headerText}>前売り券情報</div>
                                <div className={utilStyles.headerTextSub}>ADVANCE TICKETS</div>
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/pages/qa"  className={styles.headerList}>
                                <div className={utilStyles.headerText}>よくあるご質問</div><div className={utilStyles.headerTextSub}>Q&A</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                <SecondaryButton>QR発行</SecondaryButton>
                <PrimaryButton>新規登録</PrimaryButton>
                <PrimaryButton>ログイン</PrimaryButton>
            </div>
        </header>
    )
})