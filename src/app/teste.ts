'use client'

import {
  ExternalHyperlink,
  Paragraph,
  patchDocument,
  PatchType,
  TextRun,
  Packer
} from "docx";
import { saveAs } from "file-saver"

export async function patch(){
  patchDocument({
    outputType: "blob",
    data: await (await fetch("model.docx")).blob(),
    patches: {
      campo1: {
        type: PatchType.PARAGRAPH,
        children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
      },
      campo2: {
        type: PatchType.PARAGRAPH,
        children: [new TextRun("Heading wow!")],
      },
      campo3: {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun("#657"),
          new ExternalHyperlink({
            children: [
              new TextRun({
                text: "BBC News Link",
              }),
            ],
            link: "https://www.bbc.co.uk/news",
          }),
        ],
      },
      campo4: {
        type: PatchType.DOCUMENT,
        children: [
          new Paragraph("Lorem ipsum paragraph"),
          new Paragraph("Another paragraph"),
          new Paragraph({
            children: [
              new TextRun("This is a "),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: "Google Link",
                  }),
                ],
                link: "https://www.google.co.uk",
              }),
            ],
          }),
        ],
      },
    },
  }).then((doc) => saveAs(doc, "example.docx"));
}
