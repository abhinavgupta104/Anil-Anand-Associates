import Layout from '@/components/Layout';
import TeamMemberCard from '@/components/TeamMemberCard';
import { AnimatedSection } from '@/components/AnimatedSection';

const teamMembers = [
  {
    name: 'Anil Anand',
    designation: 'Founder & Managing Partner',
    experience: 'Practicing since November 1995',
    areas: ['Civil', 'Criminal', 'Corporate', 'IPR', 'Matrimonial', 'Cheque Bounce', 'Recovery Matters'],
    enrollmentNumber: 'D/XXX/1995',
  },
  {
    name: 'D. P. Sharma',
    designation: 'Senior Advocate',
    experience: '45+ years of distinguished practice',
    areas: ['Civil Litigation', 'Constitutional Law', 'Property Disputes'],
    enrollmentNumber: 'D/XXX/1979',
  },
  {
    name: 'Rajeev Anand',
    designation: 'Advocate',
    experience: 'Specializing in Criminal Law',
    areas: ['Criminal Defence', 'Economic Offences', 'Bail Matters'],
    enrollmentNumber: 'D/XXX/2005',
  },
  {
    name: 'Kartikeya Sharma',
    designation: 'Advocate',
    experience: 'Corporate and Technology Law specialist',
    areas: ['Corporate Law', 'Cyber Crime', 'Intellectual Property Rights'],
    enrollmentNumber: 'D/XXX/2015',
  },
  {
    name: 'Hari Prasad Rao',
    designation: 'Advocate',
    experience: 'Experienced litigation counsel',
    areas: ['Civil Litigation', 'Commercial Disputes', 'Arbitration'],
    enrollmentNumber: 'D/XXX/2010',
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="divider-gold mx-auto mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl tracking-heading mb-6">
              Our Team
            </h1>
            <p className="text-lg text-muted-foreground leading-elegant max-w-2xl mx-auto">
              A dedicated team of legal professionals committed to excellence 
              and client service.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-secondary rounded-sm flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-secondary to-muted flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                    <span className="font-serif text-5xl text-muted-foreground/40">A</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="divider-gold mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl tracking-heading mb-2">
                Anil Anand
              </h2>
              <p className="text-accent text-lg mb-6">
                Founder & Managing Partner
              </p>
              <div className="space-y-4 text-muted-foreground leading-elegant">
                <p>
                  Anil Anand has been in active legal practice since November 1995, 
                  building a distinguished career spanning over three decades. His practice 
                  encompasses a wide range of legal matters including civil litigation, 
                  criminal defence, corporate advisory, and intellectual property rights.
                </p>
                <p>
                  Known for his methodical approach and deep understanding of legal 
                  principles, he has successfully handled complex matters across various 
                  courts and tribunals. His commitment to professional ethics and client 
                  service has been the foundation of the firm's reputation.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground">Areas of Practice:</span> Civil, Criminal, 
                  Corporate, IPR, Matrimonial, Cheque Bounce, Recovery Matters
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Associates Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl tracking-heading">
              Associates
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(1).map((member, index) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                designation={member.designation}
                experience={member.experience}
                areas={member.areas}
                enrollmentNumber={member.enrollmentNumber}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
