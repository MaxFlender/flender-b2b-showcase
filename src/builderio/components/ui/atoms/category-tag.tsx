export default function CategoryTag(props: { category: string }) {
  return <span className={'text-white uppercase bg-blue-500 p-2 w-fit min-w-48'}>
          {props.category}
        </span>
}