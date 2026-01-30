import Layout from '@/components/Layout';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const practiceAreas = [
  {
    title: 'Corporate & Commercial Law',
    description: 'Advisory services on corporate governance, regulatory compliance, commercial contracts, mergers & acquisitions, and business restructuring. We assist clients in navigating complex corporate transactions with strategic legal counsel.',
  },
  {
    title: 'Civil Litigation',
    description: 'Representation in civil disputes across trial courts, High Courts, and the Supreme Court. Our practice covers property disputes, contractual matters, injunctions, and declaratory suits with a focus on strategic advocacy.',
  },
  {
    title: 'Criminal Litigation',
    description: 'Defence representation in criminal matters across all levels of courts. We handle cases involving economic offences, white-collar crimes, and general criminal matters with thorough preparation and effective advocacy.',
  },
  {
    title: 'Cheque Bounce Matters',
    description: 'Specialized practice in matters under the Negotiable Instruments Act. We represent both complainants and accused in cheque dishonour cases, focusing on expeditious resolution and enforcement.',
  },
  {
    title: 'Recovery & Debt Matters',
    description: 'Assistance in recovery of dues through legal proceedings, including suits for recovery, execution proceedings, and insolvency matters. We develop comprehensive strategies for effective debt recovery.',
  },
  {
    title: 'Matrimonial & Family Law',
    description: 'Sensitive handling of family law matters including divorce, maintenance, custody disputes, and domestic violence cases. We approach these matters with the discretion and care they require.',
  },
  {
    title: 'Intellectual Property Rights',
    description: 'Protection and enforcement of intellectual property rights including trademarks, copyrights, and patents. We assist with registration, licensing, and IP litigation.',
  },
  {
    title: 'Cyber Crime Matters',
    description: 'Legal representation in matters involving cyber crimes, data breaches, online fraud, and digital evidence. We stay current with evolving technology laws and digital jurisprudence.',
  },
  {
    title: 'Arbitration & Mediation',
    description: 'Alternative dispute resolution services including domestic and international arbitration, mediation, and conciliation. We assist clients in efficient resolution of disputes outside traditional courts.',
  },
  {
    title: 'Constitutional Law',
    description: 'Expert representation in Writ Petitions, PILs, and other constitutional remedies before the High Courts and Supreme Court. We advocate for the protection of fundamental rights and challenge arbitrary administrative actions.',
  },
  {
    title: 'Property & Real Estate Law',
    description: 'End-to-end legal support for property disputes, title suits, partition matters, and real estate transactions. We assist in due diligence, documentation, and litigation regarding immovable property.',
  },
  {
    title: 'Consumer Protection',
    description: 'Representing clients in consumer disputes regarding deficiency of services and unfair trade practices. We handle matters before District, State, and National Consumer Disputes Redressal Commissions.',
  },
];

const PracticeAreas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="divider-gold mx-auto mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl tracking-heading mb-6">
              Practice Areas
            </h1>
            <p className="text-lg text-muted-foreground leading-elegant max-w-2xl mx-auto">
              Comprehensive legal services across diverse practice areas, delivered with 
              expertise and dedication.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="h-full bg-card border border-border rounded-sm p-8 card-hover group">
                  <div className="divider-gold mb-6 transition-all duration-500 group-hover:w-24" />
                  <h3 className="font-serif text-xl tracking-heading mb-4 group-hover:text-accent transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-elegant">
                    {area.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center">
              <div className="divider-gold mx-auto mb-8" />
              <h2 className="font-serif text-3xl tracking-heading mb-6">
                Our Approach
              </h2>
              <p className="leading-elegant opacity-80 max-w-2xl mx-auto">
                Each matter we undertake receives the focused attention of experienced 
                practitioners. We believe in thorough preparation, clear communication, 
                and strategic thinking. Our approach combines deep legal knowledge with 
                practical wisdom gained from decades of practice.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
