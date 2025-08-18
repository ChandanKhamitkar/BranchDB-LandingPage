import { IoLogoGithub } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoLinkedin, IoIosMail } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";

export const mainPageData = [
  {
    title: "Blazingly Fast",
    desc: "Built from scratch with C++. No frameworks or hidden databases. Everything is engineered for low-level performance.",
    imageLink: "speed.svg"
  },
  {
    title: "Secure",
    desc: "Built with a crash-safe log, your data is durably stored. You have full control over persistence.",
    imageLink: "secure.svg"
  },
  {
    title: "Dev First",
    desc: "Connect and interact using the official JS SDK. Experience a clean, asynchronous API that handles all the protocol complexities for you.",
    imageLink: "dev-first.svg"
  },
];

export const cookedData = [
  {
    title: "In-Memory Database",
    imageLink: "fire.svg",
    desc: "Blazing-fast. Just pure RAM-powered speed with built-in persistence.",
  },
  {
    title: "TTL Expiry",
    imageLink: "time-quarter-pass.svg",
    desc: "Time-bound keys vanish automatically—no bloat.",
  },
  {
    title: "Secure Data Isolation",
    imageLink: "isolation.svg",
    desc: "Data is partitioned by an authId to prevent access conflicts, ensuring each project's data remains private and secure.",
  },
  {
    title: "Write-Ahead Log",
    imageLink: "write-ahead.svg",
    desc: "Every write is logged for crash safety, keeps startup times fast.",
  },
  {
    title: "Multi-Threaded Handling",
    imageLink: "multi-thread.svg",
    desc: "Serves concurrent clients on separate threads, no waiting in line.",
  },
  {
    title: "Flexible Payloads",
    imageLink: "flexible.svg",
    desc: "The protocol supports strings and arrays of strings with structured responses.",
  },
  {
    title: "Efficient Command Protocol",
    imageLink: "command.svg",
    desc: "A custom TCP interface with a binary protocol that is lightweight, precise, and highly performant.",
  },
];

export const socials = [
  { href: "https://x.com/chandan_k_dev", Icon: RiTwitterXFill },
  {
    href: "https://www.linkedin.com/in/chandankhamitkar/",
    Icon: IoLogoLinkedin,
  },
  { href: "mailto:khamitkar.dev@gmail.com", Icon: IoIosMail },
  { href: "https://github.com/ChandanKhamitkar", Icon: IoLogoGithub },
  { href: "https://chandankhamitkar.vercel.app/", Icon: SlGlobe },
];
