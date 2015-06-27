angular.module("ch.filters",[])
.filter("debugPrint", [ function() {
  return function(str){
      console.log("ch.filters.debug.print", str);
      return str;
    }
  }
])
/***  Boolean Filters *****/
.filter("yesNo", [ function() {
  return function(b){
      return b === true? 'Yes' : 'No';
    }
  }
])
/***  String Filters *****/
.filter("format", [ function() {
  return function(str){
      if (!str || arguments.length <=1 ) return str;
      var args = arguments;
      for (var i = 1; i < arguments.length; i++) {       
        var reg = new RegExp("\\{" + (i - 1) + "\\}", "gm");             
        str = str.replace(reg, arguments[i]);
      }
      return str;
    }
  }
]).filter("shorten", [ function() {
  return function(str,length){
      if (!str || !length || str.length <= length) return (str || '');
      return  str.substr(0, length) + (length <= 3 ? '' : '...');
    }
  }
]).filter("camelcase", [ function(){
 return function(str){
    return (str || '').toLowerCase().replace(/(\s.|^.)/g, function(match, group) {
        return group ? group.toUpperCase() : '';
    });
  } 
 }                
]).filter("trim", [ function(){
 return function(str){
    return (str || '').replace(/(^\s*|\s*$)/g, function(match, group) {
        return '';
    });
  } 
 }                
]).filter("trimStart", [ function(){
 return function(str){
   return (str || '').replace(/(^\s*)/g, function(match, group) {
        return '';
    });
  } 
 }                
]).filter("trimEnd", [ function(){
 return function(str){
    return (str || '').replace(/(\s*$)/g, function(match, group) {
        return '';
    });  
  } 
 }                
]).filter("stringReplace", [ function(){
 return function(str, pattern, replacement, global){
    global = (typeof global == 'undefined' ? true : global);
    try {
      return (str || '').replace(new RegExp(pattern,global ? "g": ""),function(match, group) {
        return replacement;
      });  
    } catch(e) {
      console.error("error in string.replace", e);
      return (str || '');
    }     
  } 
 }                
]).filter("max", [ function(){
 return function(arr){
    if (!arr) return arr;
    return Math.max.apply(null, arr);  
  } 
 }                
]).filter("min", [ function(){
 return function(arr){
    if (!arr) return arr;
    return Math.min.apply(null, arr);   
  } 
 }                
]).filter("join", [ function(){
 return function(arr,seperator){
    if (!arr) return arr;
    return arr.join(seperator || ',');   
  } 
 }                
]).filter("reverse", [ function(){
 return function(arr){
    if (!arr) return arr;
    return arr.reverse();   
  } 
 }                
]);
