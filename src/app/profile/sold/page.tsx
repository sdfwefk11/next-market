import RootLayout from "@/app/layout";
import ProductList from "@/components/product-list";

export default function Sold() {
  return (
    <RootLayout canGoBack>
      <ProductList>
        <div></div>
      </ProductList>
    </RootLayout>
  );
}
