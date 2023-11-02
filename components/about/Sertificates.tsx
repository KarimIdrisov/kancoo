import img_1 from "@/images/about/sertificates/1.png"
import img_2 from "@/images/about/sertificates/2.png"
import img_3 from "@/images/about/sertificates/3.png"
import img_4 from "@/images/about/sertificates/4.png"
import Image from "next/image"

export default ({ json }: { json: { [key: string]: string } }) => {
  return (
    <section className="sertificates wrapper">
      <div className="title" dangerouslySetInnerHTML={{ __html: json.title }} />
      <div className="grid">
        { [img_1, img_2, img_3, img_4].map(img => (
            <div className="img-cont">
              <Image src={img} alt="" placeholder="blur" />
            </div>
        )) }
      </div>
    </section>
  )
}