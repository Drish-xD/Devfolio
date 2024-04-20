import { getPlaiceholder } from 'plaiceholder';

export const getBase64 = async (src: string) => {
  if (!src) {
    return '';
  }
  try {
    const res = await fetch(src, { cache: 'no-cache' });
    const buffer = await Buffer.from(await res.arrayBuffer());
    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  } catch (error: unknown) {
    if (error instanceof Error) return error.message;
    else if (error && typeof error === 'object' && 'message' in error)
      return error.message as string;
    else if (typeof error === 'string') return error;
    else return 'Unexpected error!';
  }
};
