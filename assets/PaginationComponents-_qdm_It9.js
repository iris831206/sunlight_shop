import{_ as d,o as s,c as n,b as t,n as l,H as o,F as g,r as p,t as _}from"./index-COv797LT.js";const u={props:["pages"],methods:{updatePage(c){this.$emit("emitPages",c)}}},h={"aria-label":"Page navigation example"},m={class:"pagination justify-content-center"},k=t("span",{"aria-hidden":"true"},"«",-1),f=[k],v={key:0,class:"page-link"},P=["onClick"],b=t("span",{"aria-hidden":"true"},"»",-1),x=[b];function C(c,i,a,y,B,r){return s(),n("nav",h,[t("ul",m,[t("li",{class:l([{disabled:!a.pages.has_pre},"page-item"])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=o(e=>r.updatePage(a.pages.current_page-1),["prevent"]))},f)],2),(s(!0),n(g,null,p(a.pages.total_pages,e=>(s(),n("li",{class:l(["page-item",{active:a.pages.current_page===e}]),key:e},[e===a.pages.current_page?(s(),n("span",v,_(e),1)):(s(),n("a",{key:1,class:"page-link",href:"#",onClick:o(F=>r.updatePage(e),["prevent"])},_(e),9,P))],2))),128)),t("li",{class:l(["page-item",{disabled:!a.pages.has_next}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=o(e=>r.updatePage(a.pages.current_page+1),["prevent"]))},x)],2)])])}const j=d(u,[["render",C]]);export{j as P};
