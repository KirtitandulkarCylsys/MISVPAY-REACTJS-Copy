import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import pdf from "../../Assets/images/pdf_icon.png";

const ExportToPDF = () => {
  const generatePdf = (table, fileName) => {
    const pdf = new jsPDF("l", "pt", "A4");
    pdf.autoTable({
      html: table,
      filename: fileName,
      margin: { top: 40, bottom: 30, right: 30, left: 30 },
      styles: {
        font: "Arial",
        fontSize: 10,
        textColor: [0, 0, 255],
      },
      headerStyles: {
        fillColor: [51, 122, 183], 
        textColor: 255,
        fontSize: 12,
      },
      bodyStyles: {
        textColor: 0,
      },
    });
    pdf.save(fileName + ".pdf");
  };
  
  const pdfExport = () => {
    const AUM = document.getElementById("AUM");
    const REGION = document.getElementById("REGION");
    const UFC = document.getElementById("UFC");
  
    if (AUM && AUM.className.includes("active")) {
      generatePdf(AUM, "AUMReport");
    } else if (REGION && REGION.className.includes("active")) {
      generatePdf(REGION, "RegionReport");
    }else if (UFC && UFC.className.includes("active")) {
      generatePdf(UFC, "UfcReport");
    }
  };

  return (
    <button onClick={pdfExport}  className="border-0">
      <img src={pdf} alt="pdficon" />
    </button>
  );
};

export default ExportToPDF;
