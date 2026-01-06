
import PageHeader from '../components/PageHeader';

const About = () => {
  const skills = [
    { name: 'Research & Analysis', percentage: 95 },
    { name: 'Gender Mainstreaming', percentage: 90 },
    { name: 'Monitoring, Evaluation & Learning', percentage: 92 },
    { name: 'Knowledge Management', percentage: 88 },
    { name: 'Communication & Coordination', percentage: 90 },
    { name: 'Professional Graphic Design', percentage: 85 },
  ];

  return (
    <>
      <PageHeader
        title="About Me"
        subtitle="Dedicated to advancing gender equality and social development"
      />

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold text-3xl mb-6">Professional Background</h2>
              <p className="text-text-light mb-6 leading-relaxed text-lg">
                I am a dedicated Gender Equality & Social Inclusion Specialist with over 13 years of experience
                in international development, research, and knowledge management. My work focuses on integrating
                gender analysis, implementing MEL systems, and creating sustainable social impact through
                evidence-based interventions.
              </p>
              <p className="text-text-light leading-relaxed text-lg">
                Throughout my career, I have collaborated with prestigious organizations including Virginia Tech,
                USDA Forest Service, Plan International, and the World Bank, contributing to projects that empower
                vulnerable communities and promote inclusive development practices.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/about_profile.jpg"
                alt="Profile Picture"
                className="w-[350px] h-[450px] rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-5 bg-bg-light">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[2.5rem] font-bold text-primary mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-accent after:rounded">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 border-l-4 border-primary hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm mb-4">
                2010 - 2011
              </div>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-secondary mb-2">Master of Social Science</h3>
                  <p className="text-text-dark font-semibold mb-1">Jahangirnagar University</p>
                  <p className="text-text-light mb-2">Department of Anthropology</p>
                  <p className="text-accent font-semibold">CGPA: 3.10 out of 4.0</p>
                </div>
                <img src="/ju.png" alt="Jahangirnagar University" className="w-full max-w-[200px] object-cover ml-3" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 border-l-4 border-primary hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm mb-4">
                2006 - 2010
              </div>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-secondary mb-2">Bachelor of Social Science</h3>
                  <p className="text-text-dark font-semibold mb-1">Jahangirnagar University</p>
                  <p className="text-text-light mb-2">Department of Anthropology</p>
                  <p className="text-accent font-semibold">CGPA: 3.36 out of 4.0</p>
                </div>
                <img src="/ju.png" alt="Jahangirnagar University" className="w-full max-w-[200px] object-cover ml-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[2.5rem] font-bold text-primary mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-accent after:rounded">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-bg-light p-6 rounded-lg transition-all duration-300 hover:translate-x-2.5 hover:shadow-md"
              >
                <div className="flex justify-between mb-4 font-semibold">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-300 rounded overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded animate-fillBar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="py-20 px-5 bg-bg-light">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[2.5rem] font-bold text-primary mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-accent after:rounded">
            Professional Training
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-5xl mb-4">
                <img src="/bmp.png" alt="BMP" className="inline-block max-w-[250px]" />
              </div>
              <h3 className="text-primary font-bold mb-4">Gender, Empowerment of Women and Development</h3>
              <p className="text-text-dark font-semibold mb-2">Bangladesh Mahila Parishad</p>
              <p className="text-text-light text-sm">Duration: 3 months | Year: 2022</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-5xl mb-4">
                <img src="/cii.png" alt="CII" className="inline-block max-w-[250px]" />
              </div>
              <h3 className="text-primary font-bold mb-4">Professional Graphic Design</h3>
              <p className="text-text-dark font-semibold mb-2">Creative IT Institute</p>
              <p className="text-text-light text-sm">Duration: 6 months | Year: 2021</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
