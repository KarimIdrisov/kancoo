import Products from "@/components/products/Products"
import json_ru from "@/locales/products/ru.json"
import jsonContactForm_ru from "@/locales/components/contact-form/ru.json"
import json_en from "@/locales/products/en.json"
import jsonContactForm_en from "@/locales/components/contact-form/en.json"

export default async ({ params: { locale } }: { params: { locale: string } }) => {
  const locales: any = {
    ru: [ json_ru, jsonContactForm_ru ],
    en: [ json_en, jsonContactForm_en ]
  }

  return (
    <main className="products">
      <div className="bg" />
      <Products json={locales[locale][0]} locale={locale} jsonContactForm={locales[locale][1]} />
    </main>
  )
}