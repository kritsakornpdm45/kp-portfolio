<script lang="ts">
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import ProjectModal from './ProjectModal.svelte';
	import Skills from './Skills.svelte';
	import Education from './Education.svelte';
	import Contact from './Contact.svelte';
	import Footer from './Footer.svelte';
	import type { Project } from '$lib/data';

	// ============================================
	// Modal Logic
	// ============================================
	let selectedProject = $state<null | Project>(null);

	function openModal(project: Project) {
		selectedProject = project;
	}

	function closeModal() {
		selectedProject = null;
	}

	function scrollToProjects() {
		const projectsSection = document.getElementById('projects');
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="min-h-screen bg-[#0a0a0a] text-white">
	<!-- Hero Section -->
	<Hero onViewWork={scrollToProjects} />

	<!-- Projects Section -->
	<Projects onOpenModal={openModal} />

	<!-- Project Detail Modal -->
	<ProjectModal project={selectedProject} onClose={closeModal} />

	<!-- Skills Section -->
	<Skills />

	<!-- Education Section -->
	<Education />

	<!-- Contact Section -->
	<Contact />

	<!-- Footer -->
	<Footer />
</div>
