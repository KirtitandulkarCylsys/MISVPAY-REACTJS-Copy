import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import pdf from "../../Assets/images/pdf_icon.png";

export const ExportPdfRegion = () => {
  const generatePdf = (table, fileName) => 
  {
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
    const SalesRegion = document.getElementById("region1");
    const RedemptionRegion = document.getElementById("region2");
    const NelSalesRegion = document.getElementById("region3");

    const SalesRm = document.getElementById("rm1");
    const RedemptionRm = document.getElementById("rm2");
    const NelSalesRm = document.getElementById("rm3");
  
    if (SalesRegion && SalesRegion.className.includes("active")) {
      generatePdf(SalesRegion, "Sales_region_Report");
    } else if (RedemptionRegion && RedemptionRegion.className.includes("active")) {
      generatePdf(RedemptionRegion, "Redemption_Region_Report");
    }else if (NelSalesRegion && NelSalesRegion.className.includes("active")) {
      generatePdf(NelSalesRegion, "Netsales_region_Report");
    }else if(SalesRm && SalesRm.className.includes("active")) {
        generatePdf(SalesRm, "sales_rm_Report");
    }else if(RedemptionRm && RedemptionRm.className.includes("active")) {
        generatePdf(RedemptionRm, "redemption_rm_Report");
    }else if(NelSalesRm && NelSalesRm.className.includes("active")) {
        generatePdf(NelSalesRm, "Netsales_rm_Report");
    }

  };

  return (
    <button onClick={pdfExport}  className="border-0">
      <img src={pdf} alt="pdficon" />
    </button>
  );
};
