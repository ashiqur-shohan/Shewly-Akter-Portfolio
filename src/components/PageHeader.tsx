interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white px-5 pt-[120px] pb-[60px] text-center">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-5xl mb-4">{title}</h1>
        <p className="text-xl opacity-90">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
