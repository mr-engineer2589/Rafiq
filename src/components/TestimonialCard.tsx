import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  delay?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass-effect p-8 rounded-2xl hover:glass-effect-strong theme-transition hover-lift"
  >
    <div className="mb-6 flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <blockquote className="mb-6 text-lg leading-relaxed text-gray-900 dark:text-gray-100 theme-transition">
      "{content}"
    </blockquote>
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">{name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400 theme-transition">{role}</div>
      </div>
    </div>
  </motion.div>
);