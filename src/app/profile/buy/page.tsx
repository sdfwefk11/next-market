import RootLayout from "@/app/layout";
import Item from "@/components/item";
import Navi from "@/components/navi";

export default function Buy() {
  return (
    <>
      <Navi title="구매목록" />
      <Item key={1} />
    </>
  );
}
