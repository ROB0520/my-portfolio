type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  spotlightClass?: string
}

type Education = {
  institution: string
  title: string
  start: string
  end: string
  spotlightClass?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  // {
  //   name: 'Motion Primitives Pro',
  //   description:
  //     'Advanced components and templates to craft beautiful websites.',
  //   link: 'https://pro.motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
  //   id: 'project1',
  // },
]

export const EDUCATION: Education[] = [
  {
    institution: 'Nueva Ecija University of Science and Technology',
    title: 'Bachelor of Science in Information Technology',
    start: '2023',
    end: 'Present',
    spotlightClass: 'from-blue-900 via-blue-800 to-orange-700 blur-2xl dark:from-blue-100 dark:via-blue-200 dark:to-orange-50',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Sparked Host',
    title: 'Content Writer',
    start: '2025',
    end: 'Present',
    link: 'https://sparkedhost.com',
    spotlightClass: 'from-yellow-900 via-yellow-800 to-yellow-700 blur-2xl dark:from-yellow-100 dark:via-yellow-200 dark:to-yellow-50',
  },
  {
    company: 'Sparked Host',
    title: 'Support Representative',
    start: '2022',
    end: '2025',
    link: 'https://sparkedhost.com',
    spotlightClass: 'from-yellow-900 via-yellow-800 to-yellow-700 blur-2xl dark:from-yellow-100 dark:via-yellow-200 dark:to-yellow-50',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/ROB0520',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aleczr',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/aleczr.jpg',
  },
]

export const EMAIL = 'contact@aleczr.link'
