/* Laundry Booking — SVG icon update. No external icon library required. */
const ICONS={
  'back':'<path d="m15 18-6-6 6-6"/>',
  'home':'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  'machine':'<rect x="4" y="2.5" width="16" height="19" rx="2.5"/><circle cx="12" cy="13" r="5.2"/><path d="M7.5 6.5h.01M10.5 6.5h.01"/>',
  'activity':'<circle cx="12" cy="12" r="9"/><path d="M3.5 12h4l2.1-4.2 3.1 8.4 2.2-4.2h5.6"/>',
  'user':'<circle cx="12" cy="8" r="3.5"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  'men':'<circle cx="12" cy="6.5" r="3"/><path d="M6.5 21v-4.5a5.5 5.5 0 0 1 11 0V21M9 12h6"/>',
  'women':'<circle cx="12" cy="5.5" r="2.7"/><path d="M9 9h6l2 5-3-1 2 7H8l2-7-3 1z"/>',
  'kids':'<circle cx="12" cy="6.5" r="2.5"/><path d="M7 20v-4a5 5 0 0 1 10 0v4M8 12l-3 3M16 12l3 3"/><path d="M9.5 7.5h5"/>',
  'shirt':'<path d="m8 4 4 2 4-2 5 3-3 5-3-2v10H9V10l-3 2-3-5z"/>',
  'pants':'<path d="M6 3h12l-1 18h-4l-1-9-1 9H7z"/><path d="M6.5 7h11"/>',
  'hanger':'<path d="M12 5a2.5 2.5 0 1 1 2.5 2.5c-1.5 0-2.5 1.1-2.5 2.5v1"/><path d="m3 17 9-6 9 6v2H3z"/>',
  'dress':'<path d="M9 4h6l1 5 4 10H4L8 9z"/><path d="M9 4c0 2 1 3 3 3s3-1 3-3"/>',
  'jacket':'<path d="m8 4 4 2 4-2 4 3-2 6-3-2v9H9v-9l-3 2-2-6z"/><path d="m10 5 2 3 2-3M12 8v12M9 11l-2 2M15 11l2 2"/>',
  'iron':'<path d="M3 16h18l-2-6a5 5 0 0 0-5-4H8a5 5 0 0 0-5 5z"/><path d="M8 6V4h6"/>',
  'calendar':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  'clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  'pickup':'<path d="M2.5 7h12v10h-12zM14.5 10.5h4l3 3V17h-7z"/><circle cx="6.5" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/><path d="M6 4h5"/>',
  'delivery':'<path d="M2.5 7h12v10h-12zM14.5 10.5h4l3 3V17h-7z"/><circle cx="6.5" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/><path d="M17 4v4M15 6h4"/>',
  'check':'<path d="m5 12 4 4L19 6"/>',
  'location':'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
  'bell':'<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  'notification':'<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/><path d="M19 4v3M17.5 5.5h3"/>',
  'camera':'<path d="M4 7h4l2-3h4l2 3h4v13H4z"/><circle cx="12" cy="13" r="4"/>',
  'address':'<path d="M3 10 12 3l9 7v10H3z"/><path d="M8 20v-6h8v6"/>',
  'fold':'<path d="m4 8 8-4 8 4-8 4z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/>',
  'dryclean':'<path d="M12 4a2.5 2.5 0 1 1 2.5 2.5c-1.5 0-2.5 1.1-2.5 2.5v1"/><path d="m3 17 9-6 9 6v2H3z"/><path d="m18 3 .7 1.8L20.5 5.5l-1.8.7L18 8l-.7-1.8-1.8-.7 1.8-.7z"/>',
  'refresh':'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.5 9A7 7 0 0 1 18 6l2 2M4 16l2 2a7 7 0 0 0 12.5-3"/>',
  'saved':'<path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/>',
  'wallet':'<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 8h18M16 13h5v4h-5a2 2 0 0 1 0-4z"/>'
};
function icon(name,extra='svg-icon'){return `<svg class="${extra}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||ICONS.shirt}</svg>`}
let cfg;
const s={step:1,gender:"Women",clothes:{},service:"Wash & Iron",pickup:{},delivery:{}};
const $=q=>document.querySelector(q);
const safe=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
async function init(){
 try{const r=await fetch("data.json");cfg=await r.json()}
 catch(e){cfg={initialGender:"Women",clothes:[{id:"shirts",name:"Shirts",quantity:3,icon:"shirt"},{id:"pants",name:"Pants",quantity:2,icon:"pants"},{id:"dresses",name:"Dresses",quantity:1,icon:"hanger"},{id:"jackets",name:"Jackets",quantity:0,icon:"shirt"},{id:"suits",name:"Jackets",quantity:0,icon:"shirt"}],services:[{name:"Wash & Fold",description:"Everyday laundry washed, dried, and folded.",icon:"fold"},{name:"Wash & Iron",description:"Washed, dried, and professionally pressed.",icon:"iron"},{name:"Dry Cleaning",description:"Specialized care for delicate fabrics.",icon:"hanger"}],pickup:{date:"2026-08-20",time:"10:00 AM – 12:00 PM"},delivery:{date:"2026-08-22",time:"5:00 PM – 7:00 PM"}}}
 s.gender=cfg.initialGender||"Women";cfg.clothes.forEach(c=>s.clothes[c.id]={name:c.name,qty:c.quantity,icon:c.icon||(c.id==='dresses'?'dress':c.id==='jackets'?'jacket':c.id==='pants'?'pants':'shirt')});s.pickup={...cfg.pickup};s.delivery={...cfg.delivery};render()
}
function ld(d){return new Date(d+"T12:00:00").toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"})}
function sd(d){return new Date(d+"T12:00:00").toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}
function items(){return Object.values(s.clothes).filter(c=>c.qty>0).map(c=>c.name+" x "+c.qty).join(", ")||"No clothes selected"}
function head(t,p=""){return `<div class="heading"><h1>${t}</h1>${p?`<p>${p}</p>`:""}</div>`}
function footer(){return `<div class="bottom"><div class="saved">${icon("refresh")} Saved across devices</div><button class="primary" data-next>Continue</button></div>`}
function sc1(){return `<div class="intro"><h1>Book Laundry</h1><p>Who is this laundry booking for?</p><h2>Smart Laundry,<br><span>Effortlessly Done</span></h2></div><div class="cards">${["Men","Women","Kids"].map(g=>`<button class="choice ${s.gender===g?"selected":""}" data-gender="${g}"><span class="round">${icon(g.toLowerCase())}</span><strong>${g}</strong><span class="radio"></span></button>`).join("")}</div>${footer()}`}
function sc2(){return head("Select Clothes","Choose the clothes and quantity")+`<div class="cards">${Object.entries(s.clothes).map(([id,c])=>`<div class="cloth"><span class="icon">${icon(c.icon)}</span><span class="name">${safe(c.name)}</span><div class="counter"><button data-minus="${id}" aria-label="Decrease ${safe(c.name)}">−</button><b>${c.qty}</b><button class="plus" data-plus="${id}" aria-label="Increase ${safe(c.name)}">+</button></div></div>`).join("")}</div>${footer()}`}
function sc3(){return head("Choose Laundry Service","Select the service you need")+`<div class="machine"><div class="machine-top"><span class="machine-tag">${icon("machine")} AUTO-DISPENSE</span><span class="machine-status">● 90° 24°<br>5.0 kg</span><span class="machine-led">●</span></div><div class="washer"><div class="washer-core">${icon("refresh")}</div></div><div class="machine-meta"><span>${icon("check")} Eco Wash 40°C</span><span>● 1,400 RPM</span><span>${icon("clock")} 24 min</span></div></div><div class="cards">${cfg.services.map(a=>`<button class="service ${s.service===a.name?"selected":""}" data-service="${safe(a.name)}"><span class="icon">${icon(a.icon||"hanger")}</span><span class="service-copy"><b>${safe(a.name)}</b><small>${safe(a.description)}</small></span><span class="radio"></span></button>`).join("")}</div><div class="sticky"><button class="primary" data-next>Continue →</button></div>`}
function sched(k,label){let a=s[k];return `<div class="schedule"><div class="schedule-type">${icon(k==="pickup"?"pickup":"delivery")} ${k==="pickup"?"PICKUP SCHEDULED":"DELIVERY SCHEDULED"}</div><div class="schedule-row"><span class="icon">${icon(k==="pickup"?"pickup":"delivery")}</span><div><b>${ld(a.date)}</b><small>${icon("clock")} ${safe(a.time)}</small></div></div><button class="edit" data-edit="${k}">Edit ${label}</button></div>`}
function sc4(){return head("Schedule Laundry","Choose pickup and delivery times")+sched("pickup","Pickup")+sched("delivery","Delivery")+`<div class="bottom"><button class="primary" data-next>Continue</button></div>`}
function sc5(){return head("Review Booking")+`<div class="review"><div class="review-line"><span>CUSTOMER</span><span>ITEMS</span></div><div class="review-line"><b>${safe(s.gender)}</b><span>${safe(items())}</span></div><div class="review-part"><small>SERVICE</small><b><span class="purple-icon">${icon(s.service==="Wash & Iron"?"iron":s.service==="Wash & Fold"?"fold":"dryclean")}</span>${safe(s.service)}</b></div><div class="review-part"><b>${icon("calendar")} PICKUP</b><br><span>${sd(s.pickup.date)}, ${safe(s.pickup.time)}</span></div><div class="review-part"><b>${icon("calendar")} DELIVERY</b><br><span>${sd(s.delivery.date)}, ${safe(s.delivery.time)}</span></div></div><div class="permissions-title"><h2>Permissions</h2><p>Manage permissions before confirming your booking.</p></div><div class="cards">${[["location","Location Permission","For accurate pickup tracking"],["notification","Notification Permission","Status updates & delivery alerts"],["camera","Camera Permission","To photograph specific stains"],["address","Saved Pickup Address","Use defaults for faster booking"]].map(a=>`<label class="permission"><span class="icon">${icon(a[0])}</span><span><b>${a[1]}</b><small>${a[2]}</small></span><input type="checkbox" checked></label>`).join("")}</div><div class="actions"><button class="secondary" id="editBooking">Edit Booking</button><button class="primary" id="confirm">Confirm Booking</button></div>`}
function sc6(){return `<div class="success"><div class="check">${icon("check")}</div><h1>Booking Confirmed</h1><p>Your laundry booking has been<br>successfully confirmed.</p></div><div class="confirm-card"><div class="confirm-line"><span>Booking ID</span><b>LB102458</b></div><div class="confirm-line"><span>Service</span><b>${safe(s.service)}</b></div><div class="confirm-line"><span>Pickup</span><b>${sd(s.pickup.date)}<br>${safe(s.pickup.time)}</b></div><div class="confirm-line"><span>Delivery</span><b>${sd(s.delivery.date)}<br>${safe(s.delivery.time)}</b></div><div class="confirm-line"><span>Status</span><b class="status">${icon("check")} Confirmed</b></div></div><button class="primary view" id="view">View Booking →</button><button class="home" id="home">${icon("home")} &nbsp; Go Home</button>`}
function render(){
 document.querySelectorAll("[data-icon]").forEach(el=>el.innerHTML=icon(el.dataset.icon));
 $("#stepNo").textContent=s.step;$("#progress").style.width=s.step/6*100+"%";$("#back").innerHTML=icon("back");$("#back").style.visibility=s.step===1||s.step===6?"hidden":"visible";
 $("#screen").innerHTML=[sc1,sc2,sc3,sc4,sc5,sc6][s.step-1]();bind()
}
function bind(){
 document.querySelectorAll("[data-next]").forEach(b=>b.onclick=()=>{if(s.step===2&&!Object.values(s.clothes).some(c=>c.qty)){showInfo("Select clothes","Please select at least one clothing item.");return}s.step++;render()});
 document.querySelectorAll("[data-gender]").forEach(b=>b.onclick=()=>{s.gender=b.dataset.gender;render()});
 document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>{s.clothes[b.dataset.plus].qty=Math.min(99,s.clothes[b.dataset.plus].qty+1);render()});
 document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>{s.clothes[b.dataset.minus].qty=Math.max(0,s.clothes[b.dataset.minus].qty-1);render()});
 document.querySelectorAll("[data-service]").forEach(b=>b.onclick=()=>{s.service=b.dataset.service;render()});
 document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>openEdit(b.dataset.edit));
 let e=$("#editBooking");if(e)e.onclick=()=>{s.step=1;render()};
 let c=$("#confirm");if(c)c.onclick=()=>{s.step=6;render()};
 let v=$("#view");if(v)v.onclick=()=>showInfo("Booking LB102458","Service: "+s.service+"\\nItems: "+items()+"\\nStatus: Confirmed");
 let h=$("#home");if(h)h.onclick=()=>{s.step=1;s.gender="Women";s.service="Wash & Iron";Object.values(s.clothes).forEach((c,i)=>c.qty=[3,2,1,0][i]);render()}
}
function openEdit(k){$("#dlg").dataset.kind=k;$("#dlgTitle").textContent=k==="pickup"?"Edit Pickup":"Edit Delivery";$("#date").value=s[k].date;$("#time").value=s[k].time;$("#dlg").showModal()}
$("#close").onclick=()=>$("#dlg").close();
$("#editForm").onsubmit=e=>{e.preventDefault();let k=$("#dlg").dataset.kind;s[k]={date:$("#date").value,time:$("#time").value};$("#dlg").close();render()};
$("#back").onclick=()=>{if(s.step>1){s.step--;render()}};
function showInfo(title,text){let d=document.createElement("dialog");d.innerHTML=`<form method="dialog"><button class="close">×</button><h2>${safe(title)}</h2><p>${safe(text).replace(/\\n/g,"<br>")}</p><button class="primary">OK</button></form>`;document.body.appendChild(d);d.showModal();d.addEventListener("close",()=>d.remove())}
document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-nav]").forEach(x=>x.classList.toggle("nav-active",x===b));if(b.dataset.nav==="Home"){s.step=1;render()}else showInfo(b.dataset.nav,b.dataset.nav+" is a navigation preview in this prototype.")});
init();