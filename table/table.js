window.onload=function(){
	let table = document.querySelector('tbody');
	let addbut=document.querySelector('main>.addbut');
	let dataObj=new storage();
	load();
	function load(){
		let students=dataObj.getdata();
		console.log(students);
		students.forEach((element,index)=>{
			stud(element,index);
		})
	}
	// 创建节点、插入
	function stud(obj,i){
		let str=document.createElement('tr');		
		str.id=i
		str.innerHTML=`
			<td type="name">${obj.name}</td>
			<td type="sex">${obj.sex}</td>
			<td type="num">${obj.num}</td>
			<td type="add">${obj.add}</td>
			<td><button class="bt">删除</button></td>`;
		table.appendChild(str);
	}
	// 添加
	let student={name:'张三' ,sex:'男' ,num:666666 ,add:'大同'};
	addbut.ondblclick=function(){
		studs(student);
		dataObj.push(student);
		table.innerHTML='';
		load();
	}
	// 调用stud函数,进行添加
	/*addbut.ondblclick=function(){
		let student={name:'张三' ,sex:'男' ,num:666666 ,add:'大同'};
		let index=student.childElementCount;
		stud(student,index);
		dataObj.push(student);
	}*/
	function studs(obj){
		let str=document.createElement('tr');
		table.appendChild(str);
		str.innerHTML=`
			<td>${obj.name}</td>
			<td>${obj.sex}</td>
			<td>${obj.num}</td>
			<td>${obj.add}</td>
			<td><button class="bt">删除</button></td>
			`
	}
	table.ondblclick=function(e){
		let element=e.target;
		if(element.nodeName=='TD'&&element.className!='BT'){
			let values=element.innerHTML;
			element.innerHTML='';		
			let inputs=document.createElement('input');
			inputs.style.width='40px';
			inputs.style.height='26px';
			inputs.value=values;
			element.appendChild(inputs);
			inputs.onblur = function(){
				let newvalue=inputs.value.trim();
				inputs=null;
				element.innerText=newvalue;
				let index=element.parentNode.id,
				key=element.getAttribute('type'),
				value=newvalue;
				dataObj.updata(index,key,value);
			}
			// 删除
		}else if(element.nodeName == 'BUTTON'){
			let tbody = element.parentNode.parentNode;
			table.removeChild(tbody);	
			index=element.parentNode.parentNode.id;
			dataObj.del(index);
			table.innerHTML='';
			load();

		}
	}
}
				// element.removeChild(inputs);
				// if(newvalue){
				// 	element.innerText=newvalue;
				// }else{
				// 	element.innerText=value;
				// }
	/*let table=document,querySelector('tbody');
	let student=[
				{name='zhangsan',age=18,num=6666,sex='nan',add='taiyuan'},
	]
	student.forEach(element=>{
		trs();
	})
	function trs(obj){
		let str=document.createElement('tr');
		table.appendChild('str');
		str.innerHTML=`
			
		`
	}
	table.ondblclick=function(e){
		let element=e.target;
		if(element.nodeName=='TD'&&element.className=='BT'){
			let valuelod=element.innerText;
			let inputs=document.createElement('input');
			element.innerText='';
			element.appendChild(inputs);
			inputs.value=valuelod
			inputs.onblur=function(){
				let newvalue=inputs.value;
				inputs=null;
				element.innerText=newvalue;
			}
		}else if(element.nodeName=='BUTTON'){
			let tobdy=element.parentChild.parent.Child;
			table.removeChild(tobdy);
		}
	}*/