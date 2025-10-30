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

export const Pubs: Array<Publication> = [
  {
    title: "LiteSpace",
    desc: "A full-stack web application for teaching english as a second language, through one-to-one speaking sessions.",
    imgsrc: `${prefix}/pubs/litespace.jpg`,
    link: "https://github.com/litespace-org/litespace",
    category: ["Applications"],
    tags: ["Contribution", "Web Development", "WebRTC"]
  },
  {
    title: "ZigSDL",
    desc: "A relatively easy-to-pick, simple, and straightforward package that developers can use in order to write graphic applications in Zig. Just as the name indicates it's build on SDL3.",
    imgsrc: `${prefix}/pubs/zigsdl.png`,
    link: "https://github.com/mmoehabb/zigsdl",
    category: ["Packages"],
    tags: ["SDL", "Game Development", "framework"]
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
    imgsrc: `${prefix}/pubs/pwyp.png`,
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
    imgsrc: `${prefix}/pubs/definitions.png`,
    link: "https://github.com/mmoehabb/definitions",
    category: ["Applications"],
    tags: ["full-stack Web Application", "Next.js", "TypeScript"]
  },
  {
    title: "CracksDB: Minimalist Permanent State Manager",
    desc: "A minimalist permanent state manager that you may use in applications where the complexity of common databases is deemed unnecessary and groundless. It essentially stands on StateFile architecture which I've recently published an article.",
    imgsrc: `${prefix}/pubs/cracksdb.png`,
    link: "https://github.com/mmoehabb/cracksdb",
    category: ["Packages"],
    tags: ["npm", "package", "typescript"]
  },
  {
    title: "Decentralized Chat Application",
    desc: "Yellow is an open-source, cross-platform, decentralized chat application. It can be used locally or globally; all that needed, to establish a connection between two users, is to share their ip addresses to on another.",
    imgsrc: `${prefix}/pubs/yellow.png`,
    link: "https://github.com/mmoehabb/yellow",
    category: ["Applications"],
    tags: ["chat", "electron.js", "react-native"]
  },
  {
    title: "RxEditor",
    desc: "An open-source static web applciation, that gives users the facility to write and design their own web blogs, slides, articles or even books, by using HTML. Technically, users data is saved in an abstract form as JSON file that can be loaded by the app to be viewed, edited, or exported as a pdf file with the desired style (normal, slide,... etc).",
    imgsrc: `${prefix}/pubs/rxeditor.png`,
    link:"https://rx-editor.netlify.app/",
    category: ["Applications"],
    tags: ["react", "web application", "editor"]
  },
  {
    title: "ArabicOCR",
    desc: "A static web application for interpreting arabic words from images. The project is incomplete. However, I've tried, in it, to develop an algorithmic, non-statistic, solution to break arabic words into letters. And it does yield kind of good results!",
    imgsrc: `${prefix}/pubs/arabicocr.png`,
    link: "https://github.com/mmoehabb/arabic-ocr",
    category: ["Applications"],
    tags: ["ocr", "react", "web application"]
  },
  {
    title: "react-animation-maker",
    desc: "As the name indicates, the package seeks to make it easier for ReactJS developers to define and create their own animations. This objective is achieved, by giving devs the ability to design there own animations, just by using js-css objects in defining animation stages.",
    imgsrc: `${prefix}/pubs/react-animation-maker.png`,
    link: "https://mmoehabb.github.io/react-animation-maker/",
    category: ["Packages"],
    tags: ["npm", "package", "react"]
  },
  {
    title: "Storage-Facilities Architecture",
    desc: `This article prescribes a general architecture, perceived as a receptacle box in which various frameworks can be plugged, that web developers can implement regardless of what technology will be used in the future.
This article is a plea for mature industry!`,
    imgsrc: `${prefix}/pubs/sfawd.jpg`,
    link: "https://moehab.substack.com/p/storage-facilities-architecture",
    category: ["Writings"],
    tags: ["web", "software engineering", "architecture"]
  },
  {
    title: "StateFile: A Minimalist Design for Permanent State Management",
    desc: "A simple minimalist design to permanetally store and access arbitrary types of data. It can be handy in kind of applications where the complexity of common databases is considered groundless.",
    imgsrc: `${prefix}/pubs/statefile.jpg`,
    link: "https://dev.to/_moehab/statefile-a-minimalist-design-for-permanent-state-management-43d7",
    category: ["Writings"],
    tags: ["state management", "software engineering"]
  },
  {
    title: "Introduction to Agile",
    desc: "A quick introduction to Agile methodology where the principles of the manifesto are manifested! Ultimately by using Bertrand Meyer's book 'Agile!: the Good, the Hype, and the Ugly' as guidance and reference.",
    imgsrc: `${prefix}/pubs/agile.jpg`,
    link: "https://dev.to/_moehab/introduction-to-agile-25bc",
    category: ["Writings"],
    tags: ["software development", "agile"]
  },
  {
    title: "A Sneak Peek of Bash Script",
    desc: "By reading this article you will get a glance of how to write code in bash script just well enough to write a video trimmer, with the aid of FFMPEG package.",
    imgsrc: `${prefix}/pubs/bashscript.jpg`,
    link: "https://dev.to/_moehab/make-video-cutter-with-bash-script-ffmpeg-om0",
    category: ["Writings"],
    tags: ["bash", "linux", "ffmpeg"]
  },
  {
    title: "An Investigation of The Laws of Thought",
    desc: "",
    imgsrc: `${prefix}/pubs/an-investigation-of-the-laws-of-thought.jpg`,
    link: "#",
    category: ["Designs"],
    tags: ["indesgin", "cover", "books"]
  },
  {
    title: "The Computer and the Brain",
    desc: "",
    imgsrc: `${prefix}/pubs/the-computer-and-the-brain.jpg`,
    link: "#",
    category: ["Designs"],
    tags: ["indesgin", "cover", "books"]
  }
]
