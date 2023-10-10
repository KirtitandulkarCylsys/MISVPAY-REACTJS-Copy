import * as XLSX from "xlsx";
import excel from "../Assets/images/excel_icon.png";

export const ExcelToExport = () => {
  const exportToExcel = () => {
    const mainTable1 = document.getElementById('table1');
    const mainTable2 = document.getElementById('table2');
    const mainTable3 = document.getElementById('table3');
    const wb = XLSX.utils.book_new();

    const processTable = (table, sheetName) => {
      const tableCopy = table.cloneNode(true);
      const nestedTables = tableCopy.querySelectorAll('.nested-table');
      nestedTables.forEach((nestedTable) => {
        nestedTable.remove();
      });

      const sheet = XLSX.utils.table_to_sheet(tableCopy);
      XLSX.utils.book_append_sheet(wb, sheet, sheetName);

      nestedTables.forEach((nestedTable, index) => {
        const nestedSheetName = `${sheetName}-Nested${index + 1}`;
        processTable(nestedTable, nestedSheetName);
      });
    };

    processTable(mainTable1, 'Sales Table');
    processTable(mainTable2, 'Redemption Table');
    processTable(mainTable3, 'NetSales Table');

    XLSX.writeFile(wb, 'Retail_summary_report.xlsx');
  };
  return (
    <button onClick={exportToExcel} className="border-0">
      <img src={excel} alt="excelicon" />
    </button>
  );
};
