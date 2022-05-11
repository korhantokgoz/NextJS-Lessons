import Link from "next/link"
import  Head  from "next/head"


export default function About() {
    return <>
        <Head>
            <title>Korhan Tokgöz</title>
        </Head>
        <h3>About Page</h3>
        <Link href="/">
            Geri Dön
        </Link>
        <style jsx>{`
        h3 {
            font-size: 20px;
            font-weight: 500;
            color: orangared;
        }
        `}

        </style>
    </>
}