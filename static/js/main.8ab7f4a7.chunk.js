(window["webpackJsonpreact-redux-hooks"]=window["webpackJsonpreact-redux-hooks"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=(a(19),a(2)),i=a(3),u=a(1),s={name:"Sunny Xue",occupation:"Ninja",age:16},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(u.a)(Object(u.a)({},e),{},{name:t.payload});case"CHANGE_OCCUPATION":return Object(u.a)(Object(u.a)({},e),{},{occupation:t.payload});case"CHANGE_AGE":return Object(u.a)(Object(u.a)({},e),{},{age:t.payload});default:return e}},d={counter:5},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_COUNT":return Object(u.a)(Object(u.a)({},e),{},{counter:e.counter+1});case"INCREMENT_COUNT_TEN":return Object(u.a)(Object(u.a)({},e),{},{counter:e.counter+10});case"DOUBLE_COUNT":return Object(u.a)(Object(u.a)({},e),{},{counter:2*e.counter});case"DECREMENT_COUNT_TEN":return Object(u.a)(Object(u.a)({},e),{},{counter:e.counter-10});case"DECREMENT_COUNT":return Object(u.a)(Object(u.a)({},e),{},{counter:e.counter-1});case"RESET_COUNT":return Object(u.a)(Object(u.a)({},e),{},{counter:0});default:return e}},b=a(13),N={todoList:[{id:1,content:"Play video game"},{id:2,content:"Learn nodejs & python"},{id:3,content:"Join meetup event"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(u.a)(Object(u.a)({},e),{},{todoList:[].concat(Object(b.a)(e.todoList),[t.payload])});case"REMOVE_TODO":return Object(u.a)(Object(u.a)({},e),{},{todoList:t.payload});default:return e}},p=Object(i.b)({characters:m,myCounter:E,todos:O}),v=function(){var e=Object(o.c)((function(e){return e.myCounter.counter})),t=Object(o.b)();return c.a.createElement("section",{id:"section-counter"},c.a.createElement("h3",{className:"center-align white-text blue"},"Simple Counter"),c.a.createElement("h5",{className:"center-align"},e),c.a.createElement("div",{className:"row counter-btns"},c.a.createElement("button",{className:"btn-small blue",onClick:function(){return t({type:"DOUBLE_COUNT"})}},"x2"),c.a.createElement("button",{className:"btn-small blue",onClick:function(){return t({type:"INCREMENT_COUNT_TEN"})}},"+10"),c.a.createElement("button",{className:"btn-small blue",onClick:function(){return t({type:"INCREMENT_COUNT"})}},"+1"),c.a.createElement("button",{className:"btn-small blue",onClick:function(){return t({type:"DECREMENT_COUNT"})}},"-1"),c.a.createElement("button",{className:"btn-small blue",onClick:function(){return t({type:"DECREMENT_COUNT_TEN"})}},"-10"),c.a.createElement("button",{className:"btn-small blue",onClick:function(){return t({type:"RESET_COUNT"})}},"Reset")))},f=a(5),h=function(e){var t=Object(o.c)((function(e){return e.todos.todoList})),a=Object(o.b)();return c.a.createElement("li",{className:"collection-item",key:e.item.id},e.item.content,c.a.createElement("span",{onClick:function(){!function(e){var n=t.filter((function(t){return t.id!==e}));a({type:"REMOVE_TODO",payload:n})}(e.item.id)},className:"secondary-content"},c.a.createElement("i",{className:"remove-btn material-icons blue-text"},"clear")))},C=function(){var e=Object(o.c)((function(e){return e.todos.todoList})),t=Object(o.b)(),a=Object(n.useState)(""),r=Object(f.a)(a,2),l=r[0],i=r[1],u=Object(n.useState)(""),s=Object(f.a)(u,2),m=s[0],d=s[1];return c.a.createElement("section",{id:"section-todo"},c.a.createElement("h3",{className:"center-align white-text blue"},"Todo List"),e.length>0?c.a.createElement("ul",{className:"collection"},e.map((function(e){return c.a.createElement(h,{key:e.id,item:e})}))):c.a.createElement("p",{className:"center-align"},"You don't have anything to do! Awesome!"),c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"red-text err-msg col s12 center-align"},m),c.a.createElement("div",{className:"input-field col s10"},c.a.createElement("input",{onChange:function(e){i(e.target.value)},value:l,placeholder:"Add todo...",id:"todo-input",type:"text"}),c.a.createElement("label",{htmlFor:"todo-input",className:"active"},"New Todo")),c.a.createElement("button",{className:"btn col s2 blue",onClick:function(){if(l.trim().length>1){d("");var e={id:Math.random(),content:l};t({type:"ADD_TODO",payload:e}),i("")}else d("Please input something...")}},"Add")))},g=function(){var e=Object(o.c)((function(e){return e.characters})),t=Object(o.b)();return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s4"},c.a.createElement("input",{value:e.name,id:"name",type:"text",onChange:function(e){return t({type:"CHANGE_NAME",payload:e.target.value})}}),c.a.createElement("label",{htmlFor:"name",className:"active"},"Name")),c.a.createElement("div",{className:"input-field col s4"},c.a.createElement("input",{value:e.occupation,id:"occupation",type:"text",onChange:function(e){return t({type:"CHANGE_OCCUPATION",payload:e.target.value})}}),c.a.createElement("label",{htmlFor:"occupation",className:"active"},"Occupation")),c.a.createElement("div",{className:"input-field col s4"},c.a.createElement("input",{value:e.age,id:"age",type:"number",onChange:function(e){return t({type:"CHANGE_AGE",payload:e.target.value})}}),c.a.createElement("label",{htmlFor:"age",className:"active"},"Age"))))},j=function(){var e=Object(o.c)((function(e){return e.characters})),t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],l=a[1];return c.a.createElement("section",{id:"section-namecard"},c.a.createElement("h3",{className:"center-align white-text blue"},"Name Card"),c.a.createElement("div",{className:"card grey darken-1 namecard"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("p",{className:"card-title"},e.name),c.a.createElement("p",null,"Occupation: ",e.occupation),c.a.createElement("p",null,"Age: ",e.age),c.a.createElement("button",{onClick:function(){l(!r)},className:"btn-floating halfway-fab waves-effect waves-light orange"},r?c.a.createElement("i",{className:"material-icons"},"clear"):c.a.createElement("i",{className:"material-icons"},"create")))),r&&c.a.createElement(g,null))};var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("main",{className:"container"},c.a.createElement(v,null),c.a.createElement("div",{className:"divider"}),c.a.createElement(j,null),c.a.createElement("div",{className:"divider"}),c.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=Object(i.c)(p);l.a.render(c.a.createElement(o.a,{store:T},c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8ab7f4a7.chunk.js.map