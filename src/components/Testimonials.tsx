

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Shewly's dedication to gender equality and social inclusion is truly inspiring. Her research work has significantly contributed to our project's impact on vulnerable communities.",
      author: "Dr. Sarah Martinez",
      position: "Program Director, International Development Agency",
      avatar: "DS"
    },
    {
      quote: "Working with Shewly on knowledge management systems has been exceptional. Her ability to design and implement comprehensive MEL frameworks is unmatched.",
      author: "Rajesh Kumar",
      position: "Senior Consultant, Global Development Institute",
      avatar: "RK"
    },
    {
      quote: "Shewly brings a unique combination of analytical rigor and cultural sensitivity to her work. Her baseline surveys and impact assessments have been invaluable to our programs.",
      author: "Dr. Mohammed Ali",
      position: "Research Lead, Social Development Foundation",
      avatar: "MA"
    }
  ];

  return (
    <section className="px-5 pb-20 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[2.5rem] font-bold text-primary mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-accent after:rounded">
          What Colleagues Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-bg-light p-10 rounded-2xl shadow-md transition-all duration-300 relative border-t-4 border-primary hover:-translate-y-2.5 hover:shadow-xl hover:bg-white"
            >
              <div className="text-6xl text-primary opacity-20 leading-[0] absolute top-5 right-8 font-serif">
                "
              </div>
              <p className="text-text-light leading-relaxed mb-8 text-[1.05rem] italic relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-text-dark font-bold mb-1 text-lg">{testimonial.author}</h4>
                  <p className="text-text-light text-sm leading-snug">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
