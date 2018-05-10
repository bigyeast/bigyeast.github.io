function boxToggle(showbtn,hidebtn,box){
	// showbtn : 点击这个按钮显示box
	// hidebtn : 点击这个按钮隐藏box
	// box : 	要隐藏或显示的模块
	var oShowBtn = document.getElementById(showbtn);
	var oHideBtn = document.getElementById(hidebtn);
	var oBox = document.getElementById(box);

	oShowBtn.onclick = function(){
		oBox.style.display = 'block';
	}
	oHideBtn.onclick = function(){
		oBox.style.display = 'none';
	}
}