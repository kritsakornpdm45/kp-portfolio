<script lang="ts">
	import { education } from '$lib/data';
</script>

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
