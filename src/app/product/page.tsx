import FloatingButton from "@/components/floating-button";
import ProductList from "@/components/product-list";
import RootLayout from "../layout";

export default function Product() {
  return (
    <RootLayout title="Home" hasTabBar>
      <ProductList>
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
      </ProductList>
    </RootLayout>
  );
}
