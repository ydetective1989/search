$('document').ready(function() {
  var gconfig = {

    'slidebannerdata': [{
        'img': 'https://img11.360buyimg.com/babel/s190x150_jfs/t1/6130/18/358/52072/5bc87804Ee441a1e9/6f872864b8821664.jpg',
        'href': '#'
      },
      {
        'img': 'https://img11.360buyimg.com/babel/s190x150_jfs/t1/2038/9/10726/31865/5bcd8807Eeb59b805/28f105c1cc1844eb.jpg',
        'href': '#'
      },
      {
        'img': 'https://img1.360buyimg.com/pop/s190x150_jfs/t24439/21/2380245443/49247/b5e62bfd/5b7d28b4Na6b20e85.jpg',
        'href': '#'
      }
    ],
    'swiperdata': [{
        'img': './image/swiper0.jpg',
        'href': '#'
      },
      {
        'img': './image/swiper1.jpg',
        'href': '#'
      },
      {
        'img': './image/swiper2.jpg',
        'href': '#'
      },
      {
        'img': './image/swiper3.jpg',
        'href': '#'
      },
      {
        'img': './image/swiper4.jpg',
        'href': '#'
      },
      {
        'img': './image/swiper5.jpg',
        'href': '#'
      },
      {
        'img': './image/swiper6.jpg',
        'href': '#'
      }

    ],
    'salebanner': {
      'href': "#",
      'img': 'https://m.360buyimg.com/babel/jfs/t1/6651/16/2314/39832/5bd05a60Ec5d7ba7d/f059fdab4f8b2011.jpg',
      'bgcolor': 'rgb(248, 92, 15)'

    },
    'povarr': {
      'title': '北京',
      'data': [{
          'datalist': '北京'
        },
        {
          'datalist': '上海'
        },
        {
          'datalist': '天津'
        },
        {
          'datalist': '重庆'
        },
        {
          'datalist': '河北'
        },
        {
          'datalist': '山西'
        },
        {
          'datalist': '河南'
        },
        {
          'datalist': '辽宁'
        },
        {
          'datalist': '吉林'
        },
        {
          'datalist': '黑龙江'
        },
        {
          'datalist': '内蒙古'
        },
        {
          'datalist': '江苏'
        },
        {
          'datalist': '山东'
        },
        {
          'datalist': '安徽'
        },
        {
          'datalist': '浙江'
        },
        {
          'datalist': '福建'
        },
        {
          'datalist': '湖北'
        },
        {
          'datalist': '湖南'
        },
        {
          'datalist': '广东'
        },
        {
          'datalist': '广西'
        },
        {
          'datalist': '江西'
        },
        {
          'datalist': '四川'
        },
        {
          'datalist': '海南'
        },
        {
          'datalist': '贵州'
        },
        {
          'datalist': '云南'
        },
        {
          'datalist': '西藏'
        },
        {
          'datalist': '陕西'
        },
        {
          'datalist': '甘肃'
        },
        {
          'datalist': '青海'
        },
        {
          'datalist': '宁夏'
        },
        {
          'datalist': '新疆'
        },
        {
          'datalist': '港澳'
        },
        {
          'datalist': '台湾'
        },
        {
          'datalist': '钓鱼岛'
        },
        {
          'datalist': '海外'
        }
      ]
    },
    'logo': {
      'img': 'https://img12.360buyimg.com/da/jfs/t1/722/25/12349/182359/5bd2ba59Ecfc66dd5/3c96f05c90d565c1.gif?t=1540878205599',
      'href': '#'
    },
    'news': {
      'sale': [{
          'title': '超值预售1元最高抵1111',
          'href': '#'
        },
        {
          'title': '99元投影机限量砍到手',
          'href': '#'
        },
        {
          'title': '你的家，智能了吗？',
          'href': '#'
        },
        {
          'title': '助力S8 瓜分一亿京豆',
          'href': '#'
        },
      ],
      'notice': [{
          'title': '京东图书勋章体系改版公告',
          'href': '#'
        },
        {
          'title': '京东PLUS会员权益更新及会费调整',
          'href': '#'
        },
        {
          'title': '京东启用全新客服电话"950618"',
          'href': '#'
        },
        {
          'title': '关于召回普利司通（天津）轮胎有限公司2个规格乘用车轮胎的公告',
          'href': '#'
        },
      ]
    },
    'minibanner' : {
      'img' : 'http:////img10.360buyimg.com/da/jfs/t1/2010/37/12391/10645/5bd2d866Ee0c95fe8/39d922d96db41c30.png',
      'href' : '#'
    }


  }
  $('.logo', '.menu').css({
    'backgroundImage': 'url(' + gconfig.logo.img + ')'
  })
  gconfig.news.sale.forEach(function(ele){
    $('.thesale-content ul','.news-content').append("<li><a href='" + ele.href + "'>" + ele.title + "</a></li>")
  })
  gconfig.news.notice.forEach(function(ele){
    $('.notice-content ul','.news-content').append("<li><a href='" + ele.href + "'>" + ele.title + "</a></li>")
  })
  $('.minibanner','.search').css({
    'background' : 'url(' + gconfig.minibanner.img + ')'
  }).find('a').attr({
    'href' : gconfig.minibanner.href
  })
  $('.sale-adbanner ').css({
    'background': gconfig.salebanner.bgcolor
  }).find('.sale-content').css({
    'background': 'url("' + gconfig.salebanner.img + '")'
  }).find('a').attr('href', gconfig.salebanner.href);

  $('.sale-content .sale-del', '.sale-adbanner').on('click', function() {
    $(this).parent().parent().fadeOut();
  })


  $('.pov').showbox({
    'mareaWidth': '56',
    'mareaHeight': '28',
    'width': '322',
    'display': 'none',
    'data': gconfig.povarr,
    'bgcolor': '#fff',
    'fontcolor': '#999',
    'itemWidth': '60',
    'cursor': 'pointer'

  })



  $('.search-input').searchInput({
    url: 'https://suggest.taobao.com/sug',
    type: 'get',
    code: 'utf-8',
    key: 'callback', //jsonp参数
    dataPar: 'q',
    jsonpCallback: 'success',
    width: '550px',
    height: '35px'
  })

  $('.slide-nav').slide_nav({
    slide_width: '190',
    slide_height: '480',
    navlist_width: '1000',
    navlist_height: '450',
    is_Ad: 1, //是否启用右侧图片广告
    slide_bg: '#fff',
    nav_bg: '#eee',
    data: slide.data,
    fontSize: '14px'
  })

  $('.swipers', '.content').swiper({
    width: '590',
    height: '470',
    data: gconfig.swiperdata,
    index: 1,
    autoTime: 2000
  })
  gconfig.slidebannerdata.forEach(function(ele) {
    var temp = $('<div class="banner-content"><a href="' + ele.href + '"><img src="' + ele.img + '"></a></div>')
    $('.slide-banner').append(temp);
  })

  $('.fuli .fuli-btn', '.info').hover(function() {
    $(this).addClass('active');
  }, function() {
    $(this).removeClass('active');
  })
  $('.news-title .thesale', '.content').hover(function() {
    $(this).siblings('.active-border').animate({
      'left': '0'
    }, 90)
    $('.notice-content', '.content').hide();
    $('.thesale-content', '.content').show();

  })
  $('.news-title .notice', '.content').hover(function() {
    $(this).siblings('.active-border').animate({
      'left': '50'
    }, 90)
    $('.notice-content', '.content').show();
    $('.thesale-content', '.content').hide();
  })

  $('.news-title > a').hover(function(){
     $(this).css({
       'color' : 'red'
     })
  },function(){
    $(this).css({
      'color' : '#000'
    })
  })
  $('.phone-title', '.pay-content-wrapper .phone').on('mouseover', 'a', function() {
    $(this).css({
      'color': 'red'
    }).siblings().css({
      'color': '#666'
    })
    $('.phone-content', '.pay-content-wrapper .phone').hide().eq($(this).index()).show()
  })

  $('.airplane-title', '.pay-content-wrapper .airplane').on('mouseover', 'a', function() {
    $(this).css({
      'color': 'red'
    }).siblings().css({
      'color': '#666'
    })
    $('.airplane-content', '.pay-content-wrapper .airplane').hide().eq($(this).index()).show()
  })
  $('.hotel-title', '.pay-content-wrapper .hotel').on('mouseover', 'a', function() {
    $(this).css({
      'color': 'red'
    }).siblings().css({
      'color': '#666'
    })
    $('.hotel-content', '.pay-content-wrapper .hotel').hide().eq($(this).index()).show()
  })
  $('.game-title', '.pay-content-wrapper .game').on('mouseover', 'a', function() {
    $(this).css({
      'color': 'red'
    }).siblings().css({
      'color': '#666'
    })
    $('.game-content', '.pay-content-wrapper .game').hide().eq($(this).index()).show()
  })

  $('.pay-title', '.pay-wrapper').on('mouseover', 'li', function() {
    $(this).css({
      'color': 'red'
    }).siblings().css({
      'color': '#000'
    })
    $('.active-line', '.pay-title').css({
      'left': ($(this).index()) * 40
    })
    $('.pay-content-wrapper > div').eq($(this).index()).show().siblings().hide();
  })

  $('.userhot li:lt(4)', '.info-menu').on('click', function() {
    $('.pay-title li').eq($(this).index()).css({
      'color': 'red'
    }).siblings().css({
      'color': '#000'
    })
    $('.active-line', '.pay-title').css({
      'left': ($(this).index()) * 40
    })
    $('.userhot').slideUp().siblings().show();
  })
  $('.pay-del a', '.info-menu').on('click', function() {
    $('.pay-wrapper', '.info-menu').hide().siblings().slideDown();
  })


})
