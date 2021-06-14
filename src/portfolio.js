
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ben Cheikh Amin",
  title: "Salut tout le monde, je m'appelle Amin",
  subTitle: emoji("Un développeur de logiciels passionné 🚀 avoir une expérience de la création d applications Web et mobiles avec JavaScript / Reactjs / Angular / Nodejs / React Native et d autres bibliothèques et frameworks sympas."),
  resumeLink: "https://drive.google.com/file/d/1-gz-q8JJY-4zqmVwlmnZ5RXELYrGkzc8/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/megamoo456",
  linkedin: "https://www.linkedin.com/in//amin-ben-cheikh-04585a179/",
  gmail: "amin.bencheikh@esprit.tn",
  facebook: "https://www.facebook.com/amin.bencheikh.1"
 
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DÉVELOPPEUR FULL STACK QUI VEUT EXPLORER CHAQUE TECH STACK",
  skills: [
    emoji("⚡ Développez des interfaces Front end / interface user hautement interactives pour vos applications Web et mobiles ⚡"),
    emoji("⚡ Développez avec la stack MERN  Javascript, React, NodeJS, MongoDB ⚡"),
    emoji("⚡ Intégration de services tiers ⚡ ")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Esprit University",
      logo: require("./assets/images/EspritLogo.png"),
      subHeader: "Diplôme d'ingenieur en Informatique",
      duration: "September 2017 - Present ",
      desc: "",
      descBullets: [
       
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
      role: "Full-Stack Developer",
      company: "xGB",
      companylogo: require("./assets/images/xgbLogo.png"),
      date: "Juin 2018 – Juil 2018",
      desc: "https://www.xgb.com.br/",
      descBullets: [
        "J'ai développer un site support Pour xGB startup avec un simple code ",
        "Outils : Html/Css/Javascript/Php/Sql"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "megamoo456", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Grand Projet",
  subtitle: "Achievements et quelque projet qu'on a fait dans l'université !",
  projects: [
    {
      image: require("./assets/images/GestudentLogo.png"),
      link: "https://github.com/GeStudent/GeStudent-"
    },{
      image: require("./assets/images/insghit1.png"),
      link: "https://github.com/GeStudent/GeStudent-"
    },
    {
      image: require("./assets/images/online.png"),
      link: "https://github.com/OnlineWardrobe"     
    },
    {
      image: require("./assets/images/animalia.png"),
      link: "https://github.com/animalia1/animalianew"  
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  achievementsCards: [
   
  ]
};

// Blogs Section

const blogSection = {
  blogs: [
  
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discutez d'un projet ou voulez simplement dire bonjour? Ma boîte de réception est ouverte à tous.",
  number: "+216-54584310",
  email_address: "amin.bencheikh@esprit.tn"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, podcastSection, contactInfo };
