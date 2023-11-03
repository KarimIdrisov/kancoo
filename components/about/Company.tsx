import Image from "next/image"
import CompanyIMG from "@/images/about/company/company.jpeg"

export default ({ json }: { json: {[key: string]: string} }) => {
  return (
    <section className="company wrapper">
      <h1 className="title">{ json.title }</h1>
      <div className="grid">
        <div className="cont">
          <p className="p1" dangerouslySetInnerHTML={{ __html: json.p1 }} />
          <video src="/video.mp4" controls />
        </div>
        <div className="cont">
          <p className="p2" dangerouslySetInnerHTML={{ __html: json.p2 }} />
          <Image src={CompanyIMG} alt="" placeholder="blur" />
          <p dangerouslySetInnerHTML={{ __html: json.p3 }} />
        </div>
      </div>
    </section>
  )
}