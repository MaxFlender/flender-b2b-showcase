'use client';

import React, { useState } from "react";
import DynamicLink, { DynamicLinkProps } from "../../atoms/dynamic-link";
import { ImageData } from "../../utils/ui.model";
import { EMPTY_STRING, PLACEHOLDER } from "../../utils/consts";

export type HeaderProps = {
  homeUrl?: DynamicLinkProps;
  linkGroups?: LinkGroup[];
  className?: string;
}

type LinkGroup = {
  name: string;
  description?: string;
  image?: ImageData;
  links: DynamicLinkProps[];
}

export function Header(props: HeaderProps) {
  const toggleVisibility = (index: number) => {
    setVisibleItems(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle the visibility of the specific item
      return newState;
    });
  };

  const groupCount = props.linkGroups?.length || 0;
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(groupCount).fill(false));

  return <header className={`fixed text-white w-full h-16 xl:px-64 z-30 ${props.className}`}>
    <div className={'bg-black flex flex-row justify-around items-center uppercase h-full w-full'}>
      {
        props.homeUrl?.url && <DynamicLink {...props.homeUrl}/>
      }
      {
        props.linkGroups?.map((linkGroup, index) => {
          return (
            <div key={index}>
              <h2 onClick={() => toggleVisibility(index)}>{linkGroup.name}</h2>
              {
                visibleItems[index] && renderLinkGroup(linkGroup)
              }
            </div>)
        })
      }
    </div>
  </header>
}

function renderLinkGroup(linkGroup: LinkGroup) {
  return <div className="bg-blue-700 fixed top-16 left-0 right-0 bottom-0 flex flex-row flex-wrap xl:mx-64">
    <div className="flex flex-col flex-wrap flex-1 flex-[25%] flex-grow-0">
      <img src={linkGroup.image?.url ?? EMPTY_STRING}
             alt={linkGroup.image?.alt ?? PLACEHOLDER}
             height={0}
             width={0}
             sizes="100vw"
             style={{width: '100%', height: 'auto'}}
             />
      <p>
        {linkGroup.description}
      </p>
    </div>
    <div className="flex-4">
      {
        linkGroup.links?.map((link, index) => {
          return <div key={index}>
            <DynamicLink {...link}/>
          </div>
        })
      }
    </div>
  </div>;
}