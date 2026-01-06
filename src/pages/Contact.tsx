import { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setFormMessage({
        type: 'success',
        text: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Hide message after 5 seconds
      setTimeout(() => {
        setFormMessage({ type: '', text: '' });
      }, 5000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Let's collaborate on creating meaningful social impact"
      />

      <section className="px-5 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 mt-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-primary font-bold text-xl md:text-2xl mb-6 md:mb-8">Contact Information</h2>

              <div className="flex gap-4 md:gap-6 mb-4 p-4 md:p-6 bg-bg-light rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-1">
                <div className="text-2xl md:text-3xl min-w-[40px] md:min-w-[50px]">📧</div>
                <div>
                  <h3 className="text-secondary font-bold mb-2 text-base md:text-lg">Email</h3>
                  <a href="mailto:shewlyakter@gmail.com" className="text-primary hover:text-secondary transition-colors">
                    shewlyakter@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6 mb-4 p-4 md:p-6 bg-bg-light rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-1">
                <div className="text-2xl md:text-3xl min-w-[40px] md:min-w-[50px]">📱</div>
                <div>
                  <h3 className="text-secondary font-bold mb-2 text-base md:text-lg">Phone</h3>
                  <a href="tel:+880-16-16750597" className="text-primary hover:text-secondary transition-colors">
                    +880-16-16750597
                  </a>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6 mb-4 p-4 md:p-6 bg-bg-light rounded-lg transition-all duration-300 hover:shadow-md hover:translate-x-1">
                <div className="text-2xl md:text-3xl min-w-[40px] md:min-w-[50px]">📍</div>
                <div>
                  <h3 className="text-secondary font-bold mb-2 text-base md:text-lg">Location</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=House+13%2F13%2C+Road+2%2C+Shyamoli%2C+Dhaka-1207%2C+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors cursor-pointer inline-block"
                  >
                    <p className="leading-relaxed">
                      House 13/13, Road 2,<br />
                      Shyamoli, Dhaka-1207<br />
                      Bangladesh
                    </p>
                  </a>
                </div>
              </div>

              {/* References */}
              <div className="mt-6 md:mt-8 p-6 md:p-8 bg-bg-light rounded-lg">
                <h3 className="text-primary font-bold mb-4 md:mb-6 text-base text-xl md:text-2xl">Professional References</h3>

                <div className="mb-6 pb-6 border-b border-gray-300">
                  <h4 className="text-secondary font-bold mb-1">Madhab Chandra Das</h4>
                  <p className="text-text-light text-sm mb-1">Virginia Tech / Country Program Manager</p>
                  <a href="mailto:madhabcd@vt.edu" className="text-primary text-sm hover:underline">
                    madhabcd@vt.edu
                  </a>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-300">
                  <h4 className="text-secondary font-bold mb-1">Saqif Nayeem Khan</h4>
                  <p className="text-text-light text-sm mb-1">MarketShare Associates / Advisor, Inclusive Markets</p>
                  <a href="mailto:skhan@marketshareassociates.com" className="text-primary text-sm hover:underline">
                    skhan@marketshareassociates.com
                  </a>
                </div>

                <div>
                  <h4 className="text-secondary font-bold mb-1">M Murshed Haider</h4>
                  <p className="text-text-light text-sm mb-1">World Bank / Infrastructure Finance and PPP Consultant</p>
                  <a href="mailto:mhaider6@worldbank.org" className="text-primary text-sm hover:underline">
                    mhaider6@worldbank.org
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-primary font-bold text-xl md:text-2xl mb-6 md:mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="bg-bg-light p-6 md:p-8 rounded-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-text-dark font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded font-inherit text-base transition-colors focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-text-dark font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded font-inherit text-base transition-colors focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-text-dark font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded font-inherit text-base transition-colors focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-dark font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded font-inherit text-base transition-colors resize-y focus:outline-none focus:border-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 rounded bg-primary text-white font-semibold hover:bg-secondary hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </button>
              </form>

              {formMessage.text && (
                <div className={`mt-4 p-4 rounded ${formMessage.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                  {formMessage.text}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
