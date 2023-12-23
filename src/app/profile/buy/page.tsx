"use client";
import Item from "@/components/item";
import Navi from "@/components/navi";
import useSWR from "swr";

export default function Buy() {
  const { data } = useSWR("/api/users/me/purchases");
  return (
    <>
      <Navi title="구매목록" />
      <Item key={1} />
    </>
  );
}
