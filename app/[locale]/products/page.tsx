import Products from "@/components/products/Products"

export default async ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <main className="products">
      <div className="bg" />
      <Products locale={locale} />
    </main>
  )
}