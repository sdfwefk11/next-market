import RootLayout from "@/app/layout";
import Item from "@/components/item";

export default function Buy() {
  return (
    <RootLayout canGoBack title={true}>
      <Item key={1} />
    </RootLayout>
  );
}
