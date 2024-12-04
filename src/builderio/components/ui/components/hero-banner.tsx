import { FleHeroBanner } from 'builderio/stencil-components/react/components'
import { HorizontalAlignment, MediaType } from "../utils/ui.model";

type HeroBannerProps = {
  category?: string;
  title?: string;
  subtitle?: string;
  url?: string;
  mediaType: MediaType;
  infoAlignment?: HorizontalAlignment;
  imagePath?: string;
  className?: string;
}

export default function HeroBanner(props: HeroBannerProps) {
  // const infoAlignment = props.infoAlignment === undefined || props.infoAlignment === "left"
  //   ? 'lg:left-[15%]' : 'lg:right-[15%]';
  return (
    <FleHeroBanner title={props.title} description={props.subtitle} category={props.category} />
    // <div className={`relative ${props.className}`}>
    //   {renderMedia(props.imagePath, props.mediaType)}
    //   <div className={`w-full flex justify-center items-center overflow-hidden`}>
    //     <InfoBoxBlock className={`absolute top-1/2 -translate-y-1/2 max-w-xl p-12 ${infoAlignment}`} title={props.title} description={props.subtitle} category={props.category}></InfoBoxBlock>
    //   </div>
    // </div>
  );
}

function renderMedia(mediaPath: string | undefined, mediaType: MediaType) {
  if (mediaPath === undefined) {
    return <></>;
  }

  if (mediaType === 'video') {
    return <video autoPlay muted loop playsInline style={{
      height: '100dvh',
      width: '100%',
      objectFit: 'cover',
      zIndex: -10
    }}>
      <source src={mediaPath} type="video/mp4"/>
      <source src={mediaPath} type="video/webm"/>
      <source src={mediaPath} type="video/ogg"/>
    </video>
  }

  if (mediaType === 'image') {
    return <img src={mediaPath}
                  alt={'Image'}
                  width={1920}
                  height={1080}
                  style={{
                    height: '100dvh',
                    width: '100%',
                    objectFit: 'cover',
                    zIndex: -10
                  }}/>;
  }
}
