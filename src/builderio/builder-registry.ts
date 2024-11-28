"use client";
import { builder, Builder } from "@builder.io/react";
import { Header } from "./components/ui/organisms/header/header";
import HeroBanner from "./components/ui/components/hero-banner";
import InfoBoxBlock from "./components/ui/components/info-box-block";
import InfoSection from "./components/ui/components/info-section";
import { Input } from "@builder.io/sdk";

builder.init(process.env.REACT_APP_BUILDER_API_KEY!);

const DYNAMIC_LINK_FIELDS: Input[] = [
  {
    name: "url",
    type: "string",
    defaultValue: "/",
  },
  {
    name: "text",
    type: "string",
  },
  {
    name: "imageUrl",
    type: "file",
  },
  {
    name: "imageAlt",
    type: "string",
  },
];

Builder.registerComponent(HeroBanner, {
  name: "HeroBanner",
  inputs: [
    {
      name: "category",
      type: "string",
    },
    {
      name: "imageUrl",
      type: "file",
    },
    {
      name: "infoAlignment",
      type: "string",
      enum: ["left", "right"],
    },
    {
      name: "mediaType",
      type: "string",
      enum: ["image", "video"],
      defaultValue: "image",
      required: true,
    },
    {
      name: "subtitle",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "url",
      type: "string",
    },
  ],
});

Builder.registerComponent(InfoSection, {
  name: "InfoSection",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "category",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "imageUrl",
      type: "file",
    },
    {
      name: "imagePosition",
      type: "string",
      enum: ["left", "right"],
      defaultValue: "right",
    },
    {
      name: "buttonUrls",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "string[]",
      },
    },
  ],
});

Builder.registerComponent(InfoBoxBlock, {
  name: "InfoBoxBlock",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "category",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "buttonLabel",
      type: "string",
    },
  ],
});

Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      name: "homeUrl",
      type: "object",
      subFields: DYNAMIC_LINK_FIELDS
    },
    {
      name: "linkGroups",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "links",
          type: "list",
          subFields: DYNAMIC_LINK_FIELDS
        }
        ]
    }
  ],
});


