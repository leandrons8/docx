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

type tipoDados = {
  projeto: string,
  cliente: string,
  sufixo: string,
  descricao: string
}

export async function patch(dados: tipoDados){
  patchDocument({
    outputType: "blob",
    data: await (await fetch("model.docx")).blob(),
    patches: {
      campo1: {
        type: PatchType.PARAGRAPH,
        children: [new TextRun(dados.projeto)],
      },
      campo2: {
        type: PatchType.PARAGRAPH,
        children: [new TextRun(dados.cliente)],
      },
      campo3: {
        type: PatchType.PARAGRAPH,
        children: [new TextRun(` - ${dados.sufixo}`)],
      },
      campo4: {
        type: PatchType.PARAGRAPH,
        children: [new TextRun(dados.descricao)],
      },
    },
  }).then((doc) => saveAs(doc, "relatorio.docx"));
}
