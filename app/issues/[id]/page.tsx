import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div>
      <Heading>{issue?.title}</Heading>
      <Flex gap="2" my="2">
        <IssueStatusBadge status={issue?.status!} />
        <p>{issue?.createdAt.toDateString()}</p>
      </Flex>
      <Card>
        <p>{issue?.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
