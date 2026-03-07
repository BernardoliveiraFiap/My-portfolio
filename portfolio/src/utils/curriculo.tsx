import { jsPDF } from "jspdf";
import { getResumeContent } from "../data/curriculoContent";

const normalizeText = (value: string) => value.replace(/\s+/g, " ").trim();

export const generateCurriculoPdf = (language: string) => {
  const content = getResumeContent(language);
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const marginLeft = 85;
  const marginTop = 85;
  const marginRight = 57;
  const marginBottom = 57;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxWidth = pageWidth - marginLeft - marginRight;
  let cursorY = marginTop;
  const bodyFontSize = 12;
  const lineHeight = Math.round(bodyFontSize * 1.5);

  const addSpacing = (value = 10) => {
    cursorY += value;
  };

  const ensureSpace = (lines: number, lineHeightValue: number, extra = 0) => {
    const needed = lines * lineHeightValue + extra;
    if (cursorY + needed > pageHeight - marginBottom) {
      doc.addPage();
      cursorY = marginTop;
    }
  };

  const addTextBlock = (text: string, fontSize = bodyFontSize, bold = false) => {
    const normalized = normalizeText(text);
    const lines = doc.splitTextToSize(normalized, maxWidth);
    const currentLineHeight = Math.round(fontSize * 1.5);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(fontSize);
    ensureSpace(lines.length, currentLineHeight);
    doc.text(lines, marginLeft, cursorY);
    cursorY += lines.length * currentLineHeight;
  };

  const addSectionTitle = (title: string) => {
    addSpacing(8);
    addTextBlock(title.toUpperCase(), 12, true);
    addSpacing(4);
  };

  const addBulletItem = (
    item: string,
    options?: { bold?: boolean; indent?: number; spacingAfter?: number }
  ) => {
    const indent = options?.indent ?? 0;
    const spacingAfter = options?.spacingAfter ?? 3;
    const bold = options?.bold ?? false;

    const normalized = normalizeText(item);
    const lines = doc.splitTextToSize(normalized, maxWidth - 14 - indent);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(bodyFontSize);
    ensureSpace(lines.length, lineHeight, spacingAfter);
    doc.text("•", marginLeft + indent, cursorY);
    doc.text(lines, marginLeft + 12 + indent, cursorY);
    cursorY += lines.length * lineHeight + spacingAfter;
  };

  const addBullets = (items: string[], sectionTitle: string) => {
    const isExperienceSection = /experi[eê]ncia|experience/i.test(sectionTitle);
    let insideNumberedExperience = false;
    let forcedSecondExperiencePage = false;

    items.forEach((item) => {
      const normalized = normalizeText(item);
      const isNumberedHeader = /^\d+\)/.test(normalized);
      const isSecondExperienceHeader = /^2\)/.test(normalized);

      if (isExperienceSection && isNumberedHeader) {
        if (isSecondExperienceHeader && !forcedSecondExperiencePage) {
          doc.addPage();
          cursorY = marginTop;
          addSectionTitle(`${sectionTitle} (cont.)`);
          forcedSecondExperiencePage = true;
        }

        if (cursorY > marginTop + 16) {
          addSpacing(4);
        }

        addBulletItem(normalized, { bold: true, indent: 0, spacingAfter: 5 });
        insideNumberedExperience = true;
        return;
      }

      if (isExperienceSection && insideNumberedExperience) {
        addBulletItem(normalized, { indent: 18, spacingAfter: 4 });
        return;
      }

      addBulletItem(normalized, { spacingAfter: 3 });
    });
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(content.name, marginLeft, cursorY);
  cursorY += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(bodyFontSize);
  addTextBlock(content.address);
  addTextBlock(content.contact);

  content.sections.forEach((section) => {
    if (section.pageBreakBefore) {
      doc.addPage();
      cursorY = marginTop;
    }
    addSectionTitle(section.title);
    addBullets(section.items, section.title);
  });

  doc.save(content.fileName);
};
