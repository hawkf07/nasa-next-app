import clsx from "clsx";
import type { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { HTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";

export interface Search {
  value: string;
  setClearInputValue: () => void;
  inputIsFocus: boolean;
  setInputIsFocus: (val: boolean) => void;
  setInputValue: (val: ChangeEvent<HTMLInputElement>) => void;
}

interface ClearButton {
  setClearInputValue: () => void;
}
export const SearchInput: FC<Search> = ({
  value,
  setInputValue,
  setClearInputValue,
  inputIsFocus,
  setInputIsFocus,
}) => {
  return (
    <div
      className={clsx(
        "w-full rounded-xl border border-gray-600 dark:bg-gray-600/75 dark:text-gray-200 md:w-9/12",
        inputIsFocus ? "border-2 border-primary" : null
      )}
    >
      <div className="flex w-full items-center justify-evenly ">
        <div className="flex flex-col items-center rounded p-2 text-gray-400">
          <Icon icon={"fa:search"} />
        </div>
        <input
          placeholder="search something awesome!"
          className="w-full rounded-md   bg-transparent py-2 px-2  focus:outline-none"
          value={value}
          onChange={(e) => setInputValue(e)}
          onFocus={() => setInputIsFocus(true)}
          onBlur={() => setInputIsFocus(false)}
        />
        <ClearButton setClearInputValue={setClearInputValue} />
      </div>
    </div>
  );
};

const ClearButton: FC<ClearButton> = ({ setClearInputValue }) => {
  return (
    <button
      className={clsx("mx-1 p-2 px-3 text-gray-600 dark:text-gray-200")}
      onClick={() => setClearInputValue()}
      type="button"
    >
      <Icon icon={"fa6-solid:xmark"} />
    </button>
  );
};

const SearchIcon: FC = ({ }) => {
  return (
    <button
      type="button"
      className=" rounded-xl bg-gray-300 p-2 text-2xl text-gray-500 dark:bg-gray-700"
    >
      <Icon icon={"fa:search"} />
    </button>
  );
};
