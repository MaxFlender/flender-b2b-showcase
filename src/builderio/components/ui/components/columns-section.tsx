import { Alignment } from "../utils/ui.model";
import { BuilderBlocks } from "@builder.io/react";

type ColumnsSectionProps = {
  alignment: Alignment;
  className?: string;
}

export default function ColumnsSection(props: any) {
  console.log('ASD', props)
  const alignment = props.alignment === 'horizontal' ? 'flex-row' : 'flex-col';
  return <div className={`flex ${alignment} items-center ${props.className}`}>
    {
      props.columns &&
      props.columns.map((col: any, index: number) =>
        <BuilderBlocks
          key={index}
          child
          parentElementId={props.builderBlock && props.builderBlock.id}
          blocks={col.blocks}
          dataPath={`component.options.columns.${index}.blocks`}
        />
      )
    }
  </div>;
}