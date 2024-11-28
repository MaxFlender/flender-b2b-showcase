import { HorizontalAlignment } from "../utils/ui.model";

type ImageInfoBoxProps = {
  imageUrl: string;
  imagePosition?: HorizontalAlignment;
  children?: React.ReactNode;
  className?: string;
}

export default function ImageInfoBox(props: ImageInfoBoxProps) {
  const flexPosition = props.imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row';
  return (
    <div className={`container flex flex-wrap justify-around ${flexPosition} ${props.className}`}>
      <img
        className={"flex-1"}
        src={props.imageUrl!}
        alt={''}
        width={500}
        height={500}
        style={{
          objectFit: 'contain'
        }}/>
      <div className={"flex-1 flex items-center justify-center p-8"}>
        {props.children}
      </div>
    </div>
  );
}