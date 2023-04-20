import { ReactNode } from "react";
import styles from "../../layout.module.css"

type Props = {
    children: ReactNode
}

const PrimaryButton = ({ children }: Props) => {
    return (
        <button className={styles.primaryButton}>{children}</button>
    )
}

export default PrimaryButton;
