import { fetchTopics } from "@/prisma/queries/topic";
import { Badge, Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const ListBoxWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-[260px] p-3 rounded-small border-2 mt-4 gap-3 dark:border-purple-600">
      {children}
    </div>
  );
};

export default async function TopicList() {
  const topics = await fetchTopics()
  return (
    <ListBoxWrapper>
      {topics.map((topic) => {
        return (
          <Badge key={topic.id} color="secondary" content={topic._count.posts} shape="circle" size="sm">
            <Chip variant="shadow" color="default">
              <Link href={`/topics/${topic.name}`}>{topic.name}</Link>
            </Chip>
          </Badge>
        );
      })}
    </ListBoxWrapper>
  );
}
