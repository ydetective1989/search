// var oLi = $('li');
// var flag = false;
// function getMin(){
//   var index = 0;
//   var minH = $(oLi[0]).height();
//   var len = oLi.length;
//   for(var i = 0 ; i < len ; i ++ ){
//     if($(oLi[i]).height() < minH ) {
//       index = i;
//       minH = $(oLi[i]).height();
//     }
//   }
//
//   return {
//     minIndex : index,
//     minHeight : minH
//   }
// }
//
// function renderPage(data){
//     var oDiv = $('<div></div>');
//     var oImg = new Image();
//     var oP = $('<p>' + data.title + '</p>');
//     oImg.src = data.preview;
//     oImg.onload = function(){
//       $(oDiv).append(oImg).append(oP);
//       var now = getMin().minIndex;
//       $(oLi[now]).append(oDiv);
//     }
//
// }
//
// function getData(){
//   if(flag){
//     return;
//   }
//   flag = true;
//   $('.loading').show();
//   $.ajax({
//     type:'GET',
//     url : 'getPics.php',
//     data:'cpage=1',
//     success:function(res){
//       var res = JSON.parse(res);
//       res.forEach(function (item, index) {
//                   renderPage(item);
//               });
//               $('.loading').hide()
//               flag = false;
//     }
//   })
// }
// getData()
// $(window).scroll(function(){
//   var scrollHeight = $(window).scrollTop();
//   var minHeight = getMin().minHeight;
//   if((scrollHeight + $(window).height()) >= minHeight ){
//     $('.loading').show();
//       getData();
//   }
// })


(function(){
  function Init(options){
    this.flag = false;
    this.wrapperWidth = options.wrapperWidth || 'auto';
    this.width = options.width;//每列宽度
    this.col = options.col || 4;//列数
    this.ajaxUrl = options.ajaxUrl;
    this.ajaxType = options.ajaxType || 'GET';
    this.oLi = null;
    this.cpage = 1;
    this.data = null;
    console.log(1);
    // this.createDom();
    // this.addCss();
    // this.bindEvent();
    // this.getData();

  }
  Init.prototype.getMin = function(){
    var index = 0;
    var minH = $(this.oLi[0]).height();
    var len = this.oLi.length;
    for(var i = 0 ; i < len ; i ++ ){
      if($(this.oLi[i]).height() < minH ) {
        index = i;
        minH = $(this.oLi[i]).height();
      }
    }
    return {
      minIndex : index,
      minHeight : minH
    }
  }
  Init.prototype.getData = function(){
    var that = this;
    if(flag){
      return;
    }
    that.flag = true;
    $('.loading').show();
    $.ajax({
      type:that.ajaxType,
      url : 'getPics.php',
      data:'cpage=' + this.cpage,
      success:function(res){
        var res = JSON.parse(res);
        that.data = res;
        res.forEach(function (item, index) {
                that.renderPage();
                });
                $('.loading').hide()
                that.flag = false;
                that.cpage ++;
      }
    })
  }
  Init.prototype.renderPage = function(){
    var that = this;
    var oDiv = $('<div class="img-list"></div>');
    var oImg = new Image();
    var oP = $('<p>' + this.data.title + '</p>');
    oImg.src = this.data.preview;
    oImg.onload = function(){
      $(oDiv).append(oImg).append(oP);
      var now = that.getMin().minIndex;
      $(that.oLi[now]).append(oDiv);
    }
  }

  Init.prototype.addCss = function(){
    $('.pullWrapper',this.parent).css({
      'width'  : this.wrapperWidth,
      'display': 'inline-block',
      'margin': '0 auto',
    })
    $('.pullList',this.parent).css({
      'width' : this.width,
      'float' : 'left'
    })
    $('.img-list').css({
      'width': this.width,
      'padding': '10px',
      'border': '1px solid #ccc',
      'margin': '0 5px',
    })
    $('.img-list img',this.parent).css({
      'width' : this.width,
    })

  }
  Init.prototype.bindEvent = function(){
    $(window).scroll(function(){
      var scrollHeight = $(window).scrollTop();
      var minHeight = this.getMin().minHeight;
      if((scrollHeight + $(window).height()) >= minHeight ){
        $('.loading').show();
          this.getData();
      }
    })
  }
  Init.prototype.createDom = function(){
    var str = "";
    var pullWrapper = $('<ul class="pullWrapper"></ul>');
    var loading = $('<div class="loading">Loading</div>');
    for(var i = 0 ; i < this.col ; i ++ ){
      str += '<li class="pullList"></li>'
    }
    $(pullWrapper).append(str).appendTo($(this));
    $(this).append(loading);
    this.oLi = $('.pullList');
  }

  $.fn.extend({
    pullImg : function(options){
      options.parent = this;
      new Init(options);
    }
  })
}())
