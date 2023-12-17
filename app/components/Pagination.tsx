"use client";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Select, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  itemCount: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({ itemCount, currentPage, pageSize }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const updateParam = (page: number, pageSize: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageSize", pageSize);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex gap="2" align="center" justify="center">
      <Button
        onClick={() => {
          updateParam(1, pageSize.toString());
        }}
        variant="outline"
        disabled={currentPage === 1}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        onClick={() => {
          updateParam(currentPage - 1, pageSize.toString());
        }}
        variant="solid"
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon />
      </Button>
      <Text>
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        onClick={() => {
          updateParam(currentPage + 1, pageSize.toString());
        }}
        variant="solid"
        disabled={currentPage === pageCount}
      >
        <ArrowRightIcon />
      </Button>
      <Button
        onClick={() => {
          updateParam(pageCount, pageSize.toString());
        }}
        variant="outline"
        disabled={currentPage === pageCount}
      >
        <DoubleArrowRightIcon />
      </Button>
      <Select.Root
        defaultValue="10"
        onValueChange={(value) => {
          updateParam(currentPage, value);
        }}
      >
        <Select.Trigger variant="soft" />
        <Select.Content>
          <Select.Item value="100">All</Select.Item>
          <Select.Item value="10">10</Select.Item>
          <Select.Item value="20">20</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default Pagination;
