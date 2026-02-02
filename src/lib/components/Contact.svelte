<script lang="ts">
	import { profile } from '$lib/profile';
</script>

<section id="contact" class="relative bg-[#0d0d0d] px-6 py-24">
	<div class="bg-mesh absolute inset-0 opacity-50"></div>

	<div class="relative mx-auto max-w-4xl">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<span
				class="mb-4 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400"
			>
				Let's Connect
			</span>
			<h2 class="mb-4 text-4xl font-bold md:text-5xl">
				Get in <span class="gradient-text">Touch</span>
			</h2>
			<p class="mx-auto max-w-2xl text-gray-400">
				Have a project in mind? Let's build something amazing together.
			</p>
		</div>

		<!-- Contact Card -->
		<div class="glass-card p-8 md:p-12">
			<form class="space-y-6">
				<div class="grid gap-6 md:grid-cols-2">
					<!-- Name -->
					<div>
						<label for="name" class="mb-2 block text-sm text-gray-400">Name</label>
						<input
							type="text"
							id="name"
							placeholder="John Doe"
							class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
						/>
					</div>

					<!-- Email -->
					<div>
						<label for="email" class="mb-2 block text-sm text-gray-400">Email</label>
						<input
							type="email"
							id="email"
							placeholder="john@example.com"
							class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
						/>
					</div>
				</div>

				<!-- Subject -->
				<div>
					<label for="subject" class="mb-2 block text-sm text-gray-400">Subject</label>
					<input
						type="text"
						id="subject"
						placeholder="Project Inquiry"
						class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
					/>
				</div>

				<!-- Message -->
				<div>
					<label for="message" class="mb-2 block text-sm text-gray-400">Message</label>
					<textarea
						id="message"
						rows="5"
						placeholder="Tell me about your project..."
						class="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
					></textarea>
				</div>

				<!-- Submit Button -->
				<button
					type="submit"
					class="glow-blue w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500"
				>
					Send Message
					<svg
						class="ml-2 inline-block h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</button>
			</form>

			<!-- Alternative Contact -->
			<div class="mt-8 flex items-center justify-center gap-4 border-t border-white/10 pt-8">
				<span class="text-gray-500">Or reach me at</span>
				<a
					href="mailto:{profile.email}"
					class="text-blue-400 transition-colors hover:text-blue-300"
				>
					{profile.email}
				</a>
			</div>
		</div>
	</div>
</section>
