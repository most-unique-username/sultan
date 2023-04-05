interface ListProps<T> {
  list: T[];
  renderItem: (item: T) => React.ReactNode;
  title?: React.ReactElement | React.ReactNode;
}

export function List<T>(props: ListProps<T>) {
  return (
    <>
      {props.title}
      {props.list.map(props.renderItem)}
    </>
  );
}