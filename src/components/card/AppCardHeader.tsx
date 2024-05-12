import { FC } from "react";

interface Props {
  author?: string;
  author_avatar?: string;
  posted_date?: string;
}

const AppCardHeader: FC<Props> = (props) => {
  const { author = "", author_avatar = "", posted_date = "" } = props;
  return (
    <div className="flex items-center flex-wrap gap-2 pt-2">
      <img
        className="rounded-full max-w-[20px] max-h-[20px] basis-[20px]"
        src={author_avatar}
        loading="lazy"
        alt="author_avatar"
      />
      <div className="text-[12px] text-[#F5805F] font-semibold">{author}</div>
      <div className="text-[12px] text-[#93ABBA] font-semibold">
        posted on : <span>{posted_date}</span>
      </div>
    </div>
  );
};

export default AppCardHeader;
