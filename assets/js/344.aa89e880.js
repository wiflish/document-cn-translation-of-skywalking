(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{229:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"ip和端口设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip和端口设置"}},[t._v("#")]),t._v(" IP和端口设置")]),t._v(" "),s("p",[t._v("Backend使用IP和端口绑定，以支持具有多个IP的操作系统。 绑定/监听IP和端口由核心模块指定。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("core")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12800")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restContextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11800")]),t._v("\n")])])]),s("p",[t._v("有两对IP/port，分别提供给gRPC和HTTP的rest服务。")]),t._v(" "),s("ul",[s("li",[t._v("大多数agent和探针使用GRPC服务以获得更好的性能和代码可读性。")]),t._v(" "),s("li",[t._v("少数agent使用REST服务，因为该语言可能不支持GRPC。")]),t._v(" "),s("li",[t._v("用户界面使用REST服务，但数据始终采用graphql格式。")])]),t._v(" "),s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("h3",{attrs:{id:"ip绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip绑定"}},[t._v("#")]),t._v(" IP绑定")]),t._v(" "),s("p",[t._v("如果有些用户不熟悉IP绑定，您应该知道，当IP绑定完成后，客户端只能使用此IP访问服务。例如，绑定了"),s("code",[t._v("172.09.13.28")]),t._v("，即使是在此计算机中，必须使用"),s("code",[t._v("172.09.13.28")]),t._v("而不是"),s("code",[t._v("127.0.0.1")]),t._v("或"),s("code",[t._v("localhost")]),t._v("来访问服务。")]),t._v(" "),s("h3",{attrs:{id:"模块提供者指定的ip和端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块提供者指定的ip和端口"}},[t._v("#")]),t._v(" 模块提供者指定的IP和端口")]),t._v(" "),s("p",[t._v("核心模块的IP和端口默认有核心模块提供。但某些模块提供者可能提供其它的IP和端口设置，这很正常。比如一些接收模块。")])])}],!1,null,null,null);a.default=r.exports}}]);