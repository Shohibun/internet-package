import React from "react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center custom-bg-error">
      <div className="text-center text-white">
        <h1 className="text-9xl">404</h1>
        <h1 className="text-3xl mt-2">Sorry, The Page Not Found</h1>
        <p className="text-base">
          The link you followed probably broken or the page has been removed.
        </p>
      </div>
    </div>
  );
}
