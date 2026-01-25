export default function AboutSection() {
  const experiences = [
    { 
      role: "Journalist", 
      company: "This Is Life Magazine", 
      desc: "Editorial writing and mass communication." 
    },
    { 
      role: "Admin Assistant", 
      company: "Eastern Soda / Pepsi", 
      desc: "Administrative support and document management." 
    },
    { 
      role: "Accounting / Stock Taking", 
      company: "Pizza Inn", 
      desc: "Inventory control and financial record keeping." 
    },
  ];

  return (
    <section id="about" className="py-24 bg-color-bg-cream">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Bio Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary-dark mb-6 animate-fade-in-up">
              Meet the Lead.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="font-medium text-primary-dark border-l-4 border-accent-gold pl-4 italic">
                "Warm, polished personality with a detail-oriented approach."
              </p>
              <p>
                Grace is a proactive Public Relations Specialist and Admin Professional. With a background in Mass Communication, she combines storytelling skills with the discipline of corporate administration. 
              </p>
              <p>
                Her experience ranges from pitch-perfect journalism to managing financial records and HR policy. Whether crafting a press release or organizing complex executive schedules, she brings a calm, capable presence to every task.
              </p>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-sm font-bold mb-8 uppercase tracking-widest text-gray-500">
              Professional Timeline
            </h3>
            
            <div className="border-l-2 border-gray-200 ml-3 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 group">
                  {/* Dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-gray-300 group-hover:border-accent-gold transition-colors"></div>
                  
                  <h4 className="text-xl font-bold text-primary-dark">
                    {exp.role}
                  </h4>
                  <div className="text-sm text-accent-gold font-medium mb-1">{exp.company}</div>
                  <p className="text-gray-600 text-sm">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
