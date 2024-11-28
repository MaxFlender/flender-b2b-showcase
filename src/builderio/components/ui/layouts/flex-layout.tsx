type FlexLayoutProps = {
  direction?: 'row' | 'column';
  className?: string;
  // gap: number;
  children: React.ReactNode;
}

export default function FlexLayout(props: FlexLayoutProps) {
  const directionCss = props.direction === undefined || props.direction === 'column'
    ? 'flex-col' : 'flex-row';
  return (
    <div className={`flex items-center gap-4 ${directionCss} ${props.className}`}>
      {props.children}
    </div>
  );
}