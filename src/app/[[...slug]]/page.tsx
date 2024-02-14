export function generateStaticParams() {
  return ["home", "about", "career"].map((slug) => ({ slug: [slug] }));
}

export const dynamicParams = false;

export default function Page({ params }: any) {
  const { slug } = params;
  return <div>{slug}.</div>;
}
