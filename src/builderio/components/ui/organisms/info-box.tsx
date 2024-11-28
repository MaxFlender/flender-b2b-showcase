import CategoryTag from "../atoms/category-tag";


type InfoBoxProps = {
  title?: string;
  category?: string;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export default function InfoBox(props: InfoBoxProps) {
  return (
    <div className={`text-white ${props.className}`} style={{backgroundColor: '#003e6270'}}>
      {props.category && <CategoryTag category={props.category}/>}
      {props.title && <h2 className={`mt-8 text-3xl ${props.titleClassName}`}>{props.title}</h2>}
      <div className={'mt-8'}>
        {props.children}
      </div>
    </div>
  );
}