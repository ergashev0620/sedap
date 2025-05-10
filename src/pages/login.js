import Head from "next/head"
import LoginCom from "@/components/pages/login/loginCom"
export default function login(){
    return (
        <>
          <Head>
            <title>Foods</title>
          </Head>
          <LoginCom/>
        </>
    )
}