import { ReactNode } from "react";
import styles from "../../layout.module.css"

type Props = {
    children: ReactNode
}

const TheatersButton = ({ children }: Props) => {
    return (
        <button className={styles.theatersButton}>{children}</button>
    )
}

export default TheatersButton;
