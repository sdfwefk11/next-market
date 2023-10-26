import FloatingButton from "@/components/floating-button";
import ProductList from "@/components/product-list";
import Link from "next/link";
import RootLayout from "./layout";

export default function Product() {
  return (
    <RootLayout hasTabBar title="홈">
      <Link href="/product/detail/1">
        <ProductList />
      </Link>
      <FloatingButton href="/product/upload">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </FloatingButton>
    </RootLayout>
  );
}
