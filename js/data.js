//数据集
var menu = {
	'list': [{
			'menu1': '首页',
			'url': 'javascript:void(0)',
			'htm': 'childpage/firstpage.html'
		},

		{
			'menu1': '企业服务',
			'url': 'javascript:void(0)',
			'htm': 'childpage/qiye_1.html',
			'menu2': [{
					'name': '企业服务1',
					'url': 'javascript:void(0)',
					'html': 'childpage/qiye_1.html'
				},

				{
					'name': '企业服务2',
					'url': 'javascript:void(0)',
					'html': 'childpage/qiye_2.html'
				}
			]
		},

		{
			'menu1': '院校服务',
			'url': 'javascript:void(0)',
			'htm': 'childpage/yuanxiao_1.html',
			'menu2': [{
					'name': 'BIM院校服务',
					'url': 'javascript:void(0)',
					'html': 'childpage/yuanxiao_1.html'
				},

				{
					'name': '院校服务',
					'url': 'javascript:void(0)',
					'html': 'childpage/yuanxiao_2.html'
				}
			]
		},

		{
			'menu1': '个人服务',
			'url': 'javascript:void(0)',
			'htm': 'childpage/geren_1.html',
			'menu2': [{
					'name': 'BIM个人服务',
					'url': 'javascript:void(0)',
					'html': 'childpage/geren_1.html'
				},

				{
					'name': '个人服务',
					'url': 'javascript:void(0)',
					'html': 'childpage/geren_2.html'
				}
			]
		},

		{
			'menu1': '学习体验厅',
			'url': 'javascript:void(0)',
			'htm': 'childpage/tiyan_1.html',
			'menu2': [{
					'name': '学习体验厅',
					'url': 'javascript:void(0)',
					'html': 'childpage/tiyan_1.html'
				},

				{
					'name': '展厅环境位置',
					'url': 'javascript:void(0)',
					'html': 'childpage/tiyan_2.html'
				},

				{
					'name': '项目指导专家',
					'url': 'javascript:void(0)',
					'html': 'childpage/tiyan_3.html'
					
				},

				{
					'name': '项目背景',
					'url': 'javascript:void(0)',
					'html': 'childpage/tiyan_4.html'
					
				}
				
			]
		},

		{
			'menu1': '学术交流',
			'url': 'javascript:void(0)',
			'htm': 'childpage/jiaoliu_1.html',
			
			'menu2': [{
					'name': '学术交流',
					'url': 'javascript:void(0)',
					'html': 'childpage/jiaoliu_1.html'
				},

				{
					'name': '核心专家团队',
					'url': 'javascript:void(0)',
					'html': 'childpage/jiaoliu_2.html'
					
				}
			]
		},

		{
			'menu1': '关于我们',
			'url': 'javascript:void(0)',
			'htm': 'childpage/about_1.html',
			'menu2': [{
					'name': '关于我们',
					'url': 'javascript:void(0)',
					'html': 'childpage/about_1.html'
				},

				{
					'name': '公司发展历程',
					'url': 'javascript:void(0)',
					'html': 'childpage/about_2.html'
					
				},

				{
					'name': '公司资质',
					'url': 'javascript:void(0)',
					'html': 'childpage/about_3.html'
					
				}

			]
		}

	]
}


//about 图片内容

var picData = {
	'list':[
		{
			'url': "a/5003.html",
			'src':"image/5003_2.jpg",
			'date':'12-12',
			'content':'采薇君华荣获2016年全国应用型人才综合技能大赛特别贡献奖'
		},
		{
			'url': "https://mp.weixin.qq.com/s/51luaScf7uG5_qJoJtWYeg",
			'src':"image/5001_1.jpg",
			'date':'12-12',
			'content':'采薇君华“5TBIM国际体验学习厅”在杭州海创园隆重启动'
		},
		{
			'url': "a/5001.html",
			'src':"image/5001_3.jpg",
			'date':'12-12',
			'content':'第二届中英BIM研究院年会暨中国BIM与建筑工业化峰会'
		}
	]
}

//学术活动列表内容
var xueshuData = {
	'list':[
		{
			'url': "a/5003.html",
			'content': '采薇君华荣获2016年全国应用型人才综合技能大赛特别贡献奖',
			'date': '2016/12/12'
		},
		{
			'url': "https://mp.weixin.qq.com/s/51luaScf7uG5_qJoJtWYeg",
			'content': '采薇君华“5TBIM国际体验学习厅”在杭州海创园隆重启动',
			'date': '2016/12/12'
		},
		{
			'url': "a/5001.html",
			'content': '第二届中英BIM研究院年会暨中国BIM与建筑工业化峰会',
			'date': '2016/11/19'
		},
		{
			'url': "http://mp.weixin.qq.com/s?__biz=MzI1OTQ5MzI0Mg==&mid=2247483694&idx=1&sn=fed9e72e8ad1e924219c7acd4177c89e&chksm=ea795d3bdd0ed42dd2602c5063f835e1e7b07fe2ecadb91c7ffff4c3f471a48a276fd0cd1e00&scene=0#wechat_redirect",
			'content': '中国建筑工业发展高峰论坛开幕',
			'date': '2016/10/27'
		},
		{
			'url': "a/2008.html",
			'content': '中建一局 报道通稿',
			'date': '2016/07/15'
		},
		{
			'url': "a/2007.html",
			'content': '清华大学 ——“国际太阳能十项全能竞赛”BIM特训营',
			'date': '2016/07/12'
		},
		{
			'url': "a/2006.html",
			'content': '国际BIM技术及应用高端论坛',
			'date': '2016/07/07'
		},
	]
}

//banner 图片数据
var bannerData = {
	'list':[
		{
			'currentPage': 1,
			'src': "image/firstScreen-bg.jpg"
		},
		{
			'currentPage': 2,
			'src': "image/firstScreen-bg2.jpg"
		},
		{
			'currentPage': 3,
			'src': "image/firstScreen-bg3.jpg"
		},{
			'currentPage': 4,
			'src': "image/firstScreen-bg4.jpg"
		},{
			'currentPage': 5,
			'src': "image/firstScreen-bg.jpg"
		},
		{
			'currentPage': 6,
			'src': "image/firstScreen-bg2.jpg"
		},
		{
			'currentPage': 7,
			'src': "image/firstScreen-bg3.jpg"
		}
		
	]
}
