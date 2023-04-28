import { memo } from "react";
import { Header } from "../organisms/layout/Header"
import Footer from "../organisms/layout/Footer"
import styles from "../layout.module.css"

type Props = {
    children: React.ReactNode
}

export const Layout: React.FC<Props>= memo((props) => {
    const { children } = props;
    return (
        <>
            <div className={styles.container}>
                <Header />
                {children}
                <Footer />
            </div>    
        </>
    )
})