
//初始化位置数组


var easeCssArr = ['transform:translateZ(-100px)','transform: translateX(250px) rotateY(-40deg) translateZ(-100px)','transform: translateX(-250px) rotateY(40deg) translateZ(-100px)'];

//通过class 选中元素
function getClass(str){
	return document.getElementsByClassName(str);
}

//给元素设置样式 
function setImgStyle(eleArr,CssArr,fn){
	for(var i = 0;i < eleArr.length;i++){
		fn(eleArr[i],CssArr[i]);
	}
}

//定时 转动

//setInterval
setTimeout(function(){
	easebay('right');
	chosecar('right');
	release('right');
	chat('right');
	plate('right');
	invite('right');
},3000);


//买车无忧 模块点击
function easebay(around){

	//获取 图片元素数组
	var eleArr = getClass('easeBay');
	//声明待用 以便交换数组项位置
	var change;
	
	//判断按钮点击方向
	if(around == 'left'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[2];
		easeCssArr[2]=easeCssArr[1];
		easeCssArr[1]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}else if(around == 'right'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[1];
		easeCssArr[1]=easeCssArr[2];
		easeCssArr[2]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}
	
	
}


//精准车源查找 点击
function chosecar(around){
	//获取 图片元素数组
	var eleArr = getClass('chose');
	//声明待用 以便交换数组项位置
	var change;
	
	//判断按钮点击方向
	if(around == 'left'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[2];
		easeCssArr[2]=easeCssArr[1];
		easeCssArr[1]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}else if(around == 'right'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[1];
		easeCssArr[1]=easeCssArr[2];
		easeCssArr[2]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}
}



//发布车源和求购 点击

function release(around){
	//获取 图片元素数组
	var eleArr = getClass('release');
	//声明待用 以便交换数组项位置
	var change;
	
	//判断按钮点击方向
	if(around == 'left'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[2];
		easeCssArr[2]=easeCssArr[1];
		easeCssArr[1]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}else if(around == 'right'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[1];
		easeCssArr[1]=easeCssArr[2];
		easeCssArr[2]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}
}

//******************
function chat(around){
	//获取 图片元素数组
	var eleArr = getClass('chatimg');
	//声明待用 以便交换数组项位置
	var change;
	
	//判断按钮点击方向
	if(around == 'left'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[2];
		easeCssArr[2]=easeCssArr[1];
		easeCssArr[1]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}else if(around == 'right'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[1];
		easeCssArr[1]=easeCssArr[2];
		easeCssArr[2]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}
}

//******************
function plate(around){
	//获取 图片元素数组
	var eleArr = getClass('plateimg');
	//声明待用 以便交换数组项位置
	var change;
	
	//判断按钮点击方向
	if(around == 'left'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[2];
		easeCssArr[2]=easeCssArr[1];
		easeCssArr[1]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}else if(around == 'right'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[1];
		easeCssArr[1]=easeCssArr[2];
		easeCssArr[2]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}
}

//******************
function invite(around){
	//获取 图片元素数组
	var eleArr = getClass('inviteimg');
	//声明待用 以便交换数组项位置
	var change;
	
	//判断按钮点击方向
	if(around == 'left'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[2];
		easeCssArr[2]=easeCssArr[1];
		easeCssArr[1]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}else if(around == 'right'){
		//交换数组中的为位置
		change =easeCssArr[0];
		easeCssArr[0]=easeCssArr[1];
		easeCssArr[1]=easeCssArr[2];
		easeCssArr[2]=change;
		
		//给数组每项重新设置 transform属性
		setImgStyle(eleArr,easeCssArr,function(img,trans){
			img.style = trans;
		});
		
	}
}







