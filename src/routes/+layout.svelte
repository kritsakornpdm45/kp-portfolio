<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

	// SEO Configuration
	const siteConfig = {
		title: 'Flow Design | Software Engineer Portfolio',
		description:
			'Crafting high-performance web applications and scalable backend systems. Full-stack developer specializing in React, Svelte, Node.js, and cloud services.',
		keywords: 'software engineer, full-stack developer, web developer, React, Svelte, Node.js',
		author: 'Flow Design'
	};
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{siteConfig.title}</title>
	<meta name="title" content={siteConfig.title} />
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords} />
	<meta name="author" content={siteConfig.author} />

	<!-- Favicon -->
	<link rel="icon" href={favicon} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={siteConfig.title} />
	<meta property="og:description" content={siteConfig.description} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={siteConfig.title} />
	<meta property="twitter:description" content={siteConfig.description} />
</svelte:head>

<!-- Skip to main content link for accessibility -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<div class="min-h-screen bg-black">
	<Navbar />

	<main id="main-content" class="pt-20 text-white">
		{@render children()}
	</main>
</div>
