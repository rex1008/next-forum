import React from "react";

export default async function TopicShowPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;

  return <div>话题{name}的列表</div>;
}
