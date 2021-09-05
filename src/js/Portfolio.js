/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import jnj from "../assets/images/jnj-circle.png";
import tcs from "../assets/images/tcs-small.png";
import rait from "../assets/images/rait-try.png";
import hackathon from "../assets/gifs/hackathon-final.gif";
import research from "../assets/gifs/research.gif";
import intel from "../assets/gifs/intel-new.gif";
// import google from "../assets/gifs/google.gif";
// import dyprait from "../assets/images/dyp-rait.png";
// import pace from "../assets/images/pace.png";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Tanmay Bhagwat",
  title: "Hello world, I'm Tanmay",
  subTitle: emoji("A passionate AI & ML Developer from India. Enthusiastic researcher of Neural Networks & Cryptography. Currently active as a Data Engineer for Johnson & Johnson Pharmaceuticals."),
  resumeLink: "https://drive.google.com/file/d/1uBnsY1LBXbhFxvR_fX4gp06fiSdvyM1-/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/frizzid07",
  linkedin: "https://www.linkedin.com/in/tanmay-bhagwat/",
  gmail: "tanmaybhagwat07@gmail.com",
  // facebook: "https://www.facebook.com/saurav.kanchan/",
  medium: "https://medium.com/@tanmaybhagwat",
  // Instagram and Twitter are also supported in the links!
  twitter: "https://twitter.com/tanmay_161298"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Data Engineer and AI/ML Developer who is fond of exploring and tinkering with up-and-coming tech",
  // skills: [
  //   emoji("⚡ Deep Learning"),
  //   emoji("⚡ Natural Language Processing"),
  //   emoji("⚡ Data Analytics"),
  //   emoji("⚡ Web Development"),
  // ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      icon: "logos:python"
    },
    {
      skillName: "SQL",
      icon: "logos:mysql"
    },
    {
      skillName: "Tensorflow",
      icon: "logos:tensorflow"
    },
    {
      skillName: "PyTorch",
      icon: "logos:pytorch"
    },
    {
      skillName: "Azure",
      icon: "logos:azure-icon"
    },
    {
      skillName: "Databricks",
      icon: "simple-icons:databricks"
    },
    {
      skillName: "AWS",
      icon: "logos:aws"
    },
    {
      skillName: "Node.js",
      icon: "logos:nodejs"
    },
    {
      skillName: "MongoDB",
      icon: "logos:mongodb"
    },
    {
      skillName: "React",
      icon: "logos:react"
    },
    {
      skillName: "HTML",
      icon: "logos:html-5"
    },
    {
      skillName: "CSS",
      icon: "logos:css-3"
    }
  ]
};

// const education = {
//   institutes : [
//     {
//       name: "Ramrao Adik Institute of Technology",
//       affiliation: "University of Mumbai",
//       area: "Navi Mumbai, Maharashtra, IN",
//       image: dyprait,
//       startYear: 2016,
//       endYear: 2020,
//       score: "9.17/10",
//       activities: "Computer Society of India, Editorial Board, Research Wing, Coders' Club"
//     },
//     {
//       name: "Pace Junior Science College",
//       affiliation: "",
//       area: "Thane, Maharashtra, IN",
//       image: pace,
//       startYear: 2014,
//       endYear: 2016,
//       score: "Computer Science- 192/200",
//       activities: ""
//     }
//   ]
// }

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Johnson & Johnson Pharmaceuticals",
      companysub: "Tata Consultancy Services",
      companylogo: jnj,
      date: "Nov 2020 – Present",
      desc: "Member of the Analytics & Insights Team for JnJ on behalf of Tata Consultancy Services",
      descBullets: [
        "Configure Azure data pipelines for SQL workflows",
        "Create faster data workflows through PySpark",
        "Reduce execution time for ELT Tasks through parallelization",
        "Prepare EDW Data for BI Reports"
      ]
    },
    {
      role: "Project Associate-NLP",
      company: "Tata Consultancy Services",
      companylogo: tcs,
      date: "Jun 2019 – Aug 2019",
      descBullets: [
        "Developed an NLP pipeline for parsing & annotating 5000+ academic text documents",
        "Built a Question Generation model to automate MCQ creation",
        "Assigned difficult levels to generated questions according to Bloom's Taxonomy"
      ]
    },
    {
      role: "R&D Intern",
      company: "Ramrao Adik Institute of Technology",
      companylogo: rait,
      date: "Aug 2018 – Oct 2018",
      desc: "Worked as R&D intern on the RAIT Cluster Project at the High Performance Computing Lab",
      descBullets: [
        "Configured MPI Endpoints on 32 Linux machines and connected them through OpenSSH Server on LAN",
        "Emulated heavy matrix multiplication operations to document performance efficiency"
      ]
    },
  ]
};

// /* Your Open Source Section to View Your Github Pinned Projects
// To know how to get github key look at readme.md */

const projects = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "frizzid07", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// // Some Big Projects You have worked with your company

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/skizzle.png"),
//       link: "https://explorer.skizzle.email/"
//     },
//     {
//       image: require("./assets/images/eraswaplife.png"),
//       link: "https://eraswap.life/"
//     },
//     {
//       image: require("./assets/images/dayswappers.png"),
//       link: "https://dayswappers.com/"
//     },
//     {
//       image: require("./assets/images/khelomore.png"),
//       link: "https://pnp.khelomore.com/"
//     }
//   ]
// };

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🥇"),
  subtitle: "Hackathons, Research Work, Professional Affiliations & Certifications",

  achivementsCards: [
    {
      title: "Hackathons",
      subtitle: "Domains- Machine Learning, Web Development",
      image: hackathon,
      descBullets: [
        "Second Place @ NIT Raipur's CodeUtsava 4.0",
        "Best Design @ RAIT's BitCamp 2019",
        "Finalist @ TSEC Hacks 2019",
      ],
      footerLink: [
        {
          name: "CodeUtsava 4.0",
          url: "https://drive.google.com/file/d/1DL-Gto3SWKMSCFZWRBaHvYLwn-12O_Oz/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"}
      ]
    },
    {
      title: "Research Papers",
      subtitle: "Topics- Deep Learning, Cryptography",
      image: research,
      descBullets: [
        "[1] Enhanced Audio Source Separation and Musical Component Analysis",
        "[2] Novel Approaches to Text Steganography",
      ],
      footerLink: [
        {
          name: "Research [1]",
          url: "https://ieeexplore.ieee.org/document/9358850"
        },
        {
          name: "Research [2]",
          url: "https://www.academia.edu/42015328/Novel_Approaches_to_Text_Steganography"
        }
      ]
    },

    {
      title: "Affiliations & Certifications",
      subtitle: "Topics- Artificial Intelligence, Data Analytics",
      image: intel,
      descBullets: [
        "Student AI Ambassador for Intel Corporation",
        "Google Data Analytics Specialization",
        "Azure Fundamentals Certificaion",
        "DeepLearning.AI Tensorflow Developer Specialization"
      ],
      footerLink: [
        // {name: "Google", url: "https://courses.cognitiveclass.ai/certificates/53b82d96041b4399801af075ec2ff813"},
        {
          name: "Intel",
          url: "https://devmesh.intel.com/users/tanmay-bhagwat/"
        },
        {
          name: "MS Azure",
          url: "https://www.credly.com/badges/50b66657-3b26-4ba1-a490-b54d76cc1f98"
        },
        {
          name: "DeepLearning.AI",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/MP98546NWJQS"
        }
      ]
    }
  ]
};

// // Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://medium.com/coinmonks/compiling-deploying-and-interacting-with-smart-contract-using-javascript-641cf0342824",
//       title: "Anonymous web authentication",
//       description: "A modern approach to authenticate users without email and password. This blog discuss the problem " +
//         "with current implementation and it's solution"
//     },
//     {
//       url: "https://medium.com/coinmonks/compiling-deploying-and-interacting-with-smart-contract-using-javascript-641cf0342824",
//       title: "Compiling, Deploying and Interacting with Smart Contract using JavaScript",
//       description: "Instead of using truffle you can also compile, deploy and interact with smart contracts using ethersjs with ease"
//     },
//     {
//       url: "https://dev.to/sauravkanchan/svelte-bootstrap-with-material-design-1j99",
//       title: "Svelte Bootstrap with Material Design",
//       description: "This project is based on the latest Bootstrap 4 and Svelte 3. Absolutely no jQuery. It is inspired by mdbreact. This blog post will be about how to install it and use it."
//     }
//   ]
// };

// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Faculty development program in UMIT",
//       subtitle: "Blockchain Basics",
//       event_url: "https://www.picuki.com/media/2068816140826916633"
//     },
//     {
//       title: "Automate the boring stuffs with python",
//       subtitle: "Workshop conducted by ISTE RAIT",
//       event_url: "https://www.facebook.com/isteraitofficial/photos/a.2047088395524310/2510579635841848/?type=3"
//     }
//   ]
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

// const contactInfo = {
//   title: emoji("Contact Me ☎️"),
//   subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
//   number: "+91-9594464390",
//   email_address: "sauravn@gmail.com"
// };

// //Twitter Section

// const twitterDetails = {

//   userName: "sauravnk30"//Replace "twitter" with your twitter username without @

// };
// export {
//   greeting,
//   socialMediaLinks,
//   skillsSection,
//   techStack,
//   workExperiences,
//   openSource,
//   bigProjects,
//   achievementSection,
//   blogSection,
//   talkSection,
//   podcastSection,
//   contactInfo,
//   twitterDetails
// };

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  projects,
  achievementSection
};