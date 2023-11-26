"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useUser() {
  const { data, error } = useSwr("/api/users/me", fetcher);
  const router = useRouter();
  const [user, setUser] = useState();
  /* useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter");
        }
        setUser(data.profile);
      });
  }, [router]);
  return user; */
}
