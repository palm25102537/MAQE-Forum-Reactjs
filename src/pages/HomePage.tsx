import { useEffect, useMemo, useState } from "react";
import authorService from "../service/authors";
import postService from "../service/posts";
import { Author, Post } from "../types";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import AppCard from "../components/card/AppCard";
import AppCardHeader from "../components/card/AppCardHeader";
import AppCardBody from "../components/card/AppCardBody";
import dayjs from "dayjs";

const HomePage = () => {
  const [timeZone, setTimeZone] = useState(
    new Intl.DateTimeFormat().resolvedOptions().timeZone.toString()
  );

  const [allAuthors, setAllAuthors] = useState<Author[]>([]);

  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const renderPosts = useMemo(() => {
    const authorsById = allAuthors.map((item: Author) => {
      return { id: item.id, name: item.name, avatar: item.avatar_url };
    });

    const mappedPost = allPosts.map((ele: Post) => {
      const author = authorsById.find(
        (item: { id: number; name: string; avatar: string }) =>
          item.id === ele.author_id
      );

      return { ...ele, author: author?.name, author_avatar: author?.avatar };
    });

    return mappedPost;
  }, [allAuthors, allPosts]);

  useEffect(() => {
    setIsLoading(true);
    setTimeZone(() =>
      new Intl.DateTimeFormat().resolvedOptions().timeZone.toString()
    );

    Promise.all([authorService.getAuthors, postService.getPosts])
      .then(([authors, posts]) => {
        setAllAuthors(authors as Author[]);
        setAllPosts(posts as Post[]);
      })
      .catch(() => navigate("/error"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Spin
      spinning={isLoading}
      tip="Loading..."
      className="flex items-center justify-center min-h-device bg-[#eeee]"
    >
      <div className="container sm:mx-auto my-4">
        <header className="mx-2 sm:mx-0">
          <h1 className="font-bold text-[24px]">MAQE Forum</h1>
          <p className="mt-2 text-[14px] font-normal">
            Your current timezone is: <span>{timeZone}</span>
          </p>
        </header>
        {renderPosts.map((post, idx) => {
          return (
            <AppCard
              className={idx === renderPosts.length - 1 ? "mb-[200px]" : ""}
            >
              <AppCardHeader
                author={post?.author}
                author_avatar={post?.author_avatar}
                posted_date={dayjs(post?.created_at).format(
                  "dddd, MMMM DD, YYYY, HH:mm"
                )}
              />
              <hr className="-mx-4 my-2 text-[#C3DFF0]" />
              <AppCardBody
                img={post?.image_url}
                title={post?.title}
                body={post?.body}
              />
            </AppCard>
          );
        })}
      </div>
    </Spin>
  );
};

export default HomePage;
