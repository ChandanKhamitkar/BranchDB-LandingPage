import { IoLogoGithub } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoLinkedin, IoIosMail } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";

export const mainPageData = [
  {
    title: "Blazingly Fast",
    desc: "Built from scratch with C++. No frameworks or hidden databases. Everything is engineered for low-level performance.",
    imageLink: "speed.svg",
  },
  {
    title: "Secure",
    desc: "Built with a crash-safe log, your data is durably stored. You have full control over persistence.",
    imageLink: "secure.svg",
  },
  {
    title: "Dev First",
    desc: "Connect and interact using the official JS SDK. Experience a clean, asynchronous API that handles all the protocol complexities for you.",
    imageLink: "dev-first.svg",
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
    title: "Log Compaction",
    imageLink: "compact.svg",
    desc: "Cleans up redundant logs to keep storage lean and recovery fast.",
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

export const blogsData = [
  {
    imageLink: "blog-1.webp",
    title: "Why I Spent 500+ Hours Building a Database from Scratch in C++",
    link: "https://medium.com/@khamitkar.dev/why-i-spent-500-hours-building-a-database-from-scratch-in-c-e61fd8e94156"
  },
  {
    imageLink: "blog-2.webp",
    title: "The Persistence Dilemma",
    link: "https://medium.com/@khamitkar.dev/the-persistence-dilemma-d956a49f4000"
  },
  {
    imageLink: "blog-3.webp",
    title: "Logs are great… until they become baggage. 🧹 This is where log compaction saves the day",
    link: "https://medium.com/@khamitkar.dev/logs-are-great-until-they-become-baggage-this-is-where-log-compaction-saves-the-day-f014a053ddb1"
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

export const nextFeaturesList = [
  {
    title: "Dev Controllable WAL",
    desc: "Developers can control wheather to choose Explicit or Implicit WAL.",
  },
  {
    title: "LRU Cache",
    desc: "Least Recently used keys will be discarded.",
  },
  {
    title: "Connection Pooling",
    desc: "Thread pool that reuses a fixed number of threads.",
  },
  {
    title: "Metrics & Observability",
    desc: "Built-in Prometheus/Grafana metrics and tracing support.",
  },
];
