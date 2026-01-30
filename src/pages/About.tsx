import Layout from '@/components/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="divider-gold mx-auto mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl tracking-heading mb-6">
              About the Firm
            </h1>
            <p className="text-lg text-muted-foreground leading-elegant max-w-2xl mx-auto">
              A legacy of legal excellence built on integrity, expertise, and unwavering 
              commitment to client service.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-serif text-2xl tracking-heading accent-underline pb-4">
                  Our Legacy
                </h2>
                <p className="text-muted-foreground leading-elegant">
                  Anil Anand & Associates was established in 1995 with a vision to provide 
                  comprehensive legal services of the highest quality. Over the decades, 
                  the firm has grown to become a respected name in the legal community, 
                  known for its principled approach and dedication to client interests.
                </p>
                <p className="text-muted-foreground leading-elegant">
                  Our practice encompasses a wide spectrum of legal services, from complex 
                  corporate matters to sensitive family disputes. We approach each case with 
                  the same level of commitment and attention to detail, ensuring that our 
                  clients receive counsel that is both thorough and practical.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="p-6 bg-secondary/50 rounded-sm">
                  <span className="font-serif text-4xl text-accent">1995</span>
                  <p className="text-sm text-muted-foreground mt-2">Year Established</p>
                </div>
                <div className="p-6 bg-secondary/50 rounded-sm">
                  <span className="font-serif text-4xl text-accent">30+</span>
                  <p className="text-sm text-muted-foreground mt-2">Years of Practice</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="divider-gold mb-8" />
            <h2 className="font-serif text-3xl tracking-heading mb-8">
              Our Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-accent">Integrity First</h3>
                <p className="opacity-80 leading-elegant">
                  We believe that legal practice must be grounded in ethical principles. 
                  Our commitment to integrity guides every aspect of our work.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-accent">Client-Centric Approach</h3>
                <p className="opacity-80 leading-elegant">
                  Every client matter is unique. We take the time to understand the 
                  specific context and objectives before formulating our approach.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-accent">Thorough Preparation</h3>
                <p className="opacity-80 leading-elegant">
                  Success in legal matters often depends on meticulous preparation. 
                  We leave no stone unturned in our research and case development.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-accent">Practical Solutions</h3>
                <p className="opacity-80 leading-elegant">
                  While we are prepared for litigation, we also recognize the value 
                  of practical, negotiated solutions when appropriate.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-16">
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl tracking-heading">
              Our Values
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professionalism',
                description: 'Maintaining the highest standards of professional conduct in all our interactions.',
              },
              {
                title: 'Discretion',
                description: 'Handling all client matters with the utmost confidentiality and sensitivity.',
              },
              {
                title: 'Excellence',
                description: 'Striving for excellence in every legal service we provide.',
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center p-8 bg-card border border-border rounded-sm">
                  <div className="divider-gold mx-auto mb-6" />
                  <h3 className="font-serif text-xl tracking-heading mb-4">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-elegant">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
