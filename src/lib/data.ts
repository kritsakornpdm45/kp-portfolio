export { profile } from './profile';

export const stats = [
	{ value: '3+', label: 'Years Experience' },
	{ value: '50+', label: 'Projects Completed' },
	{ value: '20+', label: 'Happy Clients' },
	{ value: '99%', label: 'Success Rate' }
];

export const projects = [
	{
		title: 'AC Sport Website',
		description:
			'A high-performance sports equipment e-commerce platform with a focus on user experience and speed.',
		longDescription:
			'AC Sport is a modern e-commerce solution tailored for sports enthusiasts. Built with performance in mind, it features seamless navigation, quick-loading product galleries using WebP formats, and a responsive design that works flawlessly across all devices.',
		image: '/images/projects/acsport/acsport1.webp',
		gallery: [
			'/images/projects/acsport/acsport1.webp',
			'/images/projects/acsport/acsport2.webp',
			'/images/projects/acsport/acsport3.webp'
		],
		tags: ['SvelteKit', 'TailwindCSS', 'WebP', 'Vite'],
		liveUrl: '#',
		githubUrl: '#',
		featured: true
	},
	{
		title: 'AI Chat Application',
		description:
			'Real-time chat platform powered by AI with smart responses and multi-language support.',
		longDescription:
			"An intelligent chat application utilizing OpenAI's GPT-4 API to provide smart, context-aware responses. Includes features like real-time translation, conversation summarization, and secure end-to-end encryption.",
		image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
		gallery: [
			'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
			'https://images.unsplash.com/photo-1587560699334-cc4da63c2549?w=800&h=600&fit=crop',
			'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
		],
		tags: ['React', 'OpenAI', 'Socket.io', 'Node.js'],
		liveUrl: '#',
		githubUrl: '#',
		featured: true
	},
	{
		title: 'SaaS Dashboard',
		description:
			'Analytics dashboard with real-time data visualization and team collaboration features.',
		longDescription:
			'A data-heavy SaaS dashboard providing visualizations for user engagement metrics. Built with Svelte and D3.js for high-performance rendering of complex charts and graphs.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
		gallery: [
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
			'https://images.unsplash.com/photo-1543286386-713df548e9cc?w=800&h=600&fit=crop',
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
		],
		tags: ['Svelte', 'D3.js', 'Supabase'],
		liveUrl: '#',
		githubUrl: '#',
		featured: false
	},
	{
		title: 'Mobile Banking App',
		description:
			'Secure mobile banking solution with biometric authentication and instant transfers.',
		longDescription:
			'A React Native mobile application focusing on security and ease of use. Features biometric login (FaceID/TouchID), QR code payments, and real-time transaction notifications via WebSocket.',
		image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
		gallery: [
			'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
			'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
			'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
		],
		tags: ['React Native', 'Node.js', 'MongoDB'],
		liveUrl: '#',
		githubUrl: '#',
		featured: false
	}
];

export const skillCategories = [
	{
		title: 'Frontend',
		icon: '🎨',
		color: 'blue',
		skills: [
			{ name: 'React', icon: 'react', level: 95 },
			{ name: 'Svelte', icon: 'svelte', level: 90 },
			{ name: 'TypeScript', icon: 'ts', level: 92 },
			{ name: 'Next.js', icon: 'nextjs', level: 88 },
			{ name: 'Vue', icon: 'vue', level: 85 },
			{ name: 'Tailwind', icon: 'tailwindcss', level: 95 },
			{ name: 'Redux', icon: 'redux', level: 82 },
			{ name: 'Sass', icon: 'sass', level: 85 }
		]
	},
	{
		title: 'Backend',
		icon: '⚙️',
		color: 'purple',
		skills: [
			{ name: 'Node.js', icon: 'nodejs', level: 90 },
			{ name: 'NestJS', icon: 'nestjs', level: 85 },
			{ name: 'Go', icon: 'go', level: 80 },
			{ name: 'Python', icon: 'python', level: 85 },
			{ name: 'PostgreSQL', icon: 'postgresql', level: 88 },
			{ name: 'MySQL', icon: 'mysql', level: 85 },
			{ name: 'Redis', icon: 'redis', level: 82 },
			{ name: 'GraphQL', icon: 'graphql', level: 80 }
		]
	},
	{
		title: 'DevOps',
		icon: '🚀',
		color: 'cyan',
		skills: [
			{ name: 'Docker', icon: 'docker', level: 85 },
			{ name: 'Kubernetes', icon: 'kubernetes', level: 75 },
			{ name: 'AWS', icon: 'aws', level: 82 },
			{ name: 'GCP', icon: 'gcp', level: 78 },
			{ name: 'Terraform', icon: 'terraform', level: 72 },
			{ name: 'Nginx', icon: 'nginx', level: 80 },
			{ name: 'GitHub Actions', icon: 'githubactions', level: 88 },
			{ name: 'Linux', icon: 'linux', level: 80 }
		]
	},
	{
		title: 'Tools',
		icon: '🛠️',
		color: 'green',
		skills: [
			{ name: 'Git', icon: 'git', level: 95 },
			{ name: 'Figma', icon: 'figma', level: 75 },
			{ name: 'VS Code', icon: 'vscode', level: 95 },
			{ name: 'Postman', icon: 'postman', level: 85 },
			{ name: 'Vite', icon: 'vite', level: 90 },
			{ name: 'Jest', icon: 'jest', level: 82 },
			{ name: 'Storybook', icon: 'storybook', level: 78 },
			{ name: 'Webpack', icon: 'webpack', level: 75 }
		]
	}
];

export const education = [
	{
		degree: 'Bachelor of Computer Science',
		institution: 'Prince of Songkla University',
		location: 'Hat Yai, Thailand',
		year: '2020 - 2024',
		gpa: '3.75',
		achievements: ["Dean's List", 'Best Capstone Project']
	}
];

export const socialLinks = [
	{ name: 'GitHub', url: 'https://github.com', icon: 'github' },
	{ name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
	{ name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
];

export type Project = (typeof projects)[0];
