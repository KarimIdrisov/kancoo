import ContactForm from "@/components/contact/ContactForm"
import Map from "@/components/contact/Map"
import Contacts from "@/components/contact/Contacts"
import json_ru from "@/locales/contact/ru.json"
import jsonContactForm_ru from "@/locales/components/contact-form/ru.json"
import json_en from "@/locales/contact/en.json"
import jsonContactForm_en from "@/locales/components/contact-form/en.json"

export default async ({ params: { locale } }: { params: { locale: string } }) => {
  const locales: any = {
    ru: [ json_ru, jsonContactForm_ru ],
    en: [ json_en, jsonContactForm_en ]
  }

  return (
    <main className="contact">
      <div className="bg" />
      <Contacts json={locales[locale][0].contacts} />
      <Map />
      <ContactForm json={locales[locale][1]} locale={locale} />
    </main>
  )
}