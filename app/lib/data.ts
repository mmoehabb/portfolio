export type CATEGORY = "Packages" | "Applications" | "Writings" | "Designs"

export type Publication = {
  title: string;
  desc: string;
  imgsrc: string;
  link: string;
  category: Array<CATEGORY>;
  tags: Array<string>;
}

export const CATEGORIES: Array<CATEGORY> = [
  "Packages",
  "Applications",
  "Writings",
  "Designs"
]

// comes in handy when the project is deployed with guthub pages.
const prefix = "/portfolio";

export function getPublicationsByCategory(category: CATEGORY, count: number): Array<Publication> {
  return Pubs.filter(pub => pub.category.includes(category)).slice(0, count)
}

export const Pubs: Array<Publication> = [
  {
    title: "Syncoboard",
    desc: "A code-driven project management board designed specifically for high-velocity software development teams.",
    imgsrc: `${prefix}/pubs/syncoboard.webp`,
    link: "https://syncoboard.com/",
    category: ["Applications"],
    tags: ["Web Development", "Management"]
  },
  {
    title: "Zest",
    desc: "A relatively easy-to-pick, simple, and straightforward package that developers can use in order to write graphic applications in Zig.",
    imgsrc: `${prefix}/pubs/zest.webp`,
    link: "https://github.com/mmoehabb/zest",
    category: ["Packages"],
    tags: ["SDL", "Game Development", "framework"]
  },
  {
    title: "DarAlWefaq Store",
    desc: "a comprehensive web application for Dar Al Wefaq, a prominent publishing house specializing in academic, legal, and literary works.",
    imgsrc: `${prefix}/pubs/daralwefaq.webp`,
    link: "https://daralwefaq.com/",
    category: ["Applications"],
    tags: ["Web Development", "Store", "Books"]
  },
  {
    title: "El-Mahrousa",
    desc: "El-Mahrousa (المحروسة) is a localized, streamlined version of the classic Monopoly game tailored for the Egyptian market. It features Egyptian cities, currency (EGP), and a 24-tile board for faster, more engaging gameplay. The game supports real-time multiplayer over a Peer-to-Peer (P2P) network using WebRTC, allowing players to connect and play directly with each other without a centralized game server.",
    imgsrc: `${prefix}/pubs/el-mahrousa.webp`,
    link: "https://github.com/mmoehabb/el-mahrousa",
    category: ["Applications"],
    tags: ["GameDevelopment", "HTML5", "Multiplayer"]
  },
  {
    title: "Luci",
    desc: "A simple CLI application that unifies writting shell commands script files for different operating systems.",
    imgsrc: `${prefix}/pubs/luci.webp`,
    link: "https://github.com/mmoehabb/luci",
    category: ["Packages"],
    tags: ["Go", "CLI"]
  },
  {
    title: "LiteSpace",
    desc: "A full-stack web application for teaching english as a second language, through one-to-one speaking sessions.",
    imgsrc: `${prefix}/pubs/litespace.webp`,
    link: "https://github.com/litespace-org/litespace",
    category: ["Applications"],
    tags: ["Contribution", "Web Development", "WebRTC"]
  },
  {
    title: "GoWeb - Project Template",
    desc: "A template for developing full-stack web applications in Golang. Used tech: Fiber, Templ, Tailwind, HTMX, and Postgres.",
    imgsrc: `${prefix}/pubs/goweb.gif`,
    link: "https://github.com/mmoehabb/goweb-template",
    category: ["Packages"],
    tags: ["Golang", "Web Development", "Template"]
  },
  {
    title: "Play with Your Pal",
    desc: "A full-stack web application that allows gamers to play local multiplayer games online together.",
    imgsrc: `${prefix}/pubs/pwyp.webp`,
    link: "https://github.com/mmoehabb/play-with-your-pal",
    category: ["Applications"],
    tags: ["Golang", "Web Development", "WebSocket"]
  },
  {
    title: "xolua - Cross-Platform Game",
    desc: "A general tic-tac-toe game with an AI agent developed in lua.",
    imgsrc: `${prefix}/pubs/xolua.gif`,
    link: "https://github.com/mmoehabb/xo-lua",
    category: ["Applications"],
    tags: ["Lua", "Love2D", "AI"]
  },
  {
    title: "Definitions - Web Application",
    desc: "A full-stack web application dictionary that's continuously getting written by end users; users can supply the application with words, definitions, and different references. Furthermore, words and definitions can be modified or reported/removed with a voting approuch.",
    imgsrc: `${prefix}/pubs/definitions.webp`,
    link: "https://github.com/mmoehabb/definitions",
    category: ["Applications"],
    tags: ["full-stack Web Application", "Next.js", "TypeScript"]
  },
  {
    title: "CracksDB: Minimalist Permanent State Manager",
    desc: "A minimalist permanent state manager that you may use in applications where the complexity of common databases is deemed unnecessary and groundless. It essentially stands on StateFile architecture which I've recently published an article.",
    imgsrc: `${prefix}/pubs/cracksdb.webp`,
    link: "https://github.com/mmoehabb/cracksdb",
    category: ["Packages"],
    tags: ["npm", "package", "typescript"]
  },
  {
    title: "Decentralized Chat Application",
    desc: "Yellow is an open-source, cross-platform, decentralized chat application. It can be used locally or globally; all that needed, to establish a connection between two users, is to share their ip addresses to on another.",
    imgsrc: `${prefix}/pubs/yellow.webp`,
    link: "https://github.com/mmoehabb/yellow",
    category: ["Applications"],
    tags: ["chat", "electron.js", "react-native"]
  },
  {
    title: "RxEditor",
    desc: "An open-source static web applciation, that gives users the facility to write and design their own web blogs, slides, articles or even books, by using HTML. Technically, users data is saved in an abstract form as JSON file that can be loaded by the app to be viewed, edited, or exported as a pdf file with the desired style (normal, slide,... etc).",
    imgsrc: `${prefix}/pubs/rxeditor.webp`,
    link:"https://rx-editor.netlify.app/",
    category: ["Applications"],
    tags: ["react", "web application", "editor"]
  },
  {
    title: "ArabicOCR",
    desc: "A static web application for interpreting arabic words from images. The project is incomplete. However, I've tried, in it, to develop an algorithmic, non-statistic, solution to break arabic words into letters. And it does yield kind of good results!",
    imgsrc: `${prefix}/pubs/arabicocr.webp`,
    link: "https://github.com/mmoehabb/arabic-ocr",
    category: ["Applications"],
    tags: ["ocr", "react", "web application"]
  },
  {
    title: "react-animation-maker",
    desc: "As the name indicates, the package seeks to make it easier for ReactJS developers to define and create their own animations. This objective is achieved, by giving devs the ability to design there own animations, just by using js-css objects in defining animation stages.",
    imgsrc: `${prefix}/pubs/react-animation-maker.webp`,
    link: "https://mmoehabb.github.io/react-animation-maker/",
    category: ["Packages"],
    tags: ["npm", "package", "react"]
  },
  {
    title: "A Comprehensive Guide to Integrate FawryPay API into your own RESTful API Server",
    desc: `These papers provide a brief, but sufficient, exposition of how FawryPay works, how to integrate its payment methods in your back-end software application, how refund works, and how to keep up with transactions status. Moreover, a general architecture that ensures a seamless integration of FawryPay API, with a flexible design that can adapt any other API, is proposed at the end of these papers.`,
    imgsrc: `https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffr8zz7t4sqpix652b8yl.png`,
    link: "https://dev.to/_moehab/a-comprehensive-guide-to-integrate-fawrypay-api-into-your-own-restful-api-server-478d",
    category: ["Writings"],
    tags: ["Fawry", "Payment Provider", "Integration"]
  },
  {
    title: "Storage-Facilities Architecture",
    desc: `This article prescribes a general architecture, perceived as a receptacle box in which various frameworks can be plugged, that web developers can implement regardless of what technology will be used in the future.
This article is a plea for mature industry!`,
    imgsrc: `${prefix}/pubs/sfawd.webp`,
    link: "https://moehab.substack.com/p/storage-facilities-architecture",
    category: ["Writings"],
    tags: ["web", "software engineering", "architecture"]
  },
  {
    title: "StateFile: A Minimalist Design for Permanent State Management",
    desc: "A simple minimalist design to permanetally store and access arbitrary types of data. It can be handy in kind of applications where the complexity of common databases is considered groundless.",
    imgsrc: `${prefix}/pubs/statefile.webp`,
    link: "https://dev.to/_moehab/statefile-a-minimalist-design-for-permanent-state-management-43d7",
    category: ["Writings"],
    tags: ["state management", "software engineering"]
  },
  {
    title: "Introduction to Agile",
    desc: "A quick introduction to Agile methodology where the principles of the manifesto are manifested! Ultimately by using Bertrand Meyer's book 'Agile!: the Good, the Hype, and the Ugly' as guidance and reference.",
    imgsrc: `${prefix}/pubs/agile.webp`,
    link: "https://dev.to/_moehab/introduction-to-agile-25bc",
    category: ["Writings"],
    tags: ["software development", "agile"]
  },
  {
    title: "A Sneak Peek of Bash Script",
    desc: "By reading this article you will get a glance of how to write code in bash script just well enough to write a video trimmer, with the aid of FFMPEG package.",
    imgsrc: `${prefix}/pubs/bashscript.webp`,
    link: "https://dev.to/_moehab/make-video-cutter-with-bash-script-ffmpeg-om0",
    category: ["Writings"],
    tags: ["bash", "linux", "ffmpeg"]
  },
  {
    title: "An Investigation of The Laws of Thought",
    desc: "",
    imgsrc: `${prefix}/pubs/an-investigation-of-the-laws-of-thought.webp`,
    link: "#",
    category: ["Designs"],
    tags: ["indesgin", "cover", "books"]
  },
  {
    title: "The Computer and the Brain",
    desc: "",
    imgsrc: `${prefix}/pubs/the-computer-and-the-brain.webp`,
    link: "#",
    category: ["Designs"],
    tags: ["indesgin", "cover", "books"]
  }
]
