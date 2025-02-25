'use client'

import { useRouter } from "next/navigation"

export default function Page () {
    const router = useRouter();

    return (
        <html>
            <body>
                <button type="button" onClick={() => router.push('/about')}>
                    About me
                </button>
                <h1>Initiating the development of my portfolio with Next.js</h1>
            </body>
        </html>
    ) 
}