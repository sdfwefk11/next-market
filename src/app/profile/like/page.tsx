import RootLayout from "@/app/layout";
import Item from "@/components/item";
import Navi from "@/components/navi";

export default function Like() {
  return (
    <>
      <Navi title="찜목록" />
      <Item key={1} />
    </>
  );
}
