export default function imageLoader({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality: number;
}) {
  const url = new URL(`${process.env.NEXT_PUBLIC_APP_URL}/_next/image/`);
  url.searchParams.set('url', src);
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', (quality || 75).toString());
  return url.href;
}
