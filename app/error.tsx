import { Callout } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

const ErrorPage = ({ children }: PropsWithChildren) => {
  return (
    <Callout.Root color="red">
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  );
};

export default ErrorPage;
