import { z } from "zod";

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: "OPEN" | "CLOSED" | "IN_PROGRESS";
  createdAt: string;
  updatedAt: string;
}

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is Required").max(255),
  description: z.string().min(1, "Description is Required").max(2000),
});
