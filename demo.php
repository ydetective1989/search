<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

  <script type="text/javascript">
    //  Array.prototype.unique = function(){
    //    let map = new Map();
    //    let newarr = [];
    //    this.forEach(ele => {
    //      if(!map.get(ele)){
    //        map.set(ele,1);
    //        newarr.push(ele);
    //      }
    //    })
    //    return newarr;
    //  }

    function myMap(){
      this.init()
    }
    myMap.prototype.len = 8;
    myMap.prototype.bucket = [];
    myMap.prototype.set = function(key,value){
      let hash = this.makeHash(key) % this.len;
      let list = this.bucket[hash];
      let nextNode = list;
      while(nextNode.next){
        if(nextNode.next.key === key){
          nextNode.next.value = value;
          return;
        }
          nextNode = nextNode.next;
      }

      nextNode.next = {key : key,value : value,next:null};
    }
    myMap.prototype.get = function(key){
      let hash = this.makeHash(key) % this.len;
      let list = this.bucket[hash];
      let nextNode = list;
      while(nextNode.next){
        if(nextNode.next.key === key){
          return nextNode.next.value;
        }
          nextNode = nextNode.next;
      }
      return;
    }
    myMap.prototype.delete = function(key){
      let hash = this.makeHash(key) % this.len;
      let list = this.bucket[hash];
      let nextNode = list;
      while(nextNode.next){
        if(nextNode.next.key === key){
           nextNode.next = nextNode.next.next;
           return true;
        }
          nextNode = nextNode.next;
      }

      return false;
    }
    myMap.prototype.clear = function(){
        this.init();

    }
    myMap.prototype.makeHash = function(key){
      let len = 3;
      let hash = 0;
      if(typeof key == 'string'){
        len = key.length > 3 ? key.length : 3;
        for(let i = len - 3; i < len ; i ++){
          if(key[i] != 'undefined'){
            hash += key[i].charCodeAt();
          }else{
            hash += 0;
          }
        }
      }else{
        hash = +key;
      }
      return hash;
    }
    myMap.prototype.init = function(){
      for(let i = 0 ; i < this.len ; i ++ ){
        this.bucket[i] = {next : null}
      }
    }
    myMap.prototype.has = function(key){
      let hash = this.makeHash(key) % this.len;
      let list = this.bucket[hash];
      let nextNode = list;
      while(nextNode.next){
        if(nextNode.next.key === key){
          return true;
        }
          nextNode = nextNode.next;
      }
      return false;
    }
    
    let m = new myMap();
    m.set(1,5);
    m.set(5,5);
   class createNode {
     constructor (value = none){
       this.value = value;
       this.next = null;

     }
   }
   var node = new createNode(1);
   function insert(startNode,nowNode,num){
     while(startNode.next){
       startNode = startNode.next;
     }
     startNode.next = nowNode;

   }
   var array = [1,2,3,4,5];
   function Interator(arr){
     this.arr = arr;
     this.currentIndex = 0;
     this.len = arr.length;
     this.done = false;
   }
   Interator.prototype.next = function(){
     let index = this.currentIndex;
     while(this.len != this.currentIndex){
      this.currentIndex ++;
       return {value:this.arr[index],done : false }
     }
     return {value : undefined, done:true}
   }
  //  var i = new Interator(arr);
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
  //  console.log(i.next());
   function inter (arr){
     let arrlist = arr;
     let current = 0;
     let len = arr.length;
     let done = false;
     return {
       next : function() {
     let nowcurrent = current;
     while(current != len){
       current ++ ;
       return {
         value : arr[nowcurrent],
         done : false
       }
     }
     return {value : undefined , done:true}
   }
     }
   }
   function next (){
     let nowcurrent = current;
     while(current != len){
       current ++ ;
       return {
         value : arr[nowcurrent],
         done : false
       }
     }
     return {value : undefined , done:true}
   }


   function *create(){
     yield wash();
     yield bojuzi();
     yield eat();
   }

   function wash(){
     setTimeout(() => {
       console.log('洗橘子中');
       cr.next();
     }, 3000);
   }

   function bojuzi(){
     setTimeout(() => {
       console.log('剥橘子中');
       cr.next();

     }, 5000);
   }

   function eat(){
     setTimeout(() => {
       console.log('吃橘子');
       cr.next();
     }, 2000);
   }
   var  cr = create();
  </script>

</body>
</html>
