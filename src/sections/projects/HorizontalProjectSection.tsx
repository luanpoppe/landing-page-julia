export function HorizontalProjectSection({
  children,
  className,
}: React.PropsWithChildren & { className?: string }) {
  return (
    <div style={{ padding: "50px 0" }} className={className + " hidden"}>
      {children}
    </div>
  );
}
