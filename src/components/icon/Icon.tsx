type iconTypeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Icon({ children, className }: iconTypeProps) {
  return <div className={`${className}`}>{children}</div>;
}
