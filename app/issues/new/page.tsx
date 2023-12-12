"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="space-y-4 max-w-xl">
      <TextField.Root>
        <TextField.Input placeholder="Title" required />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button color="green">
        Submit Issue
      </Button>
    </div>
  );
};

export default NewIssuePage;
