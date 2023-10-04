export default function NavBar({ title }: any) {
  return (
    <div className="bg-white text-lg font-medium py-4 fixed text-gray-700 border-b border-l border-r top-0 flex items-center justify-center w-full max-w-xl mx-auto">
      {title}
    </div>
  );
}
