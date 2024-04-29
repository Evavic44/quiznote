type ContainerType = {
  className?: string;
  children?: React.ReactNode;
};

export default function Container({ className, children }: ContainerType) {
  return (
    <section
      className={`max-w-7xl mx-auto flex flex-col items-center lg:p-8 p-6 mb-16 ${className}`}
    >
      {children}
    </section>
  );
}
