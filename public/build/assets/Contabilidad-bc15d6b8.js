import{h as i,l as p,e as v,o as l,d as n,w as x,b as a,k as y,m as b,u as s,p as g,c as h,q as w,t as k,F as D,s as B}from"./app-3beeeaef.js";import{_ as A}from"./AdminLayout-1544aa8e.js";import C from"./Index-2081779a.js";import I from"./Index-d6ab506c.js";import S from"./Index-96bdde1e.js";import T from"./Index-01b98b1f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./permissions-33cf8f44.js";import"./config-d6fbb0e2.js";import"./vue3-datepicker-d0203c5a.js";const $={class:"flex flex-col h-screen"},j={class:"bg-gray-300 p-4 shadow-md flex items-center justify-between fixed top-0 left-0 w-full z-10"},M={class:"flex flex-col items-start w-full"},V=a("label",{for:"opciones",class:"text-gray-700 font-bold mb-2"},"Selecciona una opción:",-1),F=a("option",{value:""},"Selecciona una opción",-1),L=["value"],N={class:"pt-10"},U={class:"flex justify-center mt-8"},q={class:"w-full max-w-lg"},X={__name:"Contabilidad",props:{transacciones:Array,transaccionesdetail:Array,utilidades:Array,plataformas:Array},setup(f){let r=i([]),c=i([]),d=i([]),u=i([]);const e=f,_=[{value:"1",text:"Tabla Transacciones"},{value:"2",text:"Tabla Detalle Transacciones"},{value:"3",text:"Detalle Utilidades"},{value:"4",text:"Lista Plataformas"}];let t=i("");return p(()=>{e.transacciones&&e.transaccionesdetail&&e.utilidades&&e.plataformas?(r=e.transacciones,c=e.transaccionesdetail,d=e.utilidades,u=e.plataformas):console.log("mensaje de error de envio de data desde inertia")}),v(()=>{console.log("Datos recibidos desde Inertia transacciones:",e.transacciones),console.log("Datos recibidos desde Inertia transaccionesdetail:",e.transaccionesdetail),console.log("Datos recibidos desde Inertia utilidades:",e.utilidades),console.log("Datos recibidos desde Inertia plataformas:",e.plataformas)}),(z,m)=>(l(),n(A,null,{default:x(()=>[a("div",$,[a("div",j,[a("div",M,[V,y(a("select",{"onUpdate:modelValue":m[0]||(m[0]=o=>g(t)?t.value=o:t=o),id:"opciones",class:"border border-gray-300 p-2 w-full"},[F,(l(),h(D,null,w(_,o=>a("option",{value:o.value,key:o.value},k(o.text),9,L)),64))],512),[[b,s(t)]])])]),a("div",N,[a("div",U,[a("div",q,[s(t)==="1"?(l(),n(S,{key:0,datos:s(r)},null,8,["datos"])):s(t)==="2"?(l(),n(I,{key:1,datos:s(c)},null,8,["datos"])):s(t)==="3"?(l(),n(C,{key:2,datos:s(d)},null,8,["datos"])):s(t)==="4"?(l(),n(T,{key:3,datos:s(u)},null,8,["datos"])):B("",!0)])])])])]),_:1}))}};export{X as default};
