import RootLayout from "@/app/layout";
import Item from "@/components/item";
import Navi from "@/components/navi";

export default function Sold() {
  return (
    <>
      <Navi title="판매목록" />
      <Item key={1} />
    </>
  );
}
