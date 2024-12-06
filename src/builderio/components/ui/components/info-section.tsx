import ImageInfoBox from '../organisms/image-info-box'
import InfoBoxBlock from '../components/info-box-block'
import { HorizontalAlignment } from '../utils/ui.model'
import { FleImageInfoTile } from '../../../stencil-components/react/components'

type InfoSectionProps = {
  title?: string
  category?: string
  description?: string
  imageUrl?: string
  imagePosition?: HorizontalAlignment
  buttonUrls?: string[]
}

export default function InfoSection(props: InfoSectionProps) {
  const imageUrl = props.imageUrl + '?.jpg'; // hacky cause builder io media url has no indication what it is image or video
  return (
    <FleImageInfoTile
      headline={props.title}
      category={props.category}
      description={props.description}
      mediaUrl={imageUrl}
      imagePosition={props.imagePosition as HorizontalAlignment}
    />
    // <ImageInfoBox className="my-8" imageUrl={props.imageUrl!} imagePosition={props.imagePosition ?? 'right'}>
    //   <InfoBoxBlock title={props.title} category={props.category} description={props.description}></InfoBoxBlock>
    // </ImageInfoBox>
  )
}
