// write your code here
var e=function(e,n){var t=document.createElement("div");t.className=e,t.textContent=n,document.body.appendChild(t)},n=new Promise(function(e){document.querySelector(".logo").addEventListener("click",function(){e("Promise was resolved!")})}),t=new Promise(function(e,n){setTimeout(function(){return n(Error("Promise was rejected!"))},3e3)});n.then(function(n){e("message",n)}),t.catch(function(n){e("message error-message",n)});//# sourceMappingURL=index.155930fa.js.map

//# sourceMappingURL=index.155930fa.js.map
