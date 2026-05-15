interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function LandingContainer({
  children,
  className = "",
}: Props) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>
      {children}
    </div>
  );
}