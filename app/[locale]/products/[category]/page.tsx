import Products from "@/components/products/Products"

export default async ({ params: { category, locale } }: { params: { category: string, locale: string } }) => {
  return (
    <main className="products">
      <div className="bg" />
      <Products category={category} locale={locale} />
    </main>
  )
}