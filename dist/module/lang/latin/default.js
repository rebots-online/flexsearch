import FlexSearch from"../../flexsearch.js";export const rtl=!1;export const tokenize="";export default{encode:encode,rtl:!1};const split=/[\W_]+/;export function encode(a){return this.pipeline(a.toLowerCase(),!1,split,!1)}