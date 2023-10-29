interface BottomTabBar {
  children: React.ReactNode;
  title: string;
  path: string;
}

export default function BottomTabBar({ children, title, path }: BottomTabBar) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <span className="text-xs font-bold mt-1 text-gray-800">{title}</span>
    </div>
  );
}
