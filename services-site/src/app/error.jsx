"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl"
      >
        <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 text-2xl">
          <FaExclamationTriangle />
        </div>
        <h2 className="text-2xl font-bold font-display mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-amber-500 text-black font-semibold tracking-wide text-sm hover:bg-amber-400 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold tracking-wide text-sm hover:bg-white/5 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
