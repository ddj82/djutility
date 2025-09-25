import "./globals.css";
import Header from "@/components/common/Header";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ko">
            <body>
                <Header/>
                <div className="container mx-auto">
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
