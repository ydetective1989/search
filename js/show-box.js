(function(){
   function Init(options){
	this.parent = options.parent;
	this.mareaWidth = options.mareaWidth;
  this.mareaHeight = options.mareaHeight;
	this.width = options.width;
	this.display = options.display;
	this.data = options.data;
	this.bgcolor = options.bgcolor;
	this.fontcolor = options.fontcolor;
	this.createDom();
	this.addCss();
	this.bindEvent();

  }

Init.prototype.createDom = function(){
	var marea = $('<div class="marea">' + this.data.title + '</div>');
	var box_wrapper = $('<div class="box_wrapper"></div>');
	var box = $('<div class="box"></div>');
	var str = "";
	this.data.data.forEach(function(ele){
		str += '<div class="item"><span>' + ele.datalist + '</span></div>';
	})

  marea.appendTo(this.parent);
	box.append(str).appendTo(box_wrapper);
	box_wrapper.appendTo(this.parent);

}
Init.prototype.addCss = function(){
	$('.marea').css({
		'width': this.mareaWidth,
    'height' : this.mareaHeight,
    // 'borderLeft': '1px solid #e3e4e5',
    // 'borderRight': '1px solid #e3e4e5',
		'border': '1px solid #e3e4e5',
		'color':'#666',
		'display': 'inline-block',
		'fontSize' : '12px',
		'position': 'absolute',
		'zIndex': '999',
		'textAlign': 'center',
		'cursor' : 'pointer',
    'left' : 0,
    'top' : 0,
	})
	$('.box_wrapper').css({
		'width' : this.width,
		'display': this.display,
		'backgroundColor': this.bgcolor,
		'border' : '1px solid  #999' ,
		'position': 'absolute',
		'top' : '30px'

	})

	$('.box',this.parent).css({
		'padding': '10px'

	})
	$('.item',this.parent).css({
		'display': 'inline-block',
		'width' : 60
	})
	$('.item span',this.parent).css({
		'display': 'inline-block',
		'padding' : '0 10px',
		'fontSize' : '12px',
		'cursor' : 'pointer'
	})

}

Init.prototype.bindEvent = function(){
	var that = this;
	$(this.parent).hover(function(){
		$('.box_wrapper',this.parent).show();
		$('.marea',that.parent).css({
			'background': '#fff',
			'paddingBottom': '2px',
      'border' : '1px solid #999',
			// 'borderRight' : '1px solid #999',
			'borderBottom' : 'none',
		})

	},function(){
		$('.box_wrapper',this.parent).hide();
		$('.marea',that.parent).css({
			'background': '#e3e4e5',
			'paddingBottom': 0,
      'border' : '1px solid #e3e4e5',
			// 'borderRight' : '1px solid #e3e4e5',
			// 'borderBottom' : '1px solid #e3e4e5'
		})
	})

	$('.box_wrapper .item span',this.parent).hover(function(){
		if(!$(this).hasClass('checked')){
			$(this).css({
			'background' : '#999'
		})
		}

	},function(){
		if(!$(this).hasClass('checked')){
			$(this).css({
			'background' : '#fff'
		})
		}else{

		}

	}).on('click',function(){
		$('.box_wrapper .item span',this.parent).removeClass('checked').css({
				'background':'#fff',
				'color' : '#000'
			});
			$(this).addClass('checked').css({
				'background' : 'red',
				'color' : '#fff'
			});

		$('.marea',this.parent).html($(this).html());
	})
}
	$.fn.extend({
	  showbox: function(options){
           	options.parent = this;
      		new Init(options);
	}
	})

}())
