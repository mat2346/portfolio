import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,   
    starbucks, 
    carrent,
  } from "../assets";
  
  export const navLinks = [
    { id: "about", title: "about" },
    { id: "work", title: "work" },
    { id: "contact", title: "Contact" },
  ];
  
  export const services = [
    { title: "Web Developer", icon: web },
    { title: "React Native Developer", icon: mobile },
    { title: "Backend Developer", icon: backend },
    { title: "Systems Engineer", icon: creator },
  ];
  
  export const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React JS", icon: reactjs },
    { name: "Redux Toolkit", icon: redux },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "git", icon: git },
    { name: "figma", icon: figma },
  ];
  
  export const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // Resto de las experiencias en inglés...
  ];
  
  export const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    // Resto de los testimonios...
  ];
  
  export const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    // Resto de los proyectos...
  ];
  