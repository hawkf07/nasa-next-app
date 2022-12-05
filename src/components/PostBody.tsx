import Image from "next/image";
import type { FC } from "react";
import type { NasaApi } from "../types";
import { dateFormatter } from "../utils/helpers/dateFormatter";
import ReactMarkdown from "react-markdown";

interface PostBody extends NasaApi.Datum {
  image: string;
}

const PostBody: FC<PostBody> = ({
  title,
  album,
  center,
  nasa_id,
  keywords,
  location,
  media_type,
  description,
  date_created,
  description_508,
  image,
}) => {
  return (
    <div className="container prose flex flex-col justify-center gap-3 p-5 dark:prose-invert lg:prose-lg">
      <header>
        <h1 className="text-center"> {title}</h1>
        <h2>{center}</h2>
      </header>
      <div>
        {media_type == "image" ? (
          <Image
            src={image}
            alt="placeholder post image"
            width={400}
            height={400}
            className="w-full"
          />
        ) : (
          <video src={""} />
        )}
      </div>
      <p>{nasa_id}</p>
      {/* <p>{description}</p> */}

      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      <p>
        Keyword:
        {keywords?.map((keyword) => (
          <>{keyword} </>
        ))}
      </p>
      <p>Date : {dateFormatter(date_created)}</p>
    </div>
  );
};

export { PostBody };
