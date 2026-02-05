<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Project } from '$lib/data';

	interface Props {
		project: Project | null;
		onClose: () => void;
	}

	let { project, onClose }: Props = $props();
	let activeImageIndex = $state(0);
	let isZoomed = $state(false);
	function toggleZoom() {
		isZoomed = !isZoomed;
	}

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
		isZoomed = false;
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
				<div class="relative flex-1 overflow-hidden bg-black lg:w-3/5">
					<!-- Main Image Container -->
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="relative h-64 w-full cursor-zoom-in bg-gray-900 lg:h-full"
						onclick={toggleZoom}
					>
						{#key activeImageIndex}
							<img
								src={project.gallery[activeImageIndex]}
								alt={project.title}
								class="absolute inset-0 h-full w-full object-contain"
								transition:fade={{ duration: 300 }}
								decoding="async"
							/>
						{/key}

						<!-- Zoom Hint Overlay -->
						<div
							class="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-xs text-white opacity-0 backdrop-blur-md transition-opacity lg:bottom-24 lg:group-hover:opacity-100"
						>
							Click to fullscreen
						</div>

						<!-- Nav Arrows -->
						<button
							class="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:bg-white/20"
							onclick={(e) => {
								e.stopPropagation();
								prevImage();
							}}
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
							class="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:bg-white/20"
							onclick={(e) => {
								e.stopPropagation();
								nextImage();
							}}
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

					<!-- Fullscreen Zoom Overlay -->
					{#if isZoomed}
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
						<div
							class="fixed inset-0 z-60 flex items-center justify-center bg-black/95 backdrop-blur-md"
							transition:fade={{ duration: 200 }}
							onclick={(e) => e.target === e.currentTarget && toggleZoom()}
							onkeydown={(e) => e.key === 'Escape' && toggleZoom()}
							tabindex="-1"
							role="dialog"
							aria-label="Fullscreen image view"
						>
							<!-- Close Button -->
							<button
								class="absolute top-6 right-6 z-70 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
								onclick={toggleZoom}
								aria-label="Close fullscreen view"
							>
								<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>

							<!-- Nav Arrows -->
							{#if project.gallery.length > 1}
								<button
									class="absolute left-6 z-70 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
									onclick={(e) => {
										e.stopPropagation();
										prevImage();
									}}
									aria-label="Previous image"
								>
									<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>
								<button
									class="absolute right-6 z-70 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
									onclick={(e) => {
										e.stopPropagation();
										nextImage();
									}}
									aria-label="Next image"
								>
									<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							{/if}

							<div class="h-full w-full p-4 lg:p-12">
								{#key activeImageIndex}
									<img
										src={project.gallery[activeImageIndex]}
										alt={project.title}
										class="h-full w-full object-contain"
										transition:fade={{ duration: 300 }}
									/>
								{/key}
							</div>
						</div>
					{/if}

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
								<img
									src={img}
									alt=""
									class="h-full w-full object-cover"
									loading="lazy"
									decoding="async"
								/>
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
								{#each project.features || [] as feature}
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
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<div class="mt-auto flex gap-4">
						{#if project.liveUrl && project.liveUrl !== '#'}
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
						{:else}
							<button
								disabled
								class="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/5 px-6 py-3 font-semibold text-white/20"
							>
								Offline
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/></svg
								>
							</button>
						{/if}
						{#if project.githubUrl}
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
						{:else}
							<button
								disabled
								class="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/5 px-6 py-3 font-semibold text-white/20"
							>
								Private
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"
									><path
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
									/></svg
								>
							</button>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
