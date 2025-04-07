import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function WorkContainer({ children }: Props) {
  return <div className="min-h-screen w-full ">{children}</div>;
}
