(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'">'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 2,
		delay		: 1200,
		animation	: {height:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : false,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').slideUp();
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.not('.accorChild').addClass(o.hoverClass)
					.find('>ul:hidden');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
/*---------------------*/

//$(function(){
//	$('.sf-menu').superfish()
//})
$(document).ready(function() {
$("select").jgdDropdown();
})

	$(function(){
		var _showTab = 0;
		var $defaultLi = $('ul.downmenu li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		$('ul.downmenu li').click(function() {
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});
	
$(function(){
    $("ul.squarewhite > li ul li:has(ul) > a").append('<div class="arrow-right"></div>');
});

// $(document).ready(function(){$('#demo-07').jCarouselLite({btnPrev:'#prev-07',btnNext:'#next-07'});});

	$(function(){
		// 幫 a.abgne_gotoheader 加上 click 事件
		$('.abgne_gotoheader').click(function(){
			// 讓捲軸用動畫的方式移動到 0 的位置
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: 0
			}, 600);

			return false;
		});
	});
	$(function(){
		$('.abgne-frame, .abgne-frame-2').each(function(){
			var $frame = $(this), 
				$showImage = $frame.find('.show-image');
			$frame.find('.abgne-block-20120106 div').mouseover(function(){
				var $this = $(this), 
					_src = $this.find('img').attr('src');
				if($showImage.attr('src') != _src){
					$showImage.hide().attr('src', _src).stop(false, true).fadeTo(400, 1);
				}
			});
		});
	});
// $(document).ready(function(){
// 	$("#slider2").Xslider({
// 		// 默认配置
// 		affect: 'scrollx', //效果  有scrollx|scrolly|fade|none
// 		speed: 500, //动画速度
// 		space: 6000, //时间间隔
// 		auto: false, //自动滚动
// 		trigger: 'mouseover', //触发事件 注意用mouseover代替hover
// 		conbox: '.conbox', //内容容器id或class
// 		ctag: 'div', //内容标签 默认为<a>
// 		switcher: '.switcher', //切换触发器id或class
// 		stag: 'a', //切换器标签 默认为a
// 		current:'cur', //当前切换器样式名称
// 		rand:false //是否随机指定默认幻灯图片
// 	});						   
// });
// $(document).ready(function(){
// 	$("#slider1").Xslider({
// 		// 默认配置
// 		affect: 'scrollx', //效果  有scrollx|scrolly|fade|none
// 		speed: 500, //动画速度
// 		space: 6000, //时间间隔
// 		auto: false, //自动滚动
// 		trigger: 'mouseover', //触发事件 注意用mouseover代替hover
// 		conbox: '.conbox', //内容容器id或class
// 		ctag: 'div', //内容标签 默认为<a>
// 		switcher: '.switcher', //切换触发器id或class
// 		stag: 'a', //切换器标签 默认为a
// 		current:'cur', //当前切换器样式名称
// 		rand:false //是否随机指定默认幻灯图片
// 	});						   
// });
 //    $("ul.squarewhite > li ul li:has(ul) > a").append('<div class="arrow-right"></div>');
	// $(document).ready(function(){$('#demo-07').jCarouselLite({btnPrev:'#prev-07',btnNext:'#next-07'});});
 
 ///////////////////////////////////////////////////////////////////////////////////////////
 //year
 $(document).ready(function() {$('#squarewhite').mnmenu();});

	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-2196019-1']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
 
 
 $(document).ready(function() {
	menu_only_four(0);
	show_dv($('#avi_ul>li').eq(0).attr("id"));
});
function show_dv(num){
	$('.panel').hide();
	$(".blue").removeClass("blue");
	$('#'+num+'_dv').show();
	$('#'+num).addClass("blue");
}
function menu_sub(){
	var num = $('#now_num').val()*1-1;
	if(num < 0){
		num = 0;
	}	
	$('#now_num').val(num);
	menu_only_four(num);
	var now_id = $(".blue").attr("id");
	var sub_id = "";
	var falg = 0;
	for(var i=0;i<$('#avi_ul>li').size();i++)
	{
		if($('#avi_ul>li').eq(i).attr("id") != now_id && falg != 1){
			sub_id = $('#avi_ul>li').eq(i).attr("id");
		}
		else if($('#avi_ul>li').eq(i).attr("id") == now_id){
			falg = 1;
		}
	}
	if(sub_id != ""){
		show_dv(sub_id);
	}
}
function menu_add(){
	var num = $('#now_num').val()*1+1;
	var max_num = $('#avi_ul>li').size()*1-4;
	if(num > max_num){
		num = max_num;
	}
	$('#now_num').val(num);
	menu_only_four(num);
	var now_id = $(".blue").attr("id");
	var add_id = "";
	var falg = 0;
	for(var i=0;i<$('#avi_ul>li').size();i++)
	{
		if(falg == 1){
			add_id = $('#avi_ul>li').eq(i).attr("id");
			falg = 0;
		}
		if($('#avi_ul>li').eq(i).attr("id") == now_id){
			falg = 1;
		}
	}
	if(add_id != ""){
		show_dv(add_id);
	}
}
function menu_only_four(num){
	for(var i=0;i<$('#avi_ul>li').size();i++)
	{
		if(i>(num+3) || i<num){
			$('#avi_ul>li').eq(i).hide();
		}
		else{
			$('#avi_ul>li').eq(i).show();
		}
	}
}
/////////////////////////////////////////////////////////////////////////
///  menu ////////////////////////
(function($) {
    /**
     * Plugin initialization function
     * 
     * @param {object} op
     * @returns {unresolved}
     */
    $.fn.mnmenu = function(op) {
        ////////////////////////////////////////////////////////////////////////
        //To specify custom level settings without affecting defaults
        var tempLevelSettings = {};
        if (typeof op !== 'undefined' && typeof op.levelSettings !== 'undefined') {
            tempLevelSettings = op.levelSettings;
            delete op.levelSettings;
        }
        ////////////////////////////////////////////////////////////////////////
        var settings = $.extend({}, $.fn.mnmenu.defaults, op);
        ////////////////////////////////////////////////////////////////////////
        //Clone custom level settings so that defaults remain and apply custom;
        settings.levelSettings = $.extend({}, settings.levelSettings, tempLevelSettings);
        ////////////////////////////////////////////////////////////////////////
        return this.each(function() {
            var $parentMenu = $(this);
            if ($parentMenu.prop("tagName").toUpperCase() !== "UL") {
                $.error("This function can only be called in <ul> elements.");
            }
            $parentMenu.addClass(settings.menuClassName);
            //Recursion through elements to set default class names and parameters
            $.fn.mnmenu.levelRecursion(settings, $parentMenu, 0);
            //Hide every other submenu (It should be prehidden by css)
            $parentMenu.find("ul").each(function() {
                $(this).css("display", "none");
            });
            //Add event listeners to every LI
            $parentMenu.find("li").each(function() {
                $(this).mouseenter(function() {
                    $.fn.mnmenu.mouseEnter($(this), settings);
                });
                $(this).mouseleave(function() {
                    $.fn.mnmenu.mouseLeave($(this), settings);
                });
            });
        });
    };

    /**
     * Function called when mouse hovers a menu entry (&lt;li&gt;)
     * @param {jQuery} $menu
     * @param {type} settings
     * @returns {undefined}
     */
    $.fn.mnmenu.mouseEnter = function($menu, settings) {
        var windowWidth = $(window).width();
        clearTimeout($menu.data('timer'));
        //Add hover class
        $.fn.mnmenu.elementsToHover($menu, settings).each(function() {
            $(this).addClass(settings.hoverClassName);
        });
        $menu.children("ul").each(function() {
            var $this = $(this);
            var $parent = $this.parent("li");
            var $parentContainer = $parent.closest("ul");
            //Stop previous (hiding) animation and display the object
            //Calculations had already been made
            if ($this.is(":animated")) {
                $this.stop(true, true).show();
            }
            //Was hidden
            else {
                //Set Z-Index
                var zindex = 1;
                var current = $parent;
                while (current.get(0) !== $(document).get(0)) {
                    var temp = parseInt(current.css("z-index"));
                    if (!isNaN(temp) && temp > zindex) {
                        zindex = temp;
                    }
                    current = current.parent();
                }
                $this.css("z-index", zindex + 1);
                //Calculate+set container position
                // - Find level
                var currentLevel = 0;
                var classList = $this[0].className.split(/\s+/);
                for (var i = 0; i < classList.length; i++) {
                    if (classList[i].indexOf([settings.levelClassPrefix, '-'].join('')) >= 0) {
                        currentLevel = parseInt(classList[i].substring(settings.levelClassPrefix.length + 1));
                    }
                }
                var customLevelSettings = settings.levelSettings[currentLevel];

                if (typeof customLevelSettings === "undefined") {
                    customLevelSettings = settings.levelSettings[0];
                }
                //Horizontal position
                var left = "auto", right = "auto", top = "auto", bottom = "auto";
                //RtL
                if (customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("W") >= 0
                        && customLevelSettings.attachmentPosition.toUpperCase().indexOf("E") >= 0) {
                    right = $parent.outerWidth() + "px";
                    //Always show on screen (Reversi)
                    if ($parent.offset().left - $this.outerWidth() < 0) {
                        left = $parent.outerWidth() + "px";
                        right = "auto";
                    }
                } else if (customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("E") >= 0
                        && customLevelSettings.attachmentPosition.toUpperCase().indexOf("E") >= 0) {
                    right = "0px";
                }
                //LtR
                else if (customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("E") >= 0
                        && customLevelSettings.attachmentPosition.toUpperCase().indexOf("W") >= 0) {
                    left = $parent.outerWidth() + "px";
                    //Always show on screen (Reversi)
                    if (($parentContainer.offset().left + $parentContainer.outerWidth() + $this.outerWidth())
                            > windowWidth) {
                        left = "auto";
                        right = $parent.outerWidth() + "px";
                    }
                } else if (customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("W") >= 0
                        && customLevelSettings.attachmentPosition.toUpperCase().indexOf("W") >= 0) {
                    left = "0px";
                }
                //Vertical Position
                if (customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("N") >= 0
                        && customLevelSettings.attachmentPosition.toUpperCase().indexOf("S") >= 0) {
                    bottom = $parent.outerHeight() + "px";

                } else if (customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("S") >= 0
                        && customLevelSettings.attachmentPosition.toUpperCase().indexOf("S") >= 0) {
                    bottom = "0px";
                }
                else if (customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("S") >= 0
                        && customLevelSettings.attachmentPosition.toUpperCase().indexOf("N") >= 0) {
                    top = $parent.outerHeight() + "px";
                } else if (customLevelSettings.parentAttachmentPosition.toUpperCase().indexOf("N") >= 0
                        && customLevelSettings.attachmentPosition.toUpperCase().indexOf("N") >= 0) {
                    top = "0px";
                }
                $this.css("left", left);
                $this.css("right", right);
                $this.css("top", top);
                $this.css("bottom", bottom);
// OLD WAY                
////////////////////////////////////////////////////////////////////////////////                
//                //Position forNon-level-0 elements
//                if (!$parent.hasClass(
//                        [settings.levelClassPrefix, "-0"].join(""))) {
//                    //Horizontal position
//                    var initialOffset = $parentContainer.offset().left +
//                            $parentContainer.outerWidth();
//                    if (windowWidth < (initialOffset + $this.outerWidth())) {
//                        $this.css("left", "auto");
//                        $this.css("right", (
//                                //Container
//                                        ($parentContainer.outerWidth())
//                                        //Padding
//                                        + ($this.outerWidth() - $this.innerWidth())
//                                        ) + "px");
//                    } else {
//                        $this.css("left", $parentContainer.outerWidth() + "px");
//                        $this.css("right", "auto");
//                    }
//                    //Vertical position
//                    if ($parent.css("position") === "relative") {
//                        $this.css("top", "0px");
//                    } else {
//                        $this.css("top", $parent.position().top + "px");
//                    }
//                }
//                //level-0 elements
//                else {
//                    $this.css("left", "0px");
//                    $this.css("top", $this.closest("li").outerHeight() + "px");
//                }
////////////////////////////////////////////////////////////////////////////////
                $this.slideDown(settings.duration);
            }
        });
    };

    /**
     * Function called when mouse leaves a menu entry (&lt;li&gt;)
     * @param {jQuery} $menu
     * @param {type} settings
     * @returns {undefined}
     */
    $.fn.mnmenu.mouseLeave = function($menu, settings) {
        clearTimeout($menu.data('timer'));
        //Remove hover class
        $.fn.mnmenu.elementsToHover($menu, settings).each(function() {
            $(this).removeClass(settings.hoverClassName);
        });
        $menu.children("ul").each(function() {
            var $toHide = $(this);
            $menu.data('timer', setTimeout(
                    function() {
                        $toHide.hide(settings.duration);
                    }, settings.delay));
        });
    };



    /**
     * Returns an array of elements to which to add/remove the "hover" 
     * class when hovered
     * @param {jQuery} $menu
     * @param {type} settings
     * @returns {jQuery}
     */
    $.fn.mnmenu.elementsToHover = function($menu, settings) {
        //All children which aren't containers (li, span, links...)
        //This makes it easier for styling.
        return $([$menu, $menu.children(":not(ul)")]);
    };

    /**
     * Recursive function to traverse the component hierarchy setting attributes 
     * and adding the rest of components such as arrows.
     * 
     * @param {type} settings
     * @param {jQuery} $component
     * @param {int} level
     * @returns {undefined}
     */
    $.fn.mnmenu.levelRecursion = function(settings, $component, level) {
        if ($component.prop("tagName").toUpperCase() === "LI") {
            var middle = true;
            if ($component.parent().children().first().get(0) === $component.get(0)) {
                //Add Arrow to parent (just once).
                $component.parent().closest("li").append(
                        $(["<span ", "class='", settings.arrowClassName, "'></span>"].join("")
                        ).append(settings.arrowCharacter));
                //Add FirstClassName to first <li>
                $component.addClass(settings.firstClassName);
                middle = false;
            }
            //component can be first and last (no else if)
            if ($component.parent().children().last().get(0) === $component.get(0)) {
                $component.addClass(settings.lastClassName);
                middle = false;
            }
            if (middle) {
                $component.addClass(settings.middleClassName);
            }
            level++;
        }
        //The component may not have 'li' direct descendants a span or something else may be in the way
        $component.children().each(function() {
            var $currentLevel = $(this);
            $currentLevel.addClass(settings.levelClassPrefix + "-" + level);
            $.fn.mnmenu.levelRecursion(settings, $currentLevel, level);
        });
    };

    /**
     * Default plugin options
     */
    $.fn.mnmenu.defaults = {
        //Class for top-level menuName
        menuClassName: "mnmenu",
        //Class for hovered elements
        hoverClassName: "hover",
        //List elements levels
        levelClassPrefix: "level",
        //Class for arrow <span>
        arrowClassName: "arrow",
        arrowCharacter: "",
        //List elements position in level
        firstClassName: "first",
        middleClassName: "middle",
        lastClassName: "last",
        delay: 150,
        duration: 250,
        defaultParentAttachmentPosition: "NE",
        defaultAttachmentPosition: "NW"
    };
    $.fn.mnmenu.defaults.levelSettings = {};
    //Define defaultTopLevelSettings
    $.fn.mnmenu.defaults.levelSettings[0] = new MNLevelSettings();
    //Second level settings for default behavior (typical menu)
    $.fn.mnmenu.defaults.levelSettings[1] = new MNLevelSettings();
    $.fn.mnmenu.defaults.levelSettings[1].parentAttachmentPosition = "SW";
    $.fn.mnmenu.defaults.levelSettings[1].attachmentPosition = "NW";
})(jQuery);

function MNLevelSettings() {
    this.parentAttachmentPosition = $.fn.mnmenu.defaults.defaultParentAttachmentPosition;
    this.attachmentPosition = $.fn.mnmenu.defaults.defaultAttachmentPosition;
    this.arrowCharacter = $.fn.mnmenu.defaults.arrowCharacter;
}


////////////////////////////////////////////////////////////////////

$(document).ready(function(){
		$('.select_menu').each(function(){
			var $this = $(this), 
				$subMenu = $this.find("> ul li ul");
 
			$this.find(".option_selected").click(function(){
				var $selected = $(this), 
					$nowSelected = $('.selected');
				$nowSelected.removeClass('selected').parents('.select_menu').find('ul li ul').hide();
 
				if($selected[0] != $nowSelected[0]){
					$subMenu.toggle($selected.toggleClass('selected').hasClass('selected'));
				}
 
				return false;
			});
 
			$this.find(".option_list ul li a").click(function() {
				var current = $(this),
					menuname = current.text();
 
				//連姞
				location.href = current.attr("href");
				$this.find('.selected').removeClass('selected').end().find(".option_list a.option_selected").text(menuname);
				$subMenu.hide();
				return false;
 
			}).hover(function(){
				$this.find('.hovered_item').removeClass('hovered_item');
				$(this).addClass('hovered_item');
			});
		});
 
	}).click(function(){
		$('.selected').removeClass('selected').parents('.select_menu').find('ul li ul').hide();
	});
	
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

$(document).ready(function(){
		$('.select_menubia').each(function(){
			var $this = $(this), 
				$subMenu = $this.find("> ul li ul");
 
			$this.find(".option_selected").click(function(){
				var $selected = $(this), 
					$nowSelected = $('.selected');
				$nowSelected.removeClass('selected').parents('.select_menu').find('ul li ul').hide();
 
				if($selected[0] != $nowSelected[0]){
					$subMenu.toggle($selected.toggleClass('selected').hasClass('selected'));
				}
 
				return false;
			});
 
			$this.find(".option_list ul li a").click(function() {
				var current = $(this),
					menuname = current.text();
 
				//連姞
				location.href = current.attr("href");
				$this.find('.selected').removeClass('selected').end().find(".option_list a.option_selected").text(menuname);
				$subMenu.hide();
				return false;
 
			}).hover(function(){
				$this.find('.hovered_item').removeClass('hovered_item');
				$(this).addClass('hovered_item');
			});
		});
 
	}).click(function(){
		$('.selected').removeClass('selected').parents('.select_menu').find('ul li ul').hide();
	});
	
//////////////////////////////////////////////////////////////////////
function add_select()
{
  var count = 0;
  for(var i = 1;i <= parseInt($('#hiddenField').val(),10); i++){
	  if($("#li_"+i).css("display") != "none"){
		  count ++;
	  }
  }
  if(count >= 10){
	  alert('You have selected more than ten products');
  }
  else{
	  var num = parseInt($('#hiddenField').val(),10) + 1;
	  $('#hiddenField').val(num);
	  $('#dom0').append("<li id='li_"+num+"'><img src=\"img/new_product_cu720.jpg\" border=\"0\" id=\"img1\" class=\"img1\"><p class=\"text_style5\">CU-720PIR</p><input name=\"buyerTelete"+num+"\" id=\"buyerTelete"+num+"\" type=\"checkbox\" value=\"1\" checked onclick=\"del_select('"+num+"');\"></li>");
  }
}<!-- 產品圖片要隨著所選的產品做更改 -->
function del_select(num){
	$("#li_"+num).hide();
}
$(function(){  
    $('#qaContent ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('qa_title').hover(function(){ 
        $(this).addClass('qa_title_on'); 
    }, function(){ 
        $(this).removeClass('qa_title_on'); 
    }).click(function(){ 
        var $qa_content = $(this).next('div.qa_content'); 
        if(!$qa_content.is(':visible')){ 
            $('#qaContent ul li div.qa_content:visible').slideUp(); 
        } 
        $qa_content.slideToggle(); 
    }).siblings().addClass('qa_content').hide(); 
});
////////////////////////////////////////////////////////////////
/////////menu////////////////////////////
$(function(){
 		var _showTab = 0;
		$('.abgne_tab').each(function(){
			// 目前的頁籤區塊
			var $tabbb = $(this);

			var $defaultLi = $('.downmenub li', $tabbb).eq(_showTab).addClass('active');
			$($defaultLi.find('a').attr('href')).siblings().hide();
 			$('.downmenub li', $tabbb).click(function() {
 				var $this = $(this),
					_clickTab = $this.find('a').attr('href');
 				$this.addClass('active').siblings('.active').removeClass('active');
 				$(_clickTab).stop(false, true).fadeIn().siblings().hide();

				return false;
			}).find('a').focus(function(){
				this.blur();
			});
		});
	});
/////////////////////////////////////////////////////////////////////////////

	