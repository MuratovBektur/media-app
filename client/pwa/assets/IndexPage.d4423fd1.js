import{api as a}from"./axios.85956fd9.js";import{d as n,a as s,o as r,e as c,t as i}from"./index.32045ee8.js";const u=n({__name:"IndexPage",setup(p){const t=s([]);async function o(){const e=await a("/todos");t.value=e.data}return o(),(e,d)=>(r(),c("div",null,i(t.value[0]),1))}});export{u as default};