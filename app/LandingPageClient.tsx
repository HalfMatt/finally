"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Upload,
	Sparkles,
	BarChart3,
	MessageSquare,
	FileQuestion,
	Target,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";

export default function LandingPageClient() {
	const features = [
		{
			icon: Upload,
			title: "Upload your resume",
			description:
				"Start in seconds-just drag and drop your resume. Our system will instantly scan and understand your experiences to tailor the perfect application strategy.",
		},
		{
			icon: Sparkles,
			title: "AI generated",
			description:
				"From job-matching summaries to rewritten bullet points, our AI crafts content that aligns with your target role-no templates, just smart personalization.",
		},
		{
			icon: BarChart3,
			title: "Resume Analysis",
			description:
				"Get a full breakdown of strengths, red flags, and improvement tips. Understand how your resume scores against industry standards and real job posts.",
		},
		{
			icon: MessageSquare,
			title: "Interview preparation",
			description:
				"Practice with our AI-powered mock interviews that track your speech, tone, eye contact, and pacing-plus real-time coaching feedback after every session.",
		},
		{
			icon: FileQuestion,
			title: "Mini-test question Generator",
			description:
				"Sharpen your skills with quick, role-specific practice tasks. Whether it's coding, writing, or logic-get mini-tests that reflect what employers are really looking for.",
		},
		{
			icon: Target,
			title: "Personalized tips",
			description:
				"Receive targeted advice based on your resume, career goals, and job type. From storytelling to confidence cues, we guide you like a real coach would.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
			{/* Corner Gradients */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#EF629F] to-[#EECDA3] opacity-80 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
			<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#EF629F] to-[#EECDA3] opacity-80 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
			<div className="relative z-10">
				{/* Header */}
				<header className="container mx-auto px-4 py-6">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">F</span>
							</div>
							<span className="text-xl font-bold text-slate-800">Finally</span>
						</div>
						<div className="flex gap-3">
							<Button
								variant="outline"
								className="hover:bg-slate-100 transition-colors duration-200 bg-transparent"
							>
								Try out for free
							</Button>
							<Button
								className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
								onClick={() => {}}
							>
								Upload Resume
							</Button>
						</div>
					</div>
				</header>

				{/* Hero Section */}
				<section className="container mx-auto px-4 py-12 text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
						Finally
						<br />
						<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
							is already here
						</span>
					</h1>
					<p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
						Transform your job search with AI-powered resume optimization,
						interview preparation, and personalized career coaching.
					</p>
				</section>

				{/* Features Grid */}
				<section className="container mx-auto px-4 py-12">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feature, index) => (
							<Card
								key={index}
								className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm"
							>
								<CardContent className="p-6">
									<div className="flex items-start gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-colors duration-300">
												<feature.icon className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
											</div>
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-slate-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">
												{feature.title}
											</h3>
											<p className="text-sm text-slate-600 leading-relaxed">
												{feature.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* CTA Section */}
				<section className="container mx-auto px-4 py-16 text-center">
					<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-white">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Ready to transform your career?
						</h2>
						<p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
							Join thousands of professionals who have already upgraded their
							job search with Finally.
						</p>
						<Button
							size="lg"
							className="bg-white text-purple-600 hover:bg-slate-100 transition-all duration-200 transform hover:scale-105 font-semibold px-8 py-3"
							onClick={() => {}}
						>
							Get Started Now
						</Button>
					</div>
				</section>

				{/* Contact Bar */}
				<footer className="bg-slate-800 text-white py-6">
					<div className="container mx-auto px-4">
						<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded flex items-center justify-center">
									<span className="text-white font-bold text-xs">F</span>
								</div>
								<span className="font-semibold">Finally</span>
							</div>

							<div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
								<div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200 cursor-pointer">
									<Mail className="w-4 h-4" />
									<span>contact@finally.com</span>
								</div>
								<div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200 cursor-pointer">
									<Phone className="w-4 h-4" />
									<span>+1 (555) 123-4567</span>
								</div>
								<div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200 cursor-pointer">
									<MapPin className="w-4 h-4" />
									<span>San Francisco, CA</span>
								</div>
							</div>
						</div>

						<div className="border-t border-slate-700 mt-4 pt-4 text-center text-sm text-slate-400">
							<p>
								&copy; 2024 Finally. All rights reserved. | Privacy Policy |
								Terms of Service
							</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
