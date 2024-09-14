import{h as a,l as J,e as K,o as B,c as I,b as e,s as Q,j as C,a as p,u as g,w as X,k as d,v as D,t as i,z as j,A as u,F as Z,B as ee}from"./app-3beeeaef.js";import{P as m,D as v,S as te,c as oe,s as x,a as O}from"./config-d6fbb0e2.js";import{L as M}from"./vue3-datepicker-d0203c5a.js";const se={className:"flex justify-center"},ae={className:"w-full"},le={className:"bg-blue-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},re={className:"flex justify-around items-center"},ne=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),de=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),ie=e("i",{className:"fa-solid fa-circle-plus mx-1"},null,-1),ue={class:"flex justify-center"},ce={class:"w-full"},me={class:"bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},fe={class:"flex justify-between items-center"},be=e("label",{for:"datepicker",class:"block text-sm font-medium text-gray-700 mr-3"},"Selecciona una fecha",-1),pe={class:"flex items-center"},ge=e("button",{type:"button",class:"ml-2 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300"}," Botón ",-1),ve={class:"flex justify-center"},xe={class:"w-full"},he={class:"bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative",role:"alert"},ye={class:"flex justify-between items-center"},_e=e("label",{for:"startDate",class:"block text-sm font-medium text-gray-700 mr-3"},"Desde",-1),we=e("label",{for:"endDate",class:"block text-sm font-medium text-gray-700 ml-4 mr-3"},"Hasta",-1),ke={className:"border px-5 py-5  border-primary-400 rounded-md   mb-3"},Ne={className:"md:col-span-12 lg:col-span-12 col-span-12"},Ce={class:"overflow-x-auto"},De=e("thead",null,[e("tr",null,[e("th",{class:"px-4 py-2"},"Id"),e("th",{class:"px-4 py-2"},"Plataforma"),e("th",{class:"px-4 py-2"},"Codigo de Sede")])],-1),je={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},Me={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto"},Re={class:"flex items-center justify-between p-4 border-b"},Se={class:"text-xl font-semibold text-gray-900"},Ae=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Ve=e("span",{class:"sr-only"},"Cerrar Modal",-1),Ee=[Ae,Ve],Te={class:"p-4 space-y-4 overflow-y-auto"},Be={className:"my-2"},Ie={className:"text-xl font-thin mb-4"},Oe={className:"mb-4"},Pe=e("label",{for:"plataforma",className:"block mb-1"},"PLATAFORMA",-1),Ue=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),$e={className:"mb-4"},Fe=e("label",{for:"plataforma",className:"block mb-1"},"CODIGO SEDE",-1),ze=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),Le={className:"mb-4"},Ge=e("label",{for:"plataforma",className:"block mb-1"},"CODIGO PLATAFORMA",-1),qe=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),He={class:"flex items-center justify-end p-4 border-t"},We=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Aceptar",-1),Ye={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},Je={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto"},Ke={class:"flex items-center justify-between p-4 border-b"},Qe={class:"text-xl font-semibold text-gray-900"},Xe=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Ze=e("span",{class:"sr-only"},"Cerrar Modal",-1),et=[Xe,Ze],tt={class:"p-4 space-y-4 overflow-y-auto"},ot={className:"my-2"},st={className:"text-xl font-thin mb-4"},at={className:"mb-4"},lt=e("label",{for:"plataforma",className:"block mb-1"},"PLATAFORMA",-1),rt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),nt={className:"mb-4"},dt=e("label",{for:"plataforma",className:"block mb-1"},"CODIGO SEDE",-1),it=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),ut={className:"mb-4"},ct=e("label",{for:"plataforma",className:"block mb-1"},"CODIGO PLATAFORMA",-1),mt=e("p",{className:"text-sm text-gray-500 mt-1"},"Ingrese el nombre de la plataforma.",-1),ft={class:"flex items-center justify-end p-4 border-t"},bt=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Aceptar",-1),pt={id:"default-modal",class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"},gt={class:"bg-white rounded-lg shadow-lg max-w-md w-full h-screen-70 overflow-y-auto"},vt={class:"flex items-center justify-between p-4 border-b"},xt={class:"text-xl font-semibold text-gray-900"},ht=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),yt=e("span",{class:"sr-only"},"Cerrar Modal",-1),_t=[ht,yt],wt={class:"p-4 space-y-4 overflow-y-auto"},kt={class:"my-2"},Nt={class:"text-xl font-thin mb-4"},Ct=e("div",{class:"mb-4"},[e("label",{for:"documento",class:"block text-sm font-medium text-gray-700"},"Subir documento"),e("input",{type:"file",id:"documento",name:"documento",class:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})],-1),Dt={class:"flex items-center justify-end p-4 border-t"},jt=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"},"Subir Documento",-1),At={__name:"Index",props:{datos:Array},setup(R){m.use(v),m.use(v);const P=R,n=a(),S=a([]),A=a([]),U=a([]);a(!1);const c=a(!1),h=a(""),f=a(!1),y=a(""),_=a(!1),w=a(""),V=a(new Date),k=a(new Date),N=a(new Date),b=a(!1),$=s=>{w.value=s,b.value=!0,console.log("mensjae de exito")};J(()=>{U.value=P.datos}),K(()=>{n.value.dt.on("deselect",G),n.value.dt.on("deselect",E)});const r=a({id:"",plataforma:"",codigo_sede:"",codigo_plataforma:""}),l=a({id:"",plataforma:"",codigo_sede:"",codigo_plataforma:""});m.use(v),m.use(v),S.value=[{data:null,render:function(s,t,o,T){return T.row+1}},{data:"plataforma"},{data:"codigo_sede"}],A.value=[{title:"Plataforma",extend:"excelHtml5",text:'<i class="fa-solid fa-file-excel"></i> Excel',className:"bg-green-500 text-white px-4 py-2 rounded my-2 hover:bg-green-600 focus:outline-none"},{title:"Plataforma",extend:"print",text:'<i class="fa-solid fa-print"></i> PRINT',className:"bg-gray-800 text-white px-4 py-2 rounded my-2 hover:bg-gray-900 focus:outline-none"},{title:"Plataforma",extend:"copy",text:'<i class="fa-solid fa-copy"></i> COPY',className:"bg-gray-400 text-white px-4 py-2 rounded my-2 hover:bg-gray-500 focus:outline-none"}];const F=()=>{const s=n.value.dt.rows({selected:!0}).data().toArray();if(s.length>0){const t=s[0].id,o=s[0].plataforma;te.mixin({buttonStyling:!0}).fire({title:"¿Está seguro de querer borrar el registro "+o+":"+t+"?",icon:"question",showCancelButton:!0,confirmButtonText:'<i class="fa fa-solid fa-check"></i> Sí, borrar',cancelButtonText:'<i class="fa fa-solid fa-times"></i> Cancelar'}).then(Y=>{Y.isConfirmed&&oe(o,"https://reportes.kingtech.pe/platforms"+t,"")})}else x("Debe seleccionar una fila antes de poder borrarla","error")},z=s=>{h.value=s,c.value=!0,console.log("mensjae de exito")},L=s=>{if(n.value.dt.rows({selected:!0}).count()===0){x("Debe seleccionar una fila antes de editar","error");return}const o=n.value.dt.rows({selected:!0}).data().toArray()[0];if(!o){x("No se encontraron datos para la fila seleccionada","error");return}l.value.plataforma=o.plataforma,l.value.codigo_sede=o.codigo_sede,l.value.codigo_plataforma=o.codigo_plataforma,console.log(plataforma),y.value=s,f.value=!0},E=s=>{const t=n.value.dt.rows({selected:!0}).count();_.value=t>0},G=s=>{const t=n.value.dt.rows({selected:!0}).count();_.value=t>0},q=()=>{const s=n.value.dt.rows({selected:!0}).data().toArray();if(s.length>0){const t=s[0];l.value.plataformas=t.plataformas,l.value.codigo_sede=t.codigo_sede,l.value.codigo_plataforma=t.codigo_plataforma,console.log(l),O("PUT",l.value,"https://reportes.kingtech.pe/platforms/"+id,"")}else x("debe selccionar uan fila antes de poder editarla","error")},H=()=>{console.log(r),O("POST",r.value,"https://reportes.kingtech.pe/platforms",""),r.value.id,r.value.plataforma,r.value.codigo_sede,r.value.codigo_plataforma,c.value=!1},W=()=>{const s=new FormData;s.append("file",fileInput.value.files[0]),ee.post("/api/importar-clientes",s,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log("Archivo importado correctamente:",t.data.message)}).catch(t=>{console.error("Error al importar archivo:",t)})};return(s,t)=>(B(),I(Z,null,[e("div",se,[e("div",ae,[e("div",le,[e("div",re,[_.value?Q("",!0):(B(),I("button",{key:0,"data-modal-target":"default-modal",onClick:t[0]||(t[0]=o=>z("Crear")),"data-modal-toggle":"default-modal",className:"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"}," Crear Registro ")),e("button",{onClick:t[1]||(t[1]=o=>L("Editar")),className:" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[ne,C("Editar Registro ")]),e("button",{onClick:t[2]||(t[2]=o=>$("Subir Documento en Excel")),className:" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[de,C("Subir Excel ")]),e("button",{onClick:t[3]||(t[3]=o=>F()),className:"btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},[ie,C(" Borrar Registro ")])])])])]),e("div",ue,[e("div",ce,[e("div",me,[e("div",fe,[be,e("div",pe,[p(g(M),{modelValue:V.value,"onUpdate:modelValue":t[4]||(t[4]=o=>V.value=o),id:"datepicker",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),ge])])])])]),e("div",ve,[e("div",xe,[e("div",he,[e("div",ye,[_e,p(g(M),{modelValue:k.value,"onUpdate:modelValue":t[5]||(t[5]=o=>k.value=o),id:"startDate",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),we,p(g(M),{modelValue:N.value,"onUpdate:modelValue":t[6]||(t[6]=o=>N.value=o),id:"endDate",class:"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,8,["modelValue"]),e("button",{type:"button",class:"ml-4 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300",onClick:t[7]||(t[7]=o=>s.filterByDates(k.value,N.value))}," Filtrar ")])])])]),e("div",ke,[e("div",Ne,[e("div",Ce,[p(g(m),{data:R.datos,columns:S.value,ref_key:"table",ref:n,class:"display",options:{select:!0,responsive:!0,autoWidth:!1,dom:"Bfrtip",buttons:A.value,pageLength:10},onSelect:E},{default:X(()=>[De]),_:1},8,["data","columns","options"])])])]),d(e("div",je,[e("div",Me,[e("div",Re,[e("h3",Se,i(y.value),1),e("button",{onClick:t[8]||(t[8]=o=>f.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},Ee)]),e("div",Te,[e("form",{onSubmit:j(q,["prevent"]),classNaem:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",Be,[e("h2",Ie,i(y.value),1)]),e("div",Oe,[Pe,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[9]||(t[9]=o=>l.value.plataforma=o)},null,512),[[u,l.value.plataforma]]),Ue]),e("div",$e,[Fe,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[10]||(t[10]=o=>l.value.codigo_sede=o)},null,512),[[u,l.value.codigo_sede]]),ze]),e("div",Le,[Ge,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[11]||(t[11]=o=>l.value.codigo_plataforma=o)},null,512),[[u,l.value.codigo_plataforma]]),qe]),e("div",He,[We,e("button",{onClick:t[12]||(t[12]=o=>f.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-white px-5 py-2.5"},"Rechazar")])],32)])])],512),[[D,f.value]]),d(e("div",Ye,[e("div",Je,[e("div",Ke,[e("h3",Qe,i(h.value),1),e("button",{onClick:t[13]||(t[13]=o=>c.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},et)]),e("div",tt,[e("form",{onSubmit:j(H,["prevent"]),classNaem:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",ot,[e("h2",st,i(h.value),1)]),e("div",at,[lt,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[14]||(t[14]=o=>r.value.plataforma=o)},null,512),[[u,r.value.plataforma]]),rt]),e("div",nt,[dt,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[15]||(t[15]=o=>r.value.codigo_sede=o)},null,512),[[u,r.value.codigo_sede]]),it]),e("div",ut,[ct,d(e("input",{type:"text",id:"plataforma",className:"form-input w-full","onUpdate:modelValue":t[16]||(t[16]=o=>r.value.codigo_plataforma=o)},null,512),[[u,r.value.codigo_plataforma]]),mt]),e("div",ft,[bt,e("button",{onClick:t[17]||(t[17]=o=>c.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-white px-5 py-2.5"},"Rechazar")])],32)])])],512),[[D,c.value]]),d(e("div",pt,[e("div",gt,[e("div",vt,[e("h3",xt,i(w.value),1),e("button",{onClick:t[18]||(t[18]=o=>b.value=!1),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"},_t)]),e("div",wt,[e("form",{onSubmit:j(W,["prevent"]),enctype:"multipart/form-data",class:"max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto"},[e("div",kt,[e("h2",Nt,i(w.value),1)]),Ct,e("div",Dt,[jt,e("button",{onClick:t[19]||(t[19]=o=>b.value=!1),type:"button",class:"ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-white px-5 py-2.5"},"Rechazar")])],32)])])],512),[[D,b.value]])],64))}};export{At as default};
