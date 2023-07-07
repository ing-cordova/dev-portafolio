// if you have to change the photo, please just replace de url, not the name "ME"
import ME from "../src/assets/me.png";
import AboutImage from "../src/assets/Developer activity-bro.png";

//These imports are for portfolio section, change them for yours.
import IMG1 from "../src/assets/my-porfolio.png";

//Do not delete them please.
import AvatarWoman from "../src/assets/avatar_woman.jpg";
import AvatarMan from "../src/assets/avatar_men.jpg";

// If you want to add or change the icon, please make sure to visit this page: https://react-icons.github.io/react-icons/
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";

const infoSection = {
  name: "Andres Cordova",
  career: "Full Stack Developer",
  photo: ME,
  cvLink:
    "https://drive.google.com/file/d/1QvmHWsYblMC77YjuqVhVkTbgfqEju8gD/view",
  // If you do not want to show one section, just replace this prop (display) to false.
  display: true,
};

const socialmedia = {
  github: "https://github.com/ing-cordova/",
  linkedin: "https://www.linkedin.com/in/ing-cordova/",
  twitter: "https://twitter.com/cordovasv",
  instagram: null,
  facebook: "https://www.facebook.com/cordova.sv",
  whatsapp: null,
};

const aboutSection = {
  photo: AboutImage,
  experience: 0.6,
  clients: 0,
  projects: 4,
  desciption:
    "Fifth year Systems Engineering student, I have developed a few software and applications in my process as a student using several programming languages and some other technologies. I believe in the power of agile methodologies as the main driver of good software development in the most efficient way. I am a self- taught person, with the ability to learn something new every day for my professional and personal development.",
  display: true,
};

const technologiesStack = {
  frontend: [
    {
      title: "HTML5",
      level: "Advanced",
    },
    {
      title: "CSS",
      level: "Intermediate",
    },
    {
      title: "JavaScript",
      level: "Intermediate",
    },
    {
      title: "JSON",
      level: "Advanced", // No Level specified.
    },
    {
      title: "React Js",
      level: "Intermediate",
    },
    {
      title: "Bootstrap",
      level: "Intermediate",
    },
  ],
  backend: [
    {
      title: "NodeJs",
      level: "Intermediate",
    },
    {
      title: "Express Js",
      level: "Intermediate",
    },
    {
      title: "MongoDB",
      level: "Intermediate",
    },
    {
      title: "MySQL",
      level: "Intermediate",
    },
    {
      title: "REST API",
      level: "Intermediate",
    },
    {
      title: "Java",
      level: "Intermediate",
    },
    {
      title: "C#",
      level: "Begginer",
    },
    {
      title: "Git",
      level: "Advanced",
    },
    {
      title: "Kotlin",
      level: "Begginer",
    },
  ],
  display: true,
};

const servicesSection = {
  services: [
    {
      type: "Software Development",
      offers: [
        "Web development",
        "Mobile app development",
        "Desktop application",
        "API development",
      ],
    },
    {
      type: "Consulting Services",
      offers: ["Technical consultation"],
    },
    {
      type: "Other Development",
      offers: ["Informative Web pages", "Dahsboards", "Data Visualization"],
    },
  ],
  display: true,
};

const portfolioSection = {
  projects: [
    {
      id: 1,
      image: IMG1,
      title: "My Portofolio Web",
      technologies: [
        "JavaScript", "React JS", "CSS"
      ],
      // if you want to hide the buttons for Github Repository or Demo Live, just replace the link for null.
      github: "https://github.com/ing-cordova/dev-portafolio",
      demo: null,
    }
  ],
  display: true,
};

const testimonialsSection = {
  testimonials: [
    {
      id: 1,
      name: "Isabella Rodriguez",
      avatar: AvatarWoman,
      review:
        "I am extremely satisfied with the software developed by this person. They did an outstanding job in meeting all the requirements and delivering a high-quality solution. Their attention to detail and problem-solving skills were remarkable. I highly recommend their services.",
    },
    {
      id: 2,
      name: "Benjamin Thompson",
      avatar: AvatarMan,
      review:
        "I can't express enough how impressed I am with the work done by this developer. They exceeded my expectations in every aspect. The software they created is robust, efficient, and user-friendly. Working with them was a pleasure, and I wouldn't hesitate to collaborate with them again in the future.",
    },
  ],
  display: false,
};

const contactSection = {
  wayToContact: [
    {
      id: 1,
      icon: MdOutlineEmail,
      name: "Email",
      contact: "andrescordovaoficial@gmail.com",
    },
    {
      id: 2,
      icon: ImWhatsapp,
      name: "Whatsapp",
      contact: "+50379677324",
    },
  ],
  display: true,
};

export {
  infoSection,
  contactSection,
  socialmedia,
  aboutSection,
  technologiesStack,
  servicesSection,
  portfolioSection,
  testimonialsSection,
};
