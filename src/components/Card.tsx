import type { FC } from "react";
import { dateFormatter } from "../utils/helpers/dateFormatter";
export interface CardType extends React.HTMLAttributes<HTMLDivElement> {
  center: string;
  title: string;
  nasa_id: string;
  date_created: string;
  keywords: Array<string>;
  media_type: string;
  description: string;
  description_508: string;
  secondary_creator: string;
  index: number;
}
export const Card: FC<CardType> = ({
  center,
  date_created,
  description,
  keywords,
  media_type,
  title,
  nasa_id,
  index,
  ...rest
}) => {
  return (
    <div
      key={nasa_id}
      className="flex flex-col rounded border border-gray-600 p-3 hover:border-2"
      {...rest}
    >
      <article className="flex flex-col   place-items-center gap-3">
        <header className="relative p-1">
          <h1 className="">{title}</h1>
          <h1 className="">{index}</h1>
          <p>{center}</p>
        </header>
        <div className="flex flex-col place-items-center gap-3">
          <p>{dateFormatter(date_created)}</p>
          <a
            className="w-2/4 rounded bg-blue-600 py-1  px-3 "
            href={"something"}
          >
            Details
          </a>
        </div>
      </article>
    </div>
  );
};
