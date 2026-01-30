import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  designation: string;
  experience?: string;
  areas?: string[];
  enrollmentNumber?: string;
  index: number;
  image?: string;
  education?: string;
  bio?: string;
}

const TeamMemberCard = ({ 
  name, 
  designation, 
  experience, 
  areas, 
  enrollmentNumber,
  index,
  image,
  education,
  bio
}: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="bg-card border border-border rounded-sm overflow-hidden card-hover">
        {/* Profile Image Placeholder */}
        <div className="aspect-[4/5] bg-secondary flex items-center justify-center relative overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-secondary to-muted flex items-end justify-center pb-12">
              <div className="w-24 h-24 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                <span className="font-serif text-3xl text-muted-foreground/40">
                  {name.charAt(0)}
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="divider-gold mb-4" />
          <h3 className="font-serif text-xl tracking-heading mb-1">
            {name}
          </h3>
          <p className="text-sm text-accent mb-3">
            {designation}
          </p>
          
          {experience && (
            <p className="text-sm text-muted-foreground mb-3">
              {experience}
            </p>
          )}
          
          {bio && (
            <p className="text-sm text-muted-foreground/90 mb-4 leading-relaxed line-clamp-4">
              {bio}
            </p>
          )}

          {areas && areas.length > 0 && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {areas.join(' • ')}
            </p>
          )}
          
          {enrollmentNumber && (
            <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
              {education && (
                <span className="block mb-1 text-foreground/80">
                  {education}
                </span>
              )}
              Enrollment: {enrollmentNumber}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
