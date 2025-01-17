// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Terminal, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">
      

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-purple-400">LET'S COLLABORATE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              I'M [NAME],<br />
              AN AI ENGINEER
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0"> 
              Write About yourself as a professional!
            </p> 
            <Link href="/projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                VIEW MY PROJECTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src="https://raw.githubusercontent.com/XCai777/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/xcai.jpg" // Change to your Photo Please
                alt="Profile"
                fill
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FEATURED PROJECTS</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">{project.title}</h2>
              <div className="relative h-40 sm:h-48 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">PROBLEM:</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.problem}</p>
              <h3 className="text-lg font-semibold mb-2">SOLUTION:</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">{project.solution}</p>
                <a href = {project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
                  VIEW PROJECT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </a>
            </Card>
          ))}
        </div>
      </section>

      
    </main>
  );
}

// Only your Top 3 Projects

const projects = [
  { 
    title: "Vendomort", 
    image: "https://raw.githubusercontent.com/XCai777/AI_Republic_Bootcamp/refs/heads/main/Projects/Vendor/images/Login.png",
    problem: "Inefficient pricing strategy and income projection leading to noncompetitive pricing in the market",
    solution: "Developed a pricing consultant AI tool with built in income projection based on the recommended pricing strategy and demand.",
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/Vendor"
  },
  {
    title: "PropGuard",
    image: "https://raw.githubusercontent.com/XCai777/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/PropGuard_Logo.png",
    problem: "The Philippine real estate market faces significant challenges due to widespread fraud, lack of transparency, and unreliable property listings.",
    solution: "PropGuard addresses this by offering a suite of AI-driven tools that validate property details, images, and user interactions in real time. The platform uses property details validation, image validation, cross-platform verification, sentiment analysis, and trust scoring to ensure that each property transaction is safe and reliable.",
    link : "https://github.com/XCai777/HackatonAI"
  },
  {
    title: "Marketing Analysis System",
    image: "https://raw.githubusercontent.com/XCai777/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/MarketingAnalysisSystem.jpg",
    problem: "With over 70% of transactions driven by digital campaigns, inefficiencies such as underperforming ads, overspending on low-conversion traffic sources, and missed opportunities for scaling successful campaigns lead to an average ROI loss of 20-30%.",
    solution: "By analyzing traffic sources and campaign data, the system quantifies cost-effectiveness, identifies wastage in high-spending but low-performing campaigns, and recommends scaling strategies for high-ROI efforts. With actionable insights, businesses can reduce marketing inefficiencies by up to 25% and optimize ad spend to maximize profitability in the dynamic Philippine e-commerce ecosystem.",
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/AI_First_Day_6"
  },
  
];
