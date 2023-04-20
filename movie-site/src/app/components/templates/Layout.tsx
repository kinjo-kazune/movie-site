import { memo } from "react";
import { Header } from "../organisms/layout/Header"
import Footer from "../organisms/layout/Footer"

type Props = {
    children: React.ReactNode
}

export const Layout: React.FC<Props>= memo((props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
})