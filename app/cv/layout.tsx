import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae | Muhammad Shahzaman - Web & Full-Stack Developer",
  description:
    "Verified professional Curriculum Vitae of Muhammad Shahzaman. Full-Stack Developer, WordPress & Shopify Specialist at Dawley Institute of Technology.",
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
