import { prisma } from "@/prisma/client";
import Pagination from "@/app/components/Pagination";
import { Status } from "@prisma/client";
import IssuesTable, { IssueSearchParams, columnValue } from "./IssuesTable";
import IssuesToolbar from "./IssuesToolbar";
import { Flex } from "@radix-ui/themes";

interface IssuesPageProps {
  searchParams: IssueSearchParams;
}

const IssuesPage = async ({ searchParams }: IssuesPageProps) => {
  const status = Object.values(Status).includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnValue.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const itemCount = await prisma.issue.count({
    where: {
      status,
    },
  });

  return (
    <Flex direction="column" gap="2">
      <IssuesToolbar />
      <IssuesTable issues={issues} searchParams={searchParams} />
      <Pagination
        currentPage={page}
        itemCount={itemCount}
        pageSize={pageSize}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
