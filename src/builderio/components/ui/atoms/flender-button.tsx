type ButtonProps = {
  className?: string;
  type: ButtonType;
  label: string;
  image?: string;
  url?: string;
  onClick?: () => void;
}

type ButtonType = 'primary' | 'secondary';

export default function FlenderButton(props: ButtonProps) {
  return getButton(props);
}

function getButton(props: ButtonProps): JSX.Element {
  switch (props.type) {
    case 'primary':
      return createButton(props, 'bg-blue-500 text-white');
    case 'secondary':
      return createButton(props, 'bg-transparent rounded-3xl text-white border-2 border-white border-solid');
  }
}

function createButton(props: ButtonProps, classNames: string) {
  return (
    <button onClick={props.onClick} className={`flex flex-row gap-4 py-2 px-4 ${classNames}`}>
      <span>{props.label}</span>
      {props.image && <img className={'-mr-2'} src={props.image} alt={props.label} />}
    </button>
  );
}