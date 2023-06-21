import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/Santosh_Picture.jpg';
import amplifyGit from '../images/amp-git.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Blog,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Santosh Manandhar',
  description: "Portfolio website of Santosh Manandhar",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  //Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Blog:'blog',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Santosh Manandhar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {/*I am a dedicated <strong className="text-stone-100">System Administrator </strong> pursuing a Master's degree in Computer Science at Maharishi International University, Iowa. Apart from my academic pursuits, I am an avid learner, always eager to explore new technologies and stay updated with the latest industry trends. In my leisure time, I indulge in various hobbies such as photography, flying drones, and motorbiking. These activities provide me with a creative outlet and a sense of adventure. I believe in continuous self-improvement and find joy in exploring both the virtual and physical realms.*/}


        I'm a <strong className="text-stone-100">System Administrator</strong>, currently studying Masters In Computer Science
        at <strong className="text-stone-100">Maharishi International University</strong>, Iowa.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
           In my free time, I study new technologies and my hobbies includes - <strong className="text-stone-100">Photography, Flying Drone, and Motorbiking.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Process-driven, highly competent IT professional with over 15 years of experience in administering, managing and maintaining Windows server and computer system. Adept with the level of experience in installing and configuring software, hardware and networks; able to monitor system performance and
  troubleshoot issues. Hands-on experience on ServiceNow CMDB, Discovery and Service Mapping. Possesses an associate certification in Microsoft Windows Servers and Azure.`,
  aboutItems: [
    {label: 'Location', text: 'Fairfield, IA', Icon: MapIcon},
    {label: 'Age', text: '39', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Nepali', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Photography, Videography', Icon: SparklesIcon},
    {label: 'Study', text: 'Maharishi International University', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Nepali',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 3,
      },
      {
        name: 'React',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'SpringBoot',
        level: 5,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },

  {
    name: 'Operating System - Server Side',
    skills: [
      {
        name: 'Windows Server 2022',
        level: 7,
      },
      {
        name: 'Windows Server 2019',
        level: 8,
      },
      {
        name: 'Windows Server 2012',
        level: 7,
      },
    ],
  },

  {
    name: 'Operating System - Client Side',
    skills: [
      {
        name: 'Windows 11',
        level: 8,
      },
      {
        name: 'Windows 10',
        level: 8,
      },
      {
        name: 'MacOS',
        level: 6,
      },
    ],
  },

  {
    name: 'System Administration',
    skills: [
      {
        name: 'File Share',
        level: 7,
      },
      {
        name: 'FTP',
        level: 8,
      },
      {
        name: 'DNS',
        level: 6,
      },
      {
        name: 'DHCP',
        level: 6,
      },
      {
        name: 'Networking',
        level: 8,
      },
      {
        name: 'Cloud',
        level: 6,
      },
      {
        name: 'McAfee ePO',
        level: 6,
      },
    ],
  },
  // {
  //   name: 'ServiceNow',
  //   skills: [
  //     {
  //       name: 'CMDB',
  //       level: 5,
  //     },
  //     {
  //       name: 'Discovery',
  //       level: 4,
  //     },
  //     {
  //       name: 'Service Mapping',
  //       level: 5,
  //     },
  //   ],
  //
  // }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Cloud Computing Project - Web Portfolio',
  //   description: 'Created a portfolio as part of Cloud Computing course. Created using react and typescript.',
  //   url: 'https://smanandhar.me',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  // {
  //   date: 'Running',
  //   location: 'Maharishi International University, USA',
  //   title: 'Masters in Computer Science',
  //   content: <p>I'm currently studying MSCS at Maharishi International University, Iowa. The program is Programming intensive and focus on various leading programming language like - Java, JavaScript, HTML, CSS, Angular, React and more.</p>,
  // },
  // {
  //   date: 'August 2015',
  //   location: 'Sikkim Manipal University, India',
  //   title: 'MScIT',
  //   content: <p>It's a distance education course and I studied Programming, Algorithm, Network, Security and OS level subjects.</p>,
  // },
  // {
  //   date: 'November 2007',
  //   location: 'Prime College, Nepal',
  //   title: 'Bachelor in Information Management',
  //   content: <p>It's a four years bachelor program affiliated with Tribhuvan University. The courses are focused on Programming languages (C, C++. C# and Java), Network including CCNP training, Web Design, Security, Database, and many more. </p>,
  // },
];

export const experience: TimelineItem[] = [
  // {
  //   date: 'February 2018 - August 2022',
  //   location: 'RTI International',
  //   title: 'IT Officer (System Administrator)',
  //   content: (
  //     <p>
  //       Joined the RTI International Global ITS Support team to provide support on AD Management, File Share, FTP, Build and Decommission of servers in Azure and VMWare, Create and Manage Security policies. Later on 2020, I moved to Cyber Security department and work on creating Service Maps for various enterprise applications, dashboard creation and management and static and dynamic report creation.
  //     </p>
  //   ),
  // },
  // {
  //   date: 'August 2015 - January 2018',
  //   location: 'RTI International\'s Early Grade Reading Program (EGRP) Nepal',
  //   title: 'IT Specialist',
  //   content: (
  //     <p>
  //       Joined the EGRP Nepal Project and worked on setup of EGRP Nepal headoffice in Kathmandu and 5 regional offices in Nepal. Provide technical training and support to 100+ staffs of the project. Setup and maintain AD server, File Server and Print Server.
  //     </p>
  //   ),
  // },

  // {
  //   date: 'April 2012 - July 2015',
  //   location: 'International Organization for Migration (IOM) Nepal',
  //   title: 'IT Assistant',
  //   content: (
  //     <p>
  //       Worked in two project offices of IOM Nepal - Kathmandu and Damak, providing onsite and offsite support, maintenance of ICT equipment, implementation and managment of centralized data backup system and threat prevention.
  //     </p>
  //   ),
  // },

  // {
  //   date: 'December 2010 - March 2012',
  //   location: 'Elite Networks Pvt. Ltd., Nepal',
  //   title: 'Senior Support Executive',
  //   content: (
  //     <p>
  //       Worked on providing technical support to various country-leading banks including Standard Chartered Bank, work on implementation of Wincor Preview application for ATM machine monitor and maitenance of in-house antivirus system and MDaemon Email server.
  //     </p>
  //   ),
  // },

  // {
  //   date: 'November 2007 - January 2010',
  //   location: 'Commodities & Metal Exchange Nepal Ltd., Nepal',
  //   title: 'IT Officer',
  //   content: (
  //     <p>
  //       Worked on design, implemenatation and maintenance of AD server in the office. Support to the brokers related to in-house application issues and installation.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dipendra Poudel',
      text: 'I am delighted to write a recommendation for Santosh Manandhar based on his outstanding performance during his tenure at the International Organization for Migration (IOM) - UN Migration. I had the pleasure of working with him during for almost 3 years at IOM.\n' +
          '\n' +
          'Santosh demonstrated exceptional technical skills and a strong dedication to his work. He consistently provided excellent onsite end-user support to the IOM staff, ensuring their technology needs were met promptly and efficiently.\n' +
          '\n' +
          'One of Santosh\'s notable contributions was his expertise in installing, upgrading, and troubleshooting hardware and software, ensuring a seamless experience for end users. Santosh also played a crucial role in safeguarding the systems and data from potential threats.\n' +
          '\n' +
          'In addition to his technical skills, Santosh displayed a proactive approach to his responsibilities. He actively participated in the management of the ITC equipment inventory, ensuring proper tracking and maintenance. Santosh was also instrumental in implementing and managing a centralized data backup system, contributing to the overall data security of the organization.\n' +
          '\n' +
          'Moreover, Santosh exhibited excellent communication and training abilities. He provided ITC training to end users, enabling them to effectively utilize existing and new applications and systems. His patience and clear instructions helped enhance the productivity of staff members.\n' +
          '\n' +
          'Throughout his tenure at IOM - UN Migration, Santosh consistently demonstrated professionalism, reliability, and a strong work ethic.\n' +
          '\n' +
          'Based on my firsthand experience working with Santosh, I highly recommend him for any IT-related position. His technical expertise, dedication to providing exceptional support, and strong problem-solving skills make him an ideal candidate for any organization. Please feel free to reach out to me if you require any further information.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Geshan Manandhar',
      text: 'Santosh is a highly skilled and experienced System Administrator (budding DevOps/SRE engineer) with over 15 years of experience in managing and optimizing IT systems and network infrastructure. He has a deep understanding of Windows server environments, and he is proficient in deploying software and security updates while ensuring system stability. Santosh is also skilled in troubleshooting and resolving complex technical issues, and he has a proven track record of providing timely and effective support to end-users. Recently he has proven his mettle as a DevOps engineer with a host of Azure certificates, school projects deployed to AWS and overall impressive knowlege of Git, CI/CD and infrastrucutre as code.\n' +
          '\n' +
          'In addition to his technical skills, Santosh is also a highly motivated and results-oriented individual. He is always looking for ways to improve efficiency and drive innovation, and he is always willing to go the extra mile to get the job done. Santosh is also a team player, and he is always willing to help out his colleagues. I can vouch for this from our Bachelor years where he was very helpful to everyone and always eager to get his tasks done in time with optimal quality.\n' +
          '\n' +
          'I have no doubt that Santosh would be an asset to any company he joins. He is a highly skilled and experienced System Administrator with a proven track record of success. I highly recommend him for all eligible roles.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Unubold Tumenbayar',
      text: 'Santosh Manandhar is an exceptional individual whom I had the pleasure of teaching AWS during our Cloud Computing program at Maharishi International University. I am delighted to provide my highest recommendation for his dedication, aptitude, and commitment to AWS technologies.\n' +
          '\n' +
          'Throughout the course, he consistently demonstrated an eagerness to learn and a strong work ethic. He eagerly absorbed complex concepts, exhibited a solid understanding of AWS fundamentals, and showcased exceptional problem-solving skills when faced with challenging scenarios. His ability to grasp new concepts quickly and apply them to real-world scenarios was impressive.\n' +
          '\n' +
          'It is without hesitation that I recommend Santosh Manandhar for any opportunity related to AWS. He possess the technical skills, the drive for continuous learning, and the collaborative mindset that are crucial for success in this field. I am confident that his strong work ethic, coupled with his exceptional AWS knowledge, will make him an asset to any organization.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Do not hesitate to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'santosh.manandhar1@gmail.com',
      href: 'mailto:santosh.manandhar1@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Fairfield, IA, USA',
      href: 'https://www.google.ca/maps/place/Fairfield,+IA,+USA/@41.022201617542166,%20-91.96669033465825',
    },
    {
      type: ContactType.Instagram,
      text: '@cameradventuresantosh',
      href: 'https://www.instagram.com/cameradventuresantosh/',
    },
    {
      type: ContactType.Github,
      text: 'santoshmanandhar',
      href: 'https://github.com/santoshmanandhar',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/santoshmanandhar'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/manandharsantosh/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/cameradventuresantosh/'},
];
