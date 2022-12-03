import clsx from "clsx";
import { useRouter } from "next/router";
import type { FC, FormHTMLAttributes, ReactNode } from "react";
import { HTMLAttributes } from "react";
import { useSearchStore } from "../store/SearchStore";

interface Form extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
export const Form: FC<Form> = ({ children }) => {
  const router = useRouter();
  const { inputValue } = useSearchStore();
  return (
    <form
      className={clsx("container flex flex-col gap-3 lg:place-items-center")}
      onSubmit={async (e) => {
        e.preventDefault();
        router.push("/search?q=" + inputValue);
      }}
    >
      {children}
    </form>
  );
};
