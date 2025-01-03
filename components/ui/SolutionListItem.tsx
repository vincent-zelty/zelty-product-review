export const SolutionListItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <li className="flex flex-col gap-2">{children}</li>;
};
