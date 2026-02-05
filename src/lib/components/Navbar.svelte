<script lang="ts">
	import { onMount } from 'svelte';

	// Navigation items
	const navItems = [
		{ href: '#hero', label: 'About' },
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
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {isScrolled
		? 'border-b border-white/10 bg-black/80 backdrop-blur-xl'
		: 'bg-transparent'}"
	aria-label="Main navigation"
>
	<div class="mx-auto max-w-7xl px-6">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a href="#hero" class="group flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-purple-500 transition-transform group-hover:scale-110"
				>
					<span class="text-lg font-bold text-white">K</span>
				</div>
				<span class="hidden text-lg font-semibold text-white sm:block">Kritsakorn</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-1 md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						class="rounded-lg px-4 py-2 text-sm text-gray-300 transition-all hover:bg-white/10 hover:text-white"
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- CTA Button (Desktop) -->
			<div class="hidden md:block">
				<a
					href="#contact"
					class="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:opacity-90"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
					</span>
					Contact
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 md:hidden"
				onclick={toggleMenu}
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
			>
				<div class="relative flex h-5 w-5 flex-col items-center justify-center">
					<span
						class="absolute h-0.5 w-5 bg-white transition-all duration-300 {isMenuOpen
							? 'rotate-45'
							: '-translate-y-1.5'}"
					></span>
					<span
						class="h-0.5 w-5 bg-white transition-opacity duration-300 {isMenuOpen
							? 'opacity-0'
							: 'opacity-100'}"
					></span>
					<span
						class="absolute h-0.5 w-5 bg-white transition-all duration-300 {isMenuOpen
							? '-rotate-45'
							: 'translate-y-1.5'}"
					></span>
				</div>
			</button>
		</div>

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div id="mobile-menu" class="border-t border-white/10 pb-6 md:hidden">
				<div class="flex flex-col gap-2 pt-4">
					{#each navItems as item}
						<a
							href={item.href}
							class="rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
							onclick={closeMenu}
						>
							{item.label}
						</a>
					{/each}

					<div class="mt-4 border-t border-white/10 pt-4">
						<a
							href="#contact"
							class="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 px-5 py-3 font-medium text-white"
							onclick={closeMenu}
						>
							<span class="relative flex h-2 w-2">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
								></span>
								<span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
							</span>
							Contact
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>
