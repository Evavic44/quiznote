export default function FormField({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-zinc-100 rounded-2xl max-w-4xl mx-auto lg:p-12 p-6 mb-10 min-h-64">
      {children}
    </section>
  );
}