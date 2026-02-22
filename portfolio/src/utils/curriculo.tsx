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

  const addBullets = (items: string[]) => {
    items.forEach((item) => {
      const normalized = normalizeText(item);
      const lines = doc.splitTextToSize(normalized, maxWidth - 14);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(bodyFontSize);
      ensureSpace(lines.length, lineHeight);
      doc.text("•", marginLeft, cursorY);
      doc.text(lines, marginLeft + 12, cursorY);
      cursorY += lines.length * lineHeight;
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
    addBullets(section.items);
  });

  doc.save(content.fileName);
};
