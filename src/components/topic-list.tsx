import { prisma } from "@/prisma";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const ListBoxWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-[260px] p-3 rounded-small border-2 mt-4 gap-3">
      {children}
    </div>
  );
};

export default async function TopicList() {
  const topics = await prisma.topic.findMany();
  return (
    <ListBoxWrapper>
      {topics.map((topic) => {
        return (
          <Chip key={topic.id} variant="shadow" color="default">
            <Link href={`/topics/${topic.name}`}>{topic.name}</Link>
          </Chip>
        );
      })}
    </ListBoxWrapper>
  );
}
