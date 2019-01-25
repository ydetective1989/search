
var data = [
  {
    date : '2015-11-21',
    newuser : 18,
    cancel  : 11,
    add   : -2,
    total : 666
  },
  {
    date : '2016-01-21',
    newuser : 3,
    cancel  : 14,
    add   : 5,
    total : 444
  },
  {
    date : '2018-11-03',
    newuser : 4,
    cancel  : 2,
    add   : -4,
    total : 432
  },
  {
    date : '2011-06-21',
    newuser : 1,
    cancel  : 5,
    add   : 4,
    total : 123
  },
  {
    date : '2019-05-21',
    newuser : 23,
    cancel  : 8,
    add   : 67,
    total : 432
  },
  {
    date : '2014-05-06',
    newuser : 13,
    cancel  : 12,
    add   : -5,
    total : 388
  },
];

var sortkey = 1;
renderPage(data);
function renderPage(data){
  var Tbody = document.getElementsByTagName('tbody')[0];
  Tbody.innerHTML = "";
  data.forEach(function(ele){
    var oTr = document.createElement('tr');
    for(var prop in ele ){
      var oTd = document.createElement('td');
      oTd.innerHTML = ele[prop];
      oTd.className = prop;
      oTr.appendChild(oTd);
    }
    Tbody.appendChild(oTr);
  })
}

var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var trlist = tbody.getElementsByTagName('tr');

function enter(e){
  for(var i = 0 ; i < trlist.length ; i ++  ){
    trlist[i].style.background = '#fff';
  }
  var e = e || window.event;
  var target = e.target || e.srcElement;
  target.parentNode.style.background = '#F5F5F5';
}

function lev(e){
  for(var i = 0 ; i < trlist.length ; i ++  ){
    trlist[i].style.background = '#fff';
  }
}

function unsort(data){
  var e = arguments[1] || window.event;
  var target = e.target || e.srcElement;
  var keyword = target.className;
  if(sortkey){
    data.sort(function (a,b) {
      return a[keyword] > b[keyword]
    })
    sortkey = 0;
    renderPage(data);
  }else{
    data.sort(function (a,b) {
      return a[keyword] < b[keyword]
    })
    sortkey = 1;
    renderPage(data);
  }
}

function changeValue () {


}
// tbody.onclick = function (e) {
//   var e = arguments[1] || window.event;
//   var target = e.target || e.srcElement;
//   target.innerHTML = "<input style='outline:none;width:100%;height:16px;' type='' value='" + target.innerHTML + "'>"
//  }
tbody.addEventListener('mouseover',enter,false)
tbody.addEventListener('mouseleave',lev,false)
thead.addEventListener('click',unsort.bind(event,data),false);
// tbody.addEventListener('mouseleave',enter,false)
  function deepClone(origin , target){
    var target = target || {},
        toStr = Object.prototype.toString,
        toArr = "[object Array]";
        for(var prop in origin){
          if(origin.hasOwnProperty(prop)){
            if(typeof origin[prop] == 'object' && origin[prop] != null){
              if(toStr.call(origin[prop]) == toArr){
                target[prop] = [];
              }else{
                target[prop] = {};
              }
              deepClone(origin[prop],target[prop]);
            }else{
              target[prop] = origin[prop]
              }
            }
        }
        return target;
  }
