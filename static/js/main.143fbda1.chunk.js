(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":"pup1","image":"https://i.imgur.com/lo8oMxq.jpg"},{"id":"pup2","image":"https://i.imgur.com/glA20zX.jpg"},{"id":"pup3","image":"https://i.imgur.com/aKoNNI8.jpg"},{"id":"pup4","image":"https://imgur.com/iDz6ek6.jpg"},{"id":"pup5","image":"https://imgur.com/AcDQBKX.jpg"},{"id":"pup6","image":"https://imgur.com/nhb5mY4.jpg"},{"id":"pup7","image":"https://imgur.com/BWvCFC4.jpg"},{"id":"pup8","image":"https://imgur.com/Ed9o0g3.jpg"},{"id":"pup9","image":"https://imgur.com/lDzdS3J.jpg"}]')},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),i=a.n(o),n=a(3),s=a.n(n),r=(a(14),a(4)),c=a(5),l=a(7),u=a(6),m=a(8);a(15),a(16),a(17);var p=function(e){return i.a.createElement("div",{className:"card-container"},i.a.createElement("img",{src:e.image,alt:"image of dog",id:e.id,onClick:function(){return e.shuffleCards(e.id)},className:"shuffle-cards"}))};a(18);var g=function(e){return i.a.createElement("div",{className:"score"},i.a.createElement("h2",{className:"score-header"},"Your Score: ",e.total),i.a.createElement("h2",{className:"goal"},"Your Goal: 9"),i.a.createElement("h2",{className:"status"},e.status))};a(19);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},h=a(1),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).shuffleCards=function(e){var t=a.state.clicked;if(console.log(t),t.includes(e))a.setState({clicked:[],score:0,gameStatus:"Game over! You lost. Click a dog to play again!"}),console.log("You lost.");else if(t.push(e),9===t.length)a.setState({clicked:[],score:9,gameStatus:"Congratulations! You win! Click a dog to play again."}),console.log("You won!");else{a.setState({score:t.length,gameStatus:""});for(var o=h.length-1;o>0;o--){var i=Math.floor(Math.random()*(o+1)),n=[h[i],h[o]];h[o]=n[0],h[i]=n[1]}}},a.state={puppies:h,clicked:[],score:0,gameStatus:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"Dog Clicker Memory Game"),i.a.createElement(g,{total:this.state.score,status:this.state.gameStatus}),i.a.createElement(d,null,this.state.puppies.map((function(t){return i.a.createElement(p,{shuffleCards:e.shuffleCards,image:t.image,id:t.id,key:t.id})}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.143fbda1.chunk.js.map