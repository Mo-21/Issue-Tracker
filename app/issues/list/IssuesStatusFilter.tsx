"use client";
import { Status } from "@prisma/client";
import { Select, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { handleValueChange } from "../services/handleFilterValueChange";

const IssuesStatusFilter = () => {
  const statuses: { label: string; value?: Status }[] = [
    { label: "All" },
    { label: "Open", value: "OPEN" },
    { label: "Closed", value: "CLOSED" },
    { label: "In Progress", value: "IN_PROGRESS" },
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  const onValueChange = (status: string) => {
    const paramsToAppend = {
      status,
      assignee: searchParams.get("assignee"),
      orderBy: searchParams.get("orderBy"),
    };

    handleValueChange({
      router,
      paramsToAppend,
    });
  };

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || "all"}
      onValueChange={onValueChange}
    >
      <Select.Trigger>
        <Text>Filter by status</Text>
      </Select.Trigger>
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.label} value={status.value || "all"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssuesStatusFilter;
