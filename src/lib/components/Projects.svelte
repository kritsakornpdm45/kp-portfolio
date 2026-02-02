<script lang="ts">
	import { projects } from '$lib/data';
	import type { Project } from '$lib/data';

	interface Props {
		onOpenModal?: (project: Project) => void;
	}

	let { onOpenModal }: Props = $props();
</script>

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
			{#each projects as project}
				<button
					class="group glass-card card-shine hover-lift w-full overflow-hidden text-left {project.featured
						? 'md:col-span-1'
						: ''}"
					onclick={() => onOpenModal?.(project)}
				>
					<!-- Project Image -->
					<div class="relative aspect-video overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							loading="lazy"
							decoding="async"
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
