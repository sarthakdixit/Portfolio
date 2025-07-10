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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sarthak Dixit",
  title: "Hi all, I'm Sarthak",
  subTitle: emoji(
    "Software Engineer with experience in .NET Core and ReactJS, and a strong interest in AI and emerging technologies."
  ),
  resumeLink:
    "https://1drv.ms/b/c/ec75ff7ff186b1e4/EU4jJSo4YxtFuZsXVp9yghMBZ0u_xMCsuO-brcW9nK-Q7Q?e=3f36BH", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sarthakdixit",
  linkedin: "https://www.linkedin.com/in/dixit-sarthak",
  gmail: "sarthak_dixit@outlook.com",
  kaggle: "https://www.kaggle.com/srthkdixit",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
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
  display: true,
  schools: [
    {
      schoolName: "Cognizant",
      subHeader: "Software Engineer",
      duration: "Nov 2021 - Present",
      descBullets: [
        "Built reusable, scalable UI components using <b>ReactJS</b> and managed complex application state with <b>Redux</b> for high-performance front-end solutions.",
        "Implemented type-safe, maintainable codebases using <b>TypeScript</b>, improving code quality and reducing runtime errors.",
        "Designed and maintained <b>RESTful APIs</b> with <b>.NET Core</b>, enabling modular, service-oriented backend architectures.",
        "Conducted thorough <b>API testing</b> with <b>Postman</b> and <b>SoapUI</b> to validate functionality, reliability, and adherence to business requirements.",
        "Automated operational workflows using <b>Jarvis</b>, reducing manual effort by 50% and significantly lowering <b>operational toil</b>.",
        "Wrote advanced <b>SQL</b> queries for efficient data retrieval and manipulation, leveraging joins, subqueries, and aggregations for complex datasets."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  title: "Projects",
  projects: [
    {
      projectName: "Gitty",
      projectDesc:
        "A CLI-based version control system, you save snapshots of your project as you go, helping you manage changes and track the current state of your files.",
      tags: ["Typescript", "NodeJS", "Express", "MongoDB"],
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/sarthakdixit/Gitty"
        }
      ]
    },
    {
      projectName: "Financial Text Analyzer",
      projectDesc:
        "Built a financial text analyzer using a fine-tuned BERT model for sentiment analysis and summarization of financial content.",
      tags: ["Python", "Flask", "BERT", "Machine Learning"],
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/sarthakdixit/Financial-Text-Analyzer"
        }
      ]
    },
    {
      projectName: "Web Chat App",
      projectDesc:
        "A real-time app with Socket.IO allows instant communication between client and server without reloading, perfect for live updates or chats.",
      tags: ["ReactJS", "NodeJS", "Express", "Socket.io", "SQL"],
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/sarthakdixit/Web-Chat-App"
        }
      ]
    },
    {
      projectName: "Lottery House",
      projectDesc:
        "The app lets users enter a lottery using ReactJS and MetaMask, with .NET Core handling the backend and Ethereum smart contracts ensuring fairness.",
      tags: ["ReactJS", ".Net Core", "Meta Mask", "SQL"],
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/sarthakdixit/Lottery-House"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  achievementsCards: [
    {
      title: "Azure Fundamentals",
      subtitle:
        "Achieved Azure Fundamentals (AZ-900) certification, showcasing understanding of core cloud principles, Azure services, pricing, and security features.",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c2584ff9-6fca-4407-8126-d25245c2bea9/public_url"
        }
      ]
    },
    {
      title: "Azure Data Fundamentals",
      subtitle:
        "Certified in Azure Data Fundamentals (DP-900) with foundational knowledge of core data concepts, relational and non-relational databases, analytics, and Azure data services.",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/d99e37e8-57d4-499f-b214-146458c08a12/public_url"
        }
      ]
    },
    {
      title: "Azure AI Fundamentals",
      subtitle:
        "Certified in Azure AI Fundamentals (AI-900), demonstrating knowledge of core AI concepts, machine learning, computer vision, natural language processing, and Azure AI services.",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/8fd27c88-a787-40a9-9e89-e954a317f411/public_url"
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
      url: "https://medium.com/@Sarthakpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      slides_url: "https://bit.ly/Sarthakpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Sarthak-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sarthak_dixit@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
