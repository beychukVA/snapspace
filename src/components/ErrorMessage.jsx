import React from "react";
import { Alert } from "@aws-amplify/ui-react";

export const ErrorMessage = ({ error }) => {
  return (
    <>
      {error ? (
        <div>
          <div className="text-light">
            {" "}
            <Alert variation="error">{error.message}</Alert>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
