<script lang="ts">
	import { skillCategories } from '$lib/data';
</script>

<section id="skills" class="relative bg-[#0d0d0d] px-6 py-24">
	<!-- Background Pattern -->
	<div class="bg-dots absolute inset-0 opacity-30"></div>

	<div class="relative mx-auto max-w-7xl">
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
				Technologies and tools I use to bring ideas to life
			</p>
		</div>

		<!-- Skills Grid -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each skillCategories as category}
				<div class="glass-card hover-lift p-6">
					<!-- Category Header -->
					<div class="mb-6 flex items-center gap-3">
						<span class="text-2xl">{category.icon}</span>
						<h3 class="text-lg font-semibold">{category.title}</h3>
					</div>

					<!-- Skills List -->
					<div class="space-y-4">
						{#each category.skills as skill}
							<div class="group">
								<div class="mb-2 flex items-center justify-between">
									<div class="flex items-center gap-3">
										<img
											src="https://skillicons.dev/icons?i={skill.icon}&theme=dark"
											alt={skill.name}
											class="h-6 w-6"
											loading="lazy"
										/>
										<span class="text-sm text-gray-300">{skill.name}</span>
									</div>
									<span class="text-xs text-gray-500">{skill.level}%</span>
								</div>
								<!-- Progress Bar -->
								<div class="h-1.5 overflow-hidden rounded-full bg-white/10">
									<div
										class="h-full rounded-full bg-linear-to-r {category.color === 'blue'
											? 'from-blue-500 to-cyan-500'
											: category.color === 'purple'
												? 'from-purple-500 to-pink-500'
												: category.color === 'cyan'
													? 'from-cyan-500 to-teal-500'
													: 'from-green-500 to-emerald-500'}"
										style="width: {skill.level}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
