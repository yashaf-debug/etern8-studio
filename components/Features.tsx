import React from 'react';
import { Zap, Shield, Smartphone, Box, Terminal, RefreshCw } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Lightning Fast',
    description: 'Built on Vite for instant server start and lightning fast HMR updates.',
    icon: Zap,
  },
  {
    title: 'Type Safe',
    description: 'Fully typed with TypeScript to catch errors early and improve maintainability.',
    icon: Shield,
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first approach ensures your app looks great on any device.',
    icon: Smartphone,
  },
  {
    title: 'Component Driven',
    description: 'Modular architecture with reusable components for consistent UI.',
    icon: Box,
  },
  {
    title: 'Modern Stack',
    description: 'Leveraging the latest features of React 18+ and Tailwind CSS.',
    icon: Terminal,
  },
  {
    title: 'Continuous Updates',
    description: 'Regularly updated dependencies to keep your project secure and efficient.',
    icon: RefreshCw,
  },
];

export const Features: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Features</h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Everything you need to build
          </p>
          <p className="mt-4 text-lg text-slate-600">
            A comprehensive toolset designed to help you create production-grade applications with ease and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};