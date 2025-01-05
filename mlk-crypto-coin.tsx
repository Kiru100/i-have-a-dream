"use client"

import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Twitter, TextIcon as Telegram, Github, Youtube, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LuClipboardCopy } from 'react-icons/lu';
import SocialLink from './components/ui/social-links'

export default function MLKCryptoCoin() {
  	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const copyToClipboard = () => {
		navigator.clipboard.writeText("w1QbBj9AS89pds1X2zbEWVpjR5mbs4RBYWxNJaZpump");
		alert("Coin address copied to clipboard.");
	};

	return (
		<div className="min-h-screen bg-black text-white">
			<header 
				className="relative overflow-hidden bg-cover bg-center py-20 " 
				style={{ backgroundImage: "url('/martin-bg.jpg')" }}
			>
				<div className="container mx-auto px-4">
					<div className="flex flex-col-reverse md:flex-row items-center justify-between">
						<div className="mb-10 md:mb-0 md:mr-10">
							<h1 className="text-4xl md:text-6xl font-bold mb-4">Dream ($MLK) Coin</h1>
							<p className="text-xl mb-6">Empowering change through blockchain, inspired by Martin Luther King Jr. day on January 20, 2025.</p>
							<div className="flex flex-row gap-2 rounded-[8px] bg-neutral-700 self-start overflow-hidden font-inter-normal items-center text-wrap mb-6">
								<p className="text-zinc-300 w-full break-all p-2 text-sm">CA: 1w1QbBj9AS89pds1X2zbEWVpjR5mbs4RBYWxNJaZpump</p>
								<button 
									className="bg-neutral-800 h-full p-2 hover:text-zinc-100 hover:bg-neutral-900 transition-all duration-300 ease-in-out active:bg-slate-950"
									onClick={copyToClipboard}
								>
									<LuClipboardCopy size="24" className="text-zinc-300" />
								</button>
							</div>
							<div className="flex gap-4">
								<SocialLink />
							</div>
						</div>
						<div className="relative w-64 h-64 md:w-80 md:h-80">
						</div>
					</div>
				</div>
			</header>
			<main className="py-20">
				<div className="container mx-auto px-4">
				<section className="mb-20">
					<h2 className="text-3xl font-bold text-center mb-10">About Dream (MLK) Coin</h2>
					<div className="flex flex-col md:flex-row items-center justify-center gap-10">
					<div className="relative w-48 h-48 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
						<div className="absolute inset-2 rounded-full bg-white flex items-center justify-center overflow-hidden">
						<svg viewBox="0 0 100 100" className="w-full h-full">
							<defs>
							<clipPath id="mlk-profile">
								<path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10 Z" />
							</clipPath>
							</defs>
						</svg>
						</div>
						<div className="absolute inset-0 rounded-full border-4 border-yellow-900 overflow-hidden">
						<Image
							src="/coin.png"
							alt='Martin Luther King Jr. Coin'
							fill={true}
						/>
						</div>	
					</div>
					<div className="text-center md:text-left">
						<h3 className="text-2xl font-semibold mb-4">Blockchain technology meeting social justice</h3>
						<p className="text-gray-300 mb-4">Dream (MLK) Coin aims to leverage blockchain technology to promote social justice, equality, and community empowerment.</p>
						<div className="flex flex-wrap justify-center md:justify-start gap-2">
						<Badge variant="secondary">Social Justice</Badge>
						<Badge variant="secondary">Equality</Badge>
						<Badge variant="secondary">Community</Badge>
						</div>
					</div>
					</div>
				</section>

				<section className="mb-20">
					<h2 className="text-3xl font-bold text-center mb-10">Coin Statistics</h2>
					<div className="flex justify-center gap-10">
					<div className="text-center">
						<p className="text-2xl font-bold">999M MLK</p>
						<p className="text-gray-300">Total Supply</p>
					</div>
					<div className="text-center">
						<p className="text-2xl font-bold">999M MLK</p>
						<p className="text-gray-300">Circulating Supply</p>
					</div>
					</div>
				</section>

				{isClient && (
					<section className="mb-20">
					<h2 className="text-3xl font-bold text-center mb-10">"I Have a Dream" Speech</h2>
					<div className="aspect-video max-w-3xl mx-auto">
						<iframe
						src="https://www.youtube.com/embed/vP4iY1TtS3s"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-full rounded-lg"
						></iframe>
					</div>
					</section>
				)}

				<section>
					<h2 className="text-3xl font-bold text-center mb-10">Connect With Us</h2>
					<div className="flex justify-center space-x-8">
						<SocialLink is_footer={true} />
					</div>
				</section>
				</div>
			</main>
		</div>
	)
}

