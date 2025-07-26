import { Input } from "@nextui-org/react";
import React from "react";
import * as actions from "@/actions";

export default function SsearchInput() {
  return (
    <div className="w-[190px] rounded-2xl flex justify-center items-center bg-gradient-to-tr from-purple-200 to-white text-white">
      <form action={actions.search}>
        <Input
          name="pnameorcon"
          isClearable
          classNames={{
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "!bg-default-200/50",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "cursor-text!",
            ],
          }}
          placeholder="Type to search..."
          radius="lg"
        />
      </form>
    </div>
  );
}
