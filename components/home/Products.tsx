import Link from "next/link"
import StampingIMG from "@/images/home/products/stamping.jpeg"
import PressFormsIMG from "@/images/home/products/press-forms.png"
import MetalworkingIMG from "@/images/home/products/metalworking.jpeg"
import EquipmentIMG from "@/images/home/products/equipment.png"
import PlasticMoldingIMG from "@/images/home/products/plastic-molding.jpeg"
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

  return (
    <section className="products wrapper">
      <h1 className="title">{ json.title }</h1>
      <p>{ json.about }</p>
      <div className="carousel">
        <Link className="card" href={`${locale}/products/stamping`}>
          <Image src={StampingIMG} alt="" placeholder="blur" />
          <div className="cont">
            <span>{ locales[locale].stamping }</span>
            <Image src={ArrowRightMobileSVG} alt="" />
            <Image src={ArrowRightSVG} alt="" />
          </div>
        </Link>
        <Link className="card" href={`${locale}/products/press-forms`}>
          <Image src={PressFormsIMG} alt="" placeholder="blur" />
          <div className="cont">
            <span>{ locales[locale].pressForms }</span>
            <Image src={ArrowRightMobileSVG} alt="" />
            <Image src={ArrowRightSVG} alt="" />
          </div>
        </Link>
        <Link className="card" href={`${locale}/products/metalworking`}>
          <Image src={MetalworkingIMG} alt="" placeholder="blur" />
          <div className="cont">
            <span>{ locales[locale].metalworking }</span>
            <Image src={ArrowRightMobileSVG} alt="" />
            <Image src={ArrowRightSVG} alt="" />
          </div>
        </Link>
        <Link className="card" href={`${locale}/products/equipment`}>
          <Image src={EquipmentIMG} alt="" placeholder="blur" />
          <div className="cont">
            <span>{ locales[locale].equipment }</span>
            <Image src={ArrowRightMobileSVG} alt="" />
            <Image src={ArrowRightSVG} alt="" />
          </div>
        </Link>
        <Link className="card" href={`${locale}/products/plastic-molding`}>
          <Image src={PlasticMoldingIMG} alt="" placeholder="blur" />
          <div className="cont">
            <span>{ locales[locale].plasticMolding }</span>
            <Image src={ArrowRightMobileSVG} alt="" />
            <Image src={ArrowRightSVG} alt="" />
          </div>
        </Link>
      </div>
    </section>
  )
}