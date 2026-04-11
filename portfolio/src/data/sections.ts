export type SectionItem = {
  id: string;
  labelKey: string;
};

export const sections: SectionItem[] = [
  { id: "top", labelKey: "nav.top" },
  { id: "hard-skills", labelKey: "nav.hardSkills" },
  { id: "soft-skills", labelKey: "nav.softSkills" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "certifications", labelKey: "nav.certifications" },
  { id: "education", labelKey: "nav.education" },
  { id: "contato", labelKey: "nav.contact" },
];
