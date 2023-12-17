import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue, Status } from "@prisma/client";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Table, Flex, Link, Button } from "@radix-ui/themes";
import NextLink from "next/link";
import React from "react";

const IssuesTable = ({ issues, searchParams }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.value}
              className={column.className}
            >
              <Flex gap="2">
                {column.value === searchParams.orderBy ? (
                  searchParams.orderDirection === "asc" ? (
                    <ArrowUpIcon />
                  ) : (
                    <ArrowDownIcon />
                  )
                ) : null}

                <NextLink
                  href={{
                    query: {
                      ...searchParams,
                      orderBy: column.value,
                      orderDirection:
                        column.value === searchParams.orderBy &&
                        searchParams.orderDirection === "asc"
                          ? "desc"
                          : "asc",
                    },
                  }}
                >
                  {column.label}
                </NextLink>
              </Flex>
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.assignedToUser?.name || "Unassigned"}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

const columns: {
  label: string;
  value: keyof IssueWithUser;
  className?: string;
}[] = [
  {
    label: "Issue",
    value: "title",
  },
  {
    label: "Status",
    value: "status",
    className: "hidden md:table-cell",
  },
  {
    label: "Created at",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
  {
    label: "Assigned to",
    value: "assignedToUser",
    className: "hidden md:table-cell",
  },
];

export const columnValue = columns.map((column) => column.value);

interface Props {
  issues: IssueWithUser[];
  searchParams: IssueSearchParams;
}

export interface IssueSearchParams {
  status: Status;
  orderBy: keyof IssueWithUser;
  orderDirection: "asc" | "desc";
  pageSize: string;
  page: string;
}

interface IssueWithUser extends Issue {
  assignedToUser: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    hashedPassword: string | null;
    image: string | null;
  } | null;
}

export default IssuesTable;
