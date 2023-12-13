import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const DeleteButton = ({ issueId }: { issueId: string }) => {
  return (
    <Button color="red">
      <TrashIcon />
      <Link href={`/issues/${issueId}/edit`}>Delete Issue</Link>
    </Button>
  );
};

export default DeleteButton;
