import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="text-center p-8">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        className="text-4xl font-bold text-blue-600 mb-4">
        GEOTECH TOPOGRAFIA E GEODESIA
      </motion.h1>
      <p className="text-lg text-gray-700">Especialistas em levantamentos topográficos, geodésicos e georreferenciamentos.</p>
    </main>
  );
}