import { Layout } from "../../components/templates/Layout"
import utilStyles from "../../styles/utils.module.css"
import styles from "../../components/layout.module.css"
import TheatersButton from "@/app/components/atoms/button/TheatersButton";

export default function Theater() {
    return (
        <div>
            <Layout>
                <div className={styles.container}>
                <h1 className={utilStyles.boldText}>劇場一覧</h1>
                <TheatersButton>シネマQ</TheatersButton>
                <TheatersButton>シネマライカム</TheatersButton>
                <TheatersButton>ミハマ7プレックス</TheatersButton>
                <TheatersButton>サザンプレックス</TheatersButton>
                <TheatersButton>シネマパレット</TheatersButton>
                <TheatersButton>シネマプラザハウス</TheatersButton>
                </div>
            </Layout>
            
        </div>
    );
}