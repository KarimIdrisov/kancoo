import { Metadata } from "next"
import "@/app/style/style.css"
import { Montserrat } from "next/font/google"
import Header from "@/components/header/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'KANCOO',
  description: "Надежный завод пресс-форм и штампов в Китае"
}

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export default ({ children, params: {locale} }: { children: React.ReactNode, params: {locale: string} }) => {
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <Header locale={locale} />
        { children }
        <Footer />
      </body>
    </html>
  )
}