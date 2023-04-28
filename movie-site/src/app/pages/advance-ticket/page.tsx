import { Layout } from "../../components/templates/Layout"
import utilStyles from "../../styles/utils.module.css"
import Head from "next/head";
import layout from "../../styles/style.module.css"
import TheatersButton from "@/app/components/atoms/button/TheatersButton";

const theaters = (event: Event) => {
    alert("theaters1")
}

export default function Theater() {
    return (
        <>
        <Head>
            <title>前売券情報</title>
        </Head>
            <Layout>
                <div className={layout.container}>
                    <h1 className={utilStyles.text}>前売券情報</h1>
                </div>
            </Layout>
        </>
    );
}