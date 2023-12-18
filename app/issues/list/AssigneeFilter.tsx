"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Select } from "@radix-ui/themes";
import React from "react";
import { useUsers } from "../services/useUsers";
import { useRouter, useSearchParams } from "next/navigation";
import { handleValueChange } from "../services/handleFilterValueChange";

const AssigneeFilter = () => {
  const { data: users, error, isLoading } = useUsers();

  const router = useRouter();
  const searchParams = useSearchParams();

  if (isLoading) return <Skeleton />;
  if (error) return null;

  const onValueChange = (assignee: string) => {
    const paramsToAppend = {
      assignee,
      status: searchParams.get("status"),
      orderBy: searchParams.get("orderBy"),
    };

    handleValueChange({
      router,
      paramsToAppend,
    });
  };

  return (
    <Select.Root onValueChange={onValueChange} defaultValue="all">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="all">All</Select.Item>
        {users?.map((user) => (
          <Select.Item key={user.id} value={user.id}>
            {user.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeFilter;
