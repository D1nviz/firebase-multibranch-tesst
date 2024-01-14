import React from "react";

export default function UsersList() {
  return (
    <div className="my-5 w-[60%] flex h-[50px] bg-zinc-800 rounded-md py-2 px-4">
      <h3 className="text-2xl ">Viewers:</h3>
      <div className="px-5 flex items-center justify-center gap-3">
        <span>Andrew,  </span>
        <span>Dinviv, </span>
        <span>Andrew,  </span>
        <span>Dinviv, </span>
      </div>
    </div>
  );
}
