(function(){
   function Init(options){
      this.parent = options.parent;
      this.width = options.width;
      this.height = options.height;
	  this.data = options.data;
	  this.index_len = options.data.length;
          this.img_len = options.data.length + 1;//�ֲ�ͼ����
	  this.index = options.index;//index��ť����  
	  this.autoTime = options.autoTime || 2000;
	  this.arrowLock = false;
	  this.nowIndex = 0;
      	  this.createDom();
	  this.addCss();  
     	  this.bindEvent();
	  this.autoMove();
	  this.changeIndex();
	  
  }

Init.prototype.createDom = function(){
	var that = this;
	var swiper_wrapper = $('<div class="swiper_wrapper"></div>');//�����ֲ�ͼwrapper
	var swiper = $('<ul class="swiper"></ul>');
	if(this.index){
		var index_wrapper = $('<div class="index_wrapper"></div>');
	}
	var left_arrow = $('<span class="left_arrow">&lt;</span>');
	var right_arrow = $('<span class="right_arrow">&gt;</span>')
	this.data.forEach(function(ele){
		var swiper_item = $('<li class="swiper_item"></li>');
		var item_img = $('<img src="' + ele.img +  '">');
		var item_a = $('<a href="' + ele.href + '"></a>');
		if(that.index){
			var index_str = $('<span class="index"></span>');
		}
		$(item_a).append(item_img).appendTo($(swiper_item));
		$(swiper).append($(swiper_item));
		$(index_wrapper).append(index_str);
	})
		
		$(swiper).append($('<li class="swiper_item"><a href="' + this.data[0].href +  '"><img src="' + this.data[0].img + '"></a></li>')).appendTo(swiper_wrapper);//�ٴ���һ����һ���ֲ�ͼ�������ֲ�ͼwrapper�����ʵ�������ֲ�
		$(swiper_wrapper).append($(index_wrapper)).append(left_arrow).append(right_arrow).appendTo(this.parent);
}
Init.prototype.addCss = function(){
		$('.swiper_wrapper',this.parent).css({
			'width': this.width,
			'height': this.height,
			'position': 'relative',
			'overflow': 'hidden',
		})
		$('.swiper',this.parent).css({
			'width': (this.img_len * this.width),
			'height': this.height,
			'position' : 'absolute',
			'left': 0,
			'top' : 0
			
		})
		$('.swiper:after',this.parent).css({
			'content':"",
			'display':'block',
			'clear'  : 'both'
		})
		$('.swiper_item',this.parent).css({
			'width' : this.width,
			'height': this.height,
			'float' : 'left'
		})
		$('.swiper_item img',this.parent).css({
			'width' : '100%',
			'height': '100%',
		})

		$('.index_wrapper',this.parent).css({
			'width':'100%',
			'textAlign' : 'center',
			'position'  : 'absolute',
			'bottom'    : '20px'
		})		
		$('.index_wrapper span',this.parent).css({
			'width' : '15',
			'height' : '15',
			'borderRadius': '50%',
			'display' : 'inline-block',
			'background' : '#fff',
			'opacity'  : '0.7',
			'margin'  : '0 10px',
			'cursor'  : 'pointer'

		})
		$('.left_arrow',this.parent).css({
			'width' : '24',
			'height': '40',
			'position':'absolute',
			'left' : '0px',
			'top'  : '50%',
			'lineHeight' : '40px',
			'background' : '#666',
			'opacity'  : '0.6',
			'marginTop' : '-20px',
			'display'   : 'inline-block',
			'cursor'  : 'pointer',
			'fontSize' : '20px',
			'color'  : '#fff',
			'display' : 'none',
			'textAlign' : 'center'
		})
		$('.right_arrow',this.parent).css({
			'width' : '24',
			'height': '40',
			'position':'absolute',
			'lineHeight' : '40px',
			'right' : '0px',
			'top'  : '50%',
			'background' : '#666',
			'opacity'  : '0.6',
			'marginTop' : '-20px',
			'display'   : 'inline-block',
			'cursor'  : 'pointer',
			'fontSize' : '20px',
			'color'  : '#fff',
			'display' : 'none',
			'textAlign' : 'center'

		})
}
Init.prototype.autoMove = function(){
	var that = this;
	this.timer = setInterval(function(){
		that.move('right');
	},this.autoTime);

}

Init.prototype.move = function(dir){
	var that = this;
	if(that.arrowLock){
		return false;
		}
	if(dir == 'left'){
		that.arrowLock = true;
		if(that.nowIndex == 0){
			that.nowIndex = that.index_len;
			$('.swiper',that.parent).css({
				'left' : - that.nowIndex * that.width
			})
		}
		that.nowIndex -- ;
		this.changeIndex();
		$('.swiper',that.parent).animate({
			'left' :   - that.nowIndex * that.width
		},function(){
			that.arrowLock = false;
		})
		
	}else if(dir == 'right'){
		that.arrowLock = true;		
		if(that.nowIndex ==  that.index_len  ){
			that.nowIndex = 0;
			$('.swiper',that.parent).css({
				'left' : - that.nowIndex * that.width
			})	
		}
		that.nowIndex ++;
		that.changeIndex();		
		$('.swiper',that.parent).animate({
			'left' : - that.nowIndex * that.width
		},function(){
			that.arrowLock = false;
	
		})
				
	}else if(typeof(dir) == 'number'){
		that.arrowLock = true;
		that.nowIndex = dir;
		this.changeIndex();
		$('.swiper',that.parent).animate({
			'left' : - that.nowIndex * that.width
		},function(){
			that.arrowLock = false;
		})
	}
	
}
Init.prototype.changeIndex = function(){
	var that = this;
	$('.index_wrapper span').css({
		'background' : '#fff'
	})
	if(this.nowIndex == this.index_len){
		$('.index_wrapper span').eq(0).css({
			'background' : 'red'
		})
	}else{
		$('.index_wrapper span').eq(that.nowIndex).css({
			'background' : 'red'
		})
	}
}
Init.prototype.bindEvent = function(){
	var that = this;
	$('.swiper_wrapper',this.parent).hover(function(){
		clearInterval(that.timer);
		$('.right_arrow',this.parent).fadeIn('slow');
		$('.left_arrow',this.parent).fadeIn('slow');
	},function(){
		that.autoMove();
		$('.right_arrow',this.parent).fadeOut('slow');
		$('.left_arrow',this.parent).fadeOut('slow');
	})

	$('.right_arrow').on('click',function(){
		that.move('right');

	})

	$('.left_arrow').on('click',function(){
		that.move('left');
	})	
	$('.index_wrapper',this.parent).on('click','span',function(){
		that.move($(this).index());
	})
}
	$.fn.extend({
	  swiper : function(options){
           	options.parent = this;
      		new Init(options);
	}
	})

}())