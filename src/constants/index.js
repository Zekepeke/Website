import { casacafe, software, produce, lavillita } from "../assets/images";
import {
    c,
    css,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    python,
    react,
    sass,
    sqlite,
    tail,
    gmail,
    zekeshot,
    nn,
    cnn,
    jordan, 
    summary

} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: 'C',
        type: 'Backend',

    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: 'Java',
        type: 'Backend'
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: 'Python',
        type: 'Backend',
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: sqlite,
        name: 'SQLite',
        type: "Database",

    },
    {
        imageUrl: tail,
        name: 'Tailwind CSS',
        type: 'Frontend',

    },
];

export const experiences = [
    {
        title: "Server",
        company_name: "Casa Cafe",
        icon: casacafe,
        iconBg: "#87ceeb",
        date: "May 2019 - August 2019",
        points: [
            "Provided exceptional customer service, enhancing communication and problem-solving skills.",
            "Managed point-of-sale (POS) systems, handling transactions and troubleshooting technical issues.",
            "Collaborated with team members to ensure efficient and smooth operations during peak hours.",
            "Developed time management skills by effectively multitasking in a fast-paced environment.",
        ],
    },
    {
        title: "Stock Clerk",
        company_name: "Supermacado La Villita",
        icon: lavillita,
        iconBg: "#fbc3bc",
        date: "Feb 2020 - July 2021",
        points: [
            "Assisted customers in navigating products and provided personalized recommendations, fostering positive shopping experiences.",
            "Optimized store storage space by implementing innovative organization techniques, enhancing accessibility and efficiency.",
            "Contributed to a notable increase in profits by implementing strategic inventory management practices.",
            "Collaborated with coworkers to streamline bagging processes, promoting teamwork and productivity.",
        ],
    },
    {
        title: "Management/Cashier",
        company_name: "Supermercado 22nd Street Produce",
        icon: produce,
        iconBg: "#b7e4c7",
        date: "March 2022 - Present",
        points: [
            "Orchestrated the flow of items to ensure seamless operations, demonstrating strong organizational and logistical skills.",
            "Implemented price adjustments in the system with precision to maintain accurate pricing records.",
            "Spearheaded initiatives that led to a 100% increase in profits.",
            "Provided exceptional customer service, resolving issues promptly and fostering customer satisfaction..",
        ],
    },
    {
        title: "Freelance Software Developer",
        company_name: "Software Engineering Projects",
        icon: software,
        iconBg: "#a2d2ff",
        date: "May 2023 - Present",
        points: [
            "Developed dynamic websites for various clients, including a local shoe business, using technologies such as HTML, CSS, JavaScript, and React.",
            "Completed multiple successful projects, offering services such as website development and automation scripts.",
            "Collaborated closely with clients to understand requirements and ensure customer satisfaction on all projects.",
            "Undertook side projects involving Arduino and other technologies, exploring hardware-software integration for home automation and robotics.",
        ],
    },
];

export const projects = [
    {
        imageUrl: zekeshot,
        theme: '#ff9068',
        name: "Pygame 'Zekeshot'",
        description: 'Developed a 2D arcade-style shooting game where players control a character, shoot bullets to reach targets, and manage limited ammunition.',
        link:'https://github.com/Zekepeke/Zekeshot'
    },
    {
        imageUrl: nn,
        theme: '#adfda2',
        name: 'Neural Network made from scratch',
        description: 'Developed a neural network using NumPy and pandas to classify digits from the MNIST dataset, performing forward and backward propagation, parameter updates, and accuracy evaluation.',
        link: 'https://github.com/Zekepeke/First-Nueral-Network/tree/main',
    },
    {
        imageUrl: cnn,
        theme: '#0061ff',
        name: 'Object Detector',
        description: 'Developed an object detector using YOLOv8, a convolutional neural network (CNN), to accurately identify and locate items in a custom dataset.',
        link: 'https://github.com/Zekepeke/Object-Detector',
    },
    {
        imageUrl: jordan,
        theme: '#f89b29',
        name: 'Shoe Website',
        description: 'Developed an e-commerce website for a client to sell shoes, featuring product listings, detailed descriptions, customer reviews, and secure online payment processing.',
        link: 'https://github.com/Zekepeke/Shoe-website',
    },
    {
        imageUrl: summary,
        theme: '#ff0f7b',
        name: 'AI Summarizer Application',
        description: 'App that utilizes AI to generate precise and informative summaries from verbose text content or blogs.',
        link: 'https://github.com/Zekepeke/Summarizer-App',
    }
];

export const socials =[
    {
        iconUrl: gmail,
        social_name: 'Gmail',
        theme: '#FFFFFF',
        name: 'zekedev06@gmail.com',
        link: 'mailto:zekedev06@gmail.com',
    },
    {
        iconUrl: github,
        social_name: 'Github',
        theme: '#FFFFFF	',
        name: 'Zekepeke',
        link: 'https://github.com/Zekepeke',

    },
    {

        iconUrl: linkedin,
        social_name: 'Linkedin',
        theme: '#FFFFFF',
        name: 'Esequiel Linares',
        link: 'https://www.linkedin.com/in/esequiel-linares-663a63300/',

    },

];