var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,o=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,r=(e,r)=>{for(var i in r||(r={}))l.call(r,i)&&o(e,i,r[i]);if(a)for(var i of a(r))t.call(r,i)&&o(e,i,r[i]);return e};import{m as i,n as u,q as n,B as d,s,F as b,C as p,v as c,a as f,x as m,P as v,D as h,y as g,z as V,I as y,N as w,A as x,R as _,E as k,G as z,S as j,H as O,J as S,K as $,L as M,M as N,O as P,Q as T}from"./json.worker.c27b3646.js";const W=(e,l)=>{const a=l.split("."),t=a.length>1;return{prop:a.pop(),propObj:a.reduce(((e,l)=>{var a;return null!=(a=e[l])?a:e[l]={}}),e),isDotProp:t}};function R({component:e,left:l,top:a}){return e._vid=`${e._vid}`.startsWith("vid_")?e._vid:`vid_${e._vid}`,{top:a,left:l,_vid:e._vid,moduleName:e.moduleName,componentKey:e.key,label:e.label,adjustPosition:!0,focus:!1,zIndex:0,width:0,height:0,hasResize:!1,props:Object.keys(e.props||{}).reduce(((l,a)=>{var t,o;const{propObj:r,prop:i}=W(l,a);return(null==(t=e.props[a])?void 0:t.defaultValue)&&(r[i]=l[a]=null==(o=e.props[a])?void 0:o.defaultValue),l}),{}),model:{}}}let q;var C;function U({label:e,defaultValue:l,tips:a}){return{type:q.switch,label:e,tips:a,defaultValue:l}}function I({label:e,defaultValue:l,tips:a}){return{type:q.input,label:e,tips:a,defaultValue:l}}function D({label:e,defaultValue:l,tips:a}){return{type:q.inputNumber,label:e,tips:a,defaultValue:l}}function H(e,l){return{type:q.color,label:e,defaultValue:l}}function K({label:e,options:l,defaultValue:a,tips:t}){return{type:q.select,label:e,defaultValue:a,tips:t,options:l}}function Y({label:e,option:l,defaultValue:a}){return{type:q.table,label:e,table:l,defaultValue:a}}(C=q||(q={})).input="input",C.inputNumber="InputNumber",C.color="color",C.select="select",C.table="table",C.switch="switch";const E=()=>{const e=i().appContext.config.globalProperties;return{globalProperties:e,registerRef:(l,a)=>l&&(e.$$refs[a]=l)}};var B={key:"button",moduleName:"baseWidgets",label:"按钮",preview:()=>u(d,{type:"primary"},{default:()=>[s("按钮")]}),render:({props:e,block:l,size:a})=>{const{registerRef:t}=E();return u(d,n({ref:e=>t(e,l._vid),style:{height:a.height?`${a.height}px`:null,width:a.width?`${a.width}px`:null}},e),null)},resize:{height:!0,width:!0},props:{text:I({label:"按钮文字",defaultValue:"按钮"}),type:K({label:"按钮类型",options:[{label:"主要按钮",val:"primary"},{label:"成功按钮",val:"success"},{label:"默认按钮",val:"default"},{label:"警告按钮",val:"warning"},{label:"危险按钮",val:"danger"}],defaultValue:"default"}),size:K({label:"按钮尺寸",options:[{label:"大型",val:"large"},{label:"普通",val:"normal"},{label:"小型",val:"small"},{label:"迷你",val:"mini"}],defaultValue:"normal"}),"native-type":K({label:"原生button的type属性",options:[{label:"普通button",val:"button"},{label:"表单提交按钮",val:"submit"}],defaultValue:"button"}),to:I({label:"路由跳转"}),url:I({label:"跳转链接"}),plain:U({label:"是否为朴素按钮"}),replace:U({label:"是否在跳转时替换当前页面历史"}),round:U({label:"是否为圆形按钮"}),square:U({label:"是否为方形按钮"}),block:U({label:"是否为块级元素",defaultValue:!1}),color:I({label:"按钮颜色",tips:"按钮颜色，支持传入 linear-gradient 渐变色"}),disabled:U({label:"是否禁用按钮"}),hairline:U({label:"是否使用 0.5px 边框"}),icon:I({label:"左侧图标名称或图片链接"}),"icon-position":K({label:"图标展示位置",options:[{label:"左侧",val:"left"},{label:"右侧",val:"right"}]}),"icon-prefix":I({label:"图标类名前缀",tips:"图标类名前缀，同 Icon 组件的 class-prefix 属性"}),loading:U({label:"是否显示为加载状态"}),"loading-size":I({label:"加载图标大小"}),"loading-text":I({label:"加载状态提示文字"}),"loading-type":K({label:"加载图标类型",options:[{label:"circular",val:"circular"},{label:"spinner",val:"spinner"}],defaultValue:"circular"})}},A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});var F={key:"checkbox",moduleName:"baseWidgets",label:"表单项类型 - 复选框",preview:()=>u(c,{modelValue:["1"],direction:"horizontal"},{default:()=>[u(p,{name:"1",shape:"square"},{default:()=>[s("one")]}),u(p,{name:"2",shape:"square"},{default:()=>[s("two")]})]}),render:({size:e,block:l,props:a})=>{const{registerRef:t}=E();return u(b,n(a,{modelValue:"",style:{width:e.width?`${e.width}px`:null}}),{input:()=>u(c,n({ref:e=>t(e,l._vid)},a,{modelValue:a.modelValue,"onUpdate:modelValue":e=>a.modelValue=e}),{default:()=>{var e;return[null==(e=a.options)?void 0:e.map((e=>u(p,{name:e.value,style:{marginBottom:"5px"},shape:"square"},{default:()=>[e.label]})))]}})})},props:r({modelValue:I({label:"默认值",defaultValue:[]}),name:I({label:"名称，提交表单的标识符",defaultValue:"checkbox"}),label:I({label:"输入框左侧文本",defaultValue:"复选框"}),options:Y({label:"默认选项",option:{options:[{label:"显示值",field:"label"},{label:"绑定值",field:"value"},{label:"备注",field:"comments"}],showKey:"label"},defaultValue:[{label:"萝卜",value:"radish"},{label:"青菜",value:"greens"}]}),direction:K({label:"排列方向",options:[{label:"水平",val:"horizontal"},{label:"垂直",val:"vertical"}],defaultValue:"horizontal"})},{colon:U({label:"是否在 label 后面添加冒号"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),border:U({label:"是否显示内边框",defaultValue:!0}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),rules:I({label:"表单校验规则"})}),resize:{width:!0},model:{default:"绑定字段"}},L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const G=Object.prototype.toString;function J(e){return function(e,l){return G.call(e)===`[object ${l}]`}(e,"Date")}function Q(e){return"function"==typeof e}var X={key:"datetimePicker",moduleName:"baseWidgets",label:"表单项类型 - 选择器",preview:()=>u(b,{name:"datetimePicker",label:"时间选择器",placeholder:"点击选择"},null),render:({size:e,block:l,props:a})=>{const{registerRef:t}=E(),o=f({showPicker:!1,text:""}),r=e=>{const l=J(e)?g(e).format(a.format):e;a.modelValue=l,o.text=l,o.showPicker=!1,console.log(a)};return u(m,null,[u((()=>u(m,null,[u(b,n({modelValue:a.modelValue,"onUpdate:modelValue":e=>a.modelValue=e},a,{readonly:!0,clickable:!0,onClick:()=>o.showPicker=!0,style:{width:e.width?`${e.width}px`:null}}),{input:()=>{var e;return""==(null==(e=o.text)?void 0:e.trim())?u("span",{class:"placeholder"},[a.placeholder]):o.text}}),u(v,{show:o.showPicker,showModifiers:{modifier:!0},"onUpdate:show":e=>o.showPicker=e,position:"bottom"},{default:()=>[u(h,n({ref:e=>t(e,l._vid)},a,{onConfirm:r,onCancel:()=>o.showPicker=!1}),null)]})])),null,null)])},props:r({modelValue:I({label:"默认值"}),name:I({label:"名称，提交表单的标识符",defaultValue:"datetimePicker"}),label:I({label:"输入框左侧文本",defaultValue:"时间选择器"}),title:I({label:"顶部栏标题",defaultValue:"选择时间"}),type:K({label:"时间类型",options:[{label:"date",val:"date"},{label:"time",val:"time"},{label:"year-month",val:"year-month"},{label:"month-day",val:"month-day"},{label:"datehour",val:"datehour"}],defaultValue:"time"}),format:I({label:"选择时间后格式化值",tips:"YYYY-MM-DD HH:mm:ss",defaultValue:"YYYY-MM-DD HH:mm:ss"}),cancelButtonText:I({label:"取消按钮文字"}),columnsOrder:I({label:"自定义列排序数组",tips:"可选值为：year、month、day、hour、minute，传多个值以英文逗号隔开"}),confirmButtonText:I({label:"确认按钮文字"}),filter:I({label:"选项过滤函数"}),formatter:I({label:"选项格式化函数"}),itemHeight:I({label:"选项高度",tips:"支持 px vw vh rem 单位，默认 px"}),loading:U({label:"是否显示加载状态"}),showToolbar:U({label:"是否显示顶部栏"}),swipeDuration:I({label:"快速滑动时惯性滚动的时长，单位ms"}),visibleItemCount:D({label:"可见的选项个数"}),placeholder:I({label:"占位符",defaultValue:"请选择"})},{colon:U({label:"是否在 label 后面添加冒号"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),border:U({label:"是否显示内边框",defaultValue:!0}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),rules:I({label:"表单校验规则"})}),resize:{width:!0},model:{default:"绑定字段"}},Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X}),ee={key:"divider",moduleName:"baseWidgets",label:"分割线",preview:()=>u(V,{style:"width:190px"},{default:()=>[s("文本")]}),render:({props:e})=>{const l=`color:${e["text-color"]};borderColor:${e["divider-color"]}`;return e.text?u(V,n(e,{style:l}),{default:()=>[e.text]}):u(V,n(e,{style:l}),null)},props:{text:I({label:"展示文本",defaultValue:"文本"}),"content-position":K({label:"文本位置",options:[{label:"左边",val:"left"},{label:"中间",val:"center"},{label:"右边",val:"right"}],defaultValue:"center"}),dashed:U({label:"是否为虚线"}),"text-color":H("文本颜色"),"divider-color":H("分割线颜色")}},le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee}),ae={key:"image",moduleName:"baseWidgets",label:"图片",resize:{width:!0,height:!0},preview:()=>u("div",{style:"text-align:center;"},[u("div",{style:"font-size:20px;background-color:#f2f2f2;color:#ccc;display:inline-flex;width:100px;height:50px;align-items:center;justify-content:center"},[u("i",{class:"el-icon-picture"},null)])]),render:({props:e})=>u(y,e,null),props:{src:I({label:"图片链接",defaultValue:"https://img.yzcdn.cn/vant/cat.jpeg"}),width:I({label:"宽度，默认单位为 px",defaultValue:100}),height:I({label:"高度，默认单位为 px",defaultValue:100}),"error-icon":I({label:"失败时提示的图标名称或图片链接"}),fit:K({label:"图片填充模式",options:[{label:"保持宽高缩放图片，使图片的长边能完全显示出来",val:"contain"},{label:"保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边",val:"cover"},{label:"拉伸图片，使图片填满元素",val:"fill"},{label:"保持图片原有尺寸",val:"none"},{label:"取 none 或 contain 中较小的一个",val:"scale-down"}],defaultValue:"fill"}),"icon-prefix":I({label:"图标类名前缀",tips:"图标类名前缀，同 Icon 组件的 class-prefix 属性"}),"icon-size":I({label:"加载图标和失败图标的大小"}),"lazy-load":U({label:"是否开启图片懒加载",tips:"须配合 Lazyload 组件使用"}),"loading-icon":I({label:"加载时提示的图标名称或图片链接"}),radius:I({label:"圆角大小",tips:"默认单位为 px"}),round:U({label:"是否显示为圆形"}),"show-error":U({label:"是否展示图片加载失败提示"}),"show-loading":U({label:"是否展示图片加载中提示"}),alt:I({label:"替代文本"})}},te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});var oe={key:"input",moduleName:"baseWidgets",label:"表单项类型 - 输入框",preview:()=>u(b,{name:"用户名",label:"用户名",labelWidth:50,colon:!0,placeholder:"请输入用户名"},null),render:({model:e,size:l,block:a,props:t,custom:o})=>{const{registerRef:r}=E();return u(b,n({ref:e=>r(e,a._vid)},o,t,e.default,{modelValue:t.modelValue,"onUpdate:modelValue":e=>t.modelValue=e,style:{width:l.width?`${l.width}px`:null}}),null)},props:{modelValue:I({label:"默认值",defaultValue:""}),name:I({label:"名称，提交表单的标识符",defaultValue:"input"}),label:I({label:"输入框左侧文本",defaultValue:"输入框"}),type:K({label:"输入框类型",options:[{label:"文本",val:"text"},{label:"数字",val:"number"},{label:"文本域",val:"textarea"},{label:"密码",val:"password"},{label:"电话",val:"tel"},{label:"小数点",val:"digit"}],defaultValue:"text"}),placeholder:I({label:"占位提示文字",defaultValue:"请输入"}),colon:U({label:"是否在 label 后面添加冒号"}),disabled:U({label:"是否禁用输入框"}),error:U({label:"是否将输入内容标红"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),"right-icon":I({label:"右侧图标名称或图片链接"}),rules:I({label:"表单校验规则"}),"left-icon":I({label:"左侧图标名称或图片链接"}),"arrow-direction":I({label:"箭头方向",defaultValue:"",tips:"箭头方向，可选值为 left up down"}),autosize:U({label:"自适应内容高度",defaultValue:!1,tips:"是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px"}),border:U({label:"是否显示内边框",defaultValue:!0}),center:U({label:"内容垂直居中"}),"clear-icon":I({label:"清除图标",tips:"清除图标名称或图片链接"}),"clear-trigger":K({label:"清除图标显示时机",options:[{label:"输入框不为空时展示",val:"always"},{label:"输入框聚焦且不为空时展示",val:"focus"}],defaultValue:"always",tips:"显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示"}),clearable:U({label:"是否启用清除图标",defaultValue:!1,tips:"是否启用清除图标，点击清除图标后会清空输入框"}),clickable:U({label:"是否开启点击反馈"}),"format-trigger":I({label:"格式化函数触发的时机"}),formatter:I({label:"输入内容格式化函数"}),"icon-prefix":I({label:"图标类名前缀",tips:"图标类名前缀，同 Icon 组件的 class-prefix 属性"}),"input-align":K({label:"输入框对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),"label-align":K({label:"左侧文本对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),"label-width":I({label:"左侧文本宽度"}),maxlength:I({label:"输入的最大字符数"}),"show-word-limit":U({label:"是否显示字数统计",tips:"需要设置 maxlength 属性"})},resize:{width:!0},model:{default:"绑定字段"}},re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe}),ie={key:"nav-bar",moduleName:"baseWidgets",label:"导航栏",preview:()=>u(w,{title:"标题","left-text":"返回","right-text":"按钮","left-arrow":!0,style:{width:"100%"}},null),render:({props:e,size:l,block:a,custom:t})=>{const{registerRef:o}=E();return u(w,n({ref:e=>o(e,a._vid),placeholder:!0},t,e,{style:{width:l.width?`${l.width}px`:null}}),null)},props:{title:I({label:"标题",defaultValue:"标题"}),fixed:U({label:"是否固定",defaultValue:!0}),placeholder:U({label:"是否生成占位元素",defaultValue:!0,tips:"固定在顶部时，是否在标签位置生成一个等高的占位元素"}),zIndex:I({label:"z-index"}),border:U({label:"是否显示下边框",defaultValue:!1}),leftText:I({label:"左侧文案",defaultValue:"返回"}),rightText:I({label:"右侧文案",defaultValue:"按钮"}),leftArrow:U({label:"是否显示左侧箭头",defaultValue:!0})},resize:{width:!0}},ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie});var ne={key:"picker",moduleName:"baseWidgets",label:"表单项类型 - 选择器",preview:()=>u(b,{name:"picker",label:"选择器",placeholder:"点击选择"},null),render:({size:e,block:l,props:a})=>{const{registerRef:t}=E(),o=f({showPicker:!1,text:""}),r={text:"label",value:"value"},i=e=>{a.modelValue=e.value,o.text=e[a.valueKey||"text"],o.showPicker=!1,console.log(a)};return u(m,null,[u((()=>u(m,null,[u(b,n({modelValue:a.modelValue,"onUpdate:modelValue":e=>a.modelValue=e},a,{readonly:!0,clickable:!0,onClick:()=>o.showPicker=!0,style:{width:e.width?`${e.width}px`:null}}),{input:()=>{var e;return""==(null==(e=o.text)?void 0:e.trim())?u("span",{class:"placeholder"},[a.placeholder]):o.text}}),u(v,{show:o.showPicker,showModifiers:{modifier:!0},"onUpdate:show":e=>o.showPicker=e,position:"bottom"},{default:()=>[u(x,n({ref:e=>t(e,l._vid)},a,{columnsFieldNames:r,onConfirm:i,onCancel:()=>o.showPicker=!1}),null)]})])),null,null)])},props:r({modelValue:I({label:"默认值"}),name:I({label:"名称，提交表单的标识符",defaultValue:"picker"}),label:I({label:"输入框左侧文本",defaultValue:"选择器"}),columns:Y({label:"数据项",option:{options:[{label:"显示值",field:"label"},{label:"绑定值",field:"value"},{label:"备注",field:"comments"}],showKey:"label"},defaultValue:[{label:"杭州",value:"hangzhou"},{label:"上海",value:"shanghai"}]}),valueKey:I({label:"选项对象的键名",defaultValue:"label"}),placeholder:I({label:"占位符",defaultValue:"请选择"})},{colon:U({label:"是否在 label 后面添加冒号"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),border:U({label:"是否显示内边框",defaultValue:!0}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),rules:I({label:"表单校验规则"})}),resize:{width:!0},model:{default:"绑定字段"}},de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ne});var se={key:"radio",moduleName:"baseWidgets",label:"表单项类型 - 单选框",preview:()=>u(k,{modelValue:"1",direction:"horizontal"},{default:()=>[u(_,{name:"1"},{default:()=>[s("one")]}),u(_,{name:"2"},{default:()=>[s("two")]})]}),render:({size:e,block:l,props:a})=>{const{registerRef:t}=E();return u(b,n(a,{modelValue:"",style:{width:e.width?`${e.width}px`:null}}),{input:()=>u(k,n({ref:e=>t(e,l._vid)},a,{modelValue:a.modelValue,"onUpdate:modelValue":e=>a.modelValue=e}),{default:()=>{var e;return[null==(e=a.options)?void 0:e.map((e=>u(_,{name:e.value,style:{marginBottom:"5px"}},{default:()=>[e.label]})))]}})})},props:r({modelValue:I({label:"默认值",defaultValue:""}),name:I({label:"名称，提交表单的标识符",defaultValue:"radio"}),label:I({label:"输入框左侧文本",defaultValue:"单选框"}),options:Y({label:"默认选项",option:{options:[{label:"显示值",field:"label"},{label:"绑定值",field:"value"},{label:"备注",field:"comments"}],showKey:"label"},defaultValue:[{label:"萝卜",value:"radish"},{label:"青菜",value:"greens"}]}),direction:K({label:"排列方向",options:[{label:"水平",val:"horizontal"},{label:"垂直",val:"vertical"}],defaultValue:"horizontal"})},{colon:U({label:"是否在 label 后面添加冒号"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),border:U({label:"是否显示内边框",defaultValue:!0}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),rules:I({label:"表单校验规则"})}),resize:{width:!0},model:{default:"绑定字段"}},be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});var pe={key:"rate",moduleName:"baseWidgets",label:"表单项类型 - 单选框",preview:()=>u(b,{name:"rate",label:"评分",labelWidth:50},{input:()=>u(z,{modelValue:3},null)}),render:({size:e,block:l,props:a})=>{const{registerRef:t}=E();return u(b,n(a,{modelValue:"",style:{width:e.width?`${e.width}px`:null}}),{input:()=>u(z,n({ref:e=>t(e,l._vid)},a,{modelValue:a.modelValue,"onUpdate:modelValue":e=>a.modelValue=e}),null)})},props:r({modelValue:D({label:"默认值",defaultValue:0}),name:I({label:"名称，提交表单的标识符",defaultValue:"rate"}),label:I({label:"输入框左侧文本",defaultValue:"评分"}),count:D({label:"图标总数"}),size:I({label:"图标大小"}),"allow-half":U({label:"是否允许半选"})},{colon:U({label:"是否在 label 后面添加冒号"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),border:U({label:"是否显示内边框",defaultValue:!0}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),rules:I({label:"表单校验规则"})}),resize:{width:!0},model:{default:"绑定字段"}},ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});var fe={key:"slider",moduleName:"baseWidgets",label:"表单项类型 - 滑块",preview:()=>u(b,{name:"rate",label:"滑块",labelWidth:50},{input:()=>u(j,{modelValue:3},null)}),render:({size:e,block:l,props:a})=>{const{registerRef:t}=E();return u(b,n(a,{modelValue:"",style:{width:e.width?`${e.width}px`:null}}),{input:()=>u(j,n({ref:e=>t(e,l._vid)},a,{modelValue:a.modelValue,"onUpdate:modelValue":e=>a.modelValue=e}),null)})},props:r({modelValue:D({label:"默认值",defaultValue:0}),name:I({label:"名称，提交表单的标识符",defaultValue:"slider"}),label:I({label:"输入框左侧文本",defaultValue:"滑块"}),min:D({label:"最小值"}),max:D({label:"最大值"}),size:D({label:"图标大小"}),range:U({label:"是否开启双滑块模式"})},{colon:U({label:"是否在 label 后面添加冒号"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),border:U({label:"是否显示内边框",defaultValue:!0}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),rules:I({label:"表单校验规则"})}),resize:{width:!0},model:{default:"绑定字段"}},me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe});var ve={key:"stepper",moduleName:"baseWidgets",label:"表单项类型 - 单选框",preview:()=>u(b,{name:"stepper",label:"步进器",labelWidth:50},{input:()=>u(O,{modelValue:3},null)}),render:({size:e,block:l,props:a})=>{const{registerRef:t}=E();return u(b,n(a,{modelValue:"",style:{width:e.width?`${e.width}px`:null}}),{input:()=>u(O,n({ref:e=>t(e,l._vid)},a,{modelValue:a.modelValue,"onUpdate:modelValue":e=>a.modelValue=e}),null)})},props:r({modelValue:D({label:"默认值",defaultValue:0}),name:I({label:"名称，提交表单的标识符",defaultValue:"stepper"}),label:I({label:"输入框左侧文本",defaultValue:"步进器"}),min:D({label:"最小值"}),max:D({label:"最大值"})},{colon:U({label:"是否在 label 后面添加冒号"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),border:U({label:"是否显示内边框",defaultValue:!0}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),rules:I({label:"表单校验规则"})}),resize:{width:!0},model:{default:"绑定字段"}},he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve});var ge={key:"switch",moduleName:"baseWidgets",label:"表单项类型 - 开关",preview:()=>u(b,{name:"switch",label:"开关"},{input:()=>u(S,{size:20},null)}),render:({size:e,block:l,props:a})=>{const{registerRef:t}=E();return u(b,n(a,{style:{width:e.width?`${e.width}px`:null}}),{input:()=>u(S,n({ref:e=>t(e,l._vid)},a,{modelValue:a.modelValue,"onUpdate:modelValue":e=>a.modelValue=e,size:20}),null)})},props:r({modelValue:I({label:"默认值",defaultValue:"false"}),name:I({label:"名称，提交表单的标识符",defaultValue:"switch"}),label:I({label:"输入框左侧文本",defaultValue:"开关"}),"active-color":I({label:"打开时的背景色"}),"active-value":I({label:"打开时对应的值"}),disabled:U({label:"是否为禁用状态"}),"inactive-color":I({label:"关闭时的背景色"}),"inactive-value":I({label:"关闭时对应的值"}),loading:U({label:"是否为加载状态"}),size:I({label:"开关尺寸"})},{colon:U({label:"是否在 label 后面添加冒号"}),"error-message":I({label:"底部错误提示文案"}),"error-message-align":K({label:"错误提示文案对齐方式",options:[{label:"左对齐",val:"left"},{label:"居中",val:"center"},{label:"右对齐",val:"right"}],defaultValue:"left"}),border:U({label:"是否显示内边框",defaultValue:!0}),readonly:U({label:"是否为只读状态"}),required:U({label:"是否显示表单必填星号"}),rules:I({label:"表单校验规则"})}),resize:{width:!0},model:{default:"绑定字段"}},Ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge}),ye={key:"text",moduleName:"baseWidgets",label:"文本",preview:()=>u("span",null,[s("预览文本")]),render:({props:e})=>u("span",{style:{color:e.color,fontSize:e.size}},[e.text||"默认文本"]),props:{text:I({label:"显示文本"}),color:H("字体颜色"),size:K({label:"字体大小",options:[{label:"14px",val:"14px"},{label:"18px",val:"18px"},{label:"24px",val:"24px"}]})}};const we={"./button/index.tsx":A,"./checkbox/index.tsx":L,"./datetimePicker/index.tsx":Z,"./divider/index.tsx":le,"./image/index.tsx":te,"./input/index.tsx":re,"./nav-bar/index.tsx":ue,"./picker/index.tsx":de,"./radio/index.tsx":be,"./rate/index.tsx":ce,"./slider/index.tsx":me,"./stepper/index.tsx":he,"./switch/index.tsx":Ve,"./text/index.tsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye})},xe={};Object.keys(we).forEach((e=>{var l;const a=e.replace(/\.\/(.*)\/index\.(tsx|vue)/,"$1");xe[a]=(null==(l=we[e])?void 0:l.default)||we[e]})),console.log(xe,"base-widgets");var _e={key:"form",moduleName:"containerComponents",label:"表单容器",preview:()=>u(N,null,{default:()=>[u(b,{name:"用户名",label:"用户名",placeholder:"用户名"},null),u(b,{type:"password",name:"密码",label:"密码",placeholder:"密码"},null),u("div",{style:"margin: 16px;"},[u(d,{round:!0,size:"small",block:!0,type:"primary"},{default:()=>[s("提交")]})])]}),render:function({props:e,custom:l,block:a}){let t;const{slots:o}=i(),{registerRef:r}=E();return u(N,n({ref:e=>r(e,a._vid)},l,e,{onSubmit:e=>{console.log("onSubmit:",e)}}),"function"==typeof(d=t=$(o,"default"))||"[object Object]"===Object.prototype.toString.call(d)&&!M(d)?t:{default:()=>[t]});var d},resize:{height:!0,width:!0},props:{"slots.default.children":Y({label:"表单项",option:{options:[{label:"显示值",field:"label"},{label:"绑定值",field:"value"},{label:"备注",field:"comments"}],showKey:"label"},defaultValue:[]})}},ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e});var ze="_van-row_16vqw_9";const je={},Oe=e=>e.split(":").reduce(((e,l,a)=>(e[`slot${a}`]={key:`slot${a}`,span:l,children:[]},e)),{value:e});var Se={key:"layout",moduleName:"containerComponents",label:"布局容器",preview:()=>u(T,{gutter:"20"},{default:()=>[u(P,{span:"8"},{default:()=>[s("span: 8")]}),u(P,{span:"8"},{default:()=>[s("span: 8")]}),u(P,{span:"8"},{default:()=>[s("span: 8")]})]}),render:function({props:e,size:l,block:a,custom:t}){var o;const{slots:r}=i(),{registerRef:d}=E();null!=je[o=a._vid]||(je[o]={}),Object.keys(e.slots||{}).length&&Object.keys(e.slots).forEach((l=>{var t;(null==(t=je[a._vid][l])?void 0:t.children)&&(e.slots[l].children=je[a._vid][l].children)}));return u((()=>u(T,n({ref:e=>d(e,a._vid)},t,e,{style:{height:l.height?`${l.height}px`:null,width:l.width?`${l.width}px`:null},class:ze}),{default:()=>{var l;return[null==(l=Object.values(Object.keys(e.slots).length?e.slots:Oe("12:12")))?void 0:l.filter((e=>"string"!=typeof e)).map(((e,l)=>{let t;return je[a._vid][`slot${l}`]=e,u(m,null,[u(P,{span:e.span},(o=t=$(r,`slot${l}`),"function"==typeof o||"[object Object]"===Object.prototype.toString.call(o)&&!M(o)?t:{default:()=>[t]}))]);var o}))]}})),null,null)},resize:{height:!0,width:!0},props:{gutter:I({label:"列间隔"}),slots:K({label:"列比例",options:[{label:"24",val:Oe("24")},{label:"12:12",val:Oe("12:12")},{label:"6:18",val:Oe("6:18")},{label:"18:6",val:Oe("18:6")},{label:"8:8:8",val:Oe("8:8:8")},{label:"6:12:6",val:Oe("6:12:6")},{label:"6:6:6:6",val:Oe("6:6:6:6")}],defaultValue:Oe("12:12")}),justify:K({label:"主轴对齐方式",options:[{label:"左对齐",val:"start"},{label:"居中排列",val:"center"},{label:"均匀对齐",val:"space-around"},{label:"两端对齐",val:"space-between"},{label:"右对齐",val:"end"}]}),align:K({label:"交叉轴对齐方式",options:[{label:"顶部对齐",val:"top"},{label:"垂直居中",val:"center"},{label:"底部对齐",val:"bottom"}]})}};const $e={"./form/index.tsx":ke,"./layout/index.tsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Se})},Me={};Object.keys($e).forEach((e=>{var l;const a=e.replace(/\.\/(.*)\/index\.(tsx|vue)/,"$1");Me[a]=(null==(l=$e[e])?void 0:l.default)||$e[e]})),console.log(Me,"base-widgets");const Ne=function(){const e={baseWidgets:[],containerComponents:[]},l={};return{componentModules:e,componentMap:l,registry:(a,t,o)=>{const i=r(r({},o),{key:t,moduleName:a});e[a].push(i),l[t]=i}}}();Object.keys(xe).forEach((e=>Ne.registry("baseWidgets",e,xe[e]))),Object.keys(Me).forEach((e=>Ne.registry("containerComponents",e,Me[e]))),console.log("visualConfig:",Ne);export{q as V,E as a,R as c,Q as i,W as u,Ne as v};
