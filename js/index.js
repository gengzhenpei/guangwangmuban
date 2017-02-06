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
		var index = $(this).index();
		var menuIndex = $('#menu1 a.selected').index();
		console.log(menuIndex);
		var t = $(this).find('a').text();
		$('.top_title_inner .childChildMenu').text(t);

		$(this).addClass('menuSelect').siblings().removeClass('menuSelect');
		
		leftMenuContent(menuIndex, index);

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
		
		//左边菜单第一项高亮
		$('#menuChild1 li').eq(0).addClass('menuSelect');
		//url hash改变
//		var go = '';
//		go = menu.list[index].htm;
//		location.hash = go;
	})
}

function title2GetData() {
	var title2Text = $('#currentMenu').text();
	$('.childMenutitle a').text(title2Text);
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

function loadContend(i) {

	var toptitle = menu.list;
	
	if(i == 0) {
		$('#load_content').load('firstpage.html', function() {
			$('#left_menu').hide();
			$('.childMenutitle, .childChildMenu').hide();
			$('#load_content').removeClass('col-lg-10').addClass('col-lg-12');
		});
	}
	
	$.each(toptitle, function(item, key){
		if(i==item){
			toptitle = key.htm;
		}
	})
	
	$('#load_content').load(toptitle, function() {
		$('#left_menu').show();
		$('.childMenutitle, .childChildMenu').show();
		$('#load_content').removeClass('col-lg-12').addClass('col-lg-10');
	});

}

//点击左边菜单 load不同内容
function leftMenuContent(currentMenu, currentChildMenu){
	var html = menu.list;
	$.each(html, function(item, key){
		if(currentMenu==item){
			html = key.menu2;
			$.each(html, function(item1, key1){
				if(currentChildMenu==item1){
					html=key1.html;
				}
			})
		}
		
	});
	$('#load_content').load(html);
}
