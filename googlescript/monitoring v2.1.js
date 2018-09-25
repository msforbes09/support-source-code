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
    case 9:
    case 15:
    case 21:
    case 27:
    case 33:
    case 39:
    case 45:
      if(value){
        //ui.alert(process)
        sh.getRange(row,7).setValue(process);
      }
      break;
    case 10:
    case 11:
    case 16:
    case 17:
    case 22:
    case 23:
    case 28:
    case 29:
    case 34:
    case 35:
    case 40:
    case 41:
    case 46:
    case 47:
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