import { builder } from "@builder.io/react";

export function getBuilder() {
  return builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
}
