$(document).ready(function(){
	getPicData();
	
	getXueShuData()
})


function getPicData() {
	var picHtml = template('pic_about2', picData);
	$('#pic_about1').append(picHtml);
}

function getXueShuData() {
	var xueShuData = template('shuXueHtml1', xueshuData);
	$('#shuXueHtml2').append(xueShuData);
	
	console.log(xueshuData)
//	console.log($('#shuXueHtml2'))
}