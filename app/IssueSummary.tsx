import { Status } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

interface IssueStatusContainerProps {
  label: string;
  value: number;
  status: Status;
}

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ closed, inProgress, open }: Props) => {
  const issueStatusContainer: IssueStatusContainerProps[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="5">
      {issueStatusContainer.map((status) => (
        <Card key={status.label}>
          <Flex direction="column" gap="2">
            <Link href={`/issues/list?status=${status.status}`}>
              <Heading size="4">{status.label}</Heading>
            </Link>
            <Text>{status.value}</Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
