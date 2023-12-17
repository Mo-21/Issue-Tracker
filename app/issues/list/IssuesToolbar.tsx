import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssuesStatusFilter from "./IssuesStatusFilter";
import AssigneeFilter from "./AssigneeFilter";

const IssuesToolbar = () => {
  return (
    <Flex justify="between">
      <Flex gap="2">
        <IssuesStatusFilter />
        <AssigneeFilter />
      </Flex>
      <Button>
        <Link href="/issues/new">Create New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssuesToolbar;
