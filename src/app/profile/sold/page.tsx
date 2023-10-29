import RootLayout from "@/app/layout";
import ProductList from "@/components/product-list";

export default function Sold() {
  return (
    <RootLayout canGoBack title={true}>
      <ProductList />
    </RootLayout>
  );
}
