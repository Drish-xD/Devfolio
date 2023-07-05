import dynamic from 'next/dynamic';

export function nextImport(module: string) {
  return dynamic(
    () => import('@components').then((mod: any) => mod[module]) as Promise<React.FC<any>>
  );
}
