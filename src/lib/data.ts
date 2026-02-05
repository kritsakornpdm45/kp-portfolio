export { profile } from './profile';

export const stats = [
	{ value: '3+', label: 'Years Experience' },
	{ value: '50+', label: 'Projects Completed' },
	{ value: '20+', label: 'Happy Clients' },
	{ value: '99%', label: 'Success Rate' }
];

export const projects = [
	{
		title: 'AC Sport Booking System',
		description:
			'Full-stack sports court booking app with conflict detection, API payment integration, and automated management.',
		longDescription:
			'A comprehensive sports facility management system. Features include slot-based booking with real-time conflict detection, integrated API payment processing, session-based authentication with RBAC, an admin dashboard for managing bookings and users, and automated cleanup of pending bookings via cron jobs.',
		image: '/images/projects/acsport/acsport1.webp',
		gallery: [
			'/images/projects/acsport/acsport1.webp',
			'/images/projects/acsport/acsport2.webp',
			'/images/projects/acsport/acsport3.webp'
		],
		features: [
			'Real-time conflict detection',
			'API payment integration',
			'Automated management'
		],
		tags: ['SvelteKit', 'TypeScript', 'MongoDB', 'Docker', 'RBAC', 'API Payment'],
		liveUrl: 'https://acsportcenter.com/',
		githubUrl: '',
		featured: true
	},
	{
		title: 'ODC Dental Clinic',
		description:
			'Full-stack dental clinic platform featuring a custom CMS, SEO optimization, and high-performance image processing.',
		longDescription:
			'A comprehensive web application for Dr. Oh Dental Clinic. Features include a custom CMS for managing articles and case reviews, server-side rendering for maximum SEO impact, automated WebP image optimization, and secure session-based authentication built on SvelteKit and Drizzle ORM.',
		image: '/images/projects/odc/odc1.webp',
		gallery: [
			'/images/projects/odc/odc1.webp',
			'/images/projects/odc/odc2.webp',
			'/images/projects/odc/odc3.webp'
		],
		features: [
			'Custom CMS for dynamic content management',
			'SEO-optimized with Server-Side Rendering',
			'Secure session-based authentication'
		],
		tags: ['SvelteKit', 'SQLite', 'Drizzle ORM', 'TailwindCSS'],
		liveUrl: 'https://ohdentalclinic.com/',
		githubUrl: '',
		featured: true
	},
	{
		title: 'Modern E-commerce Platform',
		description:
			'A scalable, high-performance e-commerce solution built with Next.js 15 and Payload CMS 3.0, featuring a robust PostgreSQL database.',
		longDescription:
			'A high-performance e-commerce solution utilizing Next.js 15 App Router and React 19. Integrated with Payload CMS 3.0, PostgreSQL, and Vercel Blob, it features a modular TypeScript architecture, TailwindCSS 4 styling, and a flexible block-based page builder.',
		image: '/images/projects/e-commerce/ecom1.webp',
		gallery: [
			'/images/projects/e-commerce/ecom1.webp',
			'/images/projects/e-commerce/ecom2.webp',
			'/images/projects/e-commerce/ecom3.webp',
			'/images/projects/e-commerce/ecom4.webp'
		],
		features: [
			'Payload CMS 3.0 ',
			'PostgreSQL Database',
			'Vercel Blob Cloud Storage',
			'Product & Category Management System',
			'Responsive Styling with TailwindCSS 4'
		],
		tags: [
			'Next.js',
			'Payload CMS',
			'PostgreSQL',
			'TypeScript',
			'TailwindCSS',
			'React'
		],
		liveUrl: '#',
		githubUrl: 'https://github.com/kritsakornpdm45/web-ecommerce.git',
		featured: true
	},
	{
		title: 'Walkwing X Bangkok Design Week',
		description:
		'Interactive event platform with real-time participation tracking and admin analytics.',
		longDescription:
		'A full-stack web application for the Bangkok Design Week 2026 "Journey" campaign. It features QR-based station check-ins, gamified user progression (Move, Rest, Reset, Nourish), and a comprehensive admin dashboard for monitoring real-time user engagement and leaderboard metrics. Built with SvelteKit and MongoDB for scalable data management.',
		image: '/images/projects/bdw/bdw1.webp',
		gallery: [
			'/images/projects/bdw/bdw1.webp',
			'/images/projects/bdw/bdw2.webp',
			'/images/projects/bdw/bdw3.webp',
			'/images/projects/bdw/bdw4.webp'
		],
		features: [
		'QR Station Scanning & Validation',
		'Real-time Leaderboard & Scoring',
		'Admin Analytics Dashboard',
		'Excel Data Export'
		],
		tags: ['SvelteKit', 'MongoDB', 'TailwindCSS', 'TypeScript'],
		liveUrl: '',
		githubUrl: '',
		featured: false
	},
	
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
