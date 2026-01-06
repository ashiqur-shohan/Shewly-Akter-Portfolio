import { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const experiences = [
    {
      date: 'Jan 2024 - May 2025',
      title: 'Gender Equality & Social Inclusion Specialist',
      company: 'Virginia Tech',
      project: 'Feed the Future Bangladesh Integrated Pest Management Activity',
      logo: '/vt.svg',
      details: [
        'Implementing GESI Analysis for the Feed the Future Bangladesh IPM Activity',
        'Overseeing the GESI Action Plan and integrating gender equality in all activities',
        'Developing capacity-building programs for stakeholders',
        'Documenting successful strategies and best practices',
        'Collaborating on MEL and CLA tools for inclusive project implementation'
      ]
    },
    {
      date: 'Jan 2022 - Jul 2023',
      title: 'MEL and Gender Coordinator',
      company: 'U.S. Department of Agriculture Forest Service',
      project: 'Community Partnerships to Strengthen Sustainable Development Program',
      logo: '/usfs.png',
      details: [
        'Coordinating MEL system implementation across project activities',
        'Integrating gender analysis and promoting gender sensitivity',
        'Maintaining linkages with the Compass team',
        'Providing technical assistance to implementing partners',
        'Contributing to work plans and reports',
        'Conducting assessments and designing training on gender and diversity issues',
        'Identifying areas for improvement in existing policies and implementation activities'
      ]
    },
    {
      date: 'Sep 2020 - Jul 2021',
      title: 'Knowledge Management and Gender Expert',
      company: 'International Development Enterprises',
      project: 'Sanitation Market Systems in Bangladesh (SanMarkS) II',
      logo: '/ide.jpeg',
      details: [
        'Creating and implementing yearly communications and knowledge management strategy',
        'Collaborating with Technical Specialists and Field teams to reach vulnerable communities',
        'Managing documentation and internal communication',
        'Establishing a comprehensive documentation system',
        'Integrating a "learning agenda" into the project',
        'Motivating and supporting field teams'
      ]
    },
    {
      date: 'Mar 2019 - Sep 2020',
      title: 'Research and Knowledge Management Specialist',
      company: 'Plan International Bangladesh',
      project: 'South Asia Wash Results Programme II',
      logo: '/plan.png',
      details: [
        'Contributing to administration and surveillance of longitudinal surveys',
        'Identifying potential research opportunities',
        'Managing the project\'s knowledge base',
        'Establishing learning systems',
        'Facilitating review and submission of documentation and reports',
        'Preparing assessment plans, tools, and relevant documentation',
        'Supporting implementation and monitoring of BCC action plans'
      ]
    },
    {
      date: 'Oct 2018 - Feb 2019',
      title: 'SWIA Coordinator',
      company: 'Bangladesh Institute of Labor Studies',
      project: 'Sustainable Oceans Project',
      logo: '/bils.png',
      details: [
        'Conducting Sector Wide Impact Assessment',
        'Performing comprehensive literature reviews',
        'Coordinating workshops with stakeholders',
        'Training data collectors',
        'Overseeing data collection processes',
        'Sorting and cleaning data',
        'Creating initial findings and reports'
      ]
    },
    {
      date: 'Apr 2016 - Apr 2018',
      title: 'Research Associate',
      company: 'Helen Keller International',
      project: 'Bangladesh Aquaculture and Horticulture Nutrition Research',
      logo: '/hki.png',
      details: [
        'Conducting literature reviews',
        'Monitoring data collectors\' training and data collection process',
        'Overseeing data entry and quality control',
        'Assisting in data management',
        'Providing field supervision',
        'Preparing VAT exemption reports',
        'Managing travel and field expenses',
        'Organizing program-related files and documents'
      ]
    },
    {
      date: 'Apr 2015 - Mar 2016',
      title: 'Research Associate',
      company: 'International Center for Research on Women',
      project: 'Generation Breakthrough Project',
      logo: '/icrw.png',
      details: [
        'Assisting in training investigators',
        'Providing on-ground guidance for data collection',
        'Coordinating with other field monitors',
        'Updating ICRW and UNFPA teams on progress',
        'Training project team and teachers on GEMS curriculum',
        'Conducting school visits and discussions with principals and teachers',
        'Observing sessions and campaigns',
        'Liaising between implementation partners',
        'Providing support in data analysis and report writing'
      ]
    },
    {
      date: 'Oct 2011 - Oct 2014',
      title: 'Research Officer',
      company: 'International Center for Diarrheal Disease Research, Bangladesh',
      project: 'Hand-hygiene Intervention in Public Hospital',
      logo: '/icddrb.png',
      details: [
        'Collecting, validating, and maintaining high-quality data through observation, interviews, and discussions',
        'Resolving field issues',
        'Communicating with the Principal Investigator/Co-Principal Investigator',
        'Transcribing and coding data',
        'Preparing comprehensive reports'
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Professional Experience" 
        subtitle="A journey through impactful international development projects" 
      />

      <section className="py-20 px-5 bg-bg-light">
        <div className="max-w-[900px] mx-auto relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-primary"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16 mb-12">
              {/* Timeline dot */}
              <div className="absolute left-3 top-0 w-5 h-5 bg-accent border-4 border-white rounded-full shadow-md z-10"></div>

              {/* Content card */}
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-x-1">
                <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm mb-4">
                  {exp.date}
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-secondary font-bold mb-2 text-2xl">{exp.title}</h3>
                    <p className="text-text-dark font-semibold mb-1">{exp.company}</p>
                    <p className="text-text-light italic mb-4">{exp.project}</p>
                  </div>
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    className="w-full max-w-[200px] object-contain ml-4"
                  />
                </div>

                <button 
                  onClick={() => toggleExpand(index)}
                  className="bg-primary text-white border-none px-5 py-2 rounded cursor-pointer font-semibold transition-all duration-300 mt-4 hover:bg-secondary"
                >
                  {expandedItems.includes(index) ? 'Read Less' : 'Read More'}
                </button>

                {/* Expandable details */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedItems.includes(index) ? 'max-h-[1000px] mt-4' : 'max-h-0'
                  }`}
                >
                  <ul className="list-none pl-0">
                    {exp.details.map((detail, idx) => (
                      <li 
                        key={idx}
                        className="py-2 pl-6 relative text-text-light before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
