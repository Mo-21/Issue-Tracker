"use client";
import { Select } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign Ticket" />
      <Select.Content>
        <Select.Group>
          <Select.Item value="1">John Doe</Select.Item>
          <Select.Item value="2">Jane Doe</Select.Item>
          <Select.Item value="3">John Smith</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
