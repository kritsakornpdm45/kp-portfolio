<script lang="ts">
	import { onMount } from 'svelte';

	let isScrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav
	class="fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 transition-all duration-300 ease-in-out {isScrolled
		? 'mt-4 py-3'
		: 'py-6'}"
>
	<div class="container mx-auto px-6">
		<div class="flex items-center {isScrolled ? 'justify-center' : 'justify-between'}">
			<!-- Logo Section - ซ่อนเมื่อ scroll -->
			{#if !isScrolled}
				<div class="flex items-center gap-3 transition-opacity duration-300">
					<div class="flex h-10 w-10 items-center justify-center bg-white">
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
							<path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="black" stroke-width="2" />
						</svg>
					</div>
					<div>
						<h1 class="text-lg font-semibold text-white">Flow Design</h1>
						<span
							class="inline-flex items-center gap-1 rounded bg-blue-600 px-2 py-0.5 text-xs text-white"
						>
							<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							Premium Partner
						</span>
					</div>
				</div>
			{/if}

			<!-- Menu Items + Hire Me (combined when scrolled) -->
			<div
				class="flex items-center gap-6 rounded-xl border border-white/20 bg-white/10 px-8 py-3 backdrop-blur-lg"
			>
				<a href="#work" class="text-white transition-colors hover:text-gray-300">Work</a>
				<a href="#capabilities" class="text-white transition-colors hover:text-gray-300"
					>Capabilities</a
				>
				<a href="#process" class="text-white transition-colors hover:text-gray-300">Process</a>
				<a href="#testimonial" class="text-white transition-colors hover:text-gray-300"
					>Testimonial</a
				>

				<!-- Hire Me inside menu when scrolled -->
				{#if isScrolled}
					<span class="h-6 w-px bg-white/30"></span>
					<button class="flex items-center gap-2 text-white transition-colors hover:text-gray-300">
						<span class="h-2 w-2 rounded-full bg-green-500"></span>
						Hire me
					</button>
				{/if}
			</div>

			<!-- Hire Me Button (separate when not scrolled) -->
			{#if !isScrolled}
				<button
					class="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-lg transition-colors hover:bg-white/20"
				>
					<span class="h-2 w-2 rounded-full bg-green-500"></span>
					Hire me
				</button>
			{/if}
		</div>
	</div>
</nav>
