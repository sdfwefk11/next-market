"use client";
import Loading from "@/components/loading";
import useUser from "@/libs/client/useUser";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();
  return (
    <>
      {!user ? (
        <div className="fixed w-full h-full max-w-xl flex justify-center backdrop-blur-sm items-center top-0 z-50">
          <Loading />
        </div>
      ) : null}
      <div>{children}</div>
    </>
  );
}
