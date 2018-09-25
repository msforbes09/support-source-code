function openHtml() {
  var html = HtmlService.createHtmlOutputFromFile('index');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Dialog title');
}

function insertDate() {
  var dateTime = new Date();
  SpreadsheetApp.getActiveRange().setValue(dateTime.getYear() + "/" + (dateTime.getMonth() + 1) + "/" + dateTime.getDate());
}

function insertTime() {
  var dateTime = new Date();
  SpreadsheetApp.getActiveRange().setValue(dateTime);
}
function isDate(v) {
  if (Object.prototype.toString.call(v) === "[object Date]") {
    if (isNaN(v.getTime())) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
function onEdita(e) {
  var ui = SpreadsheetApp.getUi();
  var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var row = sh.getActiveCell().getRowIndex();
  var col = sh.getActiveCell().getColumnIndex();
  var cell = sh.getRange(row,col);
  var value = sh.getActiveCell().getValue();
  var process = sh.getRange(1,col + 1).getValue();
  var sheet = sh.getSheetName();

  switch(sheet){
  case "Revision": 
  case "Basic": 
    if(row <=2){
      ui.alert("You are not allowed to modify this Range.");
      cell.setValue(e.oldValue);
      return;
    }

    switch(col){
    case 9:
    case 14:
    case 19:
    case 24:
    case 29:
    case 34:
    case 39:
      if(value){
        //ui.alert(process)
        sh.getRange(row,7).setValue(process);
      }
      break;
    case 10:
    case 11:
    case 15:
    case 16:
    case 20:
    case 21:
    case 25:
    case 26:
    case 30:
    case 31:
    case 35:
    case 36:
    case 40:
    case 41:
      if (!isDate(value) && value){
        ui.alert("Data is not a valid value.");
        if(e.oldValue){
          cell.setValue(e.oldValue);
        } else {
          cell.setValue("");
        }
      }
      cell.setNumberFormat("hh:mm am/pm");  
      break;
    case 2:
    case 3:
      if (!isDate(value) && value){
        ui.alert("Data is not a valid value.");
        if(e.oldValue){
          cell.setValue(e.oldValue);
        } else {
          cell.setValue("");
        }
      }
      cell.setNumberFormat("mm/dd/yyyy");  
      break;
    case 7:
      ui.alert("You are not allowed to modify this Range.");
      if(e.oldValue){
        cell.setValue(e.oldValue);
      } else {
        cell.setValue("");
      }
      break;
    }
    break;
  }
}