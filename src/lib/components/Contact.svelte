<script lang="ts">
	import { profile } from '$lib/profile';

	let copied = $state(false);

	function copyEmail() {
		navigator.clipboard.writeText(profile.email);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	const contacts = [
		{
			name: 'Email',
			value: profile.email,
			href: `mailto:${profile.email}`,
			icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: 'text-blue-400',
			bg: 'bg-blue-500/10',
			border: 'border-blue-500/20'
		},
		{
			name: 'LinkedIn',
			value: 'Connect professionally',
			href: 'https://www.linkedin.com/in/kritsakorn-piddam-2316082a2/',
			icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
			color: 'text-blue-500',
			bg: 'bg-blue-500/10',
			border: 'border-blue-500/20'
		},
		{
			name: 'GitHub',
			value: 'Check my code',
			href: 'https://github.com/kritsakornpdm45',
			icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
			color: 'text-gray-200',
			bg: 'bg-gray-500/10',
			border: 'border-gray-500/20'
		}
	];
</script>

<section id="contact" class="relative overflow-hidden bg-[#0d0d0d] px-6 py-24">
	<div class="bg-mesh absolute inset-0 opacity-50"></div>

	<div class="relative mx-auto max-w-5xl">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<span
				class="mb-4 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400"
			>
				Available for opportunities
			</span>
			<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				Let's Work <span class="gradient-text">Together</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-400">
				I'm always open to discussing product design work or partnership opportunities.
			</p>
		</div>

		<!-- Contact Grid -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Email Card (Primary) -->
			<div
				class="glass-card hover-lift group relative col-span-1 overflow-hidden p-8 lg:col-span-1"
			>
				<div
					class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 transition-all duration-500 group-hover:scale-110"
				></div>

				<div
					class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</div>

				<h3 class="mb-2 text-xl font-bold text-white">Email</h3>
				<p class="mb-6 text-sm text-gray-400">Drop me a line anytime!</p>

				<div class="flex flex-col gap-3">
					<a
						href="mailto:{profile.email}"
						class="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
					>
						Send Email
					</a>
					<button
						onclick={copyEmail}
						class="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
					>
						{#if copied}
							<span class="text-green-400">Copied!</span>
						{:else}
							<span>Copy Address</span>
						{/if}
					</button>
				</div>
			</div>

			<!-- Social Links -->
			{#each contacts.slice(1) as contact}
				<a
					href={contact.href}
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card hover-lift group relative flex flex-col justify-between overflow-hidden p-8 transition-all hover:border-white/20"
				>
					<div
						class="absolute -top-10 -right-10 h-32 w-32 rounded-full {contact.bg} transition-all duration-500 group-hover:scale-110"
					></div>

					<div class="relative z-10">
						<div
							class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl {contact.bg} {contact.color}"
						>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path d={contact.icon} />
							</svg>
						</div>

						<h3 class="mb-2 text-xl font-bold text-white">{contact.name}</h3>
						<p class="text-sm text-gray-400">{contact.value}</p>
					</div>

					<div
						class="mt-6 flex items-center gap-2 text-sm font-medium text-white/60 transition-colors group-hover:text-white"
					>
						<span>Visit Profile</span>
						<svg
							class="h-4 w-4 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</div>
				</a>
			{/each}
		</div>

		<!-- Footer Note -->
		<div class="mt-16 text-center">
			<p class="text-gray-500">
				Prefer a quick chat?
				<a href="mailto:{profile.email}" class="text-blue-400 hover:text-blue-300 hover:underline">
					Schedule a call
				</a>
			</p>
		</div>
	</div>
</section>
