function UriBuilder(link){
  this.link = link.slice(0, link.indexOf('?'));
  this.params = {};

  link = link.slice(link.indexOf('?')+1,link.length);

  link = link.split('&');
  for(let i=0;i<link.length;i++){
    let parameter = link[i].split('=');
    this.params[parameter[0]] = parameter[1];
  }
}

UriBuilder.prototype.build = function(){
 let result = this.link;

 let count = Object.entries(this.params).length;
 console.log(count);
 if(count > 0){
    result+='?';
    let params = [];
    for (const key in this.params) {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.params[key]));
    }
    result+=params.join('&');
 }
 return result;
}

let obj = new UriBuilder("https//www.domain.com?key1=value1&key2=value2");
console.log(obj.link);
console.log(obj.params);
obj.params.key1 = "valuerewr itten";
console.log(obj.build());
delete obj.params.key1;
console.log(obj.build());