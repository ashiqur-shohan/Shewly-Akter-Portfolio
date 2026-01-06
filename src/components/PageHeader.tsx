interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white px-5 pt-[100px] md:pt-[120px] pb-[40px] md:pb-[60px] text-center">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{title}</h1>
        <p className="text-base md:text-lg lg:text-xl opacity-90">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
