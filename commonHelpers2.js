import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const e=l.delay.value,i=l.state.value;t({value:e,delay:e,state:i}).then(s=>r.show({class:"ok-circul",position:"topRight",icon:"ok-circul",message:`Fulfilled promise in ${e} ms!`,messageColor:"#fff",messageSize:"16px",backgroundColor:"#59A10D",close:!1,closeOnClick:!0})).catch(s=>r.show({class:"error-circul",position:"topRight",icon:"error-circul",message:`Rejected promise in ${e} ms!`,messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})),l.reset()});const t=(o,e)=>new Promise((i,s)=>{e==="fulfilled"||e==="rejected"?setTimeout(()=>{e==="fulfilled"?i(value):s(value)},o):s("Invalid state value")});t(2e3,"fulfilled").then(o=>{console.log(`Fulfilled promise in ${o} ms!`)}).catch(o=>{console.error(`Rejected promise in ${o} ms!`)});
//# sourceMappingURL=commonHelpers2.js.map