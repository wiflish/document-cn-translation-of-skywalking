(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{253:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("查询协议在 GraphQL 语法中定义了一组 API，通过 SkyWalking 本机可视化工具或第三方系统(包括Web UI、CLI或私有系统)提供数据查询和交互功能。\n查询协议官方库, https://github.com/apache/skywalking-query-protocol.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("元数据包括整个监控服务及其实例、端点等简要信息。\n可以使用多种方法查询元数据。")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("p",[t._v("显示服务或端点的拓扑和依赖关系图。包括直接关系图或全局关系图。")]),t._v(" "),t._m(4),t._m(5),t._v(" "),s("p",[t._v("指标查询以定义的所有对象为目标 "),s("router-link",{attrs:{to:"./../concepts-and-designs/oal.html"}},[t._v("OAL script")]),t._v(".\n您可以根据脚本中的聚合函数以线性或热力学矩阵格式获得指标数据.")],1),t._v(" "),s("p",[t._v("3种类型的指标可以是查询")]),t._v(" "),s("ol",[t._m(6),t._v(" "),t._m(7),t._v(" "),s("li",[t._v("Heatmap value. 阅读 "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Heat_map",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heatmap in WIKI"),s("OutboundLink")],1),t._v(" 获取详细信息. "),s("code",[t._v("thermodynamic")]),t._v(" 仅仅是 OAL 的一个函数. 使用 "),s("code",[t._v("getThermodynamic")]),t._v(" 获取值.")])]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("聚集查询意味着指标数据在查询阶段需要二次聚集，这使得查询接口具有一些不同的参数.\n例如，“TopN”服务列表是一个非常典型的聚合查询，metrics流聚合只计算每个服务的metrics值，但是预期的列表需要按这些值排序metrics数据.")]),t._v(" "),s("p",[t._v("聚合查询只适用于单个值指标.")]),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[t._v("以下查询针对特定功能，包括跟踪、警报或配置文件.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("Duration 是一种广泛使用的参数类型，因为 APM 数据与时间有关. 解释如下.\n步长与精度有关.")]),t._v(" "),t._m(17)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"查询协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询协议"}},[this._v("#")]),this._v(" 查询协议")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[this._v("#")]),this._v(" 元数据")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("extend "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getGlobalBrief")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterBrief\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标准服务相关元信息 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getAllServices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("searchServices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("keyword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("searchService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("serviceCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取所有浏览器类型的服务")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getAllBrowserServices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务实例查询")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getServiceInstances")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServiceInstance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 端点查询")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 考虑到有大量的端点,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必须使用端点所有者的服务id、关键字和限制过滤器来进行查询.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("searchEndpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("keyword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("limit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Endpoint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getEndpointInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("endpointId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EndpointInfo\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库相关元信息.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getAllDatabases")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Database"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getTimeInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TimeInfo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"拓扑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓扑"}},[this._v("#")]),this._v(" 拓扑")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("extend "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询全局拓扑")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getGlobalTopology")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Topology\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于给定服务查询拓扑")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getServiceTopology")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Topology\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于给定客户端服务 ID 和服务端服务 ID 查询实例拓扑")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getServiceInstanceTopology")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("clientServiceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("serverServiceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServiceInstanceTopology\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于给定端点查询拓扑")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getEndpointTopology")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("endpointId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Topology\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指标"}},[this._v("#")]),this._v(" 指标")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("单一值. 大多数默认指标的类型是单一值，将其视为默认值. "),a("code",[this._v("getValues")]),this._v(" 和 "),a("code",[this._v("getLinearIntValues")]),this._v(" 适合此类型.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("多值. OAL中定义的一个指标包括多个值计算. 使用 "),a("code",[this._v("getMultipleLinearIntValues")]),this._v(" 获取所有值. "),a("code",[this._v("percentile")]),this._v(" 是 OAL 中一个典型的多值函数.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[t._v("extend "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("metric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BatchMetricConditions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IntValues\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getLinearIntValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("metric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricCondition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IntValues\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询包含多个值的指标类型，并将它们格式化为多个线性值.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这些多个值的序列是在 OAL 计算函数的基础上确定的")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如，我们是否应该查询OAL中func百分位数(50、75、90、95、99)的结果，")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后5行被响应，p50是返回值的第一个元素。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getMultipleLinearIntValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("metric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricCondition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("numOfLinear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IntValues"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getThermodynamic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("metric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricCondition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Thermodynamic\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("指标定义在 "),a("code",[this._v("config/oal/*.oal")]),this._v(" 文件中.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"聚合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合"}},[this._v("#")]),this._v(" 聚合")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 聚合查询与指标查询不同.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有聚合查询都需要查询时在后端或存储进行聚合.")]),t._v("\nextend "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TopN是一个聚合查询.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getServiceTopN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("topN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Order"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TopNEntity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getAllServiceInstanceTopN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("topN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Order"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TopNEntity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getServiceInstanceTopN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("topN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Order"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TopNEntity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getAllEndpointTopN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("topN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Order"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TopNEntity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getEndpointTopN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("topN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Order"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TopNEntity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[this._v("#")]),this._v(" 其它")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("追踪. 分布式追踪查询.")]),this._v(" "),a("li",[this._v("告警. 通过告警查询，可以了解告警趋势和详细信息.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("可以在以下文件找到实际的 GraphQL 查询脚本 "),a("code",[this._v("query-protocol")]),this._v(" 文件为 "),a("a",{attrs:{href:"../../../oap-server/server-query-plugin/query-graphql-plugin/src/main/resources"}},[this._v("here")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件"}},[this._v("#")]),this._v(" 条件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[this._v("#")]),this._v(" Duration")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Duration 定义了每个查询操作的开始和结束时间.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Fields: `start` and `end`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   表示时间跨度. 每一个都符合这个步骤.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   ref https://www.ietf.org/rfc/rfc3339.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   时间格式如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       `SECOND` step: yyyy-MM-dd HHmmss")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       `MINUTE` step: yyyy-MM-dd HHmm")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       `HOUR` step: yyyy-MM-dd HH")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       `DAY` step: yyyy-MM-dd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       `MONTH` step: yyyy-MM")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Field: `step`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   表示精确的时间点.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# e.g.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   if step==HOUR , start=2017-11-08 09, end=2017-11-08 19")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   then")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       指标取自以下时间点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       2017-11-08 9:00 -> 2017-11-08 19:00")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       在时间跨度中有11个时间点(小时).")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("input")]),t._v(" Duration "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("step")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Step"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MONTH")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DAY")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HOUR")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MINUTE")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECOND")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);