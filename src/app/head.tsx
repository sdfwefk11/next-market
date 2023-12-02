interface HeadTitle {
  title: string;
}
export default function Head({ title }: HeadTitle) {
  return (
    <>
      <title>{title}</title>
    </>
  );
}
