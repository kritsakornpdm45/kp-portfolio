<script lang="ts">
	import { stats, socialLinks } from '$lib/data';
	import { profile } from '$lib/profile';

	interface Props {
		onViewWork?: () => void;
	}

	let { onViewWork }: Props = $props();
</script>

<section id="hero" class="relative min-h-screen overflow-hidden">
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
						<button
							onclick={onViewWork}
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
						</button>
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
									{:else if social.icon === 'email'}
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
										class="relative h-32 w-32 rounded-full border-4 border-[#0a0a0a] bg-gray-800 object-cover"
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
										<div
											class="gradient-text font-bold {stat.value === '∞' ? 'text-4xl' : 'text-2xl'}"
										>
											{stat.value}
										</div>
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
