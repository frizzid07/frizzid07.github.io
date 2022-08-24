/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import audio from "../assets/images/audio.jpg";
import driver from "../assets/images/driver.jpg";
import facemask from "../assets/images/facemask.jpg";
import farmeasy from "../assets/images/farmeasy.jpg";
import jnj from "../assets/images/jnj-circle.png";
import tcs from "../assets/images/tcs-small.png";
import rait from "../assets/images/rait-try.png";
import hackathon from "../assets/gifs/hackathon-final.gif";
import research from "../assets/gifs/research.gif";
import intel from "../assets/gifs/intel-new.gif";
import medium from "../assets/gifs/medium.gif";
// import google from "../assets/gifs/google.gif";
// import dyprait from "../assets/images/dyp-rait.png";
// import pace from "../assets/images/pace.png";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Tanmay Bhagwat",
  title: "Hello world, I'm Tanmay",
  subTitle: emoji("A passionate CS Graduate Student at UC Irvine. Enthusiastic about Data-driven AI/ML Software Development. Previously active as a Data Engineer for Johnson & Johnson Pharmaceuticals."),
  resumeLink: "https://drive.google.com/file/d/1rgH1TX75k-KYZR6SEusPsYFWS3ssJ93_/view?usp=sharing",
  cvLink: "https://drive.google.com/file/d/1des2sjfKsZdaLpIYtkL-PDkOEj-0pWDM/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/frizzid07",
  githubrepo: "https://github.com/frizzid07?tab=repositories",
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
      date: "Nov 2020 – Jul 2022",
      desc: "Member of the Analytics & Insights Team for JnJ on behalf of Tata Consultancy Services",
      descBullets: [
        "Remodeled database architecture for Global Inventory data",
        "Configured faster Big Data ETL pipelines through PySpark",
        "Reduce execution time for transformation workflows through parallelization",
        "Migrated APAC Inventory data from EDW to Azure Data Lake"
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
        "Assigned difficulty levels to generated questions according to Bloom's Taxonomy"
      ]
    },
    {
      role: "R&D Intern",
      company: "Ramrao Adik Institute of Technology",
      companylogo: rait,
      date: "Aug 2018 – Oct 2018",
      desc: "Worked as R&D intern on the RAIT Cluster Project at the High Performance Computing Lab",
      descBullets: [
        "Configured MPI Endpoints on 16 Linux machines and connected them through OpenSSH Server on LAN",
        "Emulated heavy matrix multiplication operations to document 200% performance improvement"
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


// Some Big Projects You have worked with your company

const bigProjects = {
  viewProjects: true,
  title: "Academic & Personal Projects",
  subtitle: "Some interesting ventures I have worked on in my student life",
  projects: [
    {
      image: audio,
      title: 'Enhanced Audio Source Separation',
      description: 'A system to perform accurate source separation on musical audio to split the track into four stems, i.e. vocals, drums, bass and accompaniment, using hybrid neural networks',
      footerLink : [
        {
          name: 'View Project',
          url: 'https://github.com/frizzid07/Enhanced-Audio-Source-Separation'
        }
      ]
    },
    // <a href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a>
    {
      image: farmeasy,
      title: 'FarmEasy',
      description: 'An AI-powered chatbot which enables farmers to obtain expert guidance and grievance redressal through features like Best Crop Suggestion & Crop Disease Detection',
      footerLink : [
        {
          name: 'View Project',
          url: 'https://github.com/frizzid07/krushak-unnati'
        }
      ]
    },
    // <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by vectorjuice - www.freepik.com</a>
    {
      image: driver,
      title: 'Driver Alertness Detection',
      description: 'A system deployed on the vehicular dashboard camera to monitor the heartbeat and facial features of the driver to detect drowsiness and issue alerts',
      footerLink : [
        {
          name: 'View Project',
          url: 'https://github.com/frizzid07/driver-alertness-detection'
        }
      ]
    },
    // <a href='https://www.freepik.com/photos/car'>Car photo created by diana.grytsku - www.freepik.com</a>
    {
      image: facemask,
      title: 'Real-time facial mask detection',
      description: 'A Convolutional neural network-based classifier which monitors the usage of facial masks in public places using real-time video feed',
      footerLink : [
        {
          name: 'View Project',
          url: ''
        }
      ]
    },
    // <a href='https://www.freepik.com/vectors/medical'>Medical vector created by pikisuperstar - www.freepik.com</a>
  ]
};

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
        "Third Place @ SRM University's HackSRM",
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
          name: "Certificate [1]",
          url: "https://drive.google.com/file/d/1Ugvpi7a544nZSRXSBNdSys44al0oDvjs/view?usp=sharing"
        },
        {
          name: "Research [2]",
          url: "https://www.academia.edu/42015328/Novel_Approaches_to_Text_Steganography"
        },
        {
          name: "Certificate [2]",
          url: "https://drive.google.com/file/d/1Nc4Khb1Wns2oPWEwRVwaWlj-qiCLCokI/view?usp=sharing"
        },
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

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "I have a knack for technical writing and was an author for several reputed publications on Medium",
  image: medium,

  blogs: [
    {
      url: "https://becominghuman.ai/bolstering-cybersecurity-through-artificial-intelligence-b3da5c6cb4bd",
      title: "Bolstering Cybersecurity through Artificial Intelligence",
      description: "The rampant progress in technology over the past decade has led to an exponential rise in data generation. Mobile computing devices make personal data easy to store and readily available. While it might be convenient to be able to access data at the click of a button, it also engenders looming security threats. This article discusses methods of using AI to prevent cyber threats."
    },
    {
      url: "https://medium.datadriveninvestor.com/blockchain-the-pinnacle-of-cyber-security-fa17dbf20ba9",
      title: "Blockchain: The Pinnacle of Cyber Security?",
      description: "Imagine a world where you can ensure making any number of confidential monetary transactions without the constant dread of getting hacked. The world needs a highly secure encryption system that is way too tedious for any hacker to get into. Blockchain tends to fulfill a larger portion of this premise."
    },
    {
      url: "https://medium.datadriveninvestor.com/google-duplex-personification-at-its-best-1ee2ec828b1a",
      title: "Google Duplex — Personification at its best",
      description: "Over the years, Google has never failed to amaze us with their cutting-edge technology and out-of-the-box experimentation. At their I/O Developer Conference in May 2018, Google unveiled their latest development in the field of neural networks i.e. Google Duplex. Duplex is an additional feature to Google Assistant, which makes the interaction much smoother and natural."
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me 📲"),
  subtitle: "Want to hire me or collaborate on a project? Scan the QR Code to view my LinkTree and feel free to just say Hi! My Inbox is open for all.",
  number: "+91-9920361298",
  email_address: "tvbhagwa@uci.edu"
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  projects,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo
};