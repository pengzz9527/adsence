const banner = document.getElementById('cookie-banner');
const accept = document.getElementById('cookie-accept');
const decline = document.getElementById('cookie-decline');

function setCookie(c,v,d){
  const e=new Date();
  e.setTime(e.getTime()+d*24*60*60*1000);
  document.cookie=c+"="+v+";expires="+e.toUTCString()+";path=/";
}
function getCookie(c){
  const n=c+"=";
  const ca=document.cookie.split(';');
  for(let i=0;i<ca.length;i++){
    const c=ca[i].trim();
    if(c.indexOf(n)==0)return c.substring(n.length,c.length);
  }
  return "";
}

if(!getCookie('cookieConsent')){
  banner.style.display='flex';
}
accept.onclick=()=>{
  setCookie('cookieConsent','accepted',365);
  banner.style.display='none';
};
decline.onclick=()=>{
  setCookie('cookieConsent','declined',30);
  banner.style.display='none';
};