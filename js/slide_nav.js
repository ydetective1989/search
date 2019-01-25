(function(){
  function Init(options){
    this.parent = options.parent;
    this.slide_width = options.slide_width || $(options.parent).width();
    this.slide_height = options.slide_height || 'auto';
    this.navlist_width = options.navlist_width || 650;
    this.navlist_height = options.navlist_height || 600;
    this.is_Ad = options.is_Ad || 0;
    this.slide_bg = options.slide_bg || 'gray';
    this.nav_bg = options.nav_bg || 'gray';
    this.fontSize = options.fontSize || '16px';
    if(options.data){
      this.data = options.data;// 加判断必填项目
    }else{
      return console.error('添加数据');
    }
    this.createDom();
    this.addCss();
    this.bindEvent();
  }
  Init.prototype.createDom = function (){
    //侧边栏主菜单
    var slide_nav_wrapper = $('<ul class="slide_nav_wrapper"></ul>');
    $(slide_nav_wrapper).appendTo($(this.parent));
    var that = this;
    this.data.forEach(function(ele){
      var slide_li = $('<li class="slide_li">' + ele.name + '</li>');
      $(slide_nav_wrapper).append($(slide_li));
      var nav_list_wrapper = $('<div class="nav_list_wrapper"></div>');
      var nav_list_title = $('<ul class="nav_list_title"></ul>');
      var nav_list_content = $('<div class="nav_list_content"></div>');
      ele.title.forEach(function(ele){
        $(nav_list_title).append('<li><a href="' + ele.src + '">' + ele.name + '</li>')
      });
      ele.details.forEach(function(ele){
        var content_list = $('<ul class="content_list"></ul>');
        $(content_list).append('<li><a href="' + ele.src + '">' + ele.detail_name + '</a></li>')
        ele.items.forEach(function(ele){
          $(content_list).append('<li>|<a href="' + ele.src + '">' + ele.item_name + '</a></li>')
        })
        $(content_list).appendTo($(nav_list_content));
      })
      if(that.is_Ad){
        //生成图片广告模块
      var ad_list_wrapper = $('<div class="ad_list_wrapper"></div>');
      var ad_list_log = $('<div class="ad_list_log"></div>');
      var ad_list_banner = $('<div class="ad_list_banner"></div>');
      $(ad_list_wrapper).append(ad_list_log).append(ad_list_banner);
        //广告wrapper
        ele.adimg.forEach(function(ele){//广告模块上部广告小图
          var ad_log = $('<div class="ad_log"><a title="' + ele.brand + '" href="' + ele.src + '"><img src="' + ele.sources + '"></a></div>')
          $(ad_log).appendTo($(ad_list_log));
        })
        ele.sale_banner.forEach(function(ele){//广告模块下部大banner
          var ad_banner = $('<div class="ad_banner"><a href="' + ele.src + '"><img src="' + ele.img + '"></a></div>')
          $(ad_banner).appendTo($(ad_list_banner));
        })
      }
      $(nav_list_wrapper).append($(nav_list_title)).append($(nav_list_content)).append($(ad_list_wrapper)).appendTo($(slide_li));

    })
  }
  Init.prototype.addCss = function (){
    var that = this;
    //广告模块样式
    $('.ad_list_wrapper').css({//广告主结构样式
      'width'    : '170px',
      'height'   : '425px',
      'position' : 'absolute',
      'right'    : 0 ,
      'top'      : 0 ,
      'margin'   : '15px',
      'boxSizing': 'border-box'
    })
    $('.ad_list_log','.ad_list_wrapper').css({
      'display' : 'flex',
      'flexWrap' : 'wrap'
    })
    $('.ad_list_log .ad_log ','.ad_list_wrapper').css({
      'width' : '83px',
      'height': '35px',
      'flexGrow' : 1,
      'paddingTop' : '2px',
      'paddingLeft' : '2px',
      'boxSizing':'border-box'
    })
    $('.ad_list_log .ad_log img','.ad_list_wrapper').css({
      'width' : '100%',
      'height': '100%'
    })
    $('.ad_banner','.ad_list_wrapper').css({
      'width' : '168px',
      'height' : '134px',
      'margin': '5px 0',
      'display' : 'flex',
      'flexGrow' : 1
    })
    $('.ad_banner a img','.ad_list_wrapper').css({
      'width' : '100%',
      'height': '100%'
    })

    //主菜单样式
    $('.slide_nav_wrapper').css({
      'width'     : this.slide_width,
      'height'    : this.slide_height,
      // 'border'    : '1px solid black',
      'background': this.slide_bg,
      'boxSizing' : 'border-box',
      'listStyle' : 'none',
      'textAlign' : 'left',
      'position' : 'relative'
    })
    $('.slide_li','.slide_nav_wrapper').css({
      'fontSize' : '16px',
      'padding'  : '5px 20px',
      'color'    : '#666',
      'cursor'   : 'pointer',
      'margin'   : '2px 0',
      'fontSize' : this.fontSize
    })
    .hover(function(){
      $('.nav_list_wrapper',$(this)).show().css({
        'zIndex' : '99'
      });
      $(this).css({
        backgroundColor:'#eee',
      })
    },function(){
      $('.nav_list_wrapper',$(this)).hide();
      $(this).css({
      'backgroundColor':that.slide_bg,
      })
    }).on('mouseover','.nav_list_wrapper',function(){
      $(this).fadeIn().css({
        'borderLeft' : 'none'
      });
    }).on('mouseleave','.nav_list_wrapper',function(){
      $(this).fadeOut();
    })
    //分菜单样式
    $('.nav_list_wrapper','.slide_li').css({
      'display'  :  'none',
      'width'    :  this.navlist_width,
      'height'   :  this.navlist_height,
      'position' :  'absolute',
      'left'     :  '190px',
      'top'      :  0,
      'padding'  :  '15px',
      'boxSizing':  'border-box',
      'border'   :  '1px solid #eee',
      'boxShadow':  '2px 2px 5px #eee',
      'background' : "#eee"
    })

    $('.nav_list_title','.nav_list_wrapper').css({
      'list-style' : 'none',
      'width'      : '70%',
      'margin' : '10px'
    })

    $('.nav_list_title  li','.nav_list_wrapper').css({
      'display' : 'inline-block',
      'padding' : '3px 10px ',
      'marginLeft' : '5px',
      'background' : '#333'
    }).hover(function(){
      $(this).css({'background' : '#5c5251'})
    },function(){
      $(this).css({'background' : '#333'})
    })

    $('.nav_list_content','.nav_list_wrapper').css({
      'list-style' : 'none',
      'width'      : '70%',
    })

    $('.nav_list_content  li','.nav_list_wrapper').css({
      'display' : 'inline-block',
      'padding' : '5px 15px',
    })
    $('.content_list li:first-child','.nav_list_content').css({
      'display' : 'inline-block',
      'padding' : '5px 15px',
      'fontWeight' : 600,
      'width'   : '80px',
    })
    $('.content_list li a','.nav_list_content').css({
      'padding' : '0 5px',
      'fontSize' : '12px',
      'color'   : '#666'
    })
    $('.content_list li:first-child a','.nav_list_content').css({
      'color' : '#666',
      'fontSize' : '14px'
    })

    $('.nav_list_title li a','.nav_list_wrapper').css({
      'color' : '#fff',
      'fontSize' : '14px'
    })



  }
  Init.prototype.bindEvent = function (){}

  $.fn.extend({
    slide_nav:function(options){
      options.parent = this;
      new Init(options);
    }
  })
}())
