import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

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

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
      <Box>
        <Heading>{issue?.title}</Heading>
        <Flex gap="2" my="2">
          <IssueStatusBadge status={issue?.status!} />
          <p>{issue?.createdAt.toDateString()}</p>
        </Flex>
        <Card className="prose" my="4">
          <ReactMarkdown>{issue?.description}</ReactMarkdown>
        </Card>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
