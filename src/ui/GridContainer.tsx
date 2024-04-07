import { ReactNode } from "react";

const GridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[repeat(4,100px)] grid-rows-[repeat(4,100px)] gap-3">
      {children}
    </div>
  );
};

export default GridContainer;
