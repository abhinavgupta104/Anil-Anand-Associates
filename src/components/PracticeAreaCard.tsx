import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PracticeAreaCardProps {
  title: string;
  description: string;
  index: number;
}

const PracticeAreaCard = ({ title, description, index }: PracticeAreaCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to="/practice-areas"
        className="block group bg-card p-8 rounded-sm border border-border card-hover h-full"
      >
        <div className="divider-gold mb-6 transition-all duration-500 group-hover:w-24" />
        <h3 className="font-serif text-xl mb-4 tracking-heading group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-elegant">
          {description}
        </p>
      </Link>
    </motion.div>
  );
};

export default PracticeAreaCard;
