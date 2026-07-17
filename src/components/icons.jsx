import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiMongodb,
  SiMysql,
  SiGit,
} from "react-icons/si";
import {
  Network,
  Cpu,
  BarChart3,
  BrainCircuit,
  MessagesSquare,
  PuzzleIcon,
} from "lucide-react";

// Every skill in portfolioData.js references one of these keys.
// Add a new icon by importing it above and adding a key below.
export const iconMap = {
  c: { Icon: SiC, color: "#A8B9CC" },
  cpp: { Icon: SiCplusplus, color: "#00599C" },
  python: { Icon: SiPython, color: "#FFD43B" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  html5: { Icon: SiHtml5, color: "#E34F26" },
  css3: { Icon: SiCss, color: "#2965F1" },
  react: { Icon: SiReact, color: "#61DAFB" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  sql: { Icon: SiMysql, color: "#4479A1" },
  git: { Icon: SiGit, color: "#F05032" },
  dsa: { Icon: Network, color: "#F2A93B" },
  fundamentals: { Icon: Cpu, color: "#9BA3C7" },
  dataAnalysis: { Icon: BarChart3, color: "#4FD1C5" },
  ml: { Icon: BrainCircuit, color: "#F2A93B" },
  communication: { Icon: MessagesSquare, color: "#4FD1C5" },
  problemSolving: { Icon: PuzzleIcon, color: "#F7C876" },
};

export function SkillIcon({ iconKey, size = 22, className = "" }) {
  const entry = iconMap[iconKey];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon size={size} color={color} className={className} />;
}
