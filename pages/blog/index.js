import Link from "next/link"
import  Head from "next/head"

export default function Home() {
    return <div>
         <Head>
            <title>Tokgöz</title>
        </Head>
        <h3>Blog Page</h3>
        <Link href="/">
            Geri Dön
        </Link>
        <style jsx>{`
        h3 {
            font-size: 20px;
            font-weight: 500;
            color: orangered;
        }
        `}

        </style>

    </div>
}