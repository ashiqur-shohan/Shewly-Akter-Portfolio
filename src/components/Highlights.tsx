

const Highlights = () => {
  const highlights = [
    {
      icon: '📊',
      title: 'Research & Analysis',
      description: 'Conducting comprehensive research and impact assessments for international development projects'
    },
    {
      icon: '⚖️',
      title: 'Gender Mainstreaming',
      description: 'Integrating gender equality and social inclusion across all project activities'
    },
    {
      icon: '📚',
      title: 'Knowledge Management',
      description: 'Creating effective knowledge systems and documentation strategies'
    },
    {
      icon: '📈',
      title: 'MEL Systems',
      description: 'Designing and implementing monitoring, evaluation, and learning frameworks'
    }
  ];

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-2xl md:text-[2.5rem] font-bold text-primary mb-8 md:mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-accent after:rounded">
          Areas of Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-8 bg-bg-light rounded-lg text-center transition-all duration-300 cursor-pointer hover:-translate-y-2.5 hover:shadow-xl hover:bg-white"
            >
              <div className="text-5xl mb-4">{highlight.icon}</div>
              <h3 className="text-primary mb-4 text-xl">{highlight.title}</h3>
              <p className="text-text-light leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
