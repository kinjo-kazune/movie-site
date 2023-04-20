import { Layout } from "../../components/templates/Layout"
import styles from "../../components/layout.module.css"
import utilStyles from "../../styles/utils.module.css"

export default function Thieater() {
    return (
        <div>
            <Layout>
                <div className={styles.container}>
                    <h1 className={utilStyles.boldText}>作品一覧</h1>
                </div>
            </Layout>
            
        </div>
    );
}