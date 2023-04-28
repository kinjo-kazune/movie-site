import { Layout } from "../../components/templates/Layout"
import utilStyles from "../../styles/utils.module.css"
import Head from "next/head";
import layout from "../../styles/style.module.css"
import TheatersButton from "@/app/components/atoms/button/TheatersButton";
import json from "../../../data/theaters.json"

const tname = json.map((output) => {
    return (
        <TheatersButton>{output.theater_name}</TheatersButton>
    )
})

export default function Theater() {
    return (
        <>
        <Head>
            <title>劇場一覧</title>
        </Head>
            <Layout>
                <div className={layout.container}>
                    <h1 className={utilStyles.text}>劇場一覧</h1>
                    <div className={layout.area}>
                        <div className={layout.listItem}>
                            <div className={layout.title}></div>
                            <div className={layout.theater}>
                                {tname}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}