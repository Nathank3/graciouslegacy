import { Download, ArrowUpRight } from "lucide-react";

export default function PortfolioSection() {
  const caseStudies = [
    {
      tag: "Content Writing",
      headline: "Revitalizing Magazine Readership",
      description: "Pitched and executed complex editorial projects, driving engagement through compelling storytelling and research.",
      result: "Published consistently for 5 years at 'This Is Life' Magazine.",
      colorClass: "bg-blue-50 text-blue-700 border-blue-100" // Simple accent for tag
    },
    {
      tag: "Administration",
      headline: "Policy Management & Conflict Resolution",
      description: "Managed sensitive documentation for employment tribunals and streamlined HR filing systems.",
      result: "Supported the HR department at a major distributor (Pepsi/Eastern Soda).",
      colorClass: "bg-purple-50 text-purple-700 border-purple-100"
    },
    {
      tag: "Management",
      headline: "High-Volume Inventory Management",
      description: "Led stock-taking initiatives and supervised staff in a fast-paced retail environment.",
      result: "Ensured financial accuracy and operational efficiency at Pizza Inn.",
      colorClass: "bg-emerald-50 text-emerald-700 border-emerald-100"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark mb-4">Proven Impact</h2>
          <p className="text-gray-600">
            Real-world case studies demonstrating versatility and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl border border-gray-100 p-8 hover:shadow-xl hover:border-accent-gold/30 transition-all duration-300 flex flex-col items-start"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-6 ${study.colorClass}`}>
                {study.tag}
              </span>
              
              <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-accent-gold transition-colors">
                {study.headline}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {study.description}
              </p>
              
              <div className="w-full pt-6 border-t border-gray-100 mt-auto">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Key Result</p>
                <div className="flex items-start gap-2">
                  <ArrowUpRight size={18} className="text-accent-gold flex-shrink-0 mt-0.5" />
                  <p className="text-primary-dark font-medium text-sm">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="/assets/cv.pdf" 
            download="Grace_Mithamo_CV.pdf"
            className="bg-primary-dark text-white px-8 py-4 text-sm font-medium rounded hover:bg-black transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download size={18} />
            Download Full CV
          </a>
        </div>

      </div>
    </section>
  );
}
