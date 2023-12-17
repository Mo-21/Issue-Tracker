"use client";
import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const StatusSelect = ({ issue }: { issue: Issue }) => {
  const onValueChange = (status: string) => {
    axios
      .patch("/api/issues/" + issue.id, {
        status,
      })
      .catch(() => {
        toast.error("Failed to assign ticket");
      });
  };

  return (
    <>
      <Select.Root defaultValue={issue.status} onValueChange={onValueChange}>
        <Select.Trigger variant="soft" />
        <Select.Content>
          <Select.Item value="OPEN">Open</Select.Item>
          <Select.Item value="CLOSED">Closed</Select.Item>
          <Select.Item value="IN_PROGRESS">In Progress</Select.Item>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default StatusSelect;
