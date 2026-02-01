<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Project } from '$lib/data';

	interface Props {
		project: Project | null;
		onClose: () => void;
	}

	let { project, onClose }: Props = $props();
	let activeImageIndex = $state(0);

	$effect(() => {
		if (project) {
			activeImageIndex = 0;
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	function nextImage() {
		if (project) {
			activeImageIndex = (activeImageIndex + 1) % project.gallery.length;
		}
	}

	function prevImage() {
		if (project) {
			activeImageIndex = (activeImageIndex - 1 + project.gallery.length) % project.gallery.length;
		}
	}

	function setActiveImage(index: number) {
		activeImageIndex = index;
	}
</script>

{#if project}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
		onclick={(e) => e.target === e.currentTarget && onClose()}
		onkeydown={(e) => e.key === 'Escape' && onClose()}
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
				onclick={onClose}
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
								src={project.gallery[activeImageIndex]}
								alt={project.title}
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
						{#each project.gallery as img, i}
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
					<h2 class="mb-2 text-3xl font-bold">{project.title}</h2>

					<div class="mb-6 flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span
								class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
							>
								{tag}
							</span>
						{/each}
					</div>

					<div class="prose mb-8 prose-invert">
						<p class="text-lg leading-relaxed text-gray-300">{project.longDescription}</p>

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
							href={project.liveUrl}
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
							href={project.githubUrl}
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
