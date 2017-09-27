/*  
	初始化 init()
	获取	getdata()	
	更新	updata()
	保存
 */
class storage{
	constructor(){
		this.data=[
			{name:'张三' ,sex:'男' ,num:666666 ,add:'大同'},
			{name:'张三' ,sex:'男' ,num:666666 ,add:'大同'},
			{name:'张三' ,sex:'男' ,num:666666 ,add:'大同'},
			{name:'张三' ,sex:'男' ,num:666666 ,add:'大同'}]
	}
	init(){	
	localStorage.setItem('students',JSON.stringify(this.data));
	}
	getdata(){
		let data =localStorage.getItem('students');
			if(!data){
				this.init();
			}
		return this.data=JSON.parse(localStorage.getItem('students'));
	}
	updata(index,key,value){
		this.data[index][key]=value;
		this.save();
	}
	del(index){
		this.data.splice(index,1);
		this.save();
	}
	push(obj){
		this.data.push(obj);
		this.save();
	}
	save(){
		localStorage.setItem('students',JSON.stringify(this.data));
	}
}

// 