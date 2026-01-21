<script lang="ts">
	import { onMount } from 'svelte';

	let isScrolled = $state(false);
	let isMenuOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 transition-all duration-300 ease-in-out {isScrolled
		? 'mt-4 py-3'
		: 'py-6'}"
>
	<div class="container mx-auto px-6">
		<div class="flex items-center {isScrolled ? 'justify-center' : 'justify-between'}">
			<!-- Logo Section - ซ่อนเมื่อ scroll (desktop only) -->
			{#if !isScrolled}
				<div class="flex items-center gap-3 transition-opacity duration-300">
					<div class="flex h-10 w-10 items-center justify-center bg-white">
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
							<path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="black" stroke-width="2" />
						</svg>
					</div>
					<div class="hidden sm:block">
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

			<!-- Desktop Menu Items -->
			<div
				class="hidden items-center gap-6 rounded-xl border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-lg md:flex"
			>
				<a href="#resume" class="text-white transition-colors hover:text-gray-300">Resume</a>
				<a href="#projects" class="text-white transition-colors hover:text-gray-300">Projects</a>
				<a href="#skills" class="text-white transition-colors hover:text-gray-300">Skills</a>
				<a href="#education" class="text-white transition-colors hover:text-gray-300">Education</a>

				<!-- Hire Me inside menu when scrolled -->
				{#if isScrolled}
					<span class="h-6 w-px bg-white/30"></span>
					<button class="flex items-center gap-2 text-white transition-colors hover:text-gray-300">
						<span class="h-2 w-2 rounded-full bg-green-500"></span>
						Hire me
					</button>
				{/if}
			</div>

			<!-- Hire Me Button (separate when not scrolled) - Desktop only -->
			{#if !isScrolled}
				<button
					class="hidden items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white backdrop-blur-lg transition-colors hover:bg-white/20 md:flex"
				>
					<span class="h-2 w-2 rounded-full bg-green-500"></span>
					Hire me
				</button>
			{/if}

			<!-- Mobile Hamburger Button -->
			<button
				class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-lg md:hidden"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				<div class="relative flex h-5 w-6 flex-col justify-between">
					<span
						class="h-0.5 w-full bg-white transition-all duration-300 {isMenuOpen
							? 'translate-y-2 rotate-45'
							: ''}"
					></span>
					<span
						class="h-0.5 w-full bg-white transition-opacity duration-300 {isMenuOpen
							? 'opacity-0'
							: 'opacity-100'}"
					></span>
					<span
						class="h-0.5 w-full bg-white transition-all duration-300 {isMenuOpen
							? '-translate-y-2 -rotate-45'
							: ''}"
					></span>
				</div>
			</button>
		</div>

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div
				class="mt-4 rounded-xl border border-white/20 bg-black/90 p-6 backdrop-blur-lg md:hidden"
			>
				<div class="flex flex-col gap-4">
					<a
						href="#resume"
						class="text-lg text-white transition-colors hover:text-gray-300"
						onclick={closeMenu}
					>
						Resume
					</a>
					<a
						href="#projects"
						class="text-lg text-white transition-colors hover:text-gray-300"
						onclick={closeMenu}
					>
						Projects
					</a>
					<a
						href="#skills"
						class="text-lg text-white transition-colors hover:text-gray-300"
						onclick={closeMenu}
					>
						Skills
					</a>
					<a
						href="#education"
						class="text-lg text-white transition-colors hover:text-gray-300"
						onclick={closeMenu}
					>
						Education
					</a>

					<hr class="border-white/20" />

					<button
						class="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
						onclick={closeMenu}
					>
						<span class="h-2 w-2 rounded-full bg-green-500"></span>
						Hire me
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>
