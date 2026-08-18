export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'SGES - Overtime Management Systems',
    desc: 'SGES is an innovative management system that transforms the way organizations track employee hours. With advanced workflow features like automated approval processes and real-time analytics, it allows administrators to effortlessly manage overtime data from a single platform.',
    subdesc:
      'Built as a comprehensive management solution with Laravel, BootStrap CSS, MySQL and JavaScript, SGES is designed for optimal reliability and enterprise-level scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/SGES.mp4',
    logo: '/assets/logos/SGES-logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Laravel',
        path: '/assets/logos/laravel-logo copy.png',
      },
      {
        id: 2,
        name: 'BootStrap',
        path: 'assets/logos/bootstrapLogo.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/logos/js-logo.svg',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/assets/logos/mysql-logo.svg',
      },
    ],
  },
  {
    title: 'Planifica - Academic scheduling management system',
    desc: 'PlanIFica is a web system for managing and automatically generating academic schedules developed for IFRO Campus Calama. It was born as an academic initiative within the Calama Devs project, led by Prof. Leandro Ferrarezi, with the objective of solving a real bottleneck for DEPAE (Department of Student Assistance): the manual and laborious creation of course schedules.',
    pt_desc: 'PlanIFica é um sistema web de gestão e geração automatizada de horários acadêmicos desenvolvido para o IFRO Campus Calama. Nasceu como uma iniciativa acadêmica dentro do projeto Calama Devs, liderado pelo Prof. Leandro Ferrarezi, com o objetivo de solucionar um gargalo real do DEPAE (Departamento de Assistência ao Educando): a criação manual e trabalhosa das grades de horário dos cursos.',
    subdesc:
      `The system allows the registration of classes, teachers, subjects, environments, and courses, and features an automatic schedule generation engine based on a multi-start constructive heuristic — an algorithm that, from configurable rules, automatically generates schedule proposals respecting teacher impediments, class conflicts, and room availability.\n\nDeveloped with CodeIgniter 4, TailwindCSS, MySQL, and JavaScript.`,
    pt_subdesc: `O sistema permite o cadastro de turmas, professores, disciplinas, ambientes e cursos, e conta com um motor de geração automática de horários baseado em uma heurística construtiva multi-start — um algoritmo que, a partir de regras configuráveis, gera automaticamente propostas de grade respeitando impedimentos de professores, conflitos de turma e disponibilidade de salas.\n\nDesenvolvido com CodeIgniter 4, TailwindCSS, MySQL e JavaScript.`,
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/Planifica.mp4',
    logo: '/assets/logos/LogoIfroWhite.svg', 
    // logo: '/assets/logos/LogoIfro.svg', 
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'CodeIgniter',
        path: '/assets/logos/CodeIgniter.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/logos/tailwindcss.png',
      },
      {
        id: 3,
        name: 'MySQL',
        path: '/assets/logos/js-logo.svg',
      },
      {
        id: 4,
        name: 'JavaScript',
        path: '/assets/logos/mysql-logo.svg',
      },
    ],
  },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/logos/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/logos/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/logos/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/logos/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/logos/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/logos/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/logos/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/logos/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/logos/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.065 : isMobile ? 0.06 : isTablet ? 0.09 : 0.09,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -7, 0],

    reactLogoPosition: isSmall ? [5.5, 4, 0] : isMobile ? [8, 3., 0] : isTablet ? [10, 7, 0] : [15, 5, 0],
    reactLogoScale: isSmall ? 0.04 : isMobile ? 0.07 : isTablet ? 0.08 : 0.1,

    laravelPosition: isSmall ? [-7, -10, -10] : isMobile ? [-9.5, -10, -10] : isTablet ? [-12, -7, -10] : [-15, -13, -10],
    laravelLogoScale: isSmall ? 4 : isMobile ? 5 : isTablet ? 5 : 7,

    targetPosition: isSmall ? [-5.5, 5, 0] : isMobile ? [-8.5, 5, 0] : isTablet ? [-10, 7, 0] : [-16.5, 7, 0],
    targetScale: isSmall ? 4 : isMobile ? 4 : isTablet ? 5 : 6.5,

    cubePosition: isSmall ? [5.5, -5, 0] : isMobile ? [7, -6.5, 0] : isTablet ? [8, -5, 0] : [12, -8.5, 0],
    cubeScale: isSmall ? 0.7 : isMobile ? 0.9 : isTablet ? 0.9 : 1.3,
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Calama Devs',
    pos: 'Full-Stack Web Developer',
    duration: '01/2026 - Present',
    title: "Collaborative web development is at the core of my work with Calama-Devs. I utilize a robust stack of PHP (CodeIgniter), MySQL, TailWind, and JavaScript to seamlessly develop and maintain systems like PlanIFica, facilitating intelligent schedule generation and preventive maintenance of academic modules. Managed through Git, this workflow also enables me to integrate the web platform with physical sensors via REST APIs.",
    icon: '/assets/logos/LogoIfro.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'GTI-Sejus RO',
    pos: 'Web Development Intern',
    duration: '10/2025 - Present',
    title: "Full-stack web development is my primary focus as an intern at GTI-Sejus RO. I utilize PHP (Laravel) and MySQL to build robust back-end routines, working seamlessly to craft responsive user interfaces with CSS, Bootstrap, JavaScript, and Ajax. This workflow, managed through Git, facilitates my direct contributions to key projects like the SGES (Overtime Management System).",
    icon: '/assets/logos/SGES-logo.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Meta Contabilidade',
    pos: 'Accounting Assistant',
    duration: '02/2024 - 09/2025',
    title: "Assisted with the accounting and tax closing for client companies, managed file organization, and provided IT support, including basic system maintenance, technical troubleshooting, and end-user support.",
    icon: '/assets/logos/metaContabilidadeLogo.jpg',
    animation: 'salute',
  },
];