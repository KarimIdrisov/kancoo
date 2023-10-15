import Link from "next/link"
import ArrowRightMobileSVG from "@/images/buttons/arrow-right-mobile.svg"
import ArrowRightSVG from "@/images/buttons/arrow-right.svg"
import Image from "next/image"
import StampPNG from "@/images/home/hero/stamp.png"

export default ({ json, locale }: { json: {[key: string]: string}, locale: string }) => {
  return (
    <section className="hero">
      <div className="bg-images">
        <Image src={StampPNG} alt="" width={1320} placeholder="blur" />
        <Image src={StampPNG} alt="" width={1320} placeholder="blur" />
        <Image src={StampPNG} alt="" width={1236} placeholder="blur" />
      </div>

      <div className="wrapper">
        <h1>
          <span>
            Dalian Kancoo Die&nbsp;
            <span className="mobile">& </span>
          </span>
          <span>
            <span className="desktop">& </span>
            Mould Technology
          </span>
        </h1>
        <div className="cont">
          <p>{ json.subtitle }</p>
          <Link href={`${locale}/products`} className="btn">
            { json.forward }
            <Image src={ArrowRightMobileSVG} alt="" />
            <Image src={ArrowRightSVG} alt="" />
          </Link>
        </div>
      </div>
    </section>
  )
}