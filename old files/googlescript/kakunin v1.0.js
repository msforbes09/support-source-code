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
function onEdit(e) {
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
//    if(row <=2){
//      ui.alert("You are not allowed to modify this Range.");
//      cell.setValue(e.oldValue);
//      return;
//    }

    switch(col){
    case 11:
    case 17:
    case 23:
    case 29:
    case 35:
      if(value){
        //ui.alert(process)
        sh.getRange(row,9).setValue(process);
      }
      break;
    case 12:
    case 13:
    case 18:
    case 19:
    case 24:
    case 25:
    case 30:
    case 31:
    case 36:
    case 37:
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
      cell.setNumberFormat("mm/dd");  
      break;
    case 9:
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