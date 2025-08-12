import { useMemo } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Home, User, Wrench, GraduationCap, BadgeCheck, Briefcase, FolderGit2, Award, MessageSquareText, Mail } from "lucide-react";

const NAV_SECTIONS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "skills", label: "Skills", Icon: Wrench },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "courses", label: "Courses", Icon: BadgeCheck },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "achievements", label: "Achievements", Icon: Award },
  { id: "testimonials", label: "Testimonials", Icon: MessageSquareText },
  { id: "contact", label: "Contact", Icon: Mail },
];

export function useNavSections() {
  return NAV_SECTIONS;
}

export function useActiveSection() {
  const ids = useMemo(() => NAV_SECTIONS.map((s) => s.id), []);
  return useScrollSpy(ids);
}
