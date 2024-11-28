import InfoBox from "../organisms/info-box";
import FlenderButton from "../atoms/flender-button";
import FlexLayout from "../layouts/flex-layout";

type InfoBoxBlockProps = {
  title?: string;
  category?: string;
  description?: string;
  buttonLabel?: string;
  className?: string;
}

export default function InfoBoxBlock(props: InfoBoxBlockProps) {
  return <div className={`flex justify-center items-center overflow-hidden`}>
    <InfoBox className={`p-8 ${props.className}`} title={props.title} category={props.category}>
      <p>
        {props.description}
      </p>
      <FlexLayout className="my-16" direction="row">
        <FlenderButton type={'secondary'} label={'Mehr erfahren'} image={'ui/icons/arrow-right.svg'}></FlenderButton>
      </FlexLayout>
    </InfoBox>
  </div>
}