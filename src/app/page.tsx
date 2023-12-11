import Introduction from "@/components/Introduction";
import ThemeSwitch from "@/components/ThemeSwitch";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Introduction />
      <ThemeSwitch />
    </main>
  );
}
