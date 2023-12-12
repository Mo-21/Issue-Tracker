import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <>
      <div>Welcome To Issues Page</div>
      <Button>
        <Link href="/issues/new">Create New Issue</Link>
      </Button>
    </>
  );
};

export default IssuesPage;
