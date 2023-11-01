import Hero from "@/components/home/Hero"
import Products from "@/components/home/Products"
import Company from "@/components/about/Company"
import Opportunities from "@/components/about/Opportunities"
import Benefits from "@/components/home/Benefits"
import ContactForm from "@/components/contact/ContactForm"
import json_ru from "@/locales/home/ru.json"
import jsonCompany_ru from "@/locales/components/company/ru.json"
import jsonOpportunities_ru from "@/locales/components/opportunities/ru.json"
import json_en from "@/locales/home/en.json"
import jsonCompany_en from "@/locales/components/company/en.json"
import jsonOpportunities_en from "@/locales/components/opportunities/en.json"

export default async ({ params: { locale } }: { params: { locale: string } }) => {
  const locales: any = {
    ru: [ json_ru, jsonCompany_ru, jsonOpportunities_ru ],
    en: [ json_en, jsonCompany_en, jsonOpportunities_en ]
  }

  return (
    <main className="home">
      <div className="bg" />
      <Hero json={locales[locale][0].hero} locale={locale} />
      <Products json={locales[locale][0].products} locale={locale} />
      <Company json={locales[locale][1]} />
      <Opportunities json={locales[locale][2]} />
      <Benefits json={locales[locale][0].benefits} />
      <ContactForm locale={locale} />
    </main>
  )
}