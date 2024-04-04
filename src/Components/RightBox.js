import React from "react";
import { Form } from "./Form";

export const RightBox = () => {
  return (
    <div className="w-[50vw] min-h-screen flex items-center justify-end bg-slate-100">
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="flex justify-end">
          <Form />
        </div>
      </div>
    </div>
  );
};
