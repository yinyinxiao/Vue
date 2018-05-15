//回调函数
let a='';
function buy(callback){
    setTimeout(()=>{
        a='银银';
        callback(a);
    },2000);
}
buy(function kookie() {
    console.log(a);
});

//Promise
function buyFood() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (Math.random()>0.5){
                resolve('buy');
            }else {
                reject("can not buy");
            }
        },Math.random()*1000);
    });
}
buyFood().then(function(data){
    console.log(data);
},function (data) {
    console.log(data);
});
function ajax({url='',type='get',dataType='json'}) {
    return new Promise((resolv,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType=dataType;
        xhr.onload=function () {
            resolv(xhr.response)
        };
        xhr.onerror=function (err) {
            reject(err);
        }
        xhr.send();
    })
}
ajax({url:'products.json'}).then(res=>{
    console.log(res)
},err=>{
    console.log(err);
});