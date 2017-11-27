window.onload = function() {
	var sli_box = document.getElementById("sli_box");
	var img = sli_box.getElementsByTagName("div");
	var left = document.getElementById("s_left");
	var right = document.getElementById("s_right");
	var index = 0;
	var time = null;

	time = setInterval(function() {
		right.onclick();
	}, 3000)

	left.onclick = function() {
		index--;
		if (index == -1) {
			index = 2
		}
		for (var i = 0; i < img.length; i++) {
			img[i].style.opacity = 0;
		}
		img[index].style.opacity = 1;
		console.log(index);
	}
	right.onclick = function() {
		index++;
		if (index >= img.length) {
			index = 0;
		}
		for (var i = 0; i < img.length; i++) {
			img[i].style.opacity = 0;
		}
		img[index].style.opacity = 1;
		console.log(index);
	}

	//-----------------------------------------------------------------------	

	var box_bg = document.getElementById("box_bg");
	var newleft;
	var timer;
	console.log(box_bg.style.left);

	timer = setInterval(function() {
		anima(-100);
	}, 4000);

	function anima(offset) {
		newleft = parseInt(box_bg.style.left) + offset;
		box_bg.style.left = newleft + '%';
		if (newleft < -100) {
			box_bg.style.left = 0 + '%';
		}
	}


	//--------------------------------------------------------------------------

	var four_box = document.getElementById("four_box");
	var but = document.getElementById("button");
	var btn = but.getElementsByTagName("span");
	var for_left;
	var setime = null;
	var num = 0;



	//清空一下定时器
	if (setime) {
		clearInterval(setime);
		setime = null;
	}

	function run() {
		setime = setInterval(function() {
			num++;
			if (num >= btn.length) {
				num = 0;
			}
			play(-100);
			showbtn();
			console.log(num)
		}, 6000);
	}

    run();

	//循环点击
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function() {
			var myindex = parseInt(this.getAttribute("index"));
			var offset = -100 * (myindex - num);
			play(offset);
			num = myindex;
			showbtn();
		}
	}

	//鼠标滑动  
	but.onmouseover = function() {
		clearInterval(setime);
	}
	but.onmouseout = function() {
           run();
	}


	//定义方法
	function play(offset) {
		for_left = parseInt(four_box.style.left) + offset;
		four_box.style.left = for_left + '%';
		if (for_left < -200) {
			four_box.style.left = 0 + '%';
		}
		if (for_left > 0) {
			four_box.style.left = -200 + '%';
		}
	}

	function showbtn() {
		for (var i = 0; i < btn.length; i++) {
			if (btn[i].className == 'bg') {
				btn[i].className = " ";
				break;
			}
		}
		btn[num].className = "bg";
	}

}