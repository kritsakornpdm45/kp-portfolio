<script lang="ts">
	const capabilities = [
		{
			title: 'Full-Stack Development',
			desc: 'Building scalable web applications with modern frameworks like React, Svelte, Node.js, and cloud services.',
			icon: 'code'
		},
		{
			title: 'API & Backend Systems',
			desc: 'Designing RESTful APIs, microservices architecture, and database optimization for high-performance systems.',
			icon: 'server'
		},
		{
			title: 'DevOps & Deployment',
			desc: 'CI/CD pipelines, Docker containerization, and cloud infrastructure management on AWS/GCP.',
			icon: 'cloud'
		}
	];

	const steps = ['Discuss', 'Plan', 'Develop', 'Test', 'Deploy'];

	const techStack = ['React', 'Svelte', 'Node.js', 'TypeScript', 'PostgreSQL'];
</script>

<div class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section id="resume" class="flex min-h-screen items-center justify-center px-6 pt-10">
		<div class="mx-auto max-w-4xl text-center">
			<div class="mb-4">
				<span class="text-sm tracking-wider text-gray-400 uppercase">Software Engineer</span>
			</div>

			<h1 class="mb-6 text-5xl font-bold md:text-7xl">
				<div class="mb-2">Building</div>
				<div class="mb-2 flex items-center justify-center gap-4">
					<svg class="h-16 w-16" viewBox="0 0 50 50" fill="none">
						<rect width="50" height="50" rx="10" fill="#4353FF" />
						<path
							d="M15 20L25 15L35 20V30L25 35L15 30V20Z"
							stroke="white"
							stroke-width="2"
							fill="none"
						/>
						<circle cx="25" cy="25" r="4" fill="white" />
					</svg>
				</div>
				<div>digital solutions</div>
			</h1>

			<p class="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
				Crafting high-performance web applications and scalable backend systems. Turning complex
				problems into elegant, maintainable code.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<button
					class="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
				>
					View Projects
					<span>→</span>
				</button>
				<a
					href="https://github.com"
					target="_blank"
					class="flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
						/>
					</svg>
					GitHub Profile
				</a>
			</div>

			<div class="mt-12 flex items-center justify-center gap-4">
				<div class="flex -space-x-2">
					<div class="h-12 w-12 rounded-full border-2 border-black bg-gray-700 shadow-lg"></div>
					<div class="h-12 w-12 rounded-full border-2 border-black bg-gray-600 shadow-lg"></div>
					<div class="h-12 w-12 rounded-full border-2 border-black bg-gray-500 shadow-lg"></div>
				</div>
				<div class="text-left">
					<div class="font-semibold">50+ projects completed.</div>
					<a href="#reviews" class="text-sm text-gray-400 transition-colors hover:text-white">
						Read testimonials →
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Tech Stack Section -->
	<section class="border-t border-gray-800 px-6 py-20">
		<div class="mx-auto max-w-6xl text-center">
			<p class="mb-12 text-sm tracking-wider text-gray-400 uppercase">
				<span class="font-medium text-white">3+ years</span> of Development Experience
			</p>

			<div class="grid grid-cols-2 items-center gap-8 md:grid-cols-5">
				{#each techStack as tech}
					<div
						class="flex h-12 items-center justify-center rounded bg-gray-800/50 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
					>
						{tech}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Work Section -->
	<section id="projects" class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">Featured Projects</h2>
				<p class="text-gray-400">
					A collection of projects I've built - from web apps to backend systems.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				{#each [1, 2, 3, 4] as i}
					<div
						class="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl transition-all duration-500 hover:scale-[1.02]"
					>
						<div
							class="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10 transition-opacity group-hover:opacity-100"
						></div>
						<div
							class="absolute right-4 bottom-4 translate-y-2 transform rounded-full bg-white px-5 py-2 font-medium text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
						>
							View Project →
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills" class="overflow-hidden bg-gray-950 py-20">
		<div class="mb-16 px-6 text-center">
			<h2 class="mb-4 text-4xl font-bold md:text-5xl">Technical Skills</h2>
			<p class="text-gray-400">Technologies I work with to build high-performance solutions.</p>
		</div>

		<!-- Row 1: Sliding Left -->
		<div class="relative mb-12 flex w-full overflow-hidden py-4">
			<div class="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 px-6">
				{#each ['react', 'vue', 'angular', 'svelte', 'nextjs', 'gcp', 'tailwindcss', 'redux', 'html', 'css', 'js', 'ts'] as skill}
					<div class="group relative flex flex-col items-center gap-2">
						<div
							class="flex h-20 w-20 transform items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
						>
							<img
								src="https://skillicons.dev/icons?i={skill}&theme=dark"
								alt={skill}
								class="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
					</div>
				{/each}
			</div>
			<div
				aria-hidden="true"
				class="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 px-6"
			>
				{#each ['react', 'vue', 'angular', 'svelte', 'nextjs', 'gcp', 'tailwindcss', 'redux', 'html', 'css', 'js', 'ts'] as skill}
					<div class="group relative flex flex-col items-center gap-2">
						<div
							class="flex h-20 w-20 transform items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
						>
							<img
								src="https://skillicons.dev/icons?i={skill}&theme=dark"
								alt={skill}
								class="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Row 2: Sliding Right -->
		<div class="relative flex w-full overflow-hidden py-4">
			<div
				class="animate-marquee-reverse flex min-w-full shrink-0 items-center justify-around gap-12 px-6"
			>
				{#each ['nodejs', 'express', 'nestjs', 'python', 'django', 'fastapi', 'postgresql', 'mongodb', 'docker', 'kubernetes', 'aws', 'firebase', 'git', 'linux'] as skill}
					<div class="group relative flex flex-col items-center gap-2">
						<div
							class="flex h-20 w-20 transform items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
						>
							<img
								src="https://skillicons.dev/icons?i={skill}&theme=dark"
								alt={skill}
								class="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
					</div>
				{/each}
			</div>
			<div
				aria-hidden="true"
				class="animate-marquee-reverse flex min-w-full shrink-0 items-center justify-around gap-12 px-6"
			>
				{#each ['nodejs', 'express', 'nestjs', 'python', 'django', 'fastapi', 'postgresql', 'mongodb', 'docker', 'kubernetes', 'aws', 'firebase', 'git', 'linux'] as skill}
					<div class="group relative flex flex-col items-center gap-2">
						<div
							class="flex h-20 w-20 transform items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
						>
							<img
								src="https://skillicons.dev/icons?i={skill}&theme=dark"
								alt={skill}
								class="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Education Section -->
	<section id="education" class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<div class="mb-16 text-center">
				<h2 class="text-4xl font-bold md:text-5xl">Education</h2>
			</div>

			<div class="space-y-8">
				<div
					class="group relative rounded-2xl border border-gray-800 bg-gray-900 p-8 transition-all hover:border-blue-500/50"
				>
					<div
						class="absolute top-8 -left-3 hidden h-6 w-6 rounded-full border-4 border-black bg-blue-500 md:block"
					></div>
					<div class="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
						<h3 class="text-xl font-bold text-white">Bachelor of Computer Science</h3>
						<span class="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400"
							>2020 - 2024</span
						>
					</div>
					<div class="mb-4 text-lg text-gray-400">University Name, Location</div>
					<p class="text-sm leading-relaxed text-gray-500">
						Relevant Coursework: Data Structures & Algorithms, Database Systems, Web Development,
						Software Engineering.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="px-6 py-20">
		<div
			class="mx-auto max-w-4xl rounded-3xl border border-gray-800 bg-linear-to-b from-gray-900 to-black p-16 text-center"
		>
			<div class="mb-8 flex items-center justify-center gap-6">
				<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-800 text-2xl">
					💡
				</div>
				<span class="text-3xl text-gray-700">→</span>
				<div
					class="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
				>
					🚀
				</div>
			</div>
			<h2 class="mb-8 text-3xl leading-tight font-bold md:text-4xl">
				Have a project in mind? Let's build something amazing together.
			</h2>
			<button
				class="rounded-xl bg-white px-10 py-4 font-bold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-200"
			>
				Get in Touch →
			</button>
		</div>
	</section>

	<!-- Tech Marquee -->
	<section class="overflow-hidden border-t border-gray-800 bg-black py-12">
		<div class="animate-marquee flex items-center gap-12 whitespace-nowrap">
			{#each Array(10) as _}
				<div
					class="flex items-center gap-3 opacity-20 transition-opacity duration-300 hover:opacity-50"
				>
					<span class="text-2xl">⚡</span>
					<span class="text-sm font-bold tracking-widest uppercase"
						>React • Svelte • Node.js • TypeScript • PostgreSQL</span
					>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes marquee-reverse {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}

	.animate-marquee {
		animation: marquee 30s linear infinite;
	}

	.animate-marquee-reverse {
		animation: marquee-reverse 30s linear infinite;
	}
</style>
