"use client";
import Navi from "@/components/navi";
import useSWR from "swr";

export default function Sold() {
  const { data } = useSWR("/api/users/me/sales");
  console.log(data);
  return (
    <>
      <Navi title="판매목록" />
    </>
  );
}
