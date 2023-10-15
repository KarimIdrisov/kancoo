import img_1 from "@/images/about/sertificates/1.png"
import img_2 from "@/images/about/sertificates/2.png"
import img_3 from "@/images/about/sertificates/3.png"
import Image from "next/image"

export default ({ json }: { json: { [key: string]: string } }) => {
  return (
    <section className="sertificates wrapper">
      <div className="title" dangerouslySetInnerHTML={{ __html: json.title }} />
      <div className="grid">
          <div className="img-cont">
            <Image src={img_1} alt="" placeholder="blur" />
          </div>
          <div className="img-cont">
            <Image src={img_2} alt="" placeholder="blur" />
          </div>
          <div className="img-cont">
            <Image src={img_3} alt="" placeholder="blur" />
          </div>
      </div>
    </section>
  )
}