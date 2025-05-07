import { ReactNode } from "react";

import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner } from '@/styles/components/ScrollAreaComp';

export function ScrollAreaComp({ children }: { children: ReactNode }) {
  return (
    <ScrollAreaRoot>
      <ScrollAreaViewport>
        {children}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
}