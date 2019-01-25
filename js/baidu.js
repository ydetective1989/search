(function(){
  function Init(options){
    this.parent = options.parent;
    if(!options.url){
       console.error( '请提交有效url' );
       return;
    }else{
      this.url = options.url
    }
    this.type = options.type || 'GET';
    this.dataPar = options.dataPar || 'wd';
    this.key = options.key || 'cb';
    this.jsonpCallback = options.jsonpCallback || 'success';
    this.width = options.width - 100 || $(this.parent).width() - 100;
    this.height = options.height || $(this.parent).height();
    this.code = options.code || 'utf-8';
    this.value = "";
    this.creatDom();
    this.bindEvent();
    this.addCss();
  }
  Init.prototype.creatDom = function(){
    var oWrapper = $('<div class="search_wrapper"></div>');
    var oInput = $('<input class="search_input" placehold="请输入搜索关键词" type="text" >');
    var oBtn = $('<button class="search_btn" type="button" >搜索</button>');
    var oUl = $('<ul class="res"></ul>');
    $(oWrapper).append(oInput).append(oBtn).append(oUl).appendTo($(this.parent));

  }
  Init.prototype.addCss = function(){
    $('.search_wrapper',this.parent).css({
      width:'100%',
      margin:'0 auto',
      position:'relative'
    })
    $('.search_input',this.parent).css({
      width:this.width,
      height:this.height,
      lineheght:this.height,
      outline: 0,
      border:'none',
      boxSizing:'border-box',
      border:'1px solid #FF4200',
      fontSize:'16px',
      fontFamily:'arial',
      textIndent:'10px',
      verticalAlign: 'bottom'
    })
    $('.search_btn',this.parent).css({
      width:100,
      height:this.height,
      outline:'none',
      backgroundColor:'#FF4200',
      border:'1px solid #FF4200',
      cursor:'pointer',
      fontSize:'18px',
      color:'#fff',
      fontWeight:'600',
      verticalAlign: 'bottom',
      boxSizing: 'border-box'
    })
    $('.res',this.parent).css({
      width:'100%',
      border:'1px solid #FF4200',
      borderTop:'none',
      cursor:'pointer',
      fontSize:'18px',
      color:'#000',
      fontWeight:'600',
      position:'absolute',
      top:this.height,
      background:'#fff',
      boxSizing:'border-box',
      display:'none',
      padding:'10px',
      zIndex : '999'
    })
    //搜索结果框样式
    $('.res_list','.res').css({
      'width'  : '100%',
      'height' : '30px',
      'background' : '#fff'
    })
    $('.res_content','.res .res_list').css({
      'display' : 'inline-block',
      'width'   : '88%',
      'overflow': 'hidden',
      'white-space': 'nowrap',
      'textOverflow' : 'ellipsis',
      'fontSize' : '12px',
      'height'  : '30px',
      'lineHeight': '30px'
    })
    $('.res_del','.res .res_list').css({
      'display' : 'inline-block',
      'width'   : '10%',
      'fontSize': '12px',
      'height'  : '30px',
      'lineHeight' : '30px',
      'verticalAlign' : 'top'
    })

  }
  Init.prototype.sWordsCookie = function(){
    //首先获取之前保存的cookie，将其转化为数组
    //判断当前数组的长度是否超过10，并且最新的val()不存在在数组里面，如果超过，且不存在，切割当前数组的第一位，并将最新的val()关键词push进新数组
    //

  }

  Init.prototype.bindEvent = function(){
    var that = this;
    $('.search_btn').on('click',function(){//button绑定发送记录历史关键词
      if($('.search_input',this.parent).val() != " "){
        if(cookie.getCookie('keyword')){
          var tempArr = cookie.getCookie('keyword').split(",");
        if(tempArr.indexOf($('.search_input',this.parent).val()) == -1 && tempArr.length < 10){//如果当前关键词不存在 且cookie数组长度小于10，直接在最前面插入新的关键词
          tempArr.unshift($('.search_input',this.parent).val());
          cookie.setCookie('keyword',tempArr,12000)
        }else if(tempArr.indexOf($('.search_input',this.parent).val()) == -1 && tempArr.length >= 10){//如果不存在且长度小于10，删除cookie数组最后一位，并在开头插入
          tempArr.splice(tempArr.length - 1,1)//删除cookie数组的最后一位
          tempArr.unshift($('.search_input',this.parent).val());
          cookie.setCookie('keyword',tempArr,12000)//保存上一次搜索的关键字，此功能需在服务器环境下
        }else if(tempArr.indexOf($('.search_input',this.parent).val())){//如果当前关键词存在
          tempArr.splice(tempArr.indexOf($('.search_input',this.parent).val()),1)//删除当前关键词在数组中的位置
          tempArr.unshift($('.search_input',this.parent).val());
          cookie.setCookie('keyword',tempArr,12000)//保存上一次搜索的关键字，此功能需在服务器环境下
        }
        }else{
          cookie.setCookie('keyword',$('.search_input',this.parent).val(),12000);
        }
        
      }
      location.href="https://s.taobao.com/search?q=" + $('.search_input',this.parent).val()
    })
    $('.search_input',this.parent).on('input',function(){
      if(cookie.getCookie('keyword') && $(this).val() == ""){
        tempData = cookie.getCookie('keyword').split(',');
        var str = "";
        tempData.forEach(function(ele){
          str += "<li class='res_list'><span class='res_content'>" + ele + "</span><span class='res_del'>删除</span></li>"
        })
        $('.res','.search').html(str).show();
        // that.addCss();
        //搜索结果框样式
        // $('.res_list','.res').css({
        //   'width'  : '100%',
        //   'height' : '30px',
        // })
        // $('.res_content','.res .res_list').css({
        //   'display' : 'inline-block',
        //   'width'   : '90%',
        //   'overflow': 'hidden',
        //   'white-space': 'nowrap',
        //   'textOverflow' : 'ellipsis'
        // })
        // $('.res_del','.res .res_list').css({
        //   'display' : 'inline-block',
        //   'width'   : '10%'
        // })

      }else{
        $.ajax({
          type:that.type,
          url:that.url,
          data:that.dataPar + "=" + $(this).val() + "&code=" + that.code,
          dataType : 'jsonp',
          jsonp : that.key,
          jsonpCallback : that.jsonpCallback
        })
      }
    })
    $('*').not('.search_wrapper').on('click',function(e){
      e.stopPropagation();
      $('.res','.search_wrapper').hide();
    })
    //绑定鼠标点击事件 快速提供关键词查询
    $('.search_input',this.parent).on('click',function(){
      if(cookie.getCookie('keyword') && $(this).val() == "" ){
        tempData = cookie.getCookie('keyword').split(',');
        var str = "";
        tempData.forEach(function(ele){
          str += "<li class='res_list'><span class='res_content'>" + ele + "</span><span class='res_del'>删除</span></li>"
        })
        $('.res','.search').html(str).show();
        //问题  无法给动态创建的搜索结果框 添加css样式，解决办法 引入外部css文件 给动态生成dom添加样式
        //搜索结果框样式
        // $('.res_list','.res').css({
        //   'width'  : '100%',
        //   'height' : '30px',
        // })
        // $('.res_content','.res .res_list').css({
        //   'display' : 'inline-block',
        //   'width'   : '88%',
        //   'overflow': 'hidden',
        //   'white-space': 'nowrap',
        //   'textOverflow' : 'ellipsis',
        //   'height'  : '30px',
        //   'lineHeight': '30px'
        // })
        // $('.res_del','.res .res_list').css({
        //   'display' : 'inline-block',
        //   'width'   : '10%',
        //   'fontSize': '12px',
        //   'height'  : '30px',
        //   'lineHeight' : '30px',
        //   'verticalAlign' : 'top'
        // })
        // $.ajax({
        //   type:that.type,
        //   url:that.url,
        //   data:that.dataPar + "=" + cookie.getCookie('keyword'),
        //   dataType : 'jsonp',
        //   jsonp : that.key,
        //   jsonpCallback : that.jsonpCallback
        // })
      }else if($(this).val() == cookie.getCookie('keywods')){
        return;
      }else{
        $.ajax({
          type:that.type,
          url:that.url,
          data:that.dataPar + "=" + $(this).val()+ "&code=" + that.code,
          dataType : 'jsonp',
          jsonp : that.key,
          jsonpCallback : that.jsonpCallback
        })
      }
    })

    $('.res ','.search_wrapper').on('click','.res_list .res_content',function(){
      $('.search_input','.search_wrapper').val($(this).html())
    }).on('click','.res_list .res_del',function(){
      var ind = cookie.getCookie('keyword').split(',');
      ind.splice(ind.indexOf($(this).prev().html()),1);
      cookie.setCookie('keyword',ind,15000);
      $(this).parent().remove();
    }).on('mouseover','li',function(){
      $(this).css('background','#eee');
      $('.res_del',this).css({
        'display' : 'inline-block'
      });

    }).on('mouseleave','li',function(){
      $(this).css('background','#fff');
      $('.res_del',this).css({
        'display' : 'none'
      });
    })
  }



  $.fn.extend({
    searchInput : function(options){
      options.parent = this;
      new Init(options);
    }
  })
}())
