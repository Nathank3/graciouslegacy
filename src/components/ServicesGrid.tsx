import { FileText, Calendar, MessageCircle, Monitor, Palette, Briefcase } from "lucide-react";

export default function ServicesGrid() {
  const directServices = [
    { 
      icon: FileText, 
      title: "Corporate Writing", 
      desc: "Press releases, blog posts, and newsletters tailored to your voice." 
    },
    { 
      icon: Calendar, 
      title: "Virtual Assistance", 
      desc: "Calendar management, HR documentation, and employee supervision." 
    },
    { 
      icon: MessageCircle, 
      title: "PR & Customer Success", 
      desc: "Handling client relations and conflict resolution with a polished touch." 
    },
  ];

  const managedServices = [
    { 
      icon: Monitor, 
      title: "Web Design & Development", 
      desc: "Custom responsive websites built for conversion." 
    },
    { 
      icon: Palette, 
      title: "Graphic Design", 
      desc: "Brand identity, logos, and marketing collateral." 
    },
    { 
      icon: Briefcase, 
      title: "CV Revamp", 
      desc: "Professional resume design and content optimization." 
    },
  ];

  const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="group p-8 bg-white border border-gray-100 rounded-xl hover:border-accent-gold/50 hover:shadow-lg transition-all duration-300 h-full">
      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-gold/10 transition-colors">
        <Icon size={24} className="text-gray-600 group-hover:text-accent-gold transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary-dark font-serif">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark mb-4">Service Offerings</h2>
          <p className="text-gray-600">
            A hybrid approach combining my direct expertise with high-quality creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Direct Services */}
          <div className="flex flex-col h-full">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-lg font-serif font-bold text-primary-dark uppercase tracking-wide border-b-2 border-accent-gold pb-1">
                Direct Specialist Services
              </h3>
            </div>
            <div className="grid sm:grid-cols-1 gap-6 flex-1">
              {directServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Column 2: Managed Services */}
          <div className="flex flex-col h-full">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-lg font-serif font-bold text-primary-dark uppercase tracking-wide border-b-2 border-gray-200 pb-1">
                Managed Creative Solutions
              </h3>
            </div>
            <div className="grid sm:grid-cols-1 gap-6">
              {managedServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
