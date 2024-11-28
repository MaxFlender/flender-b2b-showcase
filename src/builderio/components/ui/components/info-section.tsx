import ImageInfoBox from "../organisms/image-info-box";
import InfoBoxBlock from "../components/info-box-block";
import { HorizontalAlignment } from "../utils/ui.model";

type InfoSectionProps = {
  title?: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  imagePosition?: HorizontalAlignment;
  buttonUrls?: string[];
};

export default function InfoSection(props: InfoSectionProps) {
  return (
    <ImageInfoBox className="my-8" imageUrl={props.imageUrl!} imagePosition={props.imagePosition ?? 'right'}>
      <InfoBoxBlock title={props.title} category={props.category} description={props.description}></InfoBoxBlock>
    </ImageInfoBox>
  );
}