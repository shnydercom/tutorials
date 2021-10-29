export const SorterCell = ({
  isSorted,
  isSortedDesc,
  children,
  ...handDown
}: React.PropsWithChildren<{
  isSorted: boolean;
  isSortedDesc: boolean;
}>): JSX.Element => {
  return (
    <td {...handDown}>
      {children}
      <span>{isSorted ? (isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
    </td>
  );
};
