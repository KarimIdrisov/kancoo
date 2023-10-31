import Link from "next/link"
import StampingIMG from "@/images/home/products/stamping.jpeg"
import PressFormsIMG from "@/images/home/products/press-forms.png"
import MetalworkingIMG from "@/images/home/products/metalworking.jpeg"
import EquipmentIMG from "@/images/home/products/equipment.png"
import ArrowRightMobileSVG from "@/images/home/products/arrow-right-mobile.svg"
import ArrowRightSVG from "@/images/home/products/arrow-right.svg"
import Image from "next/image"
import jsonProductsList_ru from "@/locales/components/products-list/ru.json"
import jsonProductsList_en from "@/locales/components/products-list/en.json"

export default async ({ json, locale }: { json: {[key: string]: string}, locale: string }) => {
  const locales: any = {
    ru: jsonProductsList_ru,
    en: jsonProductsList_en
  }

  const categories = ["stamping", "pressForms", "metalworking", "equipment"]
  const URLs = ["stamping", "press-forms", "metalworking", "equipment"]
  const images = [StampingIMG, PressFormsIMG, MetalworkingIMG, EquipmentIMG]

  return (
    <section className="products wrapper">
      <h1 className="title">{ json.title }</h1>
      <p>{ json.about }</p>
      <div className="carousel">
        { URLs.map((url, i) => (
          <Link className="card" href={`${locale}/products/${url}`}>
            <Image src={images[i]} alt="" placeholder="blur" />
            <div className="cont">
              <span>{ locales[locale][categories[i]] }</span>
              <Image src={ArrowRightMobileSVG} alt="" />
              <Image src={ArrowRightSVG} alt="" />
            </div>
          </Link>
        )) }
      </div>
    </section>
  )
}