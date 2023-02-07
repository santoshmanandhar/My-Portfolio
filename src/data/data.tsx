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
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
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
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
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
  troubleshoot issues. Possesses an associate certification in Microsoft and Cisco.`,
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
        level: 5,
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
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'SpringBoot',
        level: 4,
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
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
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
      name: 'Sanjive Kumar Singh',
      text: 'I know Santosh since 2015, and I found him very professional in his work. He is always there when you need him. He had done a brilliant job on setup of RTI International\'s EGRP Nepal project head office at Kathmandu and other 5 regional offices./n Good luck Santosh. ',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Rekha Shrestha',
      text: 'I found Santosh a very hard working person. He is always available to help. He is always keen to learn new things. Good luck.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Bordee Vattanawase',
      text: 'Santosh is very knowledgable and professional. I worked as his supervisor for 3 years and he had proved himself in every task I assigned to him.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
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
      text: '@san_supertramp',
      href: 'https://www.instagram.com/san_supertramp/',
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/smanandhar/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/san_supertramp/'},
];
