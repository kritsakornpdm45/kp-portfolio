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
	<section class="flex min-h-screen items-center justify-center px-6 pt-10">
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
					<a href="#testimonial" class="text-sm text-gray-400 transition-colors hover:text-white">
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
	<section id="work" class="px-6 py-20">
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

	<!-- Capabilities Section -->
	<section id="capabilities" class="bg-gray-950 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="text-4xl font-bold md:text-5xl">What I Do</h2>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				{#each capabilities as cap}
					<div
						class="group rounded-2xl border border-gray-800 bg-black p-8 transition-all duration-300 hover:border-blue-500/50"
					>
						<div
							class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
						>
							{#if cap.icon === 'code'}
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
									/>
								</svg>
							{:else if cap.icon === 'server'}
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
									/>
								</svg>
							{:else}
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
									/>
								</svg>
							{/if}
						</div>
						<h3 class="mb-3 text-xl font-bold">{cap.title}</h3>
						<p class="text-sm leading-relaxed text-gray-400">
							{cap.desc}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section id="process" class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">How I Work</h2>
				<p class="text-gray-400">
					A clear, collaborative process from initial discussion to final deployment.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-6 md:grid-cols-5">
				{#each steps as step, i}
					<div class="group text-center">
						<div
							class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gray-800 bg-gray-900 font-bold text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white"
						>
							{String(i + 1).padStart(2, '0')}
						</div>
						<h3 class="mb-2 font-bold">{step}</h3>
						<p class="text-xs text-gray-500">Agile approach</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section id="testimonial" class="bg-gray-950 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center">
				<h2 class="text-4xl font-bold md:text-5xl">What Clients Say</h2>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				{#each [1, 2] as i}
					<div class="rounded-2xl border border-gray-800 bg-black p-8 shadow-xl">
						<div class="mb-6 flex gap-1 text-yellow-500">
							{#each Array(5) as _}
								<svg class="h-5 w-5 fill-current" viewBox="0 0 20 20">
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							{/each}
						</div>
						<p class="mb-8 text-lg leading-relaxed text-gray-300 italic">
							"Excellent work on our web application. Great understanding of requirements, clean
							code, and delivered ahead of schedule. Would definitely work together again!"
						</p>
						<div class="flex items-center gap-4">
							<div class="h-12 w-12 rounded-full border border-gray-700 bg-gray-800"></div>
							<div>
								<div class="font-bold text-white">Client Name</div>
								<div class="text-sm tracking-wide text-gray-500 uppercase">CEO, Tech Startup</div>
							</div>
						</div>
					</div>
				{/each}
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
			transform: translateX(-50%);
		}
	}

	.animate-marquee {
		animation: marquee 40s linear infinite;
	}
</style>
