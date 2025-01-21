// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

// Add your Projects Here
const projects = [
  {
    title: "Cl-AI-mate",
    image: "https://raw.githubusercontent.com/XCai777/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/maxresdefault.jpg",
    problem: "Many individuals, particularly in underserved communities, lack access to trustworthy resources to learn about global warming, greenhouse gases, and other factors affecting the climate.",
    solution: "cl-AI-mate addresses this problem by providing a simple, AI-powered chatbot designed to deliver accurate, easy-to-understand answers to questions about climate-related topics.",
    tools: ["Python", "Hugging Face", "Google Gemma"],
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/Day_2_FineTuning/Cl_AI_mate" // Github Link make sure it has https://
  },
  {
    title: "News Summarizer",
    image: "https://raw.githubusercontent.com/XCai777/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/breaking-news-concept_23-2148514216.jpg",
    problem: "Readers often struggle to find time to extract key insights from news stories, leading to missed opportunities for staying updated on important events. The lack of a simple, efficient tool for summarizing news creates a barrier for individuals who wish to stay informed without dedicating significant time to reading full articles.",
    solution: "This news summarizer addresses the problem by providing an AI-powered chatbot that simplifies the process. Users can input lengthy news articles, and the chatbot generates concise and accurate summaries, ensuring they can quickly grasp essential information without compromising on detail.",
    tools: ["Python", "Streamlit", "OpenAI", "GPT-4o"],
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/AI_First_Day_3_Activity_4_xcai" // Github Link make sure it has https://
  },
  {
    title: "Doc. Bok",
    image: "https://raw.githubusercontent.com/XCai777/AI_Republic_Bootcamp/refs/heads/main/Projects/AI_First_Day_3_Activity_5_and_6_xcai/images/DocBokDP.jpg",
    problem: "Evaluating essays is a time-intensive and subjective process, often resulting in delayed feedback and inconsistencies that hinder student learning and improvement. Teachers and evaluators face increasing workloads, while students struggle to identify clear areas for growth due to limited, generic feedback. This lack of timely and personalized guidance creates a gap in the educational process, preventing learners from reaching their full potential.",
    solution: "Doc. Bok addresses this challenge by offering an AI-powered essay grading system that not only assigns grades but also provides detailed feedback and actionable recommendations.",
    tools: ["Python", "Streamlit", "OpenAI", "GPT-4o"],
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/AI_First_Day_3_Activity_5_and_6_xcai" // Github Link make sure it has https://
  },
  {
    title: "Truck-kun",
    image: "https://raw.githubusercontent.com/XCai777/AI_Republic_Bootcamp/refs/heads/main/Projects/TruckKun/images/truckkunhomepage.png",
    problem: "Up to 40% of customer complaints stem from a lack of accurate shipment tracking and unclear pricing structures, while businesses report productivity losses due to manual processing of delivery forms and pricing calculations.",
    solution: "Create AI chatbot that delivers instant answers to delivery status queries, computes prices in real-time based on user-provided delivery details, and stores all transaction data in a centralized database. By reducing manual errors and improving response times by up to 50%, Truck-kun enhances transparency, operational efficiency, and customer trust in the logistics process.",
    tools: ["Python", "Streamlit", "OpenAI", "GPT-4o", "faiss", "langchain"],
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/TruckKun" // Github Link make sure it has https://
  },
  {
    title: "ALAB- Assisted Learning and Application-preparation for Building careers",
    image: "https://raw.githubusercontent.com/XCai777/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/istockphoto-1349473705-612x612.jpg",
    problem: "Bootcamp graduates often struggle with creating targeted resumes, preparing for technical interviews, and finding the right career path in tech. Manually creating resumes and preparing for interviews is time-consuming and may not align with industry standards.",
    solution: "Developed an AI-powered application that streamlines the career preparation process by offering automated resume customization, intelligent mock interviews, and personalized career guidance. The system uses GPT-4 to analyze job requirements and user qualifications, providing tailored recommendations and real-time interview feedback.",
    tools: ["Python", "Streamlit", "OpenAI", "GPT-4o", "swarm", "beautifulsoup"],
    link : "https://github.com/XCai777/bootcamp-hackathon-ALAB-AIFirst-Dec2024" // Github Link make sure it has https://
  },
  { 
    title: "RAG and NLP Chatbot", 
    image: "https://raw.githubusercontent.com/XCai777/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/rag_dalle.jpg",
    problem: "Converting raw data, may it be numerical table or text-based, into readable, natural language reports is time-consuming and prone to human error.",
    solution: "Developed a Python-based RAG system that automatically reads and summarizes PDF and CSV files, and then uses the summary to answer questions about the original document.",
    tools: ["Python", "Streamlit", "OpenAI", "GPT-4o", "langchain", "faiss", "pdfplumber"],
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/AI_First_Day_5"
  },
  { 
    title: "Vendomort", 
    image: "https://raw.githubusercontent.com/XCai777/AI_Republic_Bootcamp/refs/heads/main/Projects/Vendor/images/Login.png",
    problem: "Inefficient pricing strategy and income projection leading to noncompetitive pricing in the market",
    solution: "Developed a pricing consultant AI tool with built in income projection based on the recommended pricing strategy and demand.",
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/Vendor"
  },
  { 
    title: "LessonPlanner", 
    image: "https://raw.githubusercontent.com/XCai777/AI-Republic-Student-Portfolio-Template/refs/heads/main/app/images/1427822836.png",
    problem: "Teachers struggle to create engaging lesson plans that align with curriculum standards and meet the needs of diverse learners. The process is time-consuming and may not be tailored to individual student needs.",
    solution: "Developed a lesson planner that uses AI to generate lesson plans based on curriculum standards and student needs.",
    tools: ["Python", "Streamlit", "OpenAI", "GPT-4o", "langchain", "langflow"],
    link : "https://github.com/XCai777/AI_Republic_Bootcamp/tree/main/Projects/LessonPlanner"
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

// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/algorexph/
export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">ALL PROJECTS</h1>
        <p className="text-gray-400 mb-8 sm:mb-12">Exploring the intersection of AI and real-world solutions</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/40 transition-all duration-300">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 saturate-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
              </div>
              
              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 tracking-tight">{project.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">PROBLEM:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">SOLUTION:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                <div className="pt-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools?.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a href = {project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium tracking-wide"
                  >
                    VIEW PROJECT
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
