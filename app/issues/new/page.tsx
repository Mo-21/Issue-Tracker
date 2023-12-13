import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";

const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  ),
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
