import React, {useState} from "react";

export default function WelcomeDialog() {
  const [active, setActive] = useState(true);

  return (
    active && (
      <div className="absolute z-50 w-screen h-screen flex justify-center items-center backdrop-blur-sm bg-zinc-400/50">
        <form className="w-[350px] bg-zinc-800 rounded-md p-4">
          <h3 className="text-3xl py-4 text-center text-zinc-100 font-semibold">
            Welcome
          </h3>
          <div className="flex flex-col items-center">
            <label className="text-zinc-100 flex flex-col">
              Write your name for continue
              <input
                type="text"
                className="w-[300px] py-2 px-3 rounded-md my-2 text-black"
              />
            </label>
            <button
              onClick={() => setActive(false)}
              type="submit"
              className="my-[15px] bg-white text-zinc-950 h-10 px-4 py-2 hover:bg-white/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {" "}
              Continue{" "}
            </button>
          </div>
        </form>
      </div>
    ) 
  );
}
