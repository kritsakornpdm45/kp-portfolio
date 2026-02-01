export const profile = {
	name: 'Kritsakorn',
	role: 'Full-Stack Developer',
	tagline: 'Building products that users love',
	bio: 'Passionate software engineer with 3+ years of experience crafting high-performance web applications. I specialize in turning complex problems into elegant, scalable solutions.',
	avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kritsakorn&backgroundColor=3b82f6',
	status: 'Available for work',
	location: 'Thailand',
	email: 'hello@example.com'
};

export const stats = [
	{ value: '3+', label: 'Years Experience' },
	{ value: '50+', label: 'Projects Completed' },
	{ value: '20+', label: 'Happy Clients' },
	{ value: '99%', label: 'Success Rate' }
];

export const projects = [
	{
		title: 'E-Commerce Platform',
		description:
			'A full-featured e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
		longDescription:
			'A comprehensive e-commerce platform built for high-scale retail. Features include real-time inventory tracking, multi-provider payment integration (Stripe, PayPal), automated tax calculation, and a powerful analytics dashboard for sales insights.',
		image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
		gallery: [
			'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
			'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop',
			'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=600&fit=crop'
		],
		tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
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
			{ name: 'Tailwind', icon: 'tailwindcss', level: 95 }
		]
	},
	{
		title: 'Backend',
		icon: '⚙️',
		color: 'purple',
		skills: [
			{ name: 'Node.js', icon: 'nodejs', level: 90 },
			{ name: 'Python', icon: 'python', level: 85 },
			{ name: 'PostgreSQL', icon: 'postgresql', level: 88 },
			{ name: 'GraphQL', icon: 'graphql', level: 80 }
		]
	},
	{
		title: 'DevOps',
		icon: '🚀',
		color: 'cyan',
		skills: [
			{ name: 'Docker', icon: 'docker', level: 85 },
			{ name: 'AWS', icon: 'aws', level: 82 },
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
			{ name: 'Postman', icon: 'postman', level: 85 }
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
