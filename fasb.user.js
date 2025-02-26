// ==UserScript==
// @name        FASB Codification T&C Skip
// @match       https://asc.fasb.org/*
// @grant       none
// @license     MIT
// @version     1.0.0
// @author      Kenneth-W-Chen
// @downloadurl   https://github.com/Kenneth-W-Chen/fasb-codification-tc-skip/raw/main/fasb.user.js
// @description Automatically enters the codification. Just do the captcha first.
// ==/UserScript==

let c = new MutationObserver((r,o)=>{for( const a of r){
  a.addedNodes[0].querySelector('.tc-acction-btns > .btn-primary').click()
  a.disconnect()
}})
let d = new MutationObserver((r,o)=>{
  let btn = document.querySelector('#btnBasicView')
  if(btn!==null&&!btn.hasAttribute('disabled')) {
    c.observe(document.querySelector('app-right-overlay'),{childList:true})
    btn.click()
    o.disconnect()
  }})

let b = new MutationObserver((r,o)=>{
  let v= document.querySelector('#btnBasicView')
  if(v!==null){
    v.click();
    o.disconnect();

    d.observe(v,{attributes:true,attributeFilter:['disabled'],attributeOldValue:true})
  }
})
b.observe(document.querySelector('body'),{childList:true,subtree:true})
