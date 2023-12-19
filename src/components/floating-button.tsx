import Link from "next/link";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link scroll={false} href={href}>
      <button className="fixed bottom-24 right-5 bg-orange-500 rounded-full p-4 text-white shadow-xl hover:bg-orange-600 cursor-pointer transition-colors">
        {children}
      </button>
    </Link>
  );
}
