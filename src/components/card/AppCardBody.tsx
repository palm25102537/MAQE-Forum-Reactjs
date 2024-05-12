import { FC } from "react";

interface Props {
  img?: string;
  title?: string;
  body?: string;
}

const AppCardBody: FC<Props> = (props) => {
  const { img = "", title = "", body = "" } = props;
  return (
    <div className="pb-2 flex items-start gap-5 flex-wrap">
      <img
        className="w-full h-full max-w-[200px] max-h-[200px] basis-[200px]"
        src={img}
        loading="lazy"
        alt="post-image"
      />

      <section className="flex-1" id="post-detail">
        <h2 className="font-bold">{title}</h2>
        <p className="mt-2 font-normal">{body}</p>
      </section>
    </div>
  );
};

export default AppCardBody;
