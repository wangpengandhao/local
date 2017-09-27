window.addEventListener('load',function(){
	let dl=document.querySelector('dl');
	let info=[
        {name:'白杨',tell:15735804600,py:'baiyang'},
        {name:'宋浩',tell:15735804601,py:'songhao'},
        {name:'苏凡',tell:15735804602,py:'sufan'},   
        {name:'冯杰',tell:15735804603,py:'fengjie'},
        {name:'王鹏',tell:15735804604,py:'wangpeng'},
        {name:'王浩',tell:15735804605,py:'wanghao'},
        {name:'郝好',tell:15735804606,py:'haohao'},
        {name:'高雄',tell:15735804607,py:'gaoxiong'},
        {name:'有帅',tell:15735804608,py:'youshuai'}
	];
	render(info);
	function render(data){
		let obj={};
		data.forEach(element=>{
			let first=element.py.charAt(0).toUpperCase();
			if(!obj[first]){
				obj[first]=[];
			}
			obj[first].push(element);
		})
		let char=Object.keys(obj).sort();
		char.forEach(element=>{
			dl.innerHTML+=`<dt>${element}</dt>`;
			obj[element].forEach(value=>{
				dl.innerHTML+=`<dd><a href="${value.tell}">${value.name}</a></dd>`
			})
		})
	}      
})
