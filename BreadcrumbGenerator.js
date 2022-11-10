function generateBC(url, separator) {
  //remove http header and split the link path into an array, with first element being HOME 
  url = url.replace(/(http:\/\/)|(https:\/\/)/,'');
  url = url.split('/');
  url.shift();
  url = url.filter((elem) => elem !== '');
  
  //if there is more than just home element, remove file extentions from it. Also remove ones that start with "index"
  if(url.length>0){
    //.html, .htm, .php or .asp
    url[url.length - 1] = url[url.length - 1].replace(/(.html)|(.htm)|(.php)|(.asp)/g,'');
    if(url[url.length-1].startsWith("index")){
      url.pop();
    }
  }

  //create a home element
  let result = url.length > 0 ? '<a href="/">HOME</a>' + separator : '<span class="active">HOME</span>'
  
  let blacklist = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
  
  let path = "";
  for(let i = 0; i<url.length; i++){
    //ignore parameters
    if(url[i].includes('#')){
      url[i] = url[i].slice(0,url[i].indexOf('#'));
    }
    else if(url[i].includes('?')){
      url[i] = url[i].slice(0,url[i].indexOf('?'));
    }

    //opening tag
    path += url[i] + '/';
    result = (i !== url.length - 1) ? result + `<a href="/${path}">` : result + `<span class="active">`;

    //Acronymisation
    if(url[i].length > 30){
      url[i] = url[i].split('-');
      url[i] = url[i].filter((elem)=>{
        if(blacklist.includes(elem)){
          return false;
        }
        return true;
      }).map((elem)=>elem[0]).join('');
    }
    else{ //remove hyphens in place of spaces
      url[i] = url[i].replace(/(-)/g,' ');
      console.log(url[i]);
    }

    result += url[i].toUpperCase();
    result = (i !== url.length - 1) ? result + '</a>' + separator : result + '</span>';
  }
  
  return result;
  
}