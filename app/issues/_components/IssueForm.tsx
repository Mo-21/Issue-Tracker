"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { issueSchema } from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";

type IssueFormType = z.infer<typeof issueSchema>;

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormType>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (issue) {
        await axios.patch(`/api/issues/${issue.id}`, data);
      } else {
        await axios.post("/api/issues", data);
      }
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError("Something went wrong");
      setIsSubmitting(false);
    }
  });

  return (
    <div className="space-y-4 max-w-xl">
      {error && (
        <Callout.Root className="mb-4" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            placeholder="Title"
            {...register("title")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {issue ? "Update Issue" : "Create Issue"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
