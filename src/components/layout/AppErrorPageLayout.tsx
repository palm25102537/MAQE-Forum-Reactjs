import { PropsWithChildren, FC } from "react";

const AppErrorPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-device">
      {children}
    </div>
  );
};

export default AppErrorPageLayout;
