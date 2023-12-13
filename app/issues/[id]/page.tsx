import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import delay from "delay";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!issue) notFound();

  await delay(3000);

  return (
    <div>
      <Heading>{issue?.title}</Heading>
      <Flex gap="2" my="2">
        <IssueStatusBadge status={issue?.status!} />
        <p>{issue?.createdAt.toDateString()}</p>
      </Flex>
      <Card className="prose" my="4">
        <ReactMarkdown>{issue?.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
