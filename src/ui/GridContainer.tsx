import { ReactNode } from "react";

const GridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[repeat(4,70px)] grid-rows-[repeat(4,70px)] sm:grid-cols-[repeat(4,80px)] sm:grid-rows-[repeat(4,80px)] md:grid-cols-[repeat(4,100px)] md:grid-rows-[repeat(4,100px)] gap-3">
      {children}
    </div>
  );
};

export default GridContainer;
