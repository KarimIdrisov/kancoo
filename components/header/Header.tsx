import Link from "next/link"
import Nav from "./Nav"
import Languages from "./Languages"
import Logo from "@/images/logo.png"
import Image from "next/image"
import jsonHeader_ru from "@/locales/components/header/ru.json"
import jsonProducts_ru from "@/locales/components/products-list/ru.json"
import jsonHeader_en from "@/locales/components/header/en.json"
import jsonProducts_en from "@/locales/components/products-list/en.json"

export default async ({ locale }: { locale: string }) => {
  const locales: any = {
    ru: [ jsonHeader_ru, jsonProducts_ru ],
    en: [ jsonHeader_en, jsonProducts_en ]
  }

  return (
    <header className="wrapper">
      <Link href={`/${locale}`} className="logo">
        <Image src={Logo} alt="" width={70} />
      </Link>
      <Nav json={locales[locale][0].links} locale={locale} products={locales[locale][1]} />
      <Languages json={locales[locale][0].lang} />
    </header>
  )
}