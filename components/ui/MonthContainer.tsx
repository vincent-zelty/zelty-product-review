export const MonthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-20">
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
};
