"use client";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
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

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  return (
    <Flex gap="2" align="center" justify="center">
      <Button
        onClick={() => {
          changePage(1);
        }}
        variant="outline"
        disabled={currentPage === 1}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        onClick={() => {
          changePage(currentPage - 1);
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
          changePage(currentPage + 1);
        }}
        variant="solid"
        disabled={currentPage === pageCount}
      >
        <ArrowRightIcon />
      </Button>
      <Button
        onClick={() => {
          changePage(pageCount);
        }}
        variant="outline"
        disabled={currentPage === pageCount}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
