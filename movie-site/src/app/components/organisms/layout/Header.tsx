// import { Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";
import styles from "../../layout.module.css"
import PrimaryButton from "../../atoms/button/PrimaryButton";
import Link from "next/link";
import SecondaryButton from "../../atoms/button/SecondaryButton";


export const Header = memo(() => {
    return (
        <header className={styles.header}>
            <h1>
                <Link href="/" legacyBehavior>
                    <a>THEATER</a>
                </Link>
            </h1>
            <SecondaryButton>QR発行</SecondaryButton>
            <PrimaryButton>新規登録</PrimaryButton>
            <PrimaryButton>ログイン</PrimaryButton>
        </header>
        // <Flex as="nav" bg="white" color="black" align="center" justify="space-between">
        //     <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>THEATER</Heading>
        // </Flex>
    )
})