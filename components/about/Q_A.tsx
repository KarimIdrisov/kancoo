export default ({ json }: { json: { [key: string]: string }[] }) => {
  return (
    <section className="q-a wrapper">
      <div className="title">Q&A</div>
      <div className="q-a-list">
        { json.map(item => (
          <div className="item">
            <div className="question">{ item.question }</div>
            <div className="answer" dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        )) }
      </div>
    </section>
  )
}