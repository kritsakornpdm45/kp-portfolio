<script lang="ts">
	import { fade } from 'svelte/transition';

	// ============================================
	// Data Definitions
	// ============================================

	const profile = {
		name: 'Kritsakorn',
		role: 'Full-Stack Developer',
		tagline: 'Building products that users love',
		bio: 'Passionate software engineer with 3+ years of experience crafting high-performance web applications. I specialize in turning complex problems into elegant, scalable solutions.',
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kritsakorn&backgroundColor=3b82f6',
		status: 'Available for work',
		location: 'Thailand',
		email: 'hello@example.com'
	};

	const stats = [
		{ value: '3+', label: 'Years Experience' },
		{ value: '50+', label: 'Projects Completed' },
		{ value: '20+', label: 'Happy Clients' },
		{ value: '99%', label: 'Success Rate' }
	];

	const projects = [
		{
			title: 'E-Commerce Platform',
			description:
				'A full-featured e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
			longDescription:
				'A comprehensive e-commerce platform built for high-scale retail. Features include real-time inventory tracking, multi-provider payment integration (Stripe, PayPal), automated tax calculation, and a powerful analytics dashboard for sales insights.',
			image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
			gallery: [
				'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=600&fit=crop'
			],
			tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
			liveUrl: '#',
			githubUrl: '#',
			featured: true
		},
		{
			title: 'AI Chat Application',
			description:
				'Real-time chat platform powered by AI with smart responses and multi-language support.',
			longDescription:
				"An intelligent chat application utilizing OpenAI's GPT-4 API to provide smart, context-aware responses. Includes features like real-time translation, conversation summarization, and secure end-to-end encryption.",
			image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
			gallery: [
				'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1587560699334-cc4da63c2549?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
			],
			tags: ['React', 'OpenAI', 'Socket.io', 'Node.js'],
			liveUrl: '#',
			githubUrl: '#',
			featured: true
		},
		{
			title: 'SaaS Dashboard',
			description:
				'Analytics dashboard with real-time data visualization and team collaboration features.',
			longDescription:
				'A data-heavy SaaS dashboard providing visualizations for user engagement metrics. Built with Svelte and D3.js for high-performance rendering of complex charts and graphs.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
			gallery: [
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1543286386-713df548e9cc?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
			],
			tags: ['Svelte', 'D3.js', 'Supabase'],
			liveUrl: '#',
			githubUrl: '#',
			featured: false
		},
		{
			title: 'Mobile Banking App',
			description:
				'Secure mobile banking solution with biometric authentication and instant transfers.',
			longDescription:
				'A React Native mobile application focusing on security and ease of use. Features biometric login (FaceID/TouchID), QR code payments, and real-time transaction notifications via WebSocket.',
			image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
			gallery: [
				'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
			],
			tags: ['React Native', 'Node.js', 'MongoDB'],
			liveUrl: '#',
			githubUrl: '#',
			featured: false
		}
	];

	const skillCategories = [
		{
			title: 'Frontend',
			icon: '🎨',
			color: 'blue',
			skills: [
				{ name: 'React', icon: 'react', level: 95 },
				{ name: 'Svelte', icon: 'svelte', level: 90 },
				{ name: 'TypeScript', icon: 'ts', level: 92 },
				{ name: 'Tailwind', icon: 'tailwindcss', level: 95 }
			]
		},
		{
			title: 'Backend',
			icon: '⚙️',
			color: 'purple',
			skills: [
				{ name: 'Node.js', icon: 'nodejs', level: 90 },
				{ name: 'Python', icon: 'python', level: 85 },
				{ name: 'PostgreSQL', icon: 'postgresql', level: 88 },
				{ name: 'GraphQL', icon: 'graphql', level: 80 }
			]
		},
		{
			title: 'DevOps',
			icon: '🚀',
			color: 'cyan',
			skills: [
				{ name: 'Docker', icon: 'docker', level: 85 },
				{ name: 'AWS', icon: 'aws', level: 82 },
				{ name: 'GitHub Actions', icon: 'githubactions', level: 88 },
				{ name: 'Linux', icon: 'linux', level: 80 }
			]
		},
		{
			title: 'Tools',
			icon: '🛠️',
			color: 'green',
			skills: [
				{ name: 'Git', icon: 'git', level: 95 },
				{ name: 'Figma', icon: 'figma', level: 75 },
				{ name: 'VS Code', icon: 'vscode', level: 95 },
				{ name: 'Postman', icon: 'postman', level: 85 }
			]
		}
	];

	const education = [
		{
			degree: 'Bachelor of Computer Science',
			institution: 'Prince of Songkla University',
			location: 'Hat Yai, Thailand',
			year: '2020 - 2024',
			gpa: '3.75',
			achievements: ["Dean's List", 'Best Capstone Project']
		}
	];

	const socialLinks = [
		{ name: 'GitHub', url: 'https://github.com', icon: 'github' },
		{ name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
		{ name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
	];

	// ============================================
	// Modal Logic
	// ============================================
	let selectedProject = $state<null | (typeof projects)[0]>(null);
	let activeImageIndex = $state(0);

	function openModal(project: (typeof projects)[0]) {
		selectedProject = project;
		activeImageIndex = 0;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		selectedProject = null;
		document.body.style.overflow = 'auto';
	}

	function setActiveImage(index: number) {
		activeImageIndex = index;
	}

	function nextImage() {
		if (selectedProject) {
			activeImageIndex = (activeImageIndex + 1) % selectedProject.gallery.length;
		}
	}

	function prevImage() {
		if (selectedProject) {
			activeImageIndex =
				(activeImageIndex - 1 + selectedProject.gallery.length) % selectedProject.gallery.length;
		}
	}
</script>

<div class="min-h-screen bg-[#0a0a0a] text-white">
	<!-- ============================================
	     HERO SECTION
	     ============================================ -->
	<section id="resume" class="relative min-h-screen overflow-hidden">
		<!-- Background Effects -->
		<div class="bg-mesh absolute inset-0"></div>
		<div class="bg-grid absolute inset-0 opacity-30"></div>

		<!-- Floating gradient orbs -->
		<div
			class="animate-float absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]"
		></div>
		<div
			class="animate-float absolute right-10 bottom-20 h-96 w-96 rounded-full bg-purple-500/15 blur-[120px]"
			style="animation-delay: -3s;"
		></div>

		<!-- Content -->
		<div class="relative z-10 flex min-h-screen items-center px-6 pt-20">
			<div class="mx-auto w-full max-w-7xl">
				<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<!-- Left: Text Content -->
					<div class="text-center lg:text-left">
						<!-- Status Badge -->
						<div
							class="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2"
						>
							<span class="relative flex h-2 w-2">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
								></span>
								<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
							</span>
							<span class="text-sm text-green-400">{profile.status}</span>
						</div>

						<!-- Main Heading -->
						<h1 class="mb-6 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
							<span class="block">Hi, I'm</span>
							<span class="gradient-text">{profile.name}</span>
						</h1>

						<p class="mb-4 text-xl text-gray-400 md:text-2xl">
							{profile.role}
						</p>

						<p class="mb-8 max-w-xl text-lg text-gray-500 lg:max-w-none">
							{profile.bio}
						</p>

						<!-- CTA Buttons -->
						<div class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
							<a
								href="#projects"
								class="glow-blue inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
							>
								View My Work
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
							<a
								href="#contact"
								class="glass inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
							>
								Get in Touch
							</a>
						</div>

						<!-- Social Links -->
						<div class="mt-10 flex items-center justify-center gap-4 lg:justify-start">
							<span class="text-sm text-gray-500">Find me on</span>
							<div class="flex gap-3">
								{#each socialLinks as social}
									<a
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										class="glass flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 hover:bg-white/20"
										aria-label={social.name}
									>
										{#if social.icon === 'github'}
											<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
												/>
											</svg>
										{:else if social.icon === 'linkedin'}
											<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
												/>
											</svg>
										{:else if social.icon === 'twitter'}
											<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
												/>
											</svg>
										{/if}
									</a>
								{/each}
							</div>
						</div>
					</div>

					<!-- Right: Profile Card / Visual -->
					<div class="relative flex justify-center lg:justify-end">
						<div class="relative">
							<!-- Glow effect behind card -->
							<div
								class="absolute -inset-4 rounded-3xl bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-2xl"
							></div>

							<!-- Profile Card -->
							<div class="glass-card relative w-full max-w-md p-8">
								<!-- Avatar -->
								<div class="mb-6 flex justify-center">
									<div class="relative">
										<div
											class="absolute -inset-1 rounded-full bg-linear-to-r from-blue-500 to-purple-500 opacity-75 blur"
										></div>
										<img
											src={profile.avatar}
											alt={profile.name}
											class="relative h-32 w-32 rounded-full border-4 border-[#0a0a0a] bg-gray-800"
										/>
									</div>
								</div>

								<!-- Info -->
								<div class="mb-6 text-center">
									<h2 class="text-2xl font-bold">{profile.name}</h2>
									<p class="text-gray-400">{profile.role}</p>
								</div>

								<!-- Stats Grid -->
								<div class="grid grid-cols-2 gap-4">
									{#each stats as stat}
										<div class="glass rounded-xl p-4 text-center">
											<div class="gradient-text text-2xl font-bold">{stat.value}</div>
											<div class="text-xs text-gray-400">{stat.label}</div>
										</div>
									{/each}
								</div>

								<!-- Location -->
								<div class="mt-6 flex items-center justify-center gap-2 text-gray-400">
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<span class="text-sm">{profile.location}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Scroll indicator -->
				<div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
					<svg class="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================================
	     PROJECTS SECTION
	     ============================================ -->
	<section id="projects" class="relative px-6 py-24">
		<div class="mx-auto max-w-7xl">
			<!-- Section Header -->
			<div class="mb-16 text-center">
				<span
					class="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
				>
					Portfolio
				</span>
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">
					Featured <span class="gradient-text">Projects</span>
				</h2>
				<p class="mx-auto max-w-2xl text-gray-400">
					A collection of projects I've built — from web apps to mobile solutions
				</p>
			</div>

			<!-- Projects Grid -->
			<div class="grid gap-8 md:grid-cols-2">
				{#each projects as project, i}
					<button
						class="group glass-card card-shine hover-lift w-full overflow-hidden text-left {project.featured
							? 'md:col-span-1'
							: ''}"
						onclick={() => openModal(project)}
					>
						<!-- Project Image -->
						<div class="relative aspect-video overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
								loading="lazy"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
							></div>

							<!-- Overlay Links -->
							<div
								class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<div
									class="flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-black transition-transform hover:scale-105"
								>
									View Details
								</div>
							</div>
						</div>

						<!-- Project Info -->
						<div class="p-6">
							<h3 class="mb-2 text-xl font-bold">{project.title}</h3>
							<p class="mb-4 text-sm text-gray-400">{project.description}</p>

							<!-- Tags -->
							<div class="flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span class="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- ============================================
	     SKILLS SECTION
	     ============================================ -->
	<section id="skills" class="relative bg-[#0d0d0d] px-6 py-24">
		<!-- Background Pattern -->
		<div class="bg-dots absolute inset-0 opacity-30"></div>

		<div class="relative mx-auto max-w-7xl">
			<!-- Section Header -->
			<div class="mb-16 text-center">
				<span
					class="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400"
				>
					Expertise
				</span>
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">
					Technical <span class="gradient-text">Skills</span>
				</h2>
				<p class="mx-auto max-w-2xl text-gray-400">
					Technologies and tools I use to bring ideas to life
				</p>
			</div>

			<!-- Skills Grid -->
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each skillCategories as category}
					<div class="glass-card hover-lift p-6">
						<!-- Category Header -->
						<div class="mb-6 flex items-center gap-3">
							<span class="text-2xl">{category.icon}</span>
							<h3 class="text-lg font-semibold">{category.title}</h3>
						</div>

						<!-- Skills List -->
						<div class="space-y-4">
							{#each category.skills as skill}
								<div class="group">
									<div class="mb-2 flex items-center justify-between">
										<div class="flex items-center gap-3">
											<img
												src="https://skillicons.dev/icons?i={skill.icon}&theme=dark"
												alt={skill.name}
												class="h-6 w-6"
												loading="lazy"
											/>
											<span class="text-sm text-gray-300">{skill.name}</span>
										</div>
										<span class="text-xs text-gray-500">{skill.level}%</span>
									</div>
									<!-- Progress Bar -->
									<div class="h-1.5 overflow-hidden rounded-full bg-white/10">
										<div
											class="h-full rounded-full bg-linear-to-r {category.color === 'blue'
												? 'from-blue-500 to-cyan-500'
												: category.color === 'purple'
													? 'from-purple-500 to-pink-500'
													: category.color === 'cyan'
														? 'from-cyan-500 to-teal-500'
														: 'from-green-500 to-emerald-500'}"
											style="width: {skill.level}%"
										></div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ============================================
	     EDUCATION SECTION
	     ============================================ -->
	<section id="education" class="relative px-6 py-24">
		<div class="mx-auto max-w-4xl">
			<!-- Section Header -->
			<div class="mb-16 text-center">
				<span
					class="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
				>
					Background
				</span>
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">
					<span class="gradient-text">Education</span>
				</h2>
			</div>

			<!-- Timeline -->
			<div class="relative">
				<!-- Timeline Line -->
				<div
					class="absolute top-0 bottom-0 left-8 w-px bg-linear-to-b from-blue-500 via-purple-500 to-transparent md:left-1/2"
				></div>

				{#each education as edu, i}
					<div class="relative mb-12 last:mb-0">
						<!-- Timeline Dot -->
						<div class="absolute left-8 -translate-x-1/2 md:left-1/2">
							<div
								class="glow-blue flex h-4 w-4 items-center justify-center rounded-full bg-blue-500"
							>
								<div class="h-2 w-2 rounded-full bg-white"></div>
							</div>
						</div>

						<!-- Content Card -->
						<div
							class="ml-16 md:ml-0 md:w-[calc(50%-2rem)] {i % 2 === 0
								? 'md:mr-auto md:pr-8'
								: 'md:ml-auto md:pl-8'}"
						>
							<div class="glass-card hover-lift p-6">
								<!-- Year Badge -->
								<span
									class="mb-4 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400"
								>
									{edu.year}
								</span>

								<h3 class="mb-2 text-xl font-bold">{edu.degree}</h3>
								<p class="mb-2 text-gray-400">{edu.institution}</p>
								<p class="mb-4 text-sm text-gray-500">{edu.location}</p>

								<!-- GPA & Achievements -->
								<div class="flex flex-wrap items-center gap-2">
									<span class="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
										GPA: {edu.gpa}
									</span>
									{#each edu.achievements as achievement}
										<span class="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-400">
											{achievement}
										</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ============================================
	     CONTACT SECTION
	     ============================================ -->
	<section id="contact" class="relative bg-[#0d0d0d] px-6 py-24">
		<div class="bg-mesh absolute inset-0 opacity-50"></div>

		<div class="relative mx-auto max-w-4xl">
			<!-- Section Header -->
			<div class="mb-16 text-center">
				<span
					class="mb-4 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400"
				>
					Let's Connect
				</span>
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">
					Get in <span class="gradient-text">Touch</span>
				</h2>
				<p class="mx-auto max-w-2xl text-gray-400">
					Have a project in mind? Let's build something amazing together.
				</p>
			</div>

			<!-- Contact Card -->
			<div class="glass-card p-8 md:p-12">
				<form class="space-y-6">
					<div class="grid gap-6 md:grid-cols-2">
						<!-- Name -->
						<div>
							<label for="name" class="mb-2 block text-sm text-gray-400">Name</label>
							<input
								type="text"
								id="name"
								placeholder="John Doe"
								class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
							/>
						</div>

						<!-- Email -->
						<div>
							<label for="email" class="mb-2 block text-sm text-gray-400">Email</label>
							<input
								type="email"
								id="email"
								placeholder="john@example.com"
								class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
							/>
						</div>
					</div>

					<!-- Subject -->
					<div>
						<label for="subject" class="mb-2 block text-sm text-gray-400">Subject</label>
						<input
							type="text"
							id="subject"
							placeholder="Project Inquiry"
							class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
						/>
					</div>

					<!-- Message -->
					<div>
						<label for="message" class="mb-2 block text-sm text-gray-400">Message</label>
						<textarea
							id="message"
							rows="5"
							placeholder="Tell me about your project..."
							class="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
						></textarea>
					</div>

					<!-- Submit Button -->
					<button
						type="submit"
						class="glow-blue w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500"
					>
						Send Message
						<svg
							class="ml-2 inline-block h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</button>
				</form>

				<!-- Alternative Contact -->
				<div class="mt-8 flex items-center justify-center gap-4 border-t border-white/10 pt-8">
					<span class="text-gray-500">Or reach me at</span>
					<a
						href="mailto:{profile.email}"
						class="text-blue-400 transition-colors hover:text-blue-300"
					>
						{profile.email}
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================================
	     FOOTER
	     ============================================ -->
	<footer class="border-t border-white/10 px-6 py-12">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
				<!-- Logo -->
				<div class="flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-purple-500"
					>
						<span class="text-lg font-bold">K</span>
					</div>
					<span class="text-lg font-semibold">{profile.name}</span>
				</div>

				<!-- Links -->
				<nav class="flex items-center gap-6">
					<a href="#resume" class="text-sm text-gray-400 transition-colors hover:text-white"
						>About</a
					>
					<a href="#projects" class="text-sm text-gray-400 transition-colors hover:text-white"
						>Projects</a
					>
					<a href="#skills" class="text-sm text-gray-400 transition-colors hover:text-white"
						>Skills</a
					>
					<a href="#contact" class="text-sm text-gray-400 transition-colors hover:text-white"
						>Contact</a
					>
				</nav>

				<!-- Social -->
				<div class="flex gap-3">
					{#each socialLinks as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
							aria-label={social.name}
						>
							{#if social.icon === 'github'}
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
									/>
								</svg>
							{:else if social.icon === 'linkedin'}
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
									/>
								</svg>
							{:else if social.icon === 'twitter'}
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
									/>
								</svg>
							{/if}
						</a>
					{/each}
				</div>
			</div>

			<!-- Copyright -->
			<div class="mt-8 text-center text-sm text-gray-500">
				© {new Date().getFullYear()}
				{profile.name}. Built with Svelte & TailwindCSS.
			</div>
		</div>
	</footer>

	<!-- ============================================
	     PROJECT DETAIL MODAL
	     ============================================ -->
	{#if selectedProject}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
			onclick={(e) => e.target === e.currentTarget && closeModal()}
			onkeydown={(e) => e.key === 'Escape' && closeModal()}
			tabindex="-1"
			role="dialog"
			aria-label="Project details"
			aria-modal="true"
		>
			<div
				class="glass-card relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0a0a0a] ring-1 ring-white/10"
				role="document"
				transition:fade={{ duration: 200 }}
			>
				<!-- Close Button -->
				<button
					class="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
					onclick={closeModal}
					aria-label="Close modal"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div class="flex h-[90vh] flex-col lg:h-auto lg:max-h-[85vh] lg:flex-row">
					<!-- Left: Image Gallery -->
					<div class="relative flex-1 bg-black lg:w-3/5">
						<!-- Main Image -->
						<div class="relative h-64 w-full bg-gray-900 lg:h-full">
							{#key activeImageIndex}
								<img
									src={selectedProject.gallery[activeImageIndex]}
									alt={selectedProject.title}
									class="absolute inset-0 h-full w-full object-contain"
									transition:fade={{ duration: 300 }}
								/>
							{/key}

							<!-- Nav Arrows -->
							<button
								class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-white/20"
								onclick={prevImage}
								aria-label="Previous image"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 19l-7-7 7-7"
									/></svg
								>
							</button>
							<button
								class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-white/20"
								onclick={nextImage}
								aria-label="Next image"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/></svg
								>
							</button>
						</div>

						<!-- Thumbnails -->
						<div
							class="absolute right-0 bottom-0 left-0 flex gap-2 overflow-x-auto bg-linear-to-t from-black/80 to-transparent p-4"
						>
							{#each selectedProject.gallery as img, i}
								<button
									class="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all {activeImageIndex ===
									i
										? 'border-blue-500'
										: 'border-transparent opacity-50 hover:opacity-100'}"
									onclick={() => setActiveImage(i)}
								>
									<img src={img} alt="" class="h-full w-full object-cover" />
								</button>
							{/each}
						</div>
					</div>

					<!-- Right: Details -->
					<div class="flex-1 overflow-y-auto p-8 lg:w-2/5">
						<h2 class="mb-2 text-3xl font-bold">{selectedProject.title}</h2>

						<div class="mb-6 flex flex-wrap gap-2">
							{#each selectedProject.tags as tag}
								<span
									class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
								>
									{tag}
								</span>
							{/each}
						</div>

						<div class="prose mb-8 prose-invert">
							<p class="text-lg leading-relaxed text-gray-300">{selectedProject.longDescription}</p>

							<div class="mt-6 border-t border-white/10 pt-6">
								<h4 class="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
									Key Features
								</h4>
								<ul class="space-y-2 text-gray-400">
									<li class="flex items-start gap-2">
										<svg
											class="mt-0.5 h-5 w-5 shrink-0 text-green-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 13l4 4L19 7"
											/></svg
										>
										<span>Real-time data synchronization</span>
									</li>
									<li class="flex items-start gap-2">
										<svg
											class="mt-0.5 h-5 w-5 shrink-0 text-green-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 13l4 4L19 7"
											/></svg
										>
										<span>Modern, responsive user interface</span>
									</li>
									<li class="flex items-start gap-2">
										<svg
											class="mt-0.5 h-5 w-5 shrink-0 text-green-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 13l4 4L19 7"
											/></svg
										>
										<span>Secure authentication & authorization</span>
									</li>
								</ul>
							</div>
						</div>

						<div class="mt-auto flex gap-4">
							<a
								href={selectedProject.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-500"
							>
								Live Demo
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/></svg
								>
							</a>
							<a
								href={selectedProject.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
							>
								Source Code
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"
									><path
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
									/></svg
								>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
