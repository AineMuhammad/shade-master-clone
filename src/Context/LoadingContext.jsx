import React, { createContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export default LoadingContext;

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = { isLoading, setIsLoading };

  return (
    <LoadingContext.Provider value={value}>
      {isLoading ? (
        <TailSpin
          visible={true}
          height="6vh"
          width="6vh"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            width: "6vh",
            height: "6vh",
            position: "absolute",
            zIndex: 10,
            left: "calc(50%-6vh)",
            top: "calc(50%-6vh)",
          }}
          wrapperClass=""
        />
      ) : (
        <>{children}</>
      )}
    </LoadingContext.Provider>
  );
};
