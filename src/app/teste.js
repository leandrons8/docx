'use client'

import {
  ExternalHyperlink,
  ImageRun,
  Paragraph,
  patchDocument,
  PatchType,
  TextRun,
  Packer
} from "docx";

export async function patch(){
  const response = await fetch('/model.docx');
  const arrayBuffer = await response.arrayBuffer();
  patchDocument({
    outputType: "nodebuffer",
    data: arrayBuffer,
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
  }).then((doc) => {
    // Create a Blob from the buffer
    const blob = new Blob([doc], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });

    // Create a link element to download the patched file
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'patched.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  });
}
