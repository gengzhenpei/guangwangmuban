$(document).ready(function() {
	
	//内容部分不同的页面加载不同的内容
	loadContend(0);

	//用template渲染数据
	GetMenuData();

	getBannerData();
	//点击左侧菜单后上面的title相应变化
	leftMenuClick();

	//点击头部菜单 左侧的子菜单相应变化
	childMenuGet();

	//手机菜单
	HideMenu();

	//手机菜单二维码
	ErWeiMaShow();

})

//点击左侧菜单后上面的title相应变化
function leftMenuClick() {
	$('.left_bar ul li').on('click', function() {
		var t = $(this).find('a').text();
		$('.top_title_inner .childChildMenu').text(t);

		$(this).addClass('menuSelect').siblings().removeClass('menuSelect');

	})
}
//点击头部菜单
function childMenuGet() {
	$('#menu1 a').click(function() {
		var thisDom = $(this);
		var menuText = thisDom.text();
		thisDom.addClass('selected').siblings().removeClass('selected');
		$('#currentMenu').text(menuText);
		$('#menuChild1').empty();

		getChildMenuData();
		title2GetData();

		var t2 = $('#menuChild1 a').eq(0).text();
		$('.childChildMenu').text(t2);

		leftMenuClick()
		
		var index = $(this).index();
		loadContend(index);
	})
}

function title2GetData() {
	var title2Text = $('#currentMenu').text();
	$('.childMenutitle a').text(title2Text);
}

//左边菜单点击后高亮
function LeftMenu() {
	var b = $('.top_title_inner .childChildMenu').text();
	var c = $('.left_bar ul li a');
	$.each(c, function(i, key) {
		var d = $(key).text();
		if(d == b) {
			var f = $(this)
			f.parents('li').addClass('menuSelect').siblings().removeClass('menuSelect');
		}
	});
}

//手机菜单的显示与隐藏
function HideMenu() {
	$('.move_menu_left').click(function() {
		$('.move_menu_right').hide();
		$('.move_menu_left').hide();
	});
	$('.menu_icon').click(function() {
		$('.move_menu_right').show();
		$('.move_menu_left').show();
	})
}

//手机上二维码的显示与隐藏
function ErWeiMaShow() {
	$('.weixin').click(function() {
		$('.weixinshow').show();

	})
	$('.mask').click(function() {
		$('.weixinshow').hide();
	})
}
//初始化菜单
function GetMenuData() {
//	console.log(menu);
	var html = template('menu', menu);

	$('#menu1').append(html);
	$('#menu1 a').eq(0).addClass('selected')

	getChildMenuData()

}
//初始化 子菜单获取数据
function getChildMenuData() {
	var menuSelect = '';
	var currentMenu = $('#currentMenu').text(); //左侧二级菜单标题
	$.each(menu.list, function(i, key) {
		if(currentMenu == key.menu1) {
			menuSelect = key.menu2; //menuSelect是数组
		}

	});
	menuSelect = {
		'list1': menuSelect
	}; //对数据处理

	var htmlChild = template('menuChild', menuSelect);

	$('#menuChild1').append(htmlChild);
	

}

function getPicData() {
	var picHtml = template('pic_about2', picData);
	$('#pic_about1').append(picHtml);
}

function getXueShuData() {
	var xueShuData = template('shuXueHtml1', xueshuData);
	$('#shuXueHtml2').append(xueShuData);
	
}

function getBannerData() {
	//处理banner数据
	var currentClick = '';
	var bannerDataAfter = '';
	$('#menu1 a').click(function() {
		currentClick = $(this).index();
		currentClick += 1;
		$.each(bannerData.list, function(i, key) {
			if(currentClick == key.currentPage) {
				bannerDataAfter = key.src;
			}
		})
		$('#bannerHtml2 img').attr('src', bannerDataAfter);
	})
}

function loadContend(i){
	var yingshe = {
		0: null,
		1: 'server_qiye.html',
		2: 'server_yuanxiao.html',
		3: 'server_geren.html',
		4: 'zhanting.html',
		5: 'jiaoliu.html',
		6: 'about_content.html'
	}
	if(i==0){
		$('#load_content').load('firstpage.html', function(){
			$('#left_menu').hide();
		});
	}
	$('#load_content').load(yingshe[i], function(){
		$('#left_menu').show();
	});
}
