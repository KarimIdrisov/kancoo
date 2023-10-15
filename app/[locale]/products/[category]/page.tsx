import Products from "@/components/products/Products"
import jsonEquipment_ru from "@/locales/products/equipment/ru.json"
import jsonMetalworking_ru from "@/locales/products/metalworking/ru.json"
import jsonPlasticMolding_ru from "@/locales/products/plastic-molding/ru.json"
import jsonPressForms_ru from "@/locales/products/press-forms/ru.json"
import jsonStamping_ru from "@/locales/products/stamping/ru.json"
import jsonContactForm_ru from "@/locales/components/contact-form/ru.json"
import jsonEquipment_en from "@/locales/products/equipment/en.json"
import jsonMetalworking_en from "@/locales/products/metalworking/en.json"
import jsonPlasticMolding_en from "@/locales/products/plastic-molding/en.json"
import jsonPressForms_en from "@/locales/products/press-forms/en.json"
import jsonStamping_en from "@/locales/products/stamping/en.json"
import jsonContactForm_en from "@/locales/components/contact-form/en.json"

export default async ({ params: { category, locale } }: { params: { category: string, locale: string } }) => {
  const locales: any = {
    ru: [ jsonEquipment_ru, jsonMetalworking_ru, jsonPlasticMolding_ru, jsonPressForms_ru, jsonStamping_ru, jsonContactForm_ru ],
    en: [ jsonEquipment_en, jsonMetalworking_en, jsonPlasticMolding_en, jsonPressForms_en, jsonStamping_en, jsonContactForm_en ]
  }
  const category_num =
    category === "equipment" ? 0 :
    category === "metalworking" ? 1 :
    category === "plastic-molding" ? 2 :
    category === "press-forms" ? 3 :
    category === "stamping" ? 4 : 5

  return (
    <main className="products">
      <div className="bg" />
      <Products json={locales[locale][category_num]} locale={locale} jsonContactForm={locales[locale][5]} />
    </main>
  )
}