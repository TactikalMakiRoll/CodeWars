function humanReadable (seconds) {
  let ss = Math.floor(seconds % 60) || "00";
  if(ss<10 && ss>0){
    ss = "0" + ss;
  }
  let mm = Math.floor((seconds / 60) % 60) || "00";
  if(mm<10 && mm>0){
    mm = "0" + mm;
  }
  let hh = Math.floor((seconds / 60 / 60)) || "00";
  if(hh<10 && hh>0){
    hh = "0" + hh;
  }
  return `${hh}:${mm}:${ss}`;
}