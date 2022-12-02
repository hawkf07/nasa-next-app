import clsx from "clsx";
import type { FC, FormHTMLAttributes, ReactNode } from "react";
import { HTMLAttributes } from "react";

interface Form extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
export const Form: FC<Form> = ({ children }) => {
  return (
    <form
      className={clsx("container flex flex-col gap-3 lg:place-items-center")}
      onSubmit={async (e) => {
        submitHandler(e);
        await fetchNasaApi(inputValue);
      }}
    >
      {children}
    </form>
  );
};
