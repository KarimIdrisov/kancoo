import Company from "@/components/about/Company"
import Firm from "@/components/about/Firm"
import Services from "@/components/about/Services"
import Opportunities from "@/components/about/Opportunities"
import Q_A from "@/components/about/Q_A"
import Sertificates from "@/components/about/Sertificates"
import json_ru from "@/locales/about/ru.json"
import jsonCompany_ru from "@/locales/components/company/ru.json"
import jsonOpportunities_ru from "@/locales/components/opportunities/ru.json"
import json_en from "@/locales/about/en.json"
import jsonCompany_en from "@/locales/components/company/en.json"
import jsonOpportunities_en from "@/locales/components/opportunities/en.json"

export default async ({ params: { locale } }: { params: { locale: string } }) => {
  const locales: any = {
    ru: [ json_ru, jsonCompany_ru, jsonOpportunities_ru ],
    en: [ json_en, jsonCompany_en, jsonOpportunities_en ]
  }

  return (
    <main className="about">
      <div className="bg" />
      <Company json={locales[locale][1]} />
      <Firm json={locales[locale][0].firm} />
      <Services json={locales[locale][0].services} />
      <Opportunities json={locales[locale][2]} />
      <Q_A json={locales[locale][0].q_a} />
      <Sertificates json={locales[locale][0].sertificates} />
    </main>
  )
}