// addEventListener(event,handler,options)
const controller = new AbortController()
const signal = controller.signal
const ptag = document.getElementById("ptag");
ptag.addEventListener("click",()=>{
    alert('you click on ptag');
},{signal})


outer.addEventListener("click", () => {
  console.log("OUTER clicked (capture)");
}, { capture: true }); // attach the event listner to capturing phase , so the handler run before bubbling phase
// widly used when we have ul>li 

ptag.addEventListener("click", () => {
  console.log("PTAG clicked");
});


/* options can include:
{ once: true } – run the handler only once
{ passive: true } – tells browser not to call preventDefault(), improves scroll performance
{ capture: true } – attach handler during capture phase
{ signal: AbortSignal } – allows you to cancel the handler */


// Event Delegation 

const parentUl = document.getElementById("parent-ul")
parentUl.addEventListener("click",()=>{
    alert("you click on the home")
})

// e.stopPropagation()
// Stops the event from bubbling up the DOM tree.
document.body.addEventListener("click", () => {
  console.log("BODY CLICKED");
});

document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("CHILD CLICKED");
});
/* if i dont use e.stoProgogations : so when i click on the body , so they show body Click
but if i click on the child --> so they print child and body cliked [due to bubbling phase] */

controller.abort()