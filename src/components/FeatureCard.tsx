import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative overflow-hidden glass-effect p-8 rounded-2xl hover:glass-effect-strong theme-transition hover-lift"
  >
    <div className="absolute -right-20 -top-20 h-40 w-40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full group-hover:from-pink-500/20 group-hover:to-purple-500/20 theme-transition animate-float"></div>
    <div className="relative">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl shadow-lg glow-effect">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100 theme-transition">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed theme-transition">{description}</p>
    </div>
  </motion.div>
);