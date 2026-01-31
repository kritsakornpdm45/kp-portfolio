<script lang="ts">
	import { onMount } from 'svelte';

	// Navigation items - single source of truth
	const navItems = [
		{ href: '#resume', label: 'Resume' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#education', label: 'Education' }
	] as const;

	let isScrolled = $state(false);
	let isMenuOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isMenuOpen) {
				isMenuOpen = false;
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleKeydown);
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
	aria-label="Main navigation"
>
	<div class="container mx-auto px-6">
		<div class="flex items-center {isScrolled ? 'justify-center' : 'justify-between'}">
			<!-- Logo Section - Hidden when scrolled (desktop only) -->
			{#if !isScrolled}
				<div class="flex items-center gap-3 transition-opacity duration-300">
					<div class="flex h-10 w-10 items-center justify-center bg-white">
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="black" stroke-width="2" />
						</svg>
					</div>
					<div class="hidden sm:block">
						<h1 class="text-lg font-semibold text-white">Flow Design</h1>
						<span
							class="inline-flex items-center gap-1 rounded bg-blue-600 px-2 py-0.5 text-xs text-white"
						>
							<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
			<div class="glass hidden items-center gap-6 rounded-xl px-8 py-4 md:flex">
				{#each navItems as item}
					<a href={item.href} class="text-white transition-colors hover:text-gray-300">
						{item.label}
					</a>
				{/each}

				<!-- Hire Me inside menu when scrolled -->
				{#if isScrolled}
					<span class="h-6 w-px bg-white/30" aria-hidden="true"></span>
					<button class="flex items-center gap-2 text-white transition-colors hover:text-gray-300">
						<span class="h-2 w-2 rounded-full bg-green-500" aria-hidden="true"></span>
						Hire me
					</button>
				{/if}
			</div>

			<!-- Hire Me Button (separate when not scrolled) - Desktop only -->
			{#if !isScrolled}
				<button
					class="glass hidden items-center gap-2 rounded-xl px-6 py-4 text-white transition-colors hover:bg-white/20 md:flex"
				>
					<span class="h-2 w-2 rounded-full bg-green-500" aria-hidden="true"></span>
					Hire me
				</button>
			{/if}

			<!-- Mobile Hamburger Button -->
			<button
				class="glass flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
				onclick={toggleMenu}
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
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
			<div id="mobile-menu" class="glass-dark mt-4 rounded-xl p-6 md:hidden">
				<div class="flex flex-col gap-4">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-lg text-white transition-colors hover:text-gray-300"
							onclick={closeMenu}
						>
							{item.label}
						</a>
					{/each}

					<hr class="border-white/20" />

					<button
						class="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
						onclick={closeMenu}
					>
						<span class="h-2 w-2 rounded-full bg-green-500" aria-hidden="true"></span>
						Hire me
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>
