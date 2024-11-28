import { EMPTY_STRING, PLACEHOLDER } from "../utils/consts";
import { ImageData } from "../utils/ui.model";

export type DynamicLinkProps = {
  url: string;
  text?: string;
  image?: ImageData;
}

export default function DynamicLink(props: DynamicLinkProps) {
  const hasLink = props.url !== EMPTY_STRING;
  const hasText = props.text !== EMPTY_STRING;

  return (
    <a
      title={hasText ? props.text : PLACEHOLDER}
      href={hasLink ? props.url : '#'}>{getImageOrText(props)}</a>
  );
}

function getImageOrText(props: DynamicLinkProps) {
  return props.image ? getImage(props.image.url, props.image.alt ?? PLACEHOLDER)
                        : <p>{props.text}</p>;
}

function getImage(url: string, alt: string) {
 return <img src={url} alt={alt} width={120} height={20}/>
}