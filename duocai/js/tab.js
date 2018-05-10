function tabToggle(Tab,TabChild,Control,ControlList,memuClass,menuActive,conClass,ConActive){
	// oTab:切换菜单的父级
	// oTabChild: 	切换菜单的单个元素
	// oControl: 	要切换的模块父级
	// oControlList:要切换的模块的单个元素
	// memuClass: 	菜单未选中状态的class 默认值为空
	// menuActive: 	菜单选中时要添加的class 默认值为 active
	// conClass: 	切换模块的未选中状态的class 默认值为空
	// ConActive: 	切换模块选中时要添加的class 默认值为 active

	var oTab = document.getElementById(Tab);
	var oTabChild = oTab.getElementsByTagName(TabChild);
	var oControl = document.getElementById(Control);
	var oControlList = oControl.getElementsByTagName(ControlList);
	var iNow = 0;
	//点击菜单后，给要显示的部分添加当前class为 active
	function tab(){
		//默认先去掉所有ul的active
		for(var j = 0; j < oControlList.length; j++){
			// oControlList[j].className = conClass;
			oControlList[j].className = conClass == null ? '' : conClass;
		}
		// 给对应的ul添加active
		oControlList[iNow].className = ConActive == null ? 'active' : ConActive;
	}
	// 遍历所有的tab
	for (var i = 0; i < oTabChild.length; i++) {
		oTabChild[i].index = i;
		// 点击某一个tab
		oTabChild[i].onclick = function(){
			// 获取当前tab的index值
			iNow = this.index;
			// 把所有tab的class都去掉active
			for(var j = 0; j < oTabChild.length; j++){
				oTabChild[j].className = memuClass == null ? '' : memuClass;
			}
			// 给当前被点击的tab添加active
			oTabChild[iNow].className = menuActive == null ? 'active' : menuActive;
			tab();
		}
	}
}