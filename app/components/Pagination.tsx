import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  itemCount: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({ itemCount, currentPage, pageSize }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  return (
    <Flex gap="2" align="center">
      <Text>
        Page {currentPage} of {pageCount}
      </Text>
      <Button variant="outline" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button variant="solid" disabled={currentPage === 1}>
        <ArrowLeftIcon />
      </Button>
      <Button variant="solid" disabled={currentPage === pageCount}>
        <ArrowRightIcon />
      </Button>
      <Button variant="outline" disabled={currentPage === pageCount}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
