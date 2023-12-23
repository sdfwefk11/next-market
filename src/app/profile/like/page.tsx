"use client";
import Item from "@/components/item";
import Navi from "@/components/navi";
import useSWR from "swr";

export default function Like() {
  const { data } = useSWR("/api/users/me/favs");
  console.log(data);
  return (
    <>
      <Navi title="찜목록" />
      <Item />
    </>
  );
}
