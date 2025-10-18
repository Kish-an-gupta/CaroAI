"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-6 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center relative z-10"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-12 -right-10 text-secondary"
          >
            <AlertCircle size={40} />
          </motion.div>

          <h1 className="text-[8rem] font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            404
          </h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-semibold text-foreground mt-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground max-w-md mt-4 leading-relaxed"
        >
          Oops! The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link href="/">
            <Button className="bg-primary text-primary-foreground font-medium px-6 py-3 rounded-xl hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:cursor-pointer">
              Return Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <footer className="absolute bottom-6 text-sm text-muted-foreground z-10">
        © {new Date().getFullYear()} CaroAI. All rights reserved.
      </footer>
    </div>
  );
}
