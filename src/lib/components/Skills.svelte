<script lang="ts">
	import { skillCategories } from '$lib/data';
	import { fade, slide, fly } from 'svelte/transition';

	let activeTab = $state(0);

	// Flatten all skills for the marquee
	const allSkills = skillCategories.flatMap((cat) =>
		cat.skills.map((s) => ({ ...s, color: cat.color }))
	);

	// Split skills into two rows for the marquee
	const midPoint = Math.ceil(allSkills.length / 2);
	const row1Skills = allSkills.slice(0, midPoint);
	const row2Skills = allSkills.slice(midPoint);

	// Double the lists for seamless marquee
	const marqueeRow1 = [...row1Skills, ...row1Skills];
	const marqueeRow2 = [...row2Skills, ...row2Skills];
</script>

<section id="skills" class="relative overflow-hidden bg-[#0d0d0d] py-24">
	<!-- Background Pattern -->
	<div class="bg-dots absolute inset-0 opacity-30"></div>

	<!-- Top Marquee (Modern SaaS Feel) -->
	<div class="relative z-10 mb-20 space-y-4">
		<!-- Row 1: Slide Left -->
		<div class="flex overflow-hidden py-2 select-none">
			<div class="animate-marquee flex w-max shrink-0 items-center justify-start gap-6 pr-6">
				{#each marqueeRow1 as skill}
					<div
						class="glass flex items-center gap-3 rounded-xl border-white/5 bg-white/5 px-6 py-3 transition-colors hover:bg-white/10"
					>
						<img
							src="https://skillicons.dev/icons?i={skill.icon}&theme=dark"
							alt={skill.name}
							class="h-7 w-7"
							loading="lazy"
						/>
						<span class="font-medium whitespace-nowrap text-gray-300">{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Row 2: Slide Right -->
		<div class="flex overflow-hidden py-2 select-none">
			<div
				class="animate-marquee-reverse flex w-max shrink-0 items-center justify-start gap-6 pr-6"
			>
				{#each marqueeRow2 as skill}
					<div
						class="glass flex items-center gap-3 rounded-xl border-white/5 bg-white/5 px-6 py-3 transition-colors hover:bg-white/10"
					>
						<img
							src="https://skillicons.dev/icons?i={skill.icon}&theme=dark"
							alt={skill.name}
							class="h-7 w-7"
							loading="lazy"
						/>
						<span class="font-medium whitespace-nowrap text-gray-300">{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Gradient Overlays for Marquee -->
		<div
			class="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-linear-to-r from-[#0d0d0d] to-transparent"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-linear-to-l from-[#0d0d0d] to-transparent"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-6">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<span
				class="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400"
			>
				Expertise
			</span>
			<h2 class="mb-4 text-4xl font-bold md:text-5xl">
				Technical <span class="gradient-text">Skills</span>
			</h2>
			<p class="mx-auto max-w-2xl text-gray-400">
				Deep dive into my technical stack and proficiency levels
			</p>
		</div>

		<!-- Category Slider/Tabs -->
		<div class="mx-auto mb-12 flex max-w-2xl flex-wrap justify-center gap-4">
			{#each skillCategories as category, i}
				<button
					class="flex items-center gap-2 rounded-xl border px-6 py-3 transition-all duration-300 {activeTab ===
					i
						? 'border-purple-500 bg-purple-500/10 text-white shadow-lg shadow-purple-500/20'
						: 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}"
					onclick={() => (activeTab = i)}
				>
					<span class="text-xl">{category.icon}</span>
					<span class="font-medium">{category.title}</span>
				</button>
			{/each}
		</div>

		<!-- Active Category Content -->
		<div class="mx-auto max-w-4xl">
			{#key activeTab}
				<div
					class="glass-card grid gap-8 p-8 md:grid-cols-2 lg:p-12"
					in:fly={{ y: 20, duration: 400 }}
				>
					<div class="mb-4 md:col-span-2">
						<h3
							class="flex items-center gap-3 text-2xl font-bold underline decoration-blue-500/30 underline-offset-8"
						>
							<span class="text-3xl">{skillCategories[activeTab].icon}</span>
							{skillCategories[activeTab].title} Specialist
						</h3>
					</div>

					{#each skillCategories[activeTab].skills as skill, i}
						<div class="group" in:fade={{ delay: i * 50, duration: 300 }}>
							<div class="flex items-center gap-4">
								<div
									class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-transform group-hover:scale-110"
								>
									<img
										src="https://skillicons.dev/icons?i={skill.icon}&theme=dark"
										alt={skill.name}
										class="h-7 w-7"
										loading="lazy"
									/>
								</div>
								<div>
									<span class="block font-semibold text-gray-200">{skill.name}</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/key}
		</div>
	</div>
</section>
