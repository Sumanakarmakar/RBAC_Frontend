import React from "react";
import { RotatingTriangles } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <>
      <div className="loader_custom">
        <RotatingTriangles
          visible={true}
          height="30vh"
          width="30vh"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
};

export default PageLoader;
