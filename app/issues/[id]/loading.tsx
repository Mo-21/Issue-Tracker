import "react-loading-skeleton/dist/skeleton.css";
import {  Flex, Card, Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

const IssueDetailsLoading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="2" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="7rem" />
      </Flex>
      <Card className="prose" my="4">
        <Skeleton count={4} />
      </Card>
    </Box>
  );
};

export default IssueDetailsLoading;
