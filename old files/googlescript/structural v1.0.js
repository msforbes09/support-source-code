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
  case "Structural": 
  case "Foundation": 
  case "Precut Check": 

    switch(col){
    case 10:
    case 16:
    case 22:
    case 28:
    case 34:
    case 40:
    case 46:
      if(value){
        //ui.alert(process)
        sh.getRange(row,8).setValue(process);
      }
      break;
    case 11:
    case 12:
    case 17:
    case 18:
    case 23:
    case 24:
    case 29:
    case 30:
    case 35:
    case 36:
    case 41:
    case 42:
    case 47:
    case 48:
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
    case 8:
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