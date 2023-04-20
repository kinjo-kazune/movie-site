import { ReactNode } from "react";
import styles from "../../layout.module.css"

type Props = {
    children: ReactNode
}

const SecondaryButton = ({ children }: Props) => {
    return (
        <button className={styles.secondaryButton}>{children}</button>
    )
}

export default SecondaryButton;
