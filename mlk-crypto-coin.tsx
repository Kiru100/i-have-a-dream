"use client"

import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Twitter, TextIcon as Telegram, Github, Youtube } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function MLKCryptoCoin() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true);
  }, [])

	return (
		<div className="min-h-screen bg-black text-white">
			<header className="bg-gray-900 py-20">
				<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="mb-10 md:mb-0 md:mr-10">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Dream (MLK) Coin</h1>
					<p className="text-xl mb-6">Empowering change through blockchain, inspired by Martin Luther King Jr.'s vision</p>
					<Button className="bg-yellow-500 text-black hover:bg-yellow-600">Learn More</Button>
					</div>
					<div className="relative w-64 h-64 md:w-80 md:h-80">
					<Image
						src="/placeholder.svg?height=320&width=320"
						alt="Martin Luther King Jr."
						layout="fill"
						objectFit="cover"
						className="rounded-full"
					/>
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
							<image
								href="/placeholder.svg?height=200&width=200"
								width="100"
								height="100"
								clipPath="url(#mlk-profile)"
							/>
						</svg>
						</div>
						<div className="absolute inset-0 rounded-full border-4 border-yellow-500"></div>
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
						<p className="text-2xl font-bold">39,000,000 MLK</p>
						<p className="text-gray-300">Total Supply</p>
					</div>
					<div className="text-center">
						<p className="text-2xl font-bold">15,600,000 MLK</p>
						<p className="text-gray-300">Circulating Supply</p>
					</div>
					</div>
				</section>

				{isClient && (
					<section className="mb-20">
					<h2 className="text-3xl font-bold text-center mb-10">"I Have a Dream" Speech</h2>
					<div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto">
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
					<a href="https://twitter.com/DreamMLKCoin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
						<Twitter size={32} />
						<span className="sr-only">Twitter</span>
					</a>
					<a href="https://t.me/DreamMLKCoin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
						<Telegram size={32} />
						<span className="sr-only">Telegram</span>
					</a>
					<a href="https://github.com/DreamMLKCoin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
						<Github size={32} />
						<span className="sr-only">GitHub</span>
					</a>
					<a href="https://www.youtube.com/watch?v=vP4iY1TtS3s" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
						<Youtube size={32} />
						<span className="sr-only">YouTube</span>
					</a>
					</div>
				</section>
				</div>
			</main>
		</div>
	)
}

