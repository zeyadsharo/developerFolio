/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Zeyad Sharo",
  title: "Hi all, I'm Zeyad",
  subTitle: emoji(
    "Full Stack Software Developer with expertise in multiple programming languages, databases, front-end and back-end development, and strong DevOps and project management skills."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZewGLiVCkq5akch2sRqppt1JV62UiZLG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zeyadsharo",
  linkedin: "https://www.linkedin.com/in/zeyad-sharo",
  gmail: "zeyadsharo85@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/zeyad.sharo",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER & Project manager WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly backend applications with Node.js, Laravel, Nuxt.js, and React.js"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ develop highly scalable production ready RESTful APIs"
    ),
    emoji(
      "⚡ Integration of Payment Gateway"
    ),
    emoji(
      "⚡ Database architecture design and development"
    ),
    emoji(
      "⚡ Develop highly scalable production ready RESTful APIs"
    ),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    // relatonal database orm
    {
      skillName: "sequelize",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    //nuxt js
    {
      skillName: "nuxtjs",
      fontAwesomeClassname: "fab fa-nuxt"
    },

    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Zakho",
      logo: "https://th.bing.com/th/id/OIP.3mflnkHsjBH3JQhpFukf4QHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - September 2020",
      desc: "Participated in the research of ms and published 1 papers.",
      descBullets: [
        "Achieved a solid foundation in computer science concepts.",
        "Participated in various coding projects and assignments.",
        "Collaborated with peers on team projects.",
        "Developed a strong understanding of the software development life cycle.",
        "second place in the university in the field of programming."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Database Design",
      progressPercentage: "90%" // Adjust this percentage as per your proficiency in Database Design
    },
    {
      Stack: "Software Engineering",
      progressPercentage: "80%" // Adjust this percentage as per your proficiency in Software Engineering
    },
    {
      Stack: "Backend",
      progressPercentage: "90%" // Adjust this percentage as per your proficiency in Backend technologies
    },
    {
      Stack: "Frontend",
      progressPercentage: "80%" // Adjust this percentage as per your proficiency in Frontend technologies
    },
    {
      Stack: "DevOps",
      progressPercentage: "75%" // Adjust this percentage as per your proficiency in DevOps tools
    }
    // Add more technology categories and proficiency percentages as needed
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Manager",
      company: "Lelav",
      companylogo: require("./assets/images/lelav_logo.png"),
      date: "Sep 2022 - Jan 2024",
      desc: "",
      descBullets: [
        "Planning, executing, and closing projects within scope and budget.",
        "Coordinating teams, tracking progress, and managing risks.",
        "Communicating with stakeholders and ensuring project success.",
        "Managing multiple projects simultaneously.",
        "Leading the development team and delegating tasks and tracking progress.",
      ]
    },
    {
      role: "Senior full stack developer",
      company: "Lelav",
      companylogo: require("./assets/images/lelav_logo.png"), // You can add the URL of the company logo here
      date: "May 2022 - Sep 2022",
      desc: "",
      descBullets: [
        "Developing front end website architecture.",
        "Designing user interactions on web pages.",
        "Developing back end website applications.",
        "Creating servers and databases for functionality.",
        "Ensuring cross-platform optimization for mobile phones.",
        "Ensuring responsiveness of applications."
      ]
    },
    {
      role: "Enterprise Applications Developer",
      company: "Korek Telecom",
      companylogo: require("./assets/images/korek.png"), // You can add the URL of the company logo here
      date: "Apr 2021 - May 2022",
      desc: "",
      descBullets: [
        "Developing front end website architecture.",
        "Designing user interactions on web pages.",
        "Developing back end website applications.",
        "Creating servers and databases for functionality.",
        "Ensuring cross-platform optimization for mobile phones.",
        "Ensuring responsiveness of applications."
      ]
    },
    {
      role: "Full Stack Developer and project supervisor",
      company: "YadgarSoft",
      companylogo: require("./assets/images/y.jpg"), // You can add the URL of the company logo here
      date: "Oct 2020 - May 2022",
      desc: "",
      descBullets: [
        // Add description bullets for this role
        "suparvising the development of the project",
        "Developing front end website architecture.",
        "Designing user interactions on web pages.",
        "Developing back end website applications.",
        "Creating servers and databases for functionality.",
        "create desktop application using c# and wpf"
      ]
    },
    {
      role: "Software Developer",
      company: "University of Zakho",
      companylogo: require("./assets/images/uoz.jpeg"), //You can add the URL of the company logo here
      date: "Sep 2020 - Mar 2021",
      desc: "",
      descBullets: [
        "Developing front end website architecture.",
        "Designing user interactions on web pages.",
        "Developing back end website applications.",
        "Creating servers and databases for functionality.",
        "Ensuring cross-platform optimization for mobile phones.",
        "Ensuring responsiveness of applications."
      ]
    },
    {
      role: "Information Technology Support Engineer",
      company: "Ferboon institute",
      companylogo: require("./assets/images/fervuun.png"), // You can add the URL of the company logo here
      date: "Jul 2019 - Sep 2019",
      desc: "",
      descBullets: [
        "Research and identify solutions to software and hardware issues",
        "Diagnose and troubleshoot technical issues, including account setup and network configuration",
        "Talk clients through a series of actions, either via phone, email or chat until they’ve solved a technical issue",
        "Install and configure computer systems and applications within the Institute"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image:
        "https://auk.edu.krd/wp-content/themes/auk/images/auk_10th_logo.png",
      projectName: "Recruitment Application",
      projectDesc:
        "Our latest project, the Recruitment Application, is geared towards streamlining the hiring process and making it a breeze for both HR staff and job seekers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ra.auk.lelav.com/public/jobs"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Honors & Awards",
      subtitle:
        "In recognition for a record of outstanding accomplishments in FY-2021",
      image: "https://www.korektel.com/assets/logos/korek-logo-en.png",
      imageAlt: "korek telecom Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+964 750 8961 085",
  email_address: "zeyadsharo85@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SharoZeyad", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
