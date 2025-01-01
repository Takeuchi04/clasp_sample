function sampleCode() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("サンプル");
  sheet.getRange('A1').setValue('Hello World');
}
