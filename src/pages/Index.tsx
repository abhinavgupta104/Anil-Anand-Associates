import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PracticeAreaCard from '@/components/PracticeAreaCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import anilAnandPhoto from '@/assets/anil anand.jpeg';
import logo from '@/assets/logo.jpeg';
import hariPrasadRaoPhoto from '@/assets/hari prasad rao.jpeg';
import kartikeyaSharmaPhoto from '@/assets/kartikey sharma.jpeg';
import dPSharmaPhoto from '@/assets/D P sharma.jpeg';
import rajeevAnandPhoto from '@/assets/rajeev anand.jpeg';

const practiceAreas = [
  {
    title: 'Corporate & Commercial Law',
    description: 'Comprehensive advisory on corporate governance, mergers & acquisitions, and commercial transactions.',
  },
  {
    title: 'Civil Litigation',
    description: 'Representation in civil disputes across trial and appellate courts with strategic advocacy.',
  },
  {
    title: 'Criminal Litigation',
    description: 'Defence representation and prosecution support across all tiers of criminal courts.',
  },
  {
    title: 'Cheque Bounce Matters',
    description: 'Specialized handling of NI Act cases with comprehensive enforcement strategies.',
  },
  {
    title: 'Property & Real Estate Law',
    description: 'End-to-end legal support for property disputes, title suits, and real estate transactions.',
  },
  {
    title: 'Constitutional Law',
    description: 'Expert representation in Writ Petitions and constitutional remedies before High Courts.',
  },
];

const teamMembers = [
  {
    name: 'D. P. Sharma',
    designation: 'Senior Advocate',
    experience: '45+ years of distinguished practice',
    areas: ['Civil Litigation', 'Constitutional Law', 'Property Disputes'],
    enrollmentNumber: 'UP695/1980',
    education: 'LL.B., University of Delhi',
    bio: 'A veteran legal practitioner with extensive experience in constitutional matters and complex civil disputes across High Courts.',
    image: dPSharmaPhoto,
  },
  {
    name: 'Rajeev Anand',
    designation: 'Advocate',
    experience: 'Specializing in Criminal Law',
    areas: ['Criminal Defence', 'Economic Offences', 'Bail Matters'],
    enrollmentNumber: 'UP10754/2000',
    education: 'LL.B., Campus Law Centre',
    bio: 'Focused on criminal defense strategies with a strong track record in bail matters and economic offence litigations.',
    image: rajeevAnandPhoto,
  },
  {
    name: 'Hari Prasad Rao',
    designation: 'Advocate',
    experience: '14+ years of experience',
    areas: ['Civil', 'Criminal', 'Commercial Disputes', 'Arbitration'],
    enrollmentNumber: 'D/1576/2011',
    education: 'LL.B., Osmania University',
    bio: 'Expertise in civil and criminal litigation, managing complex disputes with strategic and solution-oriented advocacy.',
    image: hariPrasadRaoPhoto,
  },
  {
    name: 'Kartikeya Sharma',
    designation: 'Advocate',
    experience: 'Corporate and cyber law',
    areas: ['Corporate Law', 'Cyber Crime', 'Intellectual Property Rights'],
    enrollmentNumber: 'D/11800/2022',
    education: 'B.A. LL.B. (Hons), LL.M.',
    bio: 'Advises on corporate governance, intellectual property rights, and cyber law compliance for modern businesses.',
    image: kartikeyaSharmaPhoto,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Firm Introduction */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <img 
              src={logo} 
              alt="Anil Anand & Associates Logo" 
              className="h-32 md:h-40 w-auto mx-auto mb-8 mix-blend-multiply"
            />
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-heading mb-6">
              Anil Anand & Associates
            </h2>
            <p className="text-muted-foreground leading-elegant max-w-2xl mx-auto">
              Established with a vision to provide comprehensive legal services, our firm 
              has been at the forefront of legal practice since 1995. We combine deep 
              legal expertise with a client-centric approach, ensuring that every matter 
              receives the attention and dedication it deserves.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="divider-gold mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-heading leading-tight mb-6"
            >
              Excellence in Legal Practice
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-elegant mb-10 max-w-2xl"
            >
              A distinguished practice built on three decades of experience, serving clients 
              with integrity, discretion, and unwavering commitment to legal excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about" className="btn-primary rounded-sm inline-flex items-center gap-2 group">
                About the Firm
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-outline rounded-sm">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-heading mb-4">
              Practice Areas
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive legal services across diverse practice areas
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard
                key={area.title}
                title={area.title}
                description={area.description}
                index={index}
              />
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link 
              to="/practice-areas" 
              className="link-underline text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              View All Practice Areas
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Preview */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-navy-foreground/5 rounded-sm flex items-end justify-center overflow-hidden">
                <img 
                  src={anilAnandPhoto} 
                  alt="Anil Anand" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="divider-gold mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl tracking-heading mb-4">
                Anil Anand
              </h2>
              <p className="text-accent text-lg mb-6">
                Founder & Managing Partner
              </p>
              <p className="leading-elegant opacity-80">
                With over three decades of distinguished legal practice since November 1995, 
                Anil Anand has built a reputation for excellence across civil, criminal, 
                corporate, and intellectual property matters. His approach combines deep 
                legal knowledge with pragmatic solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Associates Section */}
      <section id="team" className="section-padding bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-heading mb-4">
              Our Associates
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A team of distinguished legal professionals committed to delivering exceptional legal services
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                designation={member.designation}
                experience={member.experience}
                areas={member.areas}
                enrollmentNumber={member.enrollmentNumber}
                index={index}
                image={member.image}
                education={member.education}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl tracking-heading mb-6">
              Seeking Legal Counsel?
            </h2>
            <p className="text-muted-foreground leading-elegant mb-10 max-w-xl mx-auto">
              We are committed to providing thoughtful, comprehensive legal guidance 
              tailored to your specific requirements.
            </p>
            <Link to="/contact" className="btn-primary rounded-sm">
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
