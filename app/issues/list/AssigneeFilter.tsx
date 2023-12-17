"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Select } from "@radix-ui/themes";
import React from "react";
import { useUsers } from "../services/useUsers";
import { useRouter, useSearchParams } from "next/navigation";

const AssigneeFilter = () => {
  const { data: users, error, isLoading } = useUsers();

  const router = useRouter();
  const searchParams = useSearchParams();

  if (isLoading) return <Skeleton />;
  if (error) return null;

  const onValueChange = (value: string) => {
    const params = new URLSearchParams();
    if (value) params.append("assignee", value);
    if (searchParams.get("status"))
      params.append("status", searchParams.get("status")!);
    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    const query = params.size ? "?" + params.toString() : "all";
    router.push(`/issues/list/${query}`);
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
