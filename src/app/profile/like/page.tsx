import RootLayout from "@/app/layout";
import ProductList from "@/components/item";

export default function Like() {
  return (
    <RootLayout canGoBack title={true}>
      <ProductList />
    </RootLayout>
  );
}
