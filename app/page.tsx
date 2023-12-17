import Image from "next/image";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import { prisma } from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  const inProgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });

  const props = {
    open,
    closed,
    inProgress,
  };

  return (
    <Grid columns={{ initial: "1", md: "2", xl: "2" }} gap="5">
      <Flex justify="center" direction="column" gap="5">
        <IssueSummary props={props} />
        <IssueChart props={props} />
      </Flex>
      <Flex justify="end">
        <LatestIssues />
      </Flex>
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "The dashboard for the issue tracker",
};
