import { Job, JobCategory } from "./data_types";

export const JOBS: Job[] = [
    {
        id: 0,
        company: {
            name: "Jagged Rock Media/LifeSprings",
            address: "Franklin Springs, GA 30639",
            image: "https://securemedia.newjobs.com/CompanyJobPostingLogo/51094929/713625.png",
        },
        job_title: "Senior Motion Graphics Designer",
        salary: {
            min: 5,
            max: 8,
        },
        type: "Full time",
        categories: [{ id: 3, name: "Creative arts and design" }],
        discription: [
            "As a Senior Motion Designer at Jagged Rock Media, you have at least 5-plus years of experience developing a variety of assets focusing on brand-led motion and graphic design. You live in and embrace a constant state of personal and professional evolution. Ideally, you have some experience working with direct-to-consumer brands in your portfolio. You’re a visual communicator who can create strategic narratives grounded in storytelling, brand initiatives and product. You’re effective at visual communication design across all digital touchpoints. You will be part of our agency design creative team and report directly to our Chief Creative Officer while working at the direction of our Art Director and closely with our Project Coordinator, creative team and clients. You’re a self-starter who’s deeply passionate about inspiring people to action, innovation of method, meeting deadlines and exceeding client expectations. You thrive in a demanding environment working with our agency creative and client marketing teams. You are an asset to the firm, and the very thought of mission failure is impossible for you to contemplate.",
            "Jagged Rock Media is an agency, studio complex, creative house and production company located in Northeast Georgia catering to premium brands and companies on the rise and is currently focusing their efforts on the outdoor space.",
        ],
        highlights: [
            "Scope projects, manage timelines and work with various team members, departments and vendors",
            "Create highly engaging graphics, animation and video content",
            "Encode, convert and edit videos and add effects/elements to enhance motion graphics",
            "Partner with other creative team members and key stakeholders to create content used across a variety of platforms (web, mobile, video, social and more)",
            "Own the use of graphic design and typography",
            "Assist in selecting appropriate audio, graphics and animation styles for projects",
            "Participate in brainstorming for new business pitches, existing client work and other opportunities, as needed",
        ],
        requirements: [
            "5-plus years of motion graphic design experience inclusive of video editing, graphic design and animation",
            "Fluent in Adobe Creative Suite: After Effects, Premiere, Illustrator, Photoshop, InDesign",
            "Strong portfolio showcasing high-end digital design skills",
            "Ability to work in a fast-paced environment",
            "Strong project management skills",
            "Self-starter with the ability to work independently and collaborate with a team",
            "Ability to understand marketing goals and work with team to build solutions",
            "Effective and clear communicator who is proactive in requesting any needed assets/input to keep projects moving on schedule",
            "Experience with 3D modeling, texturing, lighting and animation is a bonus",
        ],
        location: "Franklin Springs, GA",
        posted: "21 days ago",
    },
    {
        id: 1,
        company: {
            name: "CHRISTUS Health",
            address: "San Antonio, TX 78209",
            image: "https://media.newjobs.com/mm/x695205hjsx/cp/christushealth.png",
        },
        job_title: " Staff Accountant",
        salary: null,
        type: "Full time",
        categories: [{ id: 0, name: "Accountancy, banking and finance" }],
        discription: [
            "Responsibilities include account reconciliation and analysis, journal entry and financial statement preparation, budget variation analysis and assistance with special projects, budget preparation and annual audits. Must have a strong knowledge of generally accepted accounting principles and health care industry accounting practices, and apply those standards to CCVI – The Sisters of Charity of the Incarnate Word congregation. Individual must continually evaluate existing policies and procedures and recommend changes as environment changes to ensure optimum internal control. Individual must maintain a professional mannerism and appearance, effectively deal with internal users of financial information, work independently with little supervision and be flexible to work irregular hours.",
        ],
        highlights: [
            "Analyzes and prepares timely and accurate financial statements and statistical reports on a monthly basis as assigned by the Accounting Manager.",
            "Performs monthly account reconciliation as assigned by Accounting Manager. Resolves any differences and prepares necessary journal entries. ",
            "Performs monthly variation analysis on assigned accounts and departments. Make timely corrections as necessary. ",
            "Assists department heads with questions related to monthly expense reports. Make timely corrections as necessary.",
            "Appropriately adapts assigned assessments, treatment, and/or service methods to accommodate the unique physical, psychosocial, cultural, age-specific and other developmental needs of each member served. ",
            "Performs all duties in a manner that protects the confidentiality of patients and does not solicit or disclose any confidential information unless it is necessary in the performance of assigned job duties.",
        ],
        requirements: [
            "Bachelor’s degree with emphasis in Accounting or Business Administration required; Master’s degree strongly preferred ",
            "Bilingual Spanish/English strongly preferred ",
            "Knowledge of GAAP and other applicable regulatory rules, regulations and requirements",
            "Experience with CYMA Not-for-profit Accounting Software or other general ledger systems",
            "Experience with CYMA Not-for-profit Accounting Software or other general ledger systems",
        ],
        location: "San Antonio, TX 78209",
        posted: "30 days ago",
    },
    {
        id: 2,
        company: {
            name: "Altec Industries, Inc.",
            address: "Birmingham, AL",
            image: "https://media.newjobs.com/mm/x695205hjsx/cp/christushealth.png",
        },
        job_title: "Software Developer",
        salary: null,
        type: "Full time",
        categories: [
            {
                id: 9,
                name: "Information technology",
            },
        ],
        discription: [
            "We're partners in transformation. We help clients activate ideas and solutions to take advantage of a new world of opportunity. We are a team of 80,000 strong, working with over 6,000 clients, including 80% of the Fortune 500, across North America, Europe and Asia. As an industry leader in Full-Stack Technology Services, Talent Services, and real-world application, we work with progressive leaders to drive change. That's the power of true partnership. TEKsystems is an Allegis Group company. The company is an equal opportunity employer and will consider all applications without regards to race, sex, age, color, religion, national origin, veteran status, disability, sexual orientation, gender identity, genetic information or any characteristic protected by law."    
        ],
        highlights: [
            "OUR TECHNOLOGIES: Angular, current versionC#, .NET 4.5/.NETCORE REST WebAPI SQL Server",
            "Serve as an effective scrum team member and contribute to development of application software",
            "Communicate with end-users to scope new features or to troubleshoot existing features, which can include travel",
            "Develop automated tests for existing and new code",
            "Upgrade, refactor, and replace legacy systems where appropriate",
        ],
        requirements: [
            "Bachelor’s degree in MIS, Computer Science or related technical discipline",
            "Five years of full-time equivalent work experience required",
            "Familiarity with writing SQL queries and table design",
            "Familiarity with modern software development practices Continuous Integration / Deployment (CI/CD)",
            "Familiarity with REST API development",
            "Endpoint planning / implementation",
        ],
        location: "Birmingham, AL",
        posted: "2 days ago",
    },
    {
        id: 3,
        company: {
            name: "CHRISTUS Health",
            address: "San Antonio, TX 78209",
            image: "https://media.newjobs.com/mm/x695205hjsx/cp/christushealth.png",
        },
        job_title: " Staff Accountant",
        salary: null,
        type: "Full time",
        categories: [{ id: 0, name: "Accountancy, banking and finance" }],
        discription: [
            "Responsibilities include account reconciliation and analysis, journal entry and financial statement preparation, budget variation analysis and assistance with special projects, budget preparation and annual audits. Must have a strong knowledge of generally accepted accounting principles and health care industry accounting practices, and apply those standards to CCVI – The Sisters of Charity of the Incarnate Word congregation. Individual must continually evaluate existing policies and procedures and recommend changes as environment changes to ensure optimum internal control. Individual must maintain a professional mannerism and appearance, effectively deal with internal users of financial information, work independently with little supervision and be flexible to work irregular hours.",
        ],
        highlights: [
            "Analyzes and prepares timely and accurate financial statements and statistical reports on a monthly basis as assigned by the Accounting Manager.",
            "Performs monthly account reconciliation as assigned by Accounting Manager. Resolves any differences and prepares necessary journal entries. ",
            "Performs monthly variation analysis on assigned accounts and departments. Make timely corrections as necessary. ",
            "Assists department heads with questions related to monthly expense reports. Make timely corrections as necessary.",
            "Appropriately adapts assigned assessments, treatment, and/or service methods to accommodate the unique physical, psychosocial, cultural, age-specific and other developmental needs of each member served. ",
            "Performs all duties in a manner that protects the confidentiality of patients and does not solicit or disclose any confidential information unless it is necessary in the performance of assigned job duties.",
        ],
        requirements: [
            "Bachelor’s degree with emphasis in Accounting or Business Administration required; Master’s degree strongly preferred ",
            "Bilingual Spanish/English strongly preferred ",
            "Knowledge of GAAP and other applicable regulatory rules, regulations and requirements",
            "Experience with CYMA Not-for-profit Accounting Software or other general ledger systems",
            "Experience with CYMA Not-for-profit Accounting Software or other general ledger systems",
        ],
        location: "San Antonio, TX 78209",
        posted: "30 days ago",
    },
    {
        id: 4,
        company: {
            name: "TEKsystems",
            address: "Hoboken, NJ",
            image: "https://media.newjobs.com/mm/x695205hjsx/cp/christushealth.png",
        },
        job_title: "Lead Front-End Engineer",
        salary: {
            min: 4,
            max: 5
        },
        type: "Full time",
        categories: [
            {
                id: 9,
                name: "Information technology",
            },
        ],
        discription: [
            "We're partners in transformation. We help clients activate ideas and solutions to take advantage of a new world of opportunity. We are a team of 80,000 strong, working with over 6,000 clients, including 80% of the Fortune 500, across North America, Europe and Asia. As an industry leader in Full-Stack Technology Services, Talent Services, and real-world application, we work with progressive leaders to drive change. That's the power of true partnership. TEKsystems is an Allegis Group company. The company is an equal opportunity employer and will consider all applications without regards to race, sex, age, color, religion, national origin, veteran status, disability, sexual orientation, gender identity, genetic information or any characteristic protected by law."    
        ],
        highlights: [],
        requirements: [
            "Developing backend rest services",
            "Working on different design patterns",
            "Optimizing services for maximum performance",
            "Provide guidance to junior team members manage overall technical deliverable",
            "earning/Adapting to new technologies",
            "Thorough code review and suggest refactor for better design/performance",
            "Strong proficiency in Java/J2EE including webservices",
            "Knowledge of SQL/NoSQL databases",
            "Knowledge on AWS will be added advantage",
            "Knowledge of modern authorization mechanisms, such as JSON Web Token",
        ],
        location: "Hoboken, NJ",
        posted: "Today",
    },
    {
        id: 5,
        company: {
            name: "Matrix Precise, Inc.",
            address: "Oakland, CA 94612",
            image: "https://media.newjobs.com/mm/x695205hjsx/cp/christushealth.png",
        },
        job_title: "React Front-End Engineer",
        salary: {
            min: 5,
            max: 7
        },
        type: "Full time",
        categories: [
            {
                id: 9,
                name: "Information technology",
            },
        ],
        discription: [
            "This position is for a Front-end Solutions Engineer (Web/ Mobile) to join as a core member of the development team. You will be responsible for architecting, designing, developing, and deploying reactive, dynamic web solutions in both the mobile and non-mobile platform. This individual must have a strong track record in developing enterprise solutions with expertise in React/Node, NPM, MS SQL, REST API, Docker/Kubernetes. IOS development experience is a significant plus as well as health care/ clinical care domain experience.",
            "This is a highly collaborative position across various cross functional teams. We are looking for an individual with excellent written and communication skills and demonstrated interpersonal and organization abilities.  "
        ],
        highlights: [
            "Architect, design, develop and deploy reactive, dynamic web solution both mobile and non-mobile platform for enabling and managing lifecycle of solution that helps deliver clinical care.",
            "Strong in React, Node based development expected in microservices architecture framework using Docker/Kubernetes.",
            "Work with Product Owner/Delivery Manager/Business Analysts to understand user stories, develop user solution mockups, user experience based on approved standards in Agile workflow.",
            "Collaborate and interact with other core team and cross-functional teams to architect, design, develop, unit test, and release.",
            "Developing across the full stack of Web technologies – Persistence, Services, Platform, Performances, and with a focus on great experiences",
            "Develop Proof-of-Concept projects to validate new solution for web and native IOS platforms"
        ],
        requirements: [
            "Minimum 10 years of professional experience developing applications using latest Java, React, Node technologies.",
            "3+ years of solid, hands on experience with ReactJS/Redux, Electron, JavaScript, REST API, SASS, Webpack, Node, Express, Docker, Docker-Compose, RabbitMQ, MongoDB, SOA, Jenkins, ECR",
            "MySQL and MongoDB Database experience for leveraging and developing applications.",
            "Ability to consume REST APIs and microservices. Development experience for secure REST APIs are a nice to have.",
            "Understanding of messaging systems like Kafka, RabbitMQ, IBMMQ.",
            "Bachelor’s degree in Computer Science or related field.",
            "Excellent written and oral communication skills; Ability to communicate effectively with technical and non-technical staff.",
            "Knowledge of modern authorization mechanisms, such as JSON Web Token",
        ],
        location: "Oakland, CA",
        posted: "Today",
    },
];

export const CATEGORIES: JobCategory[] = [
    {
        id: 0,
        name: "Accountancy, banking and finance",
    },
    {
        id: 1,
        name: "Business, consulting and management",
    },
    {
        id: 2,
        name: "Charity and voluntary work",
    },
    {
        id: 3,
        name: "Creative arts and design",
    },
    {
        id: 4,
        name: "Energy and utilities",
    },
    {
        id: 5,
        name: "Engineering and manufacturing",
    },
    {
        id: 6,
        name: "Environment and agriculture",
    },
    {
        id: 7,
        name: "Healthcare",
    },
    {
        id: 8,
        name: "Hospitality and events management",
    },
    {
        id: 9,
        name: "Information technology",
    },
    {
        id: 10,
        name: "Law",
    },
    {
        id: 11,
        name: "Law enforcement and security",
    },
    {
        id: 12,
        name: "Leisure, sport and tourism",
    },
    {
        id: 13,
        name: "Marketing, advertising and PR",
    },
    {
        id: 14,
        name: "Media and internet",
    },
    {
        id: 15,
        name: "Property and construction",
    },
    {
        id: 16,
        name: "Public services and administration",
    },
    {
        id: 17,
        name: "Recruitment and HR",
    },
    {
        id: 18,
        name: "Retail",
    },
    {
        id: 19,
        name: "Sales",
    },
    {
        id: 20,
        name: "Science and pharmaceuticals",
    },
    {
        id: 21,
        name: "Social care",
    },
    {
        id: 22,
        name: "Teacher training and education",
    },
    {
        id: 23,
        name: "Transport and logistics",
    },
];
