import "./globals.css";
import Header from "@/components/common/Header";
import localFont from 'next/font/local'
import FontProvider from "@/app/FontProvider";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'DJ Utility',
    // description: '설명을 여기에 작성',
}

const gowunDodum = localFont({
    src: '../../public/fonts/GowunDodum.woff2',
    variable: '--font-gowun',
})

const maruBuri = localFont({
    src: '../../public/fonts/MaruBuri.woff2',
    variable: '--font-maru',
})

const omyuPretty = localFont({
    src: '../../public/fonts/OmyuPretty.woff2',
    variable: '--font-omyu',
})

const leeSeoyoon = localFont({
    src: '../../public/fonts/LeeSeoyoon.woff2',
    variable: '--font-lee',
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html
            lang="ko"
            className={`${gowunDodum.variable} ${maruBuri.variable} ${omyuPretty.variable} ${leeSeoyoon.variable}`}
        >
        <body>
        <head>
            <title>DJ Utility</title>
        </head>
        <FontProvider>
            <Header/>
            <div className="container mx-auto">
                <main className="p-4">{children}</main>
            </div>
        </FontProvider>
        </body>
        </html>
    );
}
