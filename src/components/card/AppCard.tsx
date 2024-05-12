import { FC, PropsWithChildren, useMemo } from "react";

interface Props {
  className?: string;
}

const AppCard: FC<Props & PropsWithChildren> = (props) => {
  const { children, className } = props;
  const cardClass = useMemo(() => {
    if (className) {
      return ["card", "px-4"].concat(className).join(" ");
    }

    return "card px-4";
  }, [className]);
  return <div className={cardClass}>{children}</div>;
};

export default AppCard;
