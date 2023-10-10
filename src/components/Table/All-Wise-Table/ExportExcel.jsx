import * as XLSX from "xlsx";
import excel from "../../Assets/images/excel_icon.png";

export const ExportExcelRegion = () => {
  const exportToExcel = () => {
    const tables = [
      { tableId: "region1", sheetName: "Sales" },
      { tableId: "region2", sheetName: "Redemption" },
      { tableId: "region3", sheetName: "Netsales" },
    ];

    const wb = XLSX.utils.book_new();

    tables.forEach((tableData) => {
      const table = document.getElementById(tableData.tableId);
      if (table) {
        const ws = XLSX.utils.table_to_sheet(table);
        XLSX.utils.book_append_sheet(wb, ws, tableData.sheetName);
      }
    });

    XLSX.writeFile(wb, "All_region_wise_report.xlsx");
  };

  return (
    <button onClick={exportToExcel} className="border-0">
      <img src={excel} alt="excelicon" />
    </button>
  );
};

export const ExportExcelRM = () => {
  const exportToExcel = () => {
    const tables = [
      { tableId: "rm1", sheetName: "Sales" },
      { tableId: "rm2", sheetName: "Redemption" },
      { tableId: "rm3", sheetName: "Netsales" },
    ];

    const wb = XLSX.utils.book_new();

    tables.forEach((tableData) => {
      const table = document.getElementById(tableData.tableId);
      if (table) {
        const ws = XLSX.utils.table_to_sheet(table);
        XLSX.utils.book_append_sheet(wb, ws, tableData.sheetName);
      }
    });

    XLSX.writeFile(wb, "All_rm_wise_report.xlsx");
  };

  return ( 
    <button onClick={exportToExcel} className="border-0">
      <img src={excel} alt="excelicon" />
    </button>
  );
};

export const ExportExcelUfc = () => {
  const exportToExcel = () => {
    const tables = [
      { tableId: "ufc1", sheetName: "Sales" },
      { tableId: "ufc2", sheetName: "Redemption" },
      { tableId: "ufc3", sheetName: "Netsales" },
    ];

    const wb = XLSX.utils.book_new();

    tables.forEach((tableData) => {
      const table = document.getElementById(tableData.tableId);
      if (table) {
        const ws = XLSX.utils.table_to_sheet(table);
        XLSX.utils.book_append_sheet(wb, ws, tableData.sheetName);
      }
    });

    XLSX.writeFile(wb, "All_ufc_wise_report.xlsx");
  };

  return ( 
    <button onClick={exportToExcel} className="border-0">
      <img src={excel} alt="excelicon" />
    </button>
  );
};

