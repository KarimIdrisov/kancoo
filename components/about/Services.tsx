export default ({ json }: { json: { [key: string]: string | string[] } }) => {
  return (
    <section className="services wrapper">
      <div className="title">{ json.title }</div>
      <p className="description">{ json.description }</p>
      <div className="cards">
        { typeof json.cards === "object" && json.cards.map((p, i) => (
          <div className={`card card-${i}`}>
            <p>{ p }</p>
          </div>
        )) }
      </div>
    </section>
  )
}