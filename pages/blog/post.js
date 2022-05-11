import Link from "next/dist/client/link"
import  Head from "next/head"

export default function Post() {
    return <div>
         <Head>
            <title>Korhan</title>
        </Head>
        <h3>Post Page</h3>
        <Link href="/">
            Geri Dön
        </Link>
    </div>
}