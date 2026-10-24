var dd=0,Pu=1,pd=2;var po=1,md=2,us=3,ii=0,Xe=1,se=2,ri=0,zi=1,Fe=2,Iu=3,mo=4,gd=5;var pr=100,bd=101,xd=102,vd=103,yd=104,_d=200,Md=201,Sd=202,wd=203,Lu=204,Fu=205,Td=206,Ed=207,Ad=208,Rd=209,Cd=210,Pd=211,Id=212,Ld=213,Fd=214,Oa=0,Ua=1,Ba=2,jr=3,ka=4,za=5,Va=6,Ga=7,Du=0,Dd=1,Nd=2,kn=0,Nu=1,Ou=2,Uu=3,Bu=4,ku=5,zu=6,Vu=7;var Gu=300,Vi=301,mr=302,gl=303,bl=304,go=306,ar=1e3,yn=1001,Ha=1002,Je=1003,Od=1004;var bo=1005;var nn=1006,xl=1007;var Gi=1008;var Sn=1009,Hu=1010,Wu=1011,hs=1012,vl=1013,zn=1014,Vn=1015,Gn=1016,yl=1017,_l=1018,fs=1020,Xu=35902,Yu=35899,qu=1021,$u=1022,Rn=1023,Jn=1026,Hi=1027,Zu=1028,Ml=1029,Wi=1030,Sl=1031;var wl=1033,xo=33776,vo=33777,yo=33778,_o=33779,Tl=35840,El=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Il=37496,Ll=37488,Fl=37489,Mo=37490,Dl=37491,Nl=37808,Ol=37809,Ul=37810,Bl=37811,kl=37812,zl=37813,Vl=37814,Gl=37815,Hl=37816,Wl=37817,Xl=37818,Yl=37819,ql=37820,$l=37821,Zl=36492,Kl=36494,Jl=36495,jl=36283,Ql=36284,So=36285,tc=36286;var Xs=2300,Wa=2301,Fa=2302,vu=2303,yu=2400,_u=2401,Mu=2402;var Ud=3200;var Ku=0,Bd=1,xi="",Pe="srgb",Ys="srgb-linear",qs="linear",ge="srgb";var Da=7680;var kd=519,zd=512,Vd=513,Gd=514,ec=515,Hd=516,Wd=517,nc=518,Xd=519,Ju=35044,ju=35048;var Qu="300 es",Un=2e3,$s=2001;function $g(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Qr("canvas");return i.style.display="block",i}var Df={},ts=null;function Zs(...i){let t="THREE."+i.shift();ts?ts("log",t,...i):console.log(t,...i)}function qd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=qd(i);let t="THREE."+i.shift();if(ts)ts("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=qd(i);let t="THREE."+i.shift();if(ts)ts("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function or(...i){let t=i.join(" ");t in Df||(Df[t]=!0,qt(...i))}function $d(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Zd={[Oa]:Ua,[Ba]:Va,[ka]:Ga,[jr]:za,[Ua]:Oa,[Va]:Ba,[Ga]:ka,[za]:jr},jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zc=Math.PI/180,Xa=180/Math.PI;function Fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Kg(i,t){return(i%t+t)%t}function Kc(i,t,e){return(1-e)*i+e*t}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rh=class rh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;var Jt=rh,Qn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],b=s[o+3];if(u!==b||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*b;g<0&&(f=-f,d=-d,p=-p,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,a=Math.sin(a*x)/_,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jc.copy(this).projectOnVector(t),this.sub(Jc)}reflect(t){return this.sub(Jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var H=sh,Jc=new H,Nf=new Qn,oh=class oh{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=r[0],g=r[3],m=r[6],x=r[1],_=r[4],v=r[7],M=r[2],E=r[5],A=r[8];return s[0]=o*b+a*x+l*M,s[3]=o*g+a*_+l*E,s[6]=o*m+a*v+l*A,s[1]=c*b+h*x+u*M,s[4]=c*g+h*_+u*E,s[7]=c*m+h*v+u*A,s[2]=f*b+d*x+p*M,s[5]=f*g+d*_+p*E,s[8]=f*m+d*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*o)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;var te=oh,jc=new te,Of=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jg(){let i={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xi?qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ys]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:Of,fromXYZ:Uf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Of,fromXYZ:Uf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var ce=Jg();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fr,Ya=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fr===void 0&&(Fr=Qr("canvas")),Fr.width=t.width,Fr.height=t.height;let r=Fr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jg=0,es=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qc(r[o].image)):s.push(Qc(r[o]))}else s=Qc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Qg=0,tu=new H,un=class i extends jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=yn,r=yn,s=nn,o=Gi,a=Rn,l=Sn,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Fi(),this.name="",this.source=new es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Gu;un.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,M=(m+1)/2,E=(h+f)/4,A=(u+b)/4,y=(p+g)/4;return _>v&&_>M?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=E/n,s=A/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=y/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=y/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var Ue=ah,qa=class extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new un(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new es(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ks=class extends un{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends un{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ml=class ml{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,g)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ml().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Dr.setFromMatrixColumn(t,0).length(),s=1/Dr.setFromMatrixColumn(t,1).length(),o=1/Dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f+b*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f-b*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=b-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,b=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-b*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tb,t,eb)}lookAt(t,e,n){let r=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ri.crossVectors(n,xn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ri.crossVectors(n,xn)),Ri.normalize(),sa.crossVectors(xn,Ri),r[0]=Ri.x,r[4]=sa.x,r[8]=xn.x,r[1]=Ri.y,r[5]=sa.y,r[9]=xn.y,r[2]=Ri.z,r[6]=sa.z,r[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],x=n[3],_=n[7],v=n[11],M=n[15],E=r[0],A=r[4],y=r[8],R=r[12],S=r[1],T=r[5],L=r[9],O=r[13],w=r[2],F=r[6],C=r[10],P=r[14],D=r[3],B=r[7],k=r[11],V=r[15];return s[0]=o*E+a*S+l*w+c*D,s[4]=o*A+a*T+l*F+c*B,s[8]=o*y+a*L+l*C+c*k,s[12]=o*R+a*O+l*P+c*V,s[1]=h*E+u*S+f*w+d*D,s[5]=h*A+u*T+f*F+d*B,s[9]=h*y+u*L+f*C+d*k,s[13]=h*R+u*O+f*P+d*V,s[2]=p*E+b*S+g*w+m*D,s[6]=p*A+b*T+g*F+m*B,s[10]=p*y+b*L+g*C+m*k,s[14]=p*R+b*O+g*P+m*V,s[3]=x*E+_*S+v*w+M*D,s[7]=x*A+_*T+v*F+M*B,s[11]=x*y+_*L+v*C+M*k,s[15]=x*R+_*O+v*P+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],b=t[7],g=t[11],m=t[15],x=l*d-c*f,_=a*d-c*u,v=a*f-l*u,M=o*d-c*h,E=o*f-l*h,A=o*u-a*h;return e*(b*x-g*_+m*v)-n*(p*x-g*M+m*E)+r*(p*_-b*M+m*A)-s*(p*v-b*E+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],b=t[13],g=t[14],m=t[15],x=e*a-n*o,_=e*l-r*o,v=e*c-s*o,M=n*l-r*a,E=n*c-s*a,A=r*c-s*l,y=h*b-u*p,R=h*g-f*p,S=h*m-d*p,T=u*g-f*b,L=u*m-d*b,O=f*m-d*g,w=x*O-_*L+v*T+M*S-E*R+A*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/w;return t[0]=(a*O-l*L+c*T)*F,t[1]=(r*L-n*O-s*T)*F,t[2]=(b*A-g*E+m*M)*F,t[3]=(f*E-u*A-d*M)*F,t[4]=(l*S-o*O-c*R)*F,t[5]=(e*O-r*S+s*R)*F,t[6]=(g*v-p*A-m*_)*F,t[7]=(h*A-f*v+d*_)*F,t[8]=(o*L-a*S+c*y)*F,t[9]=(n*S-e*L-s*y)*F,t[10]=(p*E-b*v+m*x)*F,t[11]=(u*v-h*E-d*x)*F,t[12]=(a*R-o*T-l*y)*F,t[13]=(e*T-n*R+r*y)*F,t[14]=(b*_-p*M-g*x)*F,t[15]=(h*M-u*_+f*x)*F,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,b=o*h,g=o*u,m=a*u,x=l*c,_=l*h,v=l*u,M=n.x,E=n.y,A=n.z;return r[0]=(1-(b+m))*M,r[1]=(d+v)*M,r[2]=(p-_)*M,r[3]=0,r[4]=(d-v)*E,r[5]=(1-(f+m))*E,r[6]=(g+x)*E,r[7]=0,r[8]=(p+_)*A,r[9]=(g-x)*A,r[10]=(1-(f+b))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Dr.set(r[0],r[1],r[2]).length(),a=Dr.set(r[4],r[5],r[6]).length(),l=Dr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Fn.copy(this);let c=1/o,h=1/a,u=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Un,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=s/(o-s),b=o*s/(o-s);else if(a===Un)p=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===$s)p=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Un,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(o-s),b=o/(o-s);else if(a===Un)p=-2/(o-s),b=-(o+s)/(o-s);else if(a===$s)p=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ml.prototype.isMatrix4=!0;var be=ml,Dr=new H,Fn=new be,tb=new H(0,0,0),eb=new H(1,1,1),Ri=new H,sa=new H,xn=new H,Bf=new be,kf=new Qn,Di=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kf.setFromEuler(this),this.setFromQuaternion(kf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var ns=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nb=0,zf=new H,Nr=new Qn,ui=new be,oa=new H,Os=new H,ib=new H,rb=new Qn,Vf=new H(1,0,0),Gf=new H(0,1,0),Hf=new H(0,0,1),Wf={type:"added"},sb={type:"removed"},Or={type:"childadded",child:null},eu={type:"childremoved",child:null},bn=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Di,n=new Qn,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new te}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nr.setFromAxisAngle(t,e),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,e){return Nr.setFromAxisAngle(t,e),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(Vf,t)}rotateY(t){return this.rotateOnAxis(Gf,t)}rotateZ(t){return this.rotateOnAxis(Hf,t)}translateOnAxis(t,e){return zf.copy(t).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vf,t)}translateY(t){return this.translateOnAxis(Gf,t)}translateZ(t){return this.translateOnAxis(Hf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oa.copy(t):oa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Os,oa,this.up):ui.lookAt(oa,Os,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ui),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wf),Or.child=t,this.dispatchEvent(Or),Or.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sb),eu.child=t,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wf),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,ib),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,rb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new H(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var we=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ob={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},aa={h:0,s:0,l:0};function nu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Q=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=Kg(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=nu(o,s,t+1/3),this.g=nu(o,s,t),this.b=nu(o,s,t-1/3)}return ce.colorSpaceToWorking(this,r),this}setStyle(t,e=Pe){function n(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return ce.workingToColorSpace(cn.copy(this),t),Math.round(he(cn.r*255,0,255))*65536+Math.round(he(cn.g*255,0,255))*256+Math.round(he(cn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(cn.copy(this),e);let n=cn.r,r=cn.g,s=cn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Pe){ce.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,r=cn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(aa);let n=Kc(Ci.h,aa.h,e),r=Kc(Ci.s,aa.s,e),s=Kc(Ci.l,aa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Q;Q.NAMES=Kd;var Js=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Q(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ni=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Dn=new H,hi=new H,iu=new H,fi=new H,Ur=new H,Br=new H,Xf=new H,ru=new H,su=new H,ou=new H,au=new Ue,lu=new Ue,cu=new Ue,mi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Dn.subVectors(t,e),r.cross(Dn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Dn.subVectors(r,e),hi.subVectors(n,e),iu.subVectors(t,e);let o=Dn.dot(Dn),a=Dn.dot(hi),l=Dn.dot(iu),c=hi.dot(hi),h=hi.dot(iu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(t,e),lu.fromBufferAttribute(t,n),cu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(au,s.x),o.addScaledVector(lu,s.y),o.addScaledVector(cu,s.z),o}static isFrontFacing(t,e,n,r){return Dn.subVectors(n,e),hi.subVectors(t,e),Dn.cross(hi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Dn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Ur.subVectors(r,n),Br.subVectors(s,n),ru.subVectors(t,n);let l=Ur.dot(ru),c=Br.dot(ru);if(l<=0&&c<=0)return e.copy(n);su.subVectors(t,r);let h=Ur.dot(su),u=Br.dot(su);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ur,o);ou.subVectors(t,s);let d=Ur.dot(ou),p=Br.dot(ou);if(p>=0&&d<=p)return e.copy(s);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Br,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Xf.subVectors(s,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(Xf,a);let m=1/(g+b+f);return o=b*m,a=f*m,e.copy(n).addScaledVector(Ur,o).addScaledVector(Br,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),ca.subVectors(this.max,Us),kr.subVectors(t.a,Us),zr.subVectors(t.b,Us),Vr.subVectors(t.c,Us),Pi.subVectors(zr,kr),Ii.subVectors(Vr,zr),nr.subVectors(kr,Vr);let e=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-nr.z,nr.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,nr.z,0,-nr.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-nr.y,nr.x,0];return!uu(e,kr,zr,Vr,ca)||(e=[1,0,0,0,1,0,0,0,1],!uu(e,kr,zr,Vr,ca))?!1:(ua.crossVectors(Pi,Ii),e=[ua.x,ua.y,ua.z],uu(e,kr,zr,Vr,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new H,new H,new H,new H,new H,new H,new H,new H],Nn=new H,la=new hn,kr=new H,zr=new H,Vr=new H,Pi=new H,Ii=new H,nr=new H,Us=new H,ca=new H,ua=new H,ir=new H;function uu(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ir.fromArray(i,s);let a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=t.dot(ir),c=e.dot(ir),h=n.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ve=new H,ha=new Jt,ab=0,_n=class extends jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ab++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ju,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var js=class extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}},lb=new hn,Bs=new H,hu=new H,Oi=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lb.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Bs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(hu)),this.expandByPoint(Bs.copy(t.center).sub(hu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cb=0,An=new be,fu=new bn,Gr=new H,vn=new hn,ks=new hn,Ze=new H,Wt=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($g(t)?lr:js)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return fu.lookAt(t),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(vn.min,ks.min),vn.expandByPoint(Ze),Ze.addVectors(vn.max,ks.max),vn.expandByPoint(Ze)):(vn.expandByPoint(ks.min),vn.expandByPoint(ks.max))}vn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ze));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(t,c),Ze.add(Gr)),r=Math.max(r,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new H,l[y]=new H;let c=new H,h=new H,u=new H,f=new Jt,d=new Jt,p=new Jt,b=new H,g=new H;function m(y,R,S){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,y),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let T=1/(d.x*p.y-p.x*d.y);isFinite(T)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(T),a[y].add(b),a[R].add(b),a[S].add(b),l[y].add(g),l[R].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,R=x.length;y<R;++y){let S=x[y],T=S.start,L=S.count;for(let O=T,w=T+L;O<w;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new H,v=new H,M=new H,E=new H;function A(y){M.fromBufferAttribute(r,y),E.copy(M);let R=a[y];_.copy(R),_.sub(M.multiplyScalar(M.dot(R))).normalize(),v.crossVectors(E,R);let T=v.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,T)}for(let y=0,R=x.length;y<R;++y){let S=x[y],T=S.start,L=S.count;for(let O=T,w=T+L;O<w;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,h=new H,u=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new _n(f,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ju,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},gn=new H,Qs=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),r=Me(r,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Zs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},du=new H,ub=new H,hb=new te,On=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=du.subVectors(n,e).cross(ub.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(du),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hb.getNormalMatrix(t),r=this.coplanarPoint(du).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},fb=0,ti=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=zi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Fu,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Q().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new On().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},rs=class extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hr,zs=new H,Wr=new H,Xr=new H,Yr=new Jt,Vs=new Jt,Jd=new be,fa=new H,Gs=new H,da=new H,Yf=new Jt,pu=new Jt,qf=new Jt,to=class extends bn{constructor(t=new rs){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new Wt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Za(e,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new Qs(n,3,0,!1)),Hr.setAttribute("uv",new Qs(n,2,3,!1))}this.geometry=Hr,this.material=t,this.center=new Jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),Jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;pa(fa.set(-.5,-.5,0),Xr,o,Wr,r,s),pa(Gs.set(.5,-.5,0),Xr,o,Wr,r,s),pa(da.set(.5,.5,0),Xr,o,Wr,r,s),Yf.set(0,0),pu.set(1,0),qf.set(1,1);let a=t.ray.intersectTriangle(fa,Gs,da,!1,zs);if(a===null&&(pa(Gs.set(-.5,.5,0),Xr,o,Wr,r,s),pu.set(0,1),a=t.ray.intersectTriangle(fa,da,Gs,!1,zs),a===null))return;let l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:mi.getInterpolation(zs,fa,Gs,da,Yf,pu,qf,new Jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pa(i,t,e,n,r,s){Yr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Vs.x=s*Yr.x-r*Yr.y,Vs.y=r*Yr.x+s*Yr.y):Vs.copy(Yr),i.copy(t),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(Jd)}var pi=new H,mu=new H,ma=new H,ga=new H,cr=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){mu.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(mu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=ga.dot(this.direction),l=-ga.dot(ma),c=ga.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(mu).addScaledVector(ma,f),d}intersectSphere(t,e){if(t.radius<0)return null;pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),r=pi.dot(pi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,b=e.y-o.y,g=e.z-o.z,m=n.x-o.x,x=n.y-o.y,_=n.z-o.z,v=Math.abs(l),M=Math.abs(c),E=Math.abs(h),A,y,R,S,T,L,O,w,F,C,P,D;if(v>=M&&v>=E?(R=l,L=u,F=p,D=m,l>=0?(A=c,y=h,S=f,T=d,O=b,w=g,C=x,P=_):(A=h,y=c,S=d,T=f,O=g,w=b,C=_,P=x)):M>=E?(R=c,L=f,F=b,D=x,c>=0?(A=h,y=l,S=d,T=u,O=g,w=p,C=_,P=m):(A=l,y=h,S=u,T=d,O=p,w=g,C=m,P=_)):(R=h,L=d,F=g,D=_,h>=0?(A=l,y=c,S=u,T=f,O=p,w=b,C=m,P=x):(A=c,y=l,S=f,T=u,O=b,w=p,C=x,P=m)),R===0)return null;let B=A/R,k=y/R,V=1/R,X=S-B*L,G=T-k*L,q=O-B*F,et=w-k*F,j=C-B*D,W=P-k*D,Y=j*et-W*q,st=X*W-G*j,at=q*G-et*X;if(r){if(Y<0||st<0||at<0)return null}else if((Y<0||st<0||at<0)&&(Y>0||st>0||at>0))return null;let J=Y+st+at;if(J===0)return null;let ht=V*(Y*L+st*F+at*D);return(J>0?ht<0:ht>0)?null:this.at(ht/J,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$f=new be,rr=new cr,ba=new Oi,Zf=new H,xa=new H,va=new H,ya=new H,gu=new H,_a=new H,Kf=new H,Ma=new H,Pt=class extends bn{constructor(t=new Wt,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){_a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(gu.fromBufferAttribute(u,t),o?_a.addScaledVector(gu,h):_a.addScaledVector(gu.sub(e),h))}e.add(_a)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),rr.copy(t.ray).recast(t.near),!(ba.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ba,Zf)===null||rr.origin.distanceToSquared(Zf)>(t.far-t.near)**2))&&($f.copy(s).invert(),rr.copy(t.ray).applyMatrix4($f),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let E=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);r=Sa(this,m,t,n,c,h,u,E,A,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);r=Sa(this,o,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let E=v,A=v+1,y=v+2;r=Sa(this,m,t,n,c,h,u,E,A,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=g,_=g+1,v=g+2;r=Sa(this,o,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function db(i,t,e,n,r,s,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ii,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ma);return c<e.near||c>e.far?null:{distance:c,point:Ma.clone(),object:i}}function Sa(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,xa),i.getVertexPosition(l,va),i.getVertexPosition(c,ya);let h=db(i,t,e,n,xa,va,ya,Kf);if(h){let u=new H;mi.getBarycoord(Kf,xa,va,ya,u),r&&(h.uv=mi.getInterpolatedAttribute(r,a,l,c,u,new Jt)),s&&(h.uv1=mi.getInterpolatedAttribute(s,a,l,c,u,new Jt)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};mi.getNormal(xa,va,ya,f.normal),h.face=f,h.barycoord=u}return h}var Ka=class extends un{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Je,h=Je,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=new Oi,pb=new Jt(.5,.5),wa=new H,eo=class{constructor(t=new On,e=new On,n=new On,r=new On,s=new On,o=new On){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],b=s[9],g=s[10],m=s[11],x=s[12],_=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-h,m-p,M-x).normalize(),r[1].setComponents(c+o,d+h,m+p,M+x).normalize(),r[2].setComponents(c+a,d+u,m+b,M+_).normalize(),r[3].setComponents(c-a,d-u,m-b,M-_).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,m-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,m-g,M-v).normalize(),e===Un)r[5].setComponents(c+l,d+f,m+g,M+v).normalize();else if(e===$s)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);let e=pb.distanceTo(t.center);return sr.radius=.7071067811865476+e,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(wa.x=r.normal.x>0?t.max.x:t.min.x,wa.y=r.normal.y>0?t.max.y:t.min.y,wa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var We=class extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ja=new H,ja=new H,Jf=new be,Hs=new cr,Ta=new Oi,bu=new H,jf=new H,ss=class extends bn{constructor(t=new Wt,e=new We){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ja.fromBufferAttribute(e,r-1),ja.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ja.distanceTo(ja);t.setAttribute("lineDistance",new Ft(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),Ta.radius+=s,t.ray.intersectsSphere(Ta)===!1)return;Jf.copy(r).invert(),Hs.copy(t.ray).applyMatrix4(Jf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let b=d,g=p-1;b<g;b+=c){let m=h.getX(b),x=h.getX(b+1),_=Ea(this,t,Hs,l,m,x,b);_&&e.push(_)}if(this.isLineLoop){let b=h.getX(p-1),g=h.getX(d),m=Ea(this,t,Hs,l,b,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let b=d,g=p-1;b<g;b+=c){let m=Ea(this,t,Hs,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=Ea(this,t,Hs,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ea(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Ja.fromBufferAttribute(a,r),ja.fromBufferAttribute(a,s),e.distanceSqToSegment(Ja,ja,bu,jf)>n)return;bu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(bu);if(!(c<t.near||c>t.far))return{distance:c,point:jf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Qf=new H,td=new H,Qe=class extends ss{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Qf.fromBufferAttribute(e,r),td.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qf.distanceTo(td);t.setAttribute("lineDistance",new Ft(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ed=new be,Su=new cr,Aa=new Oi,Ra=new H,os=class extends bn{constructor(t=new Wt,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,t.ray.intersectsSphere(Aa)===!1)return;ed.copy(r).invert(),Su.copy(t.ray).applyMatrix4(ed);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,b=d;p<b;p++){let g=c.getX(p);Ra.fromBufferAttribute(u,g),nd(Ra,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,b=d;p<b;p++)Ra.fromBufferAttribute(u,p),nd(Ra,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function nd(i,t,e,n,r,s,o){let a=Su.distanceSqToPoint(i);if(a<e){let l=new H;Su.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var no=class extends un{constructor(t=[],e=Vi,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bn=class extends un{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends un{constructor(t,e,n=zn,r,s,o,a=Je,l=Je,c,h=Jn,u=1){if(h!==Jn&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qa=class extends ei{constructor(t,e=zn,n=Vi,r,s,o=Je,a=Je,l,c=Jn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},io=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},as=class i extends Wt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function p(b,g,m,x,_,v,M,E,A,y,R){let S=v/A,T=M/y,L=v/2,O=M/2,w=E/2,F=A+1,C=y+1,P=0,D=0,B=new H;for(let k=0;k<C;k++){let V=k*T-O;for(let X=0;X<F;X++){let G=X*S-L;B[b]=G*x,B[g]=V*_,B[m]=w,c.push(B.x,B.y,B.z),B[b]=0,B[g]=0,B[m]=E>0?1:-1,h.push(B.x,B.y,B.z),u.push(X/A),u.push(1-k/y),P+=1}}for(let k=0;k<y;k++)for(let V=0;V<A;V++){let X=f+V+F*k,G=f+V+F*(k+1),q=f+(V+1)+F*(k+1),et=f+(V+1)+F*k;l.push(X,G,et),l.push(G,q,et),D+=6}a.addGroup(d,D,R),d+=D,f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ro=class i extends Wt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new H,h=new Jt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function mb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=jd(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=yb(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return so(s,o,e,a,l,c,0),o}function jd(i,t,e,n,r){let s;if(r===Ib(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=id(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=id(o/n|0,i[o],i[o+1],s);return s&&ls(s,s.next)&&(ao(s),s=s.next),s}function hr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||Oe(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function so(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Tb(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?bb(i,n,r,s):gb(i)){t.push(l.i,i.i,c.i),ao(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=xb(hr(i),t),so(i,t,e,n,r,s,2)):o===2&&vb(i,t,e,n,r,s):so(hr(i),t,e,n,r,s,1);break}}}function gb(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Ws(r,a,s,l,o,c,p.x,p.y)&&Oe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function bb(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Oe(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),m=wu(d,p,t,e,n),x=wu(b,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&Ws(a,h,l,u,c,f,_.x,_.y)&&Oe(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ws(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&Ws(a,h,l,u,c,f,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ws(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xb(i,t){let e=i;do{let n=e.prev,r=e.next.next;!ls(n,r)&&tp(n,e,e.next,r)&&oo(n,r)&&oo(r,n)&&(t.push(n.i,e.i,r.i),ao(e),ao(e.next),e=i=r),e=e.next}while(e!==i);return hr(e)}function vb(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rb(o,a)){let l=ep(o,a);o=hr(o,o.next),l=hr(l,l.next),so(o,t,e,n,r,s,0),so(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function yb(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=jd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Ab(c))}r.sort(_b);for(let s=0;s<r.length;s++)e=Mb(r[s],e);return e}function _b(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Mb(i,t){let e=Sb(i,t);if(!e)return t;let n=ep(e,i);return hr(n,n.next),hr(e,e.next)}function Sb(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qd(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);oo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&wb(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function wb(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function Tb(i,t,e,n){let r=i;do r.z===0&&(r.z=wu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Eb(r)}function Eb(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function wu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ab(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qd(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ws(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Qd(i,t,e,n,r,s,o,a)}function Rb(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cb(i,t)&&(oo(i,t)&&oo(t,i)&&Pb(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||ls(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function tp(i,t,e,n){let r=Pa(Oe(i,t,e)),s=Pa(Oe(i,t,n)),o=Pa(Oe(e,n,i)),a=Pa(Oe(e,n,t));return!!(r!==s&&o!==a||r===0&&Ca(i,e,t)||s===0&&Ca(i,n,t)||o===0&&Ca(e,i,n)||a===0&&Ca(e,t,n))}function Ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pa(i){return i>0?1:i<0?-1:0}function Cb(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&tp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function oo(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function Pb(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ep(i,t){let e=Tu(i.i,i.x,i.y),n=Tu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function id(i,t,e,n){let r=Tu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ib(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Eu=class{static triangulate(t,e,n=2){return mb(t,e,n)}},lo=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];rd(t),sd(n,t);let o=t.length;e.forEach(rd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,sd(n,e[l]);let a=Eu.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function rd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var bi=class i extends Wt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],b=[],g=[];for(let m=0;m<h;m++){let x=m*f-o;for(let _=0;_<c;_++){let v=_*u-s;p.push(v,-x,0),b.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,v=x+c*(m+1),M=x+1+c*(m+1),E=x+1+c*m;d.push(_,v,E),d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(b,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},co=class i extends Wt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new H,p=new Jt;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let m=s+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,v=x+n+1,M=x+n+2,E=x+1;a.push(_,v,E),a.push(v,M,E)}}this.setIndex(a),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var uo=class i extends Wt{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new H,f=new H,d=[],p=[],b=[],g=[];for(let m=0;m<=n;m++){let x=[],_=m/n,v=o+_*a,M=t*Math.cos(v),E=Math.sqrt(t*t-M*M),A=0;m===0&&o===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let R=y/e,S=r+R*s;u.x=-E*Math.cos(S),u.y=M,u.z=E*Math.sin(S),p.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),g.push(R+A,1-_),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let _=h[m][x+1],v=h[m][x],M=h[m+1][x],E=h[m+1][x+1];(m!==0||o>0)&&d.push(_,v,E),(m!==n-1||l<Math.PI)&&d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(b,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function gr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(od(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(od(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=gr(i[e]);for(let r in n)t[r]=n[r]}return t}function od(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lb(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var np={clone:gr,merge:dn},Fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fb,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=Lb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Q().setHex(r.value);break;case"v2":this.uniforms[n].value=new Jt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(r.value);break;case"m3":this.uniforms[n].value=new te().fromArray(r.value);break;case"m4":this.uniforms[n].value=new be().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},tl=class extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var el=class extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nl=class extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ui=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},il=class extends Ui{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:s=t,a=2*e-n;break;case Mu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _u:o=t,l=2*n-e;break;case Mu:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*b+.5*p,v=d*g-d*b;for(let M=0;M!==a;++M)s[M]=m*o[h+M]+x*o[c+M]+_*o[l+M]+v*o[u+M];return s}},rl=class extends Ui{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},sl=class extends Ui{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ol=class extends Ui{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),b=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*b+o[l+g]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=o[c+p],g=o[l+p],m=d*f+p*2,x=u[m],_=u[m+1],v=t*f+p*2,M=h[v],E=h[v+1],A=Ob(n,e,x,M,r);s[p]=ip(A,b,_,E,g)}return s}};function ip(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Nb(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Ob(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=ip(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Nb(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Mn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qr(e,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qr(t.times,Array),values:qr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),xu(t.settings)&&(n.settings={inTangents:qr(t.settings.inTangents,Array),outTangents:qr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ol(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case Fa:e=this.InterpolantFactoryMethodSmooth;break;case vu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Fa;case this.InterpolantFactoryMethodBezier:return vu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;xu(this.settings)&&(ad(this.settings.inTangents,t),ad(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&Zg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,xu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ad(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Wa;var Bi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Xs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Mn{constructor(t,e,n,r){super(t,e,n,r)}};al.prototype.ValueTypeName="color";var ll=class extends Mn{constructor(t,e,n,r){super(t,e,n,r)}};ll.prototype.ValueTypeName="number";var cl=class extends Ui{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qn.slerpFlat(s,0,o,c-a,o,c,l);return s}},ho=class extends Mn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Mn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Xs;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Mn{constructor(t,e,n,r){super(t,e,n,r)}};ul.prototype.ValueTypeName="vector";var Na={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(ld(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!ld(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ld(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var hl=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rp=new hl,cs=class{constructor(t){this.manager=t!==void 0?t:rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=new WeakMap,fl=class extends cs{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Na.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=$r.get(o);u===void 0&&(u=[],$r.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=Qr("img");function l(){h(),e&&e(this);let u=$r.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}$r.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),Na.remove(`image:${t}`);let f=$r.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}$r.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Na.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var fr=class extends cs{constructor(t){super(t)}load(t,e,n,r){let s=new un,o=new fl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Ia=new H,La=new Qn,Zn=new H,fo=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ia,La,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ia,La,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new H,cd=new Jt,ud=new Jt,Ke=class extends fo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,cd,ud),e.subVectors(ud,cd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ni=class extends fo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Zr=-90,Kr=1,dl=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ke(Zr,Kr,t,e);r.layers=this.layers,this.add(r);let s=new Ke(Zr,Kr,t,e);s.layers=this.layers,this.add(s);let o=new Ke(Zr,Kr,t,e);o.layers=this.layers,this.add(o);let a=new Ke(Zr,Kr,t,e);a.layers=this.layers,this.add(a);let l=new Ke(Zr,Kr,t,e);l.layers=this.layers,this.add(l);let c=new Ke(Zr,Kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},pl=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var eh="\\[\\]\\.:\\/",Ub=new RegExp("["+eh+"]","g"),nh="[^"+eh+"]",Bb="[^"+eh.replace("\\.","")+"]",kb=/((?:WC+[\/:])*)/.source.replace("WC",nh),zb=/(WCOD+)?/.source.replace("WCOD",Bb),Vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),Gb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Hb=new RegExp("^"+kb+zb+Vb+Gb+"$"),Wb=["material","materials","bones","map"],Au=class{constructor(t,e,n){let r=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ub,"")}static parseTrackName(t){let e=Hb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Wb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Au;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vw=new Float32Array(1);var hd=new be,dr=class{constructor(t,e,n=0,r=1/0){this.ray=new cr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(t,e=!0,n=[]){return Ru(t,this,n,e),n.sort(fd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Ru(t[r],this,n,e);return n.sort(fd),n}};function fd(i,t){return i.distance-t.distance}function Ru(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Ru(s[o],t,e,!0)}}var lh=class lh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};lh.prototype.isMatrix2=!0;var Cu=lh;function ih(i,t,e,n){let r=Xb(n);switch(e){case qu:return i*t;case Zu:return i*t/r.components*r.byteLength;case Ml:return i*t/r.components*r.byteLength;case Wi:return i*t*2/r.components*r.byteLength;case Sl:return i*t*2/r.components*r.byteLength;case $u:return i*t*3/r.components*r.byteLength;case Rn:return i*t*4/r.components*r.byteLength;case wl:return i*t*4/r.components*r.byteLength;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:case Rl:return Math.max(i,16)*Math.max(t,8)/4;case Tl:case Al:return Math.max(i,8)*Math.max(t,8)/2;case Cl:case Pl:case Ll:case Fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Il:case Mo:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zl:case Kl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xb(i){switch(i){case Sn:case Hu:return{byteLength:1,components:1};case hs:case Wu:case Gn:return{byteLength:2,components:1};case yl:case _l:return{byteLength:2,components:4};case zn:case vl:case Vn:return{byteLength:4,components:1};case Xu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ep(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function qb(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var $b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ax=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ey=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ny=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,my=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:$b,alphahash_pars_fragment:Zb,alphamap_fragment:Kb,alphamap_pars_fragment:Jb,alphatest_fragment:jb,alphatest_pars_fragment:Qb,aomap_fragment:tx,aomap_pars_fragment:ex,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:rx,beginnormal_vertex:sx,bsdfs:ox,iridescence_fragment:ax,bumpmap_pars_fragment:lx,clipping_planes_fragment:cx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:hx,clipping_planes_vertex:fx,color_fragment:dx,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:bx,cube_uv_reflection_fragment:xx,defaultnormal_vertex:vx,displacementmap_pars_vertex:yx,displacementmap_vertex:_x,emissivemap_fragment:Mx,emissivemap_pars_fragment:Sx,colorspace_fragment:wx,colorspace_pars_fragment:Tx,envmap_fragment:Ex,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Rx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:zx,envmap_vertex:Px,fog_vertex:Ix,fog_pars_vertex:Lx,fog_fragment:Fx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Nx,lightmap_pars_fragment:Ox,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Bx,lights_pars_begin:kx,lights_toon_fragment:Vx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Hx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:Yx,lights_fragment_begin:qx,lights_fragment_maps:$x,lights_fragment_end:Zx,lightprobes_pars_fragment:Kx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:tv,map_fragment:ev,map_pars_fragment:nv,map_particle_fragment:iv,map_particle_pars_fragment:rv,metalnessmap_fragment:sv,metalnessmap_pars_fragment:ov,morphinstance_vertex:av,morphcolor_vertex:lv,morphnormal_vertex:cv,morphtarget_pars_vertex:uv,morphtarget_vertex:hv,normal_fragment_begin:fv,normal_fragment_maps:dv,normal_pars_fragment:pv,normal_pars_vertex:mv,normal_vertex:gv,normalmap_pars_fragment:bv,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:vv,clearcoat_pars_fragment:yv,iridescence_pars_fragment:_v,opaque_fragment:Mv,packing:Sv,premultiplied_alpha_fragment:wv,project_vertex:Tv,dithering_fragment:Ev,dithering_pars_fragment:Av,roughnessmap_fragment:Rv,roughnessmap_pars_fragment:Cv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:Iv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Fv,skinbase_vertex:Dv,skinning_pars_vertex:Nv,skinning_vertex:Ov,skinnormal_vertex:Uv,specularmap_fragment:Bv,specularmap_pars_fragment:kv,tonemapping_fragment:zv,tonemapping_pars_fragment:Vv,transmission_fragment:Gv,transmission_pars_fragment:Hv,uv_pars_fragment:Wv,uv_pars_vertex:Xv,uv_vertex:Yv,worldpos_vertex:qv,background_vert:$v,background_frag:Zv,backgroundCube_vert:Kv,backgroundCube_frag:Jv,cube_vert:jv,cube_frag:Qv,depth_vert:ty,depth_frag:ey,distance_vert:ny,distance_frag:iy,equirect_vert:ry,equirect_frag:sy,linedashed_vert:oy,linedashed_frag:ay,meshbasic_vert:ly,meshbasic_frag:cy,meshlambert_vert:uy,meshlambert_frag:hy,meshmatcap_vert:fy,meshmatcap_frag:dy,meshnormal_vert:py,meshnormal_frag:my,meshphong_vert:gy,meshphong_frag:by,meshphysical_vert:xy,meshphysical_frag:vy,meshtoon_vert:yy,meshtoon_frag:_y,points_vert:My,points_frag:Sy,shadow_vert:wy,shadow_frag:Ty,sprite_vert:Ey,sprite_frag:Ay},Tt={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},oi={basic:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Q(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:dn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:dn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Q(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:dn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:dn([Tt.points,Tt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:dn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:dn([Tt.common,Tt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:dn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:dn([Tt.sprite,Tt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:dn([Tt.common,Tt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:dn([Tt.lights,Tt.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};oi.physical={uniforms:dn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var ic={r:0,b:0,g:0},Ry=new be,Ap=new te;Ap.set(-1,0,0,0,1,0,0,0,1);function Cy(i,t,e,n,r,s){let o=new Q(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let v=x.backgroundBlurriness>0;_=t.get(_,v)}return _}function p(x){let _=!1,v=d(x);v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===go)?(c===void 0&&(c=new Pt(new as(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:gr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ap),c.material.toneMapped=ce.getTransfer(v.colorSpace)!==ge,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Pt(new bi(2,2),new fn({name:"BackgroundMaterial",uniforms:gr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,_){x.getRGB(ic,th(i)),e.buffers.color.setClear(ic.r,ic.g,ic.b,_,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:p,addToRenderList:b,dispose:m}}function Py(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(T,L,O,w,F){let C=!1,P=u(T,w,O,L);s!==P&&(s=P,c(s.object)),C=d(T,w,O,F),C&&p(T,w,O,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,v(T,L,O,w),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,L,O,w){let F=w.wireframe===!0,C=n[L.id];C===void 0&&(C={},n[L.id]=C);let P=T.isInstancedMesh===!0?T.id:0,D=C[P];D===void 0&&(D={},C[P]=D);let B=D[O.id];B===void 0&&(B={},D[O.id]=B);let k=B[F];return k===void 0&&(k=f(l()),B[F]=k),k}function f(T){let L=[],O=[],w=[];for(let F=0;F<e;F++)L[F]=0,O[F]=0,w[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:w,object:T,attributes:{},index:null}}function d(T,L,O,w){let F=s.attributes,C=L.attributes,P=0,D=O.getAttributes();for(let B in D)if(D[B].location>=0){let V=F[B],X=C[B];if(X===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(X=T.instanceColor)),V===void 0||V.attribute!==X||X&&V.data!==X.data)return!0;P++}return s.attributesNum!==P||s.index!==w}function p(T,L,O,w){let F={},C=L.attributes,P=0,D=O.getAttributes();for(let B in D)if(D[B].location>=0){let V=C[B];V===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(V=T.instanceColor));let X={};X.attribute=V,V&&V.data&&(X.data=V.data),F[B]=X,P++}s.attributes=F,s.attributesNum=P,s.index=w}function b(){let T=s.newAttributes;for(let L=0,O=T.length;L<O;L++)T[L]=0}function g(T){m(T,0)}function m(T,L){let O=s.newAttributes,w=s.enabledAttributes,F=s.attributeDivisors;O[T]=1,w[T]===0&&(i.enableVertexAttribArray(T),w[T]=1),F[T]!==L&&(i.vertexAttribDivisor(T,L),F[T]=L)}function x(){let T=s.newAttributes,L=s.enabledAttributes;for(let O=0,w=L.length;O<w;O++)L[O]!==T[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function _(T,L,O,w,F,C,P){P===!0?i.vertexAttribIPointer(T,L,O,F,C):i.vertexAttribPointer(T,L,O,w,F,C)}function v(T,L,O,w){b();let F=w.attributes,C=O.getAttributes(),P=L.defaultAttributeValues;for(let D in C){let B=C[D];if(B.location>=0){let k=F[D];if(k===void 0&&(D==="instanceMatrix"&&T.instanceMatrix&&(k=T.instanceMatrix),D==="instanceColor"&&T.instanceColor&&(k=T.instanceColor)),k!==void 0){let V=k.normalized,X=k.itemSize,G=t.get(k);if(G===void 0)continue;let q=G.buffer,et=G.type,j=G.bytesPerElement,W=et===i.INT||et===i.UNSIGNED_INT||k.gpuType===vl;if(k.isInterleavedBufferAttribute){let Y=k.data,st=Y.stride,at=k.offset;if(Y.isInstancedInterleavedBuffer){for(let J=0;J<B.locationSize;J++)m(B.location+J,Y.meshPerAttribute);T.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let J=0;J<B.locationSize;J++)g(B.location+J);i.bindBuffer(i.ARRAY_BUFFER,q);for(let J=0;J<B.locationSize;J++)_(B.location+J,X/B.locationSize,et,V,st*j,(at+X/B.locationSize*J)*j,W)}else{if(k.isInstancedBufferAttribute){for(let Y=0;Y<B.locationSize;Y++)m(B.location+Y,k.meshPerAttribute);T.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Y=0;Y<B.locationSize;Y++)g(B.location+Y);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Y=0;Y<B.locationSize;Y++)_(B.location+Y,X/B.locationSize,et,V,X*j,X/B.locationSize*Y*j,W)}}else if(P!==void 0){let V=P[D];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(B.location,V);break;case 3:i.vertexAttrib3fv(B.location,V);break;case 4:i.vertexAttrib4fv(B.location,V);break;default:i.vertexAttrib1fv(B.location,V)}}}}x()}function M(){R();for(let T in n){let L=n[T];for(let O in L){let w=L[O];for(let F in w){let C=w[F];for(let P in C)h(C[P].object),delete C[P];delete w[F]}}delete n[T]}}function E(T){if(n[T.id]===void 0)return;let L=n[T.id];for(let O in L){let w=L[O];for(let F in w){let C=w[F];for(let P in C)h(C[P].object),delete C[P];delete w[F]}}delete n[T.id]}function A(T){for(let L in n){let O=n[L];for(let w in O){let F=O[w];if(F[T.id]===void 0)continue;let C=F[T.id];for(let P in C)h(C[P].object),delete C[P];delete F[T.id]}}}function y(T){for(let L in n){let O=n[L],w=T.isInstancedMesh===!0?T.id:0,F=O[w];if(F!==void 0){for(let C in F){let P=F[C];for(let D in P)h(P[D].object),delete P[D];delete F[C]}delete O[w],Object.keys(O).length===0&&delete n[L]}}}function R(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Iy(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Ly(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Sn&&A!==Vn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:M,samples:E}}function Fy(i){let t=this,e=null,n=0,r=!1,s=!1,o=new On,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||s&&!g)s?h(null):c();else{let x=s?0:n,_=x*4,v=m.clippingState||null;l.value=v,v=h(p,f,_,d);for(let M=0;M!==_;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=d;_!==b;++_,v+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var ps=4,Dy=6,Ny=20,Oy=256,wo=new ni,sp=new Q,ch=null,uh=0,hh=0,fh=!1,Uy=new H,br=new H,sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Uy}=s;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ch,uh,hh),this._renderer.xr.enabled=fh,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Gn,format:Rn,colorSpace:Ys,depthBuffer:!1},r=op(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=By(s)),this._blurMaterial=zy(s,t,e),this._ggxMaterial=ky(s,t,e)}return r}_compileMaterial(t){let e=new Pt(new Wt,t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,r,s){let l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(sp),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new as,new $t({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(sp),m=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));let M=this._cubeSize;ds(r,v*M,_>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Vi||t.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-ps?n-p+ps:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,ds(s,g,m,3*b,2*b),r.setRenderTarget(s),r.render(a,wo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ds(t,g,m,3*b,2*b),r.setRenderTarget(t),r.render(a,wo)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-ps?r-this._lodMax+ps:0),f=4*(this._cubeSize-h);ds(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,wo)}};function By(i){let t=[],e=[],n=i,r=i-ps+1+Dy;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let m=0;m<u;m++){let x=m%3*2/3-1,_=m>2?0:-1,v=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];p.set(v,d*f*m);for(let M=0;M<f;M++){let E=h[M*2]*2-1,A=h[M*2+1]*2-1;m===0?br.set(1,A,E):m===1?br.set(-E,1,-A):m===2?br.set(-E,A,1):m===3?br.set(-1,A,-E):m===4?br.set(-E,-1,A):br.set(E,A,-1),br.toArray(b,(m*f+M)*d)}}let g=new Wt;g.setAttribute("position",new _n(p,d)),g.setAttribute("outputDirection",new _n(b,d)),e.push(new Pt(g,null)),n>ps&&n--}return{lodMeshes:e,sizeLods:t}}function op(i,t,e){let n=new je(i,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ky(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Oy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function zy(i,t,e){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ap(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function lp(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oc=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new no(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:ri});s.uniforms.tEquirect.value=e;let o=new Pt(r,s),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=nn),new dl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Vy(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===gl||d===bl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new oc(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===gl||d===bl,b=d===Vi||d===mr;if(p||b){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new sc(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new sc(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===gl?f.mapping=Vi:d===bl&&(f.mapping=mr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Gy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&or("WebGLRenderer: "+n+" extension not supported."),r}}}function Hy(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,v=x.length;_<v;_+=3){let M=x[_+0],E=x[_+1],A=x[_+2];f.push(M,E,E,A,A,M)}}else{let x=p.array;b=p.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let M=_+0,E=_+1,A=_+2;f.push(M,E,E,A,A,M)}}let g=new(p.count>=65535?lr:js)(f,1);g.version=b;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Wy(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Yy(i,t,e){let n=new WeakMap,r=new Ue;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let v=a.attributes.position.count*_,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*M*4*u),A=new Ks(E,v,M,u);A.type=Vn,A.needsUpdate=!0;let y=_*4;for(let S=0;S<u;S++){let T=g[S],L=m[S],O=x[S],w=v*M*4*S;for(let F=0;F<T.count;F++){let C=F*y;d===!0&&(r.fromBufferAttribute(T,F),E[w+C+0]=r.x,E[w+C+1]=r.y,E[w+C+2]=r.z,E[w+C+3]=0),p===!0&&(r.fromBufferAttribute(L,F),E[w+C+4]=r.x,E[w+C+5]=r.y,E[w+C+6]=r.z,E[w+C+7]=0),b===!0&&(r.fromBufferAttribute(O,F),E[w+C+8]=r.x,E[w+C+9]=r.y,E[w+C+10]=r.z,E[w+C+11]=O.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new Jt(v,M)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function qy(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var $y={[Nu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Uu]:"CINEON_TONE_MAPPING",[Bu]:"ACES_FILMIC_TONE_MAPPING",[zu]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function Zy(i,t,e,n,r,s){let o=new je(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Wt;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let h=new tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Pt(c,h),f=new ni(-1,1,1,-1,0,1),d=null,p=null,b=!1,g,m=null,x=[],_=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let E=0;E<x.length;E++){let A=x[E];A.setSize&&A.setSize(v,M)}},this.setEffects=function(v){x=v,_=x.length>0&&x[0].isRenderPass===!0;let M=o.width,E=o.height;x.length>0&&a===null&&(a=new je(M,E,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new je(M,E,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let y=x[A];y.setSize&&y.setSize(M,E)}},this.begin=function(v,M){if(b||v.toneMapping===kn&&x.length===0)return!1;if(m=M,M!==null){let E=M.width,A=M.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return _===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=kn,!0},this.hasRenderPass=function(){return _},this.end=function(v,M){v.toneMapping=g,b=!0;let E=o,A=a;for(let y=0;y<x.length;y++){let R=x[y];R.enabled!==!1&&(R.render(v,A,E,M),R.needsSwap!==!1&&(E=A,A=A===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},ce.getTransfer(d)===ge&&(h.defines.SRGB_TRANSFER="");let y=$y[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(m),v.render(u,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Rp=new un,mh=new ei(1,1),Cp=new Ks,Pp=new $a,Ip=new no,cp=[],up=[],hp=new Float32Array(16),fp=new Float32Array(9),dp=new Float32Array(4);function gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=cp[r];if(s===void 0&&(s=new Float32Array(r),cp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lc(i,t){let e=up[t];e===void 0&&(e=new Int32Array(t),up[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ky(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function Qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function t1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;dp.set(n),i.uniformMatrix2fv(this.addr,!1,dp),qe(e,n)}}function e1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;fp.set(n),i.uniformMatrix3fv(this.addr,!1,fp),qe(e,n)}}function n1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;hp.set(n),i.uniformMatrix4fv(this.addr,!1,hp),qe(e,n)}}function i1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function s1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function o1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function a1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function c1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function u1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function h1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=e.isReversedDepthBuffer()?nc:ec,s=mh):s=Rp,e.setTexture2D(t||s,r)}function f1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Pp,r)}function d1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ip,r)}function p1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Cp,r)}function m1(i){switch(i){case 5126:return Ky;case 35664:return Jy;case 35665:return jy;case 35666:return Qy;case 35674:return t1;case 35675:return e1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return a1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(i,t){i.uniform1fv(this.addr,t)}function b1(i,t){let e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function x1(i,t){let e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function v1(i,t){let e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function y1(i,t){let e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _1(i,t){let e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function M1(i,t){let e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function S1(i,t){i.uniform1iv(this.addr,t)}function w1(i,t){i.uniform2iv(this.addr,t)}function T1(i,t){i.uniform3iv(this.addr,t)}function E1(i,t){i.uniform4iv(this.addr,t)}function A1(i,t){i.uniform1uiv(this.addr,t)}function R1(i,t){i.uniform2uiv(this.addr,t)}function C1(i,t){i.uniform3uiv(this.addr,t)}function P1(i,t){i.uniform4uiv(this.addr,t)}function I1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),qe(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=mh:o=Rp;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function L1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Pp,s[o])}function F1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ip,s[o])}function D1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Cp,s[o])}function N1(i){switch(i){case 5126:return g1;case 35664:return b1;case 35665:return x1;case 35666:return v1;case 35674:return y1;case 35675:return _1;case 35676:return M1;case 5124:case 35670:return S1;case 35667:case 35671:return w1;case 35668:case 35672:return T1;case 35669:case 35673:return E1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return D1}}var gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m1(e.type)}},bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N1(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function pp(i,t){i.seq.push(t),i.map[t.id]=t}function O1(i,t,e){let n=i.name,r=n.length;for(dh.lastIndex=0;;){let s=dh.exec(n),o=dh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pp(e,c===void 0?new gh(a,i,t):new bh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new xh(a),pp(e,u)),e=u}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);O1(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function mp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var U1=37297,B1=0;function k1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var gp=new te;function z1(i){ce._getMatrix(gp,ce.workingColorSpace,i);let t=`mat3( ${gp.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+k1(i.getShaderSource(t),a)}else return s}function V1(i,t){let e=z1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var G1={[Nu]:"Linear",[Ou]:"Reinhard",[Uu]:"Cineon",[Bu]:"ACESFilmic",[zu]:"AgX",[Vu]:"Neutral",[ku]:"Custom"};function H1(i,t){let e=G1[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rc=new H;function W1(){ce.getLuminanceCoefficients(rc);let i=rc.x.toFixed(4),t=rc.y.toFixed(4),e=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Y1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function q1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Eo(i){return i!==""}function xp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace($1,K1)}var Z1=new Map;function K1(i,t){let e=oe[t];if(e===void 0){let n=Z1.get(t);if(n!==void 0)e=oe[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vh(e)}var J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yp(i){return i.replace(J1,j1)}function j1(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _p(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Q1={[po]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function t_(i){return Q1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e_={[Vi]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE_UV"};function n_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":e_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var i_={[mr]:"ENVMAP_MODE_REFRACTION"};function r_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s_={[Du]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Nd]:"ENVMAP_BLENDING_ADD"};function o_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":s_[i.combine]||"ENVMAP_BLENDING_NONE"}function a_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function l_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=t_(e),c=n_(e),h=r_(e),u=o_(e),f=a_(e),d=X1(e),p=Y1(s),b=r.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Eo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Eo).join(`
`),m.length>0&&(m+=`
`)):(g=[_p(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),m=[_p(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?oe.tonemapping_pars_fragment:"",e.toneMapping!==kn?H1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,V1("linearToOutputTexel",e.outputColorSpace),W1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),o=vh(o),o=xp(o,e),o=vp(o,e),a=vh(a),a=xp(a,e),a=vp(a,e),o=yp(o),a=yp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,v=x+m+a,M=mp(r,r.VERTEX_SHADER,_),E=mp(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,E),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(T){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(b)||"",O=r.getShaderInfoLog(M)||"",w=r.getShaderInfoLog(E)||"",F=L.trim(),C=O.trim(),P=w.trim(),D=!0,B=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,E);else{let k=bp(r,M,"vertex"),V=bp(r,E,"fragment");Zt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+k+`
`+V)}else F!==""?qt("WebGLProgram: Program Info Log:",F):(C===""||P==="")&&(B=!1);B&&(T.diagnostics={runnable:D,programLog:F,vertexShader:{log:C,prefix:g},fragmentShader:{log:P,prefix:m}})}r.deleteShader(M),r.deleteShader(E),y=new ms(r,b),R=q1(r,b)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,U1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=E,this}var c_=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}};function u_(i){return i===Wi||i===Mo||i===So}function h_(i,t,e,n,r,s){let o=new ns,a=new yh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,R,S,T,L,O){let w=T.fog,F=L.geometry,C=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,P=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,D=t.get(y.envMap||C,P),B=D&&D.mapping===go?D.image.height:null,k=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&qt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let V=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,X=V!==void 0?V.length:0,G=0;F.morphAttributes.position!==void 0&&(G=1),F.morphAttributes.normal!==void 0&&(G=2),F.morphAttributes.color!==void 0&&(G=3);let q,et,j,W;if(k){let Ee=oi[k];q=Ee.vertexShader,et=Ee.fragmentShader}else{q=y.vertexShader,et=y.fragmentShader;let Ee=a.getVertexShaderStage(y),pe=a.getFragmentShaderStage(y);a.update(y,Ee,pe),j=Ee.id,W=pe.id}let Y=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),at=L.isInstancedMesh===!0,J=L.isBatchedMesh===!0,ht=!!y.map,pt=!!y.matcap,ut=!!D,bt=!!y.aoMap,Ut=!!y.lightMap,At=!!y.bumpMap&&y.wireframe===!1,Xt=!!y.normalMap,ye=!!y.displacementMap,He=!!y.emissiveMap,Te=!!y.metalnessMap,Le=!!y.roughnessMap,Z=y.anisotropy>0,on=y.clearcoat>0,xe=y.dispersion>0,z=y.retroreflectivity>0,I=y.iridescence>0,tt=y.sheen>0,rt=y.transmission>0,lt=Z&&!!y.anisotropyMap,xt=on&&!!y.clearcoatMap,vt=on&&!!y.clearcoatNormalMap,ct=on&&!!y.clearcoatRoughnessMap,dt=I&&!!y.iridescenceMap,yt=I&&!!y.iridescenceThicknessMap,Vt=tt&&!!y.sheenColorMap,wt=tt&&!!y.sheenRoughnessMap,_t=!!y.specularMap,Gt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,ie=rt&&!!y.transmissionMap,K=rt&&!!y.thicknessMap,Mt=!!y.gradientMap,ft=!!y.alphaMap,St=y.alphaTest>0,Ct=!!y.alphaHash,gt=!!y.extensions,Ht=kn;y.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Bt={shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:et,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:J,batchingColor:J&&L._colorsTexture!==null,instancing:at,instancingColor:at&&L.instanceColor!==null,instancingMorph:at&&L.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:pt,envMap:ut,envMapMode:ut&&D.mapping,envMapCubeUVHeight:B,aoMap:bt,lightMap:Ut,bumpMap:At,normalMap:Xt,displacementMap:ye,emissiveMap:He,normalMapObjectSpace:Xt&&y.normalMapType===Bd,normalMapTangentSpace:Xt&&y.normalMapType===Ku,packedNormalMap:Xt&&y.normalMapType===Ku&&u_(y.normalMap.format),metalnessMap:Te,roughnessMap:Le,anisotropy:Z,anisotropyMap:lt,clearcoat:on,clearcoatMap:xt,clearcoatNormalMap:vt,clearcoatRoughnessMap:ct,dispersion:xe,retroreflection:z,iridescence:I,iridescenceMap:dt,iridescenceThicknessMap:yt,sheen:tt,sheenColorMap:Vt,sheenRoughnessMap:wt,specularMap:_t,specularColorMap:Gt,specularIntensityMap:Yt,transmission:rt,transmissionMap:ie,thicknessMap:K,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===zi&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:St,alphaHash:Ct,combine:y.combine,mapUv:ht&&p(y.map.channel),aoMapUv:bt&&p(y.aoMap.channel),lightMapUv:Ut&&p(y.lightMap.channel),bumpMapUv:At&&p(y.bumpMap.channel),normalMapUv:Xt&&p(y.normalMap.channel),displacementMapUv:ye&&p(y.displacementMap.channel),emissiveMapUv:He&&p(y.emissiveMap.channel),metalnessMapUv:Te&&p(y.metalnessMap.channel),roughnessMapUv:Le&&p(y.roughnessMap.channel),anisotropyMapUv:lt&&p(y.anisotropyMap.channel),clearcoatMapUv:xt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:vt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&p(y.sheenRoughnessMap.channel),specularMapUv:_t&&p(y.specularMap.channel),specularColorMapUv:Gt&&p(y.specularColorMap.channel),specularIntensityMapUv:Yt&&p(y.specularIntensityMap.channel),transmissionMapUv:ie&&p(y.transmissionMap.channel),thicknessMapUv:K&&p(y.thicknessMap.channel),alphaMapUv:ft&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Xt||Z),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ht||ft),fog:!!w,useFog:y.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:st,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:G,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:He&&y.emissiveMap.isVideoTexture===!0&&ce.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===se,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||J)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)R.push(S),R.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(m(R,y),x(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function m(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function x(y,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let R=d[y.type],S;if(R){let T=oi[R];S=np.clone(T.uniforms)}else S=y.uniforms;return S}function v(y,R){let S=h.get(R);return S!==void 0?++S.usedTimes:(S=new l_(i,R,y,r),c.push(S),h.set(R,S)),S}function M(y){if(--y.usedTimes===0){let R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function f_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function d_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Mp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sp(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=o(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function l(f,d,p,b,g,m,x){x.reversedDepth===!0&&(g=-g);let _=a(f,d,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):e.push(_)}function c(f,d,p,b,g,m){let x=a(f,d,p,b,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||d_),n.length>1&&n.sort(d||Mp),r.length>1&&r.sort(d||Mp)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function p_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Sp,i.set(n,[o])):r>=s.length?(o=new Sp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function m_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Q};break;case"SpotLight":e={position:new H,direction:new H,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":e={color:new Q,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function g_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var b_=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){let t=new m_,e=g_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,s=new be,o=new be;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,x=0,_=0,v=0,M=0,E=0,A=0,y=0,R=0,S=0;c.sort(x_);for(let L=0,O=c.length;L<O;L++){let w=c[L],F=w.color,C=w.intensity,P=w.distance,D=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Wi?D=w.shadow.map.texture:D=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=F.r*C,u+=F.g*C,f+=F.b*C;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],C);S++}else if(w.isSunLight){let B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,V=e.get(w);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=D;let X=k.getViewportCount();for(let G=0;G<X;G++)n.sunShadowMatrix[b+G]=k.getMatrix(G),n.sunShadowCascade[b+G]=k._cascadeData[G];b+=X,p++}n.sun[d]=B,d++}else if(w.isDirectionalLight){let B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,V=e.get(w);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=D,n.directionalShadowMatrix[g]=w.shadow.matrix,M++}n.directional[g]=B,g++}else if(w.isSpotLight){let B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(F).multiplyScalar(C),B.distance=P,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[x]=B;let k=w.shadow;if(w.map&&(n.spotLightMap[y]=w.map,y++,k.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[x]=k.matrix,w.castShadow){let V=e.get(w);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=D,A++}x++}else if(w.isRectAreaLight){let B=t.get(w);B.color.copy(F).multiplyScalar(C),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[_]=B,_++}else if(w.isPointLight){let B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){let k=w.shadow,V=e.get(w);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=w.shadow.matrix,E++}n.point[m]=B,m++}else if(w.isHemisphereLight){let B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(C),B.groundColor.copy(w.groundColor).multiplyScalar(C),n.hemi[v]=B,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==g||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==_||T.hemiLength!==v||T.numSunShadows!==p||T.numDirectionalShadows!==M||T.numPointShadows!==E||T.numSpotShadows!==A||T.numSpotMaps!==y||T.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=S,T.sunLength=d,T.directionalLength=g,T.pointLength=m,T.spotLength=x,T.rectAreaLength=_,T.hemiLength=v,T.numSunShadows=p,T.numDirectionalShadows=M,T.numPointShadows=E,T.numSpotShadows=A,T.numSpotMaps=y,T.numLightProbes=S,n.version=b_++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,g=0,m=h.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function wp(i){let t=new v_(i),e=[],n=[],r=[];function s(f){u.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function y_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new wp(i),t.set(r,[a])):s>=o.length?(a=new wp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],w_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Tp=new be,To=new H,ph=new H;function T_(i,t,e){let n=new eo,r=new Jt,s=new Jt,o=new Ue,a=new el,l=new nl,c={},h=e.maxTextureSize,u={[ii]:Xe,[Xe]:ii,[se]:se},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:__,fragmentShader:M_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Wt;p.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Pt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let m=this.type;this.render=function(E,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===md&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po);let R=i.getRenderTarget(),S=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=m!==this.type;O&&A.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(F=>F.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,F=E.length;w<F;w++){let C=E[w],P=C.shadow;if(P===void 0){qt("WebGLShadowMap:",C,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);let D=P.getFrameExtents();r.multiply(D),s.copy(P.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/D.x),r.x=s.x*D.x,P.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/D.y),r.y=s.y*D.y,P.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=B,P.map===null||O===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===us){if(C.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new je(r.x,r.y,{format:Wi,type:Gn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),P.map.texture.name=C.name+".shadowMap",P.map.depthTexture=new ei(r.x,r.y,Vn),P.map.depthTexture.name=C.name+".shadowMapDepth",P.map.depthTexture.format=Jn,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Je,P.map.depthTexture.magFilter=Je}else C.isPointLight?(P.map=new oc(r.x),P.map.depthTexture=new Qa(r.x,zn)):(P.map=new je(r.x,r.y),P.map.depthTexture=new ei(r.x,r.y,zn)),P.map.depthTexture.name=C.name+".shadowMap",P.map.depthTexture.format=Jn,this.type===po?(P.map.depthTexture.compareFunction=B?nc:ec,P.map.depthTexture.minFilter=nn,P.map.depthTexture.magFilter=nn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Je,P.map.depthTexture.magFilter=Je);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==r.x||P.map.height!==r.y)&&P.map.setSize(r.x,r.y);let k=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();C.isPointLight!==!0&&P.updateMatrices(C,y);for(let V=0;V<k;V++){let X=P.getCamera(V);if(C.isPointLight){let G=P.camera,q=P.matrix,et=C.distance||G.far;et!==G.far&&(G.far=et,G.updateProjectionMatrix()),To.setFromMatrixPosition(C.matrixWorld),G.position.copy(To),ph.copy(G.position),ph.add(S_[V]),G.up.copy(w_[V]),G.lookAt(ph),G.updateMatrixWorld(),q.makeTranslation(-To.x,-To.y,-To.z),Tp.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Tp,G.coordinateSystem,G.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,V),i.clear();else{V===0&&(i.setRenderTarget(P.map),i.clear());let G=P.getViewport(V);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),L.viewport(o)}n=P.getFrustum(V),v(A,y,X,C,this.type)}P.isPointLightShadow!==!0&&this.type===us&&x(P,y),P.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,S,T)};function x(E,A){let y=t.update(b);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new je(r.x,r.y,{format:Wi,type:Gn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,y,f,b,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,y,d,b,null)}function _(E,A,y,R){let S=null,T=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)S=T;else if(S=y.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=S.uuid,O=A.uuid,w=c[L];w===void 0&&(w={},c[L]=w);let F=w[O];F===void 0&&(F=S.clone(),w[O]=F,A.addEventListener("dispose",M)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,R===us?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let L=i.properties.get(S);L.light=y}return S}function v(E,A,y,R,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===us)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let O=t.update(E),w=E.material;if(Array.isArray(w)){let F=O.groups;for(let C=0,P=F.length;C<P;C++){let D=F[C],B=w[D.materialIndex];if(B&&B.visible){let k=_(E,B,R,S);E.onBeforeShadow(i,E,A,y,O,k,D),i.renderBufferDirect(y,null,O,k,E,D),E.onAfterShadow(i,E,A,y,O,k,D)}}}else if(w.visible){let F=_(E,w,R,S);E.onBeforeShadow(i,E,A,y,O,F,null),i.renderBufferDirect(y,null,O,F,E,null),E.onAfterShadow(i,E,A,y,O,F,null)}}let L=E.children;for(let O=0,w=L.length;O<w;O++)v(L[O],A,y,R,S)}function M(E){E.target.removeEventListener("dispose",M);for(let y in c){let R=c[y],S=E.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}function E_(i,t){function e(){let K=!1,Mt=new Ue,ft=null,St=new Ue(0,0,0,0);return{setMask:function(Ct){ft!==Ct&&!K&&(i.colorMask(Ct,Ct,Ct,Ct),ft=Ct)},setLocked:function(Ct){K=Ct},setClear:function(Ct,gt,Ht,Bt,Ee){Ee===!0&&(Ct*=Bt,gt*=Bt,Ht*=Bt),Mt.set(Ct,gt,Ht,Bt),St.equals(Mt)===!1&&(i.clearColor(Ct,gt,Ht,Bt),St.copy(Mt))},reset:function(){K=!1,ft=null,St.set(-1,0,0,0)}}}function n(){let K=!1,Mt=!1,ft=null,St=null,Ct=null;return{setReversed:function(gt){if(Mt!==gt){let Ht=t.get("EXT_clip_control");gt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Mt=gt;let Bt=Ct;Ct=null,this.setClear(Bt)}},getReversed:function(){return Mt},setTest:function(gt){gt?Y(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(gt){ft!==gt&&!K&&(i.depthMask(gt),ft=gt)},setFunc:function(gt){if(Mt&&(gt=Zd[gt]),St!==gt){switch(gt){case Oa:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=gt}},setLocked:function(gt){K=gt},setClear:function(gt){Ct!==gt&&(Ct=gt,Mt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){K=!1,ft=null,St=null,Ct=null,Mt=!1}}}function r(){let K=!1,Mt=null,ft=null,St=null,Ct=null,gt=null,Ht=null,Bt=null,Ee=null;return{setTest:function(pe){K||(pe?Y(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(pe){Mt!==pe&&!K&&(i.stencilMask(pe),Mt=pe)},setFunc:function(pe,Ln,qn){(ft!==pe||St!==Ln||Ct!==qn)&&(i.stencilFunc(pe,Ln,qn),ft=pe,St=Ln,Ct=qn)},setOp:function(pe,Ln,qn){(gt!==pe||Ht!==Ln||Bt!==qn)&&(i.stencilOp(pe,Ln,qn),gt=pe,Ht=Ln,Bt=qn)},setLocked:function(pe){K=pe},setClear:function(pe){Ee!==pe&&(i.clearStencil(pe),Ee=pe)},reset:function(){K=!1,Mt=null,ft=null,St=null,Ct=null,gt=null,Ht=null,Bt=null,Ee=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,M=null,E=null,A=null,y=new Q(0,0,0),R=0,S=!1,T=null,L=null,O=null,w=null,F=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,D=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(B)[1]),P=D>=1):B.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),P=D>=2);let k=null,V={},X=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),q=new Ue().fromArray(X),et=new Ue().fromArray(G);function j(K,Mt,ft,St){let Ct=new Uint8Array(4),gt=i.createTexture();i.bindTexture(K,gt),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<ft;Ht++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(Mt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return gt}let W={};W[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(jr),At(!1),Xt(Pu),Y(i.CULL_FACE),bt(ri);function Y(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function st(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function at(K,Mt){return f[K]!==Mt?(i.bindFramebuffer(K,Mt),f[K]=Mt,K===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Mt),K===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function J(K,Mt){let ft=p,St=!1;if(K){ft=d.get(Mt),ft===void 0&&(ft=[],d.set(Mt,ft));let Ct=K.textures;if(ft.length!==Ct.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ht=Ct.length;gt<Ht;gt++)ft[gt]=i.COLOR_ATTACHMENT0+gt;ft.length=Ct.length,St=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,St=!0);St&&i.drawBuffers(ft)}function ht(K){return b!==K?(i.useProgram(K),b=K,!0):!1}let pt={[pr]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};pt[vd]=i.MIN,pt[yd]=i.MAX;let ut={[_d]:i.ZERO,[Md]:i.ONE,[Sd]:i.SRC_COLOR,[Lu]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[Td]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[Fu]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Pd]:i.CONSTANT_COLOR,[Id]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(K,Mt,ft,St,Ct,gt,Ht,Bt,Ee,pe){if(K===ri){g===!0&&(st(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),K!==gd){if(K!==m||pe!==S){if((x!==pr||M!==pr)&&(i.blendEquation(i.FUNC_ADD),x=pr,M=pr),pe)switch(K){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",K);break}else switch(K){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Iu:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mo:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",K);break}_=null,v=null,E=null,A=null,y.set(0,0,0),R=0,m=K,S=pe}return}Ct=Ct||Mt,gt=gt||ft,Ht=Ht||St,(Mt!==x||Ct!==M)&&(i.blendEquationSeparate(pt[Mt],pt[Ct]),x=Mt,M=Ct),(ft!==_||St!==v||gt!==E||Ht!==A)&&(i.blendFuncSeparate(ut[ft],ut[St],ut[gt],ut[Ht]),_=ft,v=St,E=gt,A=Ht),(Bt.equals(y)===!1||Ee!==R)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Ee),y.copy(Bt),R=Ee),m=K,S=!1}function Ut(K,Mt){K.side===se?st(i.CULL_FACE):Y(i.CULL_FACE);let ft=K.side===Xe;Mt&&(ft=!ft),At(ft),K.blending===zi&&K.transparent===!1?bt(ri):bt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),s.setMask(K.colorWrite);let St=K.stencilWrite;a.setTest(St),St&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),He(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(K){T!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),T=K)}function Xt(K){K!==dd?(Y(i.CULL_FACE),K!==L&&(K===Pu?i.cullFace(i.BACK):K===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),L=K}function ye(K){K!==O&&(P&&i.lineWidth(K),O=K)}function He(K,Mt,ft){K?(Y(i.POLYGON_OFFSET_FILL),(w!==Mt||F!==ft)&&(w=Mt,F=ft,o.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,ft))):st(i.POLYGON_OFFSET_FILL)}function Te(K){K?Y(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function Le(K){K===void 0&&(K=i.TEXTURE0+C-1),k!==K&&(i.activeTexture(K),k=K)}function Z(K,Mt,ft){ft===void 0&&(k===null?ft=i.TEXTURE0+C-1:ft=k);let St=V[ft];St===void 0&&(St={type:void 0,texture:void 0},V[ft]=St),(St.type!==K||St.texture!==Mt)&&(k!==ft&&(i.activeTexture(ft),k=ft),i.bindTexture(K,Mt||W[K]),St.type=K,St.texture=Mt)}function on(){let K=V[k];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function xe(){try{i.compressedTexImage2D(...arguments)}catch(K){Zt("WebGLState:",K)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(K){Zt("WebGLState:",K)}}function I(){try{i.texSubImage2D(...arguments)}catch(K){Zt("WebGLState:",K)}}function tt(){try{i.texSubImage3D(...arguments)}catch(K){Zt("WebGLState:",K)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(K){Zt("WebGLState:",K)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(K){Zt("WebGLState:",K)}}function xt(){try{i.texStorage2D(...arguments)}catch(K){Zt("WebGLState:",K)}}function vt(){try{i.texStorage3D(...arguments)}catch(K){Zt("WebGLState:",K)}}function ct(){try{i.texImage2D(...arguments)}catch(K){Zt("WebGLState:",K)}}function dt(){try{i.texImage3D(...arguments)}catch(K){Zt("WebGLState:",K)}}function yt(K){return u[K]!==void 0?u[K]:i.getParameter(K)}function Vt(K,Mt){u[K]!==Mt&&(i.pixelStorei(K,Mt),u[K]=Mt)}function wt(K){q.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),q.copy(K))}function _t(K){et.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),et.copy(K))}function Gt(K,Mt){let ft=c.get(Mt);ft===void 0&&(ft=new WeakMap,c.set(Mt,ft));let St=ft.get(K);St===void 0&&(St=i.getUniformBlockIndex(Mt,K.name),ft.set(K,St))}function Yt(K,Mt){let St=c.get(Mt).get(K);l.get(Mt)!==St&&(i.uniformBlockBinding(Mt,St,K.__bindingPointIndex),l.set(Mt,St))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,V={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,M=null,E=null,A=null,y=new Q(0,0,0),R=0,S=!1,T=null,L=null,O=null,w=null,F=null,q.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:st,bindFramebuffer:at,drawBuffers:J,useProgram:ht,setBlending:bt,setMaterial:Ut,setFlipSided:At,setCullFace:Xt,setLineWidth:ye,setPolygonOffset:He,setScissorTest:Te,activeTexture:Le,bindTexture:Z,unbindTexture:on,compressedTexImage2D:xe,compressedTexImage3D:z,texImage2D:ct,texImage3D:dt,pixelStorei:Vt,getParameter:yt,updateUBOMapping:Gt,uniformBlockBinding:Yt,texStorage2D:xt,texStorage3D:vt,texSubImage2D:I,texSubImage3D:tt,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:wt,viewport:_t,reset:ie}}function A_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,I){return p?new OffscreenCanvas(z,I):Qr("canvas")}function g(z,I,tt){let rt=1,lt=xe(z);if((lt.width>tt||lt.height>tt)&&(rt=tt/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let xt=Math.floor(rt*lt.width),vt=Math.floor(rt*lt.height);f===void 0&&(f=b(xt,vt));let ct=I?b(xt,vt):f;return ct.width=xt,ct.height=vt,ct.getContext("2d").drawImage(z,0,0,xt,vt),qt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+xt+"x"+vt+")."),ct}else return"data"in z&&qt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),z;return z}function m(z){return z.generateMipmaps}function x(z){i.generateMipmap(z)}function _(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(z,I,tt,rt,lt,xt=!1){if(z!==null){if(i[z]!==void 0)return i[z];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let vt;rt&&(vt=t.get("EXT_texture_norm16"),vt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=I;if(I===i.RED&&(tt===i.FLOAT&&(ct=i.R32F),tt===i.HALF_FLOAT&&(ct=i.R16F),tt===i.UNSIGNED_BYTE&&(ct=i.R8),tt===i.UNSIGNED_SHORT&&vt&&(ct=vt.R16_EXT),tt===i.SHORT&&vt&&(ct=vt.R16_SNORM_EXT)),I===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ct=i.R8UI),tt===i.UNSIGNED_SHORT&&(ct=i.R16UI),tt===i.UNSIGNED_INT&&(ct=i.R32UI),tt===i.BYTE&&(ct=i.R8I),tt===i.SHORT&&(ct=i.R16I),tt===i.INT&&(ct=i.R32I)),I===i.RG&&(tt===i.FLOAT&&(ct=i.RG32F),tt===i.HALF_FLOAT&&(ct=i.RG16F),tt===i.UNSIGNED_BYTE&&(ct=i.RG8),tt===i.UNSIGNED_SHORT&&vt&&(ct=vt.RG16_EXT),tt===i.SHORT&&vt&&(ct=vt.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ct=i.RG8UI),tt===i.UNSIGNED_SHORT&&(ct=i.RG16UI),tt===i.UNSIGNED_INT&&(ct=i.RG32UI),tt===i.BYTE&&(ct=i.RG8I),tt===i.SHORT&&(ct=i.RG16I),tt===i.INT&&(ct=i.RG32I)),I===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),tt===i.UNSIGNED_INT&&(ct=i.RGB32UI),tt===i.BYTE&&(ct=i.RGB8I),tt===i.SHORT&&(ct=i.RGB16I),tt===i.INT&&(ct=i.RGB32I)),I===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),tt===i.UNSIGNED_INT&&(ct=i.RGBA32UI),tt===i.BYTE&&(ct=i.RGBA8I),tt===i.SHORT&&(ct=i.RGBA16I),tt===i.INT&&(ct=i.RGBA32I)),I===i.RGB&&(tt===i.UNSIGNED_SHORT&&vt&&(ct=vt.RGB16_EXT),tt===i.SHORT&&vt&&(ct=vt.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),I===i.RGBA){let dt=xt?qs:ce.getTransfer(lt);tt===i.FLOAT&&(ct=i.RGBA32F),tt===i.HALF_FLOAT&&(ct=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(ct=dt===ge?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&vt&&(ct=vt.RGBA16_EXT),tt===i.SHORT&&vt&&(ct=vt.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function M(z,I){let tt;return z?I===null||I===zn||I===fs?tt=i.DEPTH24_STENCIL8:I===Vn?tt=i.DEPTH32F_STENCIL8:I===hs&&(tt=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===zn||I===fs?tt=i.DEPTH_COMPONENT24:I===Vn?tt=i.DEPTH_COMPONENT32F:I===hs&&(tt=i.DEPTH_COMPONENT16),tt}function E(z,I){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==Je&&z.minFilter!==nn?Math.log2(Math.max(I.width,I.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?I.mipmaps.length:1}function A(z){let I=z.target;I.removeEventListener("dispose",A),R(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function y(z){let I=z.target;I.removeEventListener("dispose",y),T(I)}function R(z){let I=n.get(z);if(I.__webglInit===void 0)return;let tt=z.source,rt=d.get(tt);if(rt){let lt=rt[I.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&S(z),Object.keys(rt).length===0&&d.delete(tt)}n.remove(z)}function S(z){let I=n.get(z);i.deleteTexture(I.__webglTexture);let tt=z.source,rt=d.get(tt);delete rt[I.__cacheKey],o.memory.textures--}function T(z){let I=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(I.__webglFramebuffer[rt]))for(let lt=0;lt<I.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(I.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(I.__webglFramebuffer[rt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[rt])}else{if(Array.isArray(I.__webglFramebuffer))for(let rt=0;rt<I.__webglFramebuffer.length;rt++)i.deleteFramebuffer(I.__webglFramebuffer[rt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let rt=0;rt<I.__webglColorRenderbuffer.length;rt++)I.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[rt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let tt=z.textures;for(let rt=0,lt=tt.length;rt<lt;rt++){let xt=n.get(tt[rt]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(tt[rt])}n.remove(z)}let L=0;function O(){L=0}function w(){return L}function F(z){L=z}function C(){let z=L;return z>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,z}function P(z){let I=[];return I.push(z.wrapS),I.push(z.wrapT),I.push(z.wrapR||0),I.push(z.magFilter),I.push(z.minFilter),I.push(z.anisotropy),I.push(z.internalFormat),I.push(z.format),I.push(z.type),I.push(z.generateMipmaps),I.push(z.premultiplyAlpha),I.push(z.flipY),I.push(z.unpackAlignment),I.push(z.colorSpace),I.join()}function D(z,I){let tt=n.get(z);if(z.isVideoTexture&&Z(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&tt.__version!==z.version){let rt=z.image;if(rt===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(tt,z,I);return}}else z.isExternalTexture&&(tt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+I)}function B(z,I){let tt=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){st(tt,z,I);return}else z.isExternalTexture&&(tt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+I)}function k(z,I){let tt=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){st(tt,z,I);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+I)}function V(z,I){let tt=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&tt.__version!==z.version){at(tt,z,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+I)}let X={[ar]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},G={[Je]:i.NEAREST,[Od]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[xl]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},q={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Vd]:i.LESS,[ec]:i.LEQUAL,[Gd]:i.EQUAL,[nc]:i.GEQUAL,[Hd]:i.GREATER,[Wd]:i.NOTEQUAL};function et(z,I){if(I.type===Vn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===nn||I.magFilter===xl||I.magFilter===bo||I.magFilter===Gi||I.minFilter===nn||I.minFilter===xl||I.minFilter===bo||I.minFilter===Gi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,X[I.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,X[I.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,X[I.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,G[I.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,G[I.minFilter]),I.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,q[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Je||I.minFilter!==bo&&I.minFilter!==Gi||I.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function j(z,I){let tt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,I.addEventListener("dispose",A));let rt=I.source,lt=d.get(rt);lt===void 0&&(lt={},d.set(rt,lt));let xt=P(I);if(xt!==z.__cacheKey){lt[xt]===void 0&&(lt[xt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),lt[xt].usedTimes++;let vt=lt[z.__cacheKey];vt!==void 0&&(lt[z.__cacheKey].usedTimes--,vt.usedTimes===0&&S(I)),z.__cacheKey=xt,z.__webglTexture=lt[xt].texture}return tt}function W(z,I,tt){return Math.floor(Math.floor(z/tt)/I)}function Y(z,I,tt,rt){let xt=z.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,tt,rt,I.data);else{xt.sort((Vt,wt)=>Vt.start-wt.start);let vt=0;for(let Vt=1;Vt<xt.length;Vt++){let wt=xt[vt],_t=xt[Vt],Gt=wt.start+wt.count,Yt=W(_t.start,I.width,4),ie=W(wt.start,I.width,4);_t.start<=Gt+1&&Yt===ie&&W(_t.start+_t.count-1,I.width,4)===Yt?wt.count=Math.max(wt.count,_t.start+_t.count-wt.start):(++vt,xt[vt]=_t)}xt.length=vt+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Vt=0,wt=xt.length;Vt<wt;Vt++){let _t=xt[Vt],Gt=Math.floor(_t.start/4),Yt=Math.ceil(_t.count/4),ie=Gt%I.width,K=Math.floor(Gt/I.width),Mt=Yt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,K),e.texSubImage2D(i.TEXTURE_2D,0,ie,K,Mt,ft,tt,rt,I.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function st(z,I,tt){let rt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(rt=i.TEXTURE_3D);let lt=j(z,I),xt=I.source;e.bindTexture(rt,z.__webglTexture,i.TEXTURE0+tt);let vt=n.get(xt);if(xt.version!==vt.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let ft=ce.getPrimaries(ce.workingColorSpace),St=I.colorSpace===xi?null:ce.getPrimaries(I.colorSpace),Ct=I.colorSpace===xi||ft===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let dt=g(I.image,!1,r.maxTextureSize);dt=on(I,dt);let yt=s.convert(I.format,I.colorSpace),Vt=s.convert(I.type),wt=v(I.internalFormat,yt,Vt,I.normalized,I.colorSpace,I.isVideoTexture);et(rt,I);let _t,Gt=I.mipmaps,Yt=I.isVideoTexture!==!0,ie=vt.__version===void 0||lt===!0,K=xt.dataReady,Mt=E(I,dt);if(I.isDepthTexture)wt=M(I.format===Hi,I.type),ie&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,wt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,wt,dt.width,dt.height,0,yt,Vt,null));else if(I.isDataTexture)if(Gt.length>0){Yt&&ie&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,Gt[0].width,Gt[0].height);for(let ft=0,St=Gt.length;ft<St;ft++)_t=Gt[ft],Yt?K&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,Vt,_t.data):e.texImage2D(i.TEXTURE_2D,ft,wt,_t.width,_t.height,0,yt,Vt,_t.data);I.generateMipmaps=!1}else Yt?(ie&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,dt.width,dt.height),K&&Y(I,dt,yt,Vt)):e.texImage2D(i.TEXTURE_2D,0,wt,dt.width,dt.height,0,yt,Vt,dt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Yt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,wt,Gt[0].width,Gt[0].height,dt.depth);for(let ft=0,St=Gt.length;ft<St;ft++)if(_t=Gt[ft],I.format!==Rn)if(yt!==null)if(Yt){if(K)if(I.layerUpdates.size>0){let Ct=ih(_t.width,_t.height,I.format,I.type);for(let gt of I.layerUpdates){let Ht=_t.data.subarray(gt*Ct/_t.data.BYTES_PER_ELEMENT,(gt+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,gt,_t.width,_t.height,1,yt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,dt.depth,yt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,wt,_t.width,_t.height,dt.depth,0,_t.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,dt.depth,yt,Vt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,wt,_t.width,_t.height,dt.depth,0,yt,Vt,_t.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{Yt&&ie&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,Gt[0].width,Gt[0].height);for(let ft=0,St=Gt.length;ft<St;ft++)_t=Gt[ft],I.format!==Rn?yt!==null?Yt?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,wt,_t.width,_t.height,0,_t.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?K&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,Vt,_t.data):e.texImage2D(i.TEXTURE_2D,ft,wt,_t.width,_t.height,0,yt,Vt,_t.data)}else if(I.isDataArrayTexture)if(Yt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,wt,dt.width,dt.height,dt.depth),K)if(I.layerUpdates.size>0){let ft=ih(dt.width,dt.height,I.format,I.type);for(let St of I.layerUpdates){let Ct=dt.data.subarray(St*ft/dt.data.BYTES_PER_ELEMENT,(St+1)*ft/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,dt.width,dt.height,1,yt,Vt,Ct)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,yt,Vt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,dt.width,dt.height,dt.depth,0,yt,Vt,dt.data);else if(I.isData3DTexture)Yt?(ie&&e.texStorage3D(i.TEXTURE_3D,Mt,wt,dt.width,dt.height,dt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,yt,Vt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,wt,dt.width,dt.height,dt.depth,0,yt,Vt,dt.data);else if(I.isFramebufferTexture){if(ie)if(Yt)e.texStorage2D(i.TEXTURE_2D,Mt,wt,dt.width,dt.height);else{let ft=dt.width,St=dt.height;for(let Ct=0;Ct<Mt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,wt,ft,St,0,yt,Vt,null),ft>>=1,St>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),dt.parentNode!==ft){ft.appendChild(dt),u.add(I),ft.onpaint=St=>{let Ct=St.changedElements;for(let gt of u)Ct.includes(gt.image)&&(gt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let Ct=i.RGBA,gt=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,gt,Ht,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Yt&&ie){let ft=xe(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,wt,ft.width,ft.height)}for(let ft=0,St=Gt.length;ft<St;ft++)_t=Gt[ft],Yt?K&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt,Vt,_t):e.texImage2D(i.TEXTURE_2D,ft,wt,yt,Vt,_t);I.generateMipmaps=!1}else if(Yt){if(ie){let ft=xe(dt);e.texStorage2D(i.TEXTURE_2D,Mt,wt,ft.width,ft.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Vt,dt)}else e.texImage2D(i.TEXTURE_2D,0,wt,yt,Vt,dt);m(I)&&x(rt),vt.__version=xt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function at(z,I,tt){if(I.image.length!==6)return;let rt=j(z,I),lt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+tt);let xt=n.get(lt);if(lt.version!==xt.__version||rt===!0){e.activeTexture(i.TEXTURE0+tt);let vt=ce.getPrimaries(ce.workingColorSpace),ct=I.colorSpace===xi?null:ce.getPrimaries(I.colorSpace),dt=I.colorSpace===xi||vt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let yt=I.isCompressedTexture||I.image[0].isCompressedTexture,Vt=I.image[0]&&I.image[0].isDataTexture,wt=[];for(let gt=0;gt<6;gt++)!yt&&!Vt?wt[gt]=g(I.image[gt],!0,r.maxCubemapSize):wt[gt]=Vt?I.image[gt].image:I.image[gt],wt[gt]=on(I,wt[gt]);let _t=wt[0],Gt=s.convert(I.format,I.colorSpace),Yt=s.convert(I.type),ie=v(I.internalFormat,Gt,Yt,I.normalized,I.colorSpace),K=I.isVideoTexture!==!0,Mt=xt.__version===void 0||rt===!0,ft=lt.dataReady,St=E(I,_t);et(i.TEXTURE_CUBE_MAP,I);let Ct;if(yt){K&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ie,_t.width,_t.height);for(let gt=0;gt<6;gt++){Ct=wt[gt].mipmaps;for(let Ht=0;Ht<Ct.length;Ht++){let Bt=Ct[Ht];I.format!==Rn?Gt!==null?K?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,Bt.width,Bt.height,Gt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,ie,Bt.width,Bt.height,0,Bt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,Bt.width,Bt.height,Gt,Yt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,ie,Bt.width,Bt.height,0,Gt,Yt,Bt.data)}}}else{if(Ct=I.mipmaps,K&&Mt){Ct.length>0&&St++;let gt=xe(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ie,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Vt){K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,wt[gt].width,wt[gt].height,Gt,Yt,wt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,wt[gt].width,wt[gt].height,0,Gt,Yt,wt[gt].data);for(let Ht=0;Ht<Ct.length;Ht++){let Ee=Ct[Ht].image[gt].image;K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Ee.width,Ee.height,Gt,Yt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,ie,Ee.width,Ee.height,0,Gt,Yt,Ee.data)}}else{K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt,Yt,wt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Gt,Yt,wt[gt]);for(let Ht=0;Ht<Ct.length;Ht++){let Bt=Ct[Ht];K?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Gt,Yt,Bt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,ie,Gt,Yt,Bt.image[gt])}}}m(I)&&x(i.TEXTURE_CUBE_MAP),xt.__version=lt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function J(z,I,tt,rt,lt,xt){let vt=s.convert(tt.format,tt.colorSpace),ct=s.convert(tt.type),dt=v(tt.internalFormat,vt,ct,tt.normalized,tt.colorSpace),yt=n.get(I),Vt=n.get(tt);if(Vt.__renderTarget=I,!yt.__hasExternalTextures){let wt=Math.max(1,I.width>>xt),_t=Math.max(1,I.height>>xt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,xt,dt,wt,_t,I.depth,0,vt,ct,null):e.texImage2D(lt,xt,dt,wt,_t,0,vt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),Le(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,Vt.__webglTexture,0,Te(I)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,Vt.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(z,I,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,z),I.depthBuffer){let rt=I.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,xt=M(I.stencilBuffer,lt),vt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(I),xt,I.width,I.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(I),xt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,z)}else{let rt=I.textures;for(let lt=0;lt<rt.length;lt++){let xt=rt[lt],vt=s.convert(xt.format,xt.colorSpace),ct=s.convert(xt.type),dt=v(xt.internalFormat,vt,ct,xt.normalized,xt.colorSpace);Le(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(I),dt,I.width,I.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(I),dt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,dt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(z,I,tt){let rt=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(I.depthTexture);if(lt.__renderTarget=I,(!lt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),rt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,I.depthTexture.addEventListener("dispose",A)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),et(i.TEXTURE_CUBE_MAP,I.depthTexture);let yt=s.convert(I.depthTexture.format),Vt=s.convert(I.depthTexture.type),wt;I.depthTexture.format===Jn?wt=i.DEPTH_COMPONENT24:I.depthTexture.format===Hi&&(wt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,wt,I.width,I.height,0,yt,Vt,null)}}else D(I.depthTexture,0);let xt=lt.__webglTexture,vt=Te(I),ct=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,dt=I.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===Jn)Le(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,xt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,xt,0);else if(I.depthTexture.format===Hi)Le(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,ct,xt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,ct,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(z){let I=n.get(z),tt=z.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==z.depthTexture){let rt=z.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),rt){let lt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),I.__depthDisposeCallback=lt}I.__boundDepthTexture=rt}if(z.depthTexture&&!I.__autoAllocateDepthBuffer)if(tt)for(let rt=0;rt<6;rt++)pt(I.__webglFramebuffer[rt],z,rt);else{let rt=z.texture.mipmaps;rt&&rt.length>0?pt(I.__webglFramebuffer[0],z,0):pt(I.__webglFramebuffer,z,0)}else if(tt){I.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[rt]),I.__webglDepthbuffer[rt]===void 0)I.__webglDepthbuffer[rt]=i.createRenderbuffer(),ht(I.__webglDepthbuffer[rt],z,!1);else{let lt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,xt)}}else{let rt=z.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),ht(I.__webglDepthbuffer,z,!1);else{let lt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(z,I,tt){let rt=n.get(z);I!==void 0&&J(rt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&ut(z)}function Ut(z){let I=z.texture,tt=n.get(z),rt=n.get(I);z.addEventListener("dispose",y);let lt=z.textures,xt=z.isWebGLCubeRenderTarget===!0,vt=lt.length>1;if(vt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=I.version,o.memory.textures++),xt){tt.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(I.mipmaps&&I.mipmaps.length>0){tt.__webglFramebuffer[ct]=[];for(let dt=0;dt<I.mipmaps.length;dt++)tt.__webglFramebuffer[ct][dt]=i.createFramebuffer()}else tt.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){tt.__webglFramebuffer=[];for(let ct=0;ct<I.mipmaps.length;ct++)tt.__webglFramebuffer[ct]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ct=0,dt=lt.length;ct<dt;ct++){let yt=n.get(lt[ct]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&Le(z)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let ct=0;ct<lt.length;ct++){let dt=lt[ct];tt.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[ct]);let yt=s.convert(dt.format,dt.colorSpace),Vt=s.convert(dt.type),wt=v(dt.internalFormat,yt,Vt,dt.normalized,dt.colorSpace,z.isXRRenderTarget===!0),_t=Te(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,wt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,tt.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(tt.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),et(i.TEXTURE_CUBE_MAP,I);for(let ct=0;ct<6;ct++)if(I.mipmaps&&I.mipmaps.length>0)for(let dt=0;dt<I.mipmaps.length;dt++)J(tt.__webglFramebuffer[ct][dt],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else J(tt.__webglFramebuffer[ct],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(I)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ct=0,dt=lt.length;ct<dt;ct++){let yt=lt[ct],Vt=n.get(yt),wt=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(wt=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Vt.__webglTexture),et(wt,yt),J(tt.__webglFramebuffer,z,yt,i.COLOR_ATTACHMENT0+ct,wt,0),m(yt)&&x(wt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ct=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,rt.__webglTexture),et(ct,I),I.mipmaps&&I.mipmaps.length>0)for(let dt=0;dt<I.mipmaps.length;dt++)J(tt.__webglFramebuffer[dt],z,I,i.COLOR_ATTACHMENT0,ct,dt);else J(tt.__webglFramebuffer,z,I,i.COLOR_ATTACHMENT0,ct,0);m(I)&&x(ct),e.unbindTexture()}z.depthBuffer&&ut(z)}function At(z){let I=z.textures;for(let tt=0,rt=I.length;tt<rt;tt++){let lt=I[tt];if(m(lt)){let xt=_(z),vt=n.get(lt).__webglTexture;e.bindTexture(xt,vt),x(xt),e.unbindTexture()}}}let Xt=[],ye=[];function He(z){if(z.samples>0){if(Le(z)===!1){let I=z.textures,tt=z.width,rt=z.height,lt=i.COLOR_BUFFER_BIT,xt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(z),ct=I.length>1;if(ct)for(let yt=0;yt<I.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let dt=z.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let yt=0;yt<I.length;yt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);let Vt=n.get(I[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,tt,rt,0,0,tt,rt,lt,i.NEAREST),l===!0&&(Xt.length=0,ye.length=0,Xt.push(i.COLOR_ATTACHMENT0+yt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Xt.push(xt),ye.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let yt=0;yt<I.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);let Vt=n.get(I[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let I=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function Te(z){return Math.min(r.maxSamples,z.samples)}function Le(z){let I=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Z(z){let I=o.render.frame;h.get(z)!==I&&(h.set(z,I),z.update())}function on(z,I){let tt=z.colorSpace,rt=z.format,lt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||tt!==Ys&&tt!==xi&&(ce.getTransfer(tt)===ge?(rt!==Rn||lt!==Sn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",tt)),I}function xe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=O,this.getTextureUnits=w,this.setTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=bt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R_(i,t){function e(n,r=xi){let s,o=ce.getTransfer(r);if(n===Sn)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===qu)return i.ALPHA;if(n===$u)return i.RGB;if(n===Rn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===Zu)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===xo||n===vo||n===yo||n===_o)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===El||n===Al||n===Rl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Pl||n===Il||n===Ll||n===Fl||n===Mo||n===Dl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cl||n===Pl)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Il)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ll)return s.COMPRESSED_R11_EAC;if(n===Fl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Mo)return s.COMPRESSED_RG11_EAC;if(n===Dl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ol||n===Ul||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Yl||n===ql||n===$l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zl||n===Kl||n===Jl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Zl)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===Ql||n===So||n===tc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===jl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends jn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",g=new Mh,m={},x=e.getContextAttributes(),_=null,v=null,M=[],E=[],A=new Jt,y=null,R=null,S=new Ke;S.viewport=new Ue;let T=new Ke;T.viewport=new Ue;let L=[S,T],O=new pl,w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=M[W];return Y===void 0&&(Y=new is,M[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=M[W];return Y===void 0&&(Y=new is,M[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=M[W];return Y===void 0&&(Y=new is,M[W]=Y),Y.getHandSpace()};function C(W){let Y=E.indexOf(W.inputSource);if(Y===-1)return;let st=M[Y];st!==void 0&&(st.update(W.inputSource,W.frame,c||o),st.dispatchEvent({type:W.type,data:W.inputSource}))}function P(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",D);for(let W=0;W<M.length;W++){let Y=E[W];Y!==null&&(E[W]=null,M[W].disconnect(Y))}w=null,F=null,g.reset();for(let W in m)delete m[W];if(t.setRenderTarget(_),d=null,f=null,u=null,r=null,v=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),R!==null){let W=R.camera;W.fov=R.fov,W.zoom=R.zoom,W.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",P),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,at=null,J=null;x.depth&&(J=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=x.stencil?Hi:Jn,at=x.stencil?fs:zn);let ht={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(ht),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new je(f.textureWidth,f.textureHeight,{format:Rn,type:Sn,depthTexture:new ei(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let st={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new je(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(W){for(let Y=0;Y<W.removed.length;Y++){let st=W.removed[Y],at=E.indexOf(st);at>=0&&(E[at]=null,M[at].disconnect(st))}for(let Y=0;Y<W.added.length;Y++){let st=W.added[Y],at=E.indexOf(st);if(at===-1){for(let ht=0;ht<M.length;ht++)if(ht>=E.length){E.push(st),at=ht;break}else if(E[ht]===null){E[ht]=st,at=ht;break}if(at===-1)break}let J=M[at];J&&J.connect(st)}}let B=new H,k=new H;function V(W,Y,st){B.setFromMatrixPosition(Y.matrixWorld),k.setFromMatrixPosition(st.matrixWorld);let at=B.distanceTo(k),J=Y.projectionMatrix.elements,ht=st.projectionMatrix.elements,pt=J[14]/(J[10]-1),ut=J[14]/(J[10]+1),bt=(J[9]+1)/J[5],Ut=(J[9]-1)/J[5],At=(J[8]-1)/J[0],Xt=(ht[8]+1)/ht[0],ye=pt*At,He=pt*Xt,Te=at/(-At+Xt),Le=Te*-At;if(Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(Te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),J[10]===-1)W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Z=pt+Te,on=ut+Te,xe=ye-Le,z=He+(at-Le),I=bt*ut/on*Z,tt=Ut*ut/on*Z;W.projectionMatrix.makePerspective(xe,z,I,tt,Z,on),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function X(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Y=W.near,st=W.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(st=g.depthFar)),O.near=T.near=S.near=Y,O.far=T.far=S.far=st,(w!==O.near||F!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),w=O.near,F=O.far),O.layers.mask=W.layers.mask|6,S.layers.mask=O.layers.mask&-5,T.layers.mask=O.layers.mask&-3;let at=W.parent,J=O.cameras;X(O,at);for(let ht=0;ht<J.length;ht++)X(J[ht],at);J.length===2?V(O,S,T):O.projectionMatrix.copy(S.projectionMatrix),R===null&&W.isPerspectiveCamera&&(R={camera:W,fov:W.fov,zoom:W.zoom}),G(W,O,at)};function G(W,Y,st){st===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(st.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(W){return m[W]};let q=null;function et(W,Y){if(h=Y.getViewerPose(c||o),p=Y,h!==null){let st=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let at=!1;st.length!==O.cameras.length&&(O.cameras.length=0,at=!0);for(let ut=0;ut<st.length;ut++){let bt=st[ut],Ut=null;if(d!==null)Ut=d.getViewport(bt);else{let Xt=u.getViewSubImage(f,bt);Ut=Xt.viewport,ut===0&&(t.setRenderTargetTextures(v,Xt.colorTexture,Xt.depthStencilTexture),t.setRenderTarget(v))}let At=L[ut];At===void 0&&(At=new Ke,At.layers.enable(ut),At.viewport=new Ue,L[ut]=At),At.matrix.fromArray(bt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(bt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ut===0&&(O.matrix.copy(At.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),at===!0&&O.cameras.push(At)}let J=r.enabledFeatures;if(J&&J.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let ut=u.getDepthInformation(st[0]);ut&&ut.isValid&&ut.texture&&g.init(ut,r.renderState)}if(J&&J.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let ut=0;ut<st.length;ut++){let bt=st[ut].camera;if(bt){let Ut=m[bt];Ut||(Ut=new io,m[bt]=Ut);let At=u.getCameraImage(bt);Ut.sourceTexture=At}}}}for(let st=0;st<M.length;st++){let at=E[st],J=M[st];at!==null&&J!==void 0&&J.update(at,Y,c||o)}q&&q(W,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}let j=new Ep;j.setAnimationLoop(et),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}},I_=new be,Lp=new te;Lp.set(-1,0,0,0,1,0,0,0,1);function L_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,th(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,_,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),b(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Xe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Xe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Lp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function F_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let E=M.program;n.uniformBlockBinding(v,E)}function c(v,M){let E=r[v.id];E===void 0&&(g(v),E=h(v),r[v.id]=E,v.addEventListener("dispose",x));let A=M.program;n.updateUBOMapping(v,A);let y=t.render.frame;s[v.id]!==y&&(f(v),s[v.id]=y)}function h(v){let M=u();v.__bindingPointIndex=M;let E=i.createBuffer(),A=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],E=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,R=E.length;y<R;y++){let S=E[y];if(Array.isArray(S))for(let T=0,L=S.length;T<L;T++)d(S[T],y,T,A);else d(S,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,E,A){if(b(v,M,E,A)===!0){let y=v.__offset,R=v.value;if(Array.isArray(R)){let S=0;for(let T=0;T<R.length;T++){let L=R[T],O=m(L);p(L,v.__data,S),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(S+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,M,E){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,E)}function b(v,M,E,A){let y=v.value,R=M+"_"+E;if(A[R]===void 0)return typeof y=="number"||typeof y=="boolean"?A[R]=y:ArrayBuffer.isView(y)?A[R]=y.slice():A[R]=y.clone(),!0;{let S=A[R];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return A[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function g(v){let M=v.uniforms,E=0,A=16;for(let R=0,S=M.length;R<S;R++){let T=Array.isArray(M[R])?M[R]:[M[R]];for(let L=0,O=T.length;L<O;L++){let w=T[L],F=Array.isArray(w.value)?w.value:[w.value];for(let C=0,P=F.length;C<P;C++){let D=F[C],B=m(D),k=E%A,V=k%B.boundary,X=k+V;E+=V,X!==0&&A-X<B.storage&&(E+=A-X),w.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=E,E+=B.storage}}}let y=E%A;return y>0&&(E+=A-y),v.__size=E,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}var D_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function N_(){return si===null&&(si=new Ka(D_,16,16,Wi,Gn),si.name="DFG_LUT",si.minFilter=nn,si.magFilter=nn,si.wrapS=yn,si.wrapT=yn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var xr=class{constructor(t={}){let{canvas:e=Yd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Sn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let b=d,g=new Set([wl,Sl,Ml]),m=new Set([Sn,zn,hs,fs,yl,_l]),x=new Uint32Array(4),_=new Int32Array(4),v=new H,M=null,E=null,A=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,T=!1,L=null,O=null,w=null,F=null;this._outputColorSpace=Pe;let C=0,P=0,D=null,B=-1,k=null,V=new Ue,X=new Ue,G=null,q=new Q(0),et=0,j=e.width,W=e.height,Y=1,st=null,at=null,J=new Ue(0,0,j,W),ht=new Ue(0,0,j,W),pt=!1,ut=new eo,bt=!1,Ut=!1,At=new be,Xt=new H,ye=new Ue,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Le(){return D===null?Y:1}let Z=n;function on(U,$){return e.getContext(U,$)}let xe,z,I,tt,rt,lt,xt,vt,ct,dt,yt,Vt,wt,_t,Gt,Yt,ie,K,Mt,ft,St,Ct,gt;try{let U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Ln,!1),Z===null){let $="webgl2";if(Z=on($,U),Z===null)throw on($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(U){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),Zt("WebGLRenderer: "+U.message),U}function Ht(){xe=new Gy(Z),xe.init(),St=new R_(Z,xe),z=new Ly(Z,xe,t,St),I=new E_(Z,xe),z.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),O=Z.createFramebuffer(),w=Z.createFramebuffer(),F=Z.createFramebuffer(),tt=new Xy(Z),rt=new f_,lt=new A_(Z,xe,I,rt,z,St,tt),xt=new Vy(S),vt=new qb(Z),Ct=new Py(Z,vt),ct=new Hy(Z,vt,tt,Ct),dt=new qy(Z,ct,vt,Ct,tt),K=new Yy(Z,z,lt),Gt=new Fy(rt),yt=new h_(S,xt,xe,z,Ct,Gt),Vt=new L_(S,rt),wt=new p_,_t=new y_(xe),ie=new Cy(S,xt,I,dt,p,l),Yt=new T_(S,dt,z),gt=new F_(Z,tt,z,I),Mt=new Iy(Z,xe,tt),ft=new Wy(Z,xe,tt),tt.programs=yt.programs,S.capabilities=z,S.extensions=xe,S.properties=rt,S.renderLists=wt,S.shadowMap=Yt,S.state=I,S.info=tt}b!==Sn&&(R=new Zy(b,e.width,e.height,a,r,s));let Bt=new Sh(S,Z);this.xr=Bt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let U=xe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=xe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(U){U!==void 0&&(Y=U,this.setSize(j,W,!1))},this.getSize=function(U){return U.set(j,W)},this.setSize=function(U,$,ot=!0){if(Bt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=U,W=$,e.width=Math.floor(U*Y),e.height=Math.floor($*Y),ot===!0&&(e.style.width=U+"px",e.style.height=$+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,U,$)},this.getDrawingBufferSize=function(U){return U.set(j*Y,W*Y).floor()},this.setDrawingBufferSize=function(U,$,ot){j=U,W=$,Y=ot,e.width=Math.floor(U*ot),e.height=Math.floor($*ot),this.setViewport(0,0,U,$)},this.setEffects=function(U){if(b===Sn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let $=0;$<U.length;$++)if(U[$].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(V)},this.getViewport=function(U){return U.copy(J)},this.setViewport=function(U,$,ot,nt){U.isVector4?J.set(U.x,U.y,U.z,U.w):J.set(U,$,ot,nt),I.viewport(V.copy(J).multiplyScalar(Y).round())},this.getScissor=function(U){return U.copy(ht)},this.setScissor=function(U,$,ot,nt){U.isVector4?ht.set(U.x,U.y,U.z,U.w):ht.set(U,$,ot,nt),I.scissor(X.copy(ht).multiplyScalar(Y).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(U){I.setScissorTest(pt=U)},this.setOpaqueSort=function(U){st=U},this.setTransparentSort=function(U){at=U},this.getClearColor=function(U){return U.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(U=!0,$=!0,ot=!0){let nt=0;if(U){let it=!1;if(D!==null){let Rt=D.texture.format;it=g.has(Rt)}if(it){let Rt=D.texture.type,Lt=m.has(Rt),Et=ie.getClearColor(),Nt=ie.getClearAlpha(),kt=Et.r,re=Et.g,le=Et.b;Lt?(x[0]=kt,x[1]=re,x[2]=le,x[3]=Nt,Z.clearBufferuiv(Z.COLOR,0,x)):(_[0]=kt,_[1]=re,_[2]=le,_[3]=Nt,Z.clearBufferiv(Z.COLOR,0,_))}else nt|=Z.COLOR_BUFFER_BIT}$&&(nt|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(nt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Z.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),L=U},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Ln,!1),ie.dispose(),wt.dispose(),_t.dispose(),rt.dispose(),xt.dispose(),dt.dispose(),Ct.dispose(),gt.dispose(),yt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Tf),Bt.removeEventListener("sessionend",Ef),er.stop()};function Ee(U){U.preventDefault(),Zs("WebGLRenderer: Context Lost."),T=!0}function pe(){Zs("WebGLRenderer: Context Restored."),T=!1;let U=tt.autoReset,$=Yt.enabled,ot=Yt.autoUpdate,nt=Yt.needsUpdate,it=Yt.type;Ht(),tt.autoReset=U,Yt.enabled=$,Yt.autoUpdate=ot,Yt.needsUpdate=nt,Yt.type=it}function Ln(U){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function qn(U){let $=U.target;$.removeEventListener("dispose",qn),Vg($)}function Vg(U){Gg(U),rt.remove(U)}function Gg(U){let $=rt.get(U).programs;$!==void 0&&($.forEach(function(ot){yt.releaseProgram(ot)}),U.isShaderMaterial&&yt.releaseShaderCache(U))}this.renderBufferDirect=function(U,$,ot,nt,it,Rt){$===null&&($=He);let Lt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Et=Xg(U,$,ot,nt,it);I.setMaterial(nt,Lt);let Nt=ot.index,kt=1;if(nt.wireframe===!0){if(Nt=ct.getWireframeAttribute(ot),Nt===void 0)return;kt=2}let re=ot.drawRange,le=ot.attributes.position,Ot=re.start*kt,me=(re.start+re.count)*kt;Rt!==null&&(Ot=Math.max(Ot,Rt.start*kt),me=Math.min(me,(Rt.start+Rt.count)*kt)),Nt!==null?(Ot=Math.max(Ot,0),me=Math.min(me,Nt.count)):le!=null&&(Ot=Math.max(Ot,0),me=Math.min(me,le.count));let ze=me-Ot;if(ze<0||ze===1/0)return;Ct.setup(it,nt,Et,ot,Nt);let Re,Se=Mt;if(Nt!==null&&(Re=vt.get(Nt),Se=ft,Se.setIndex(Re)),it.isMesh)nt.wireframe===!0?(I.setLineWidth(nt.wireframeLinewidth*Le()),Se.setMode(Z.LINES)):Se.setMode(Z.TRIANGLES);else if(it.isLine){let an=nt.linewidth;an===void 0&&(an=1),I.setLineWidth(an*Le()),it.isLineSegments?Se.setMode(Z.LINES):it.isLineLoop?Se.setMode(Z.LINE_LOOP):Se.setMode(Z.LINE_STRIP)}else it.isPoints?Se.setMode(Z.POINTS):it.isSprite&&Se.setMode(Z.TRIANGLES);if(it.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))Se.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let an=it._multiDrawStarts,It=it._multiDrawCounts,mn=it._multiDrawCount,de=Nt?vt.get(Nt).bytesPerElement:1,En=rt.get(nt).currentProgram.getUniforms();for(let $n=0;$n<mn;$n++)En.setValue(Z,"_gl_DrawID",$n),Se.render(an[$n]/de,It[$n])}else if(it.isInstancedMesh)Se.renderInstances(Ot,ze,it.count);else if(ot.isInstancedBufferGeometry){let an=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,It=Math.min(ot.instanceCount,an);Se.renderInstances(Ot,ze,It)}else Se.render(Ot,ze)};function wf(U,$,ot,nt){L!==null&&U.isNodeMaterial&&L.setObject(nt,U),bt===!0&&Gt.setState(U,ot,!1),U.transparent===!0&&U.side===se&&U.forceSinglePass===!1?(U.side=Xe,U.needsUpdate=!0,ra(U,$,nt),U.side=ii,U.needsUpdate=!0,ra(U,$,nt),U.side=se):ra(U,$,nt)}this.compile=function(U,$,ot=null){ot===null&&(ot=U),L!==null&&L.renderStart(U,$,ot),E=_t.get(ot),E.init($),y.push(E),ot.traverseVisible(function(it){it.isLight&&it.layers.test($.layers)&&(E.pushLight(it),it.castShadow&&E.pushShadow(it))}),U!==ot&&U.traverseVisible(function(it){it.isLight&&it.layers.test($.layers)&&(E.pushLight(it),it.castShadow&&E.pushShadow(it))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),Ut=this.localClippingEnabled,bt=Gt.init(this.clippingPlanes,Ut),bt===!0&&Gt.setGlobalState(this.clippingPlanes,$),L!==null&&Yt.render(E.state.shadowsArray,ot,$);let nt=new Set;return U.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let Rt=it.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){let Et=Rt[Lt];wf(Et,ot,$,it),nt.add(Et)}else wf(Rt,ot,$,it),nt.add(Rt)}),E=y.pop(),L!==null&&L.renderEnd(),nt},this.compileAsync=function(U,$,ot=null){let nt=this.compile(U,$,ot);return new Promise(it=>{function Rt(){if(nt.forEach(function(Lt){let Nt=rt.get(Lt).currentProgram;(Nt===void 0||Nt.isReady())&&nt.delete(Lt)}),nt.size===0){it(U);return}setTimeout(Rt,10)}xe.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let qc=null;function Hg(U){qc&&qc(U)}function Tf(){er.stop()}function Ef(){er.start()}let er=new Ep;er.setAnimationLoop(Hg),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(U){qc=U,Bt.setAnimationLoop(U),U===null?er.stop():er.start()},Bt.addEventListener("sessionstart",Tf),Bt.addEventListener("sessionend",Ef),this.render=function(U,$){if($!==void 0&&$.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;L!==null&&L.renderStart(U,$);let ot=Bt.enabled===!0&&Bt.isPresenting===!0,nt=R!==null&&(D===null||ot)&&R.begin(S,D);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera($),$=Bt.getCamera()),U.isScene===!0&&U.onBeforeRender(S,U,$,D),E=_t.get(U,y.length),E.init($),E.state.textureUnits=lt.getTextureUnits(),y.push(E),At.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ut.setFromProjectionMatrix(At,Un,$.reversedDepth),Ut=this.localClippingEnabled,bt=Gt.init(this.clippingPlanes,Ut),M=wt.get(U,A.length),M.init(),A.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){let Lt=S.xr.getDepthSensingMesh();Lt!==null&&$c(Lt,$,-1/0,S.sortObjects)}$c(U,$,0,S.sortObjects),M.finish(),L!==null&&L.updateLights(E.state.lightsArray),S.sortObjects===!0&&M.sort(st,at),Te=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Te&&ie.addToRenderList(M,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&Gt.beginShadows();let it=E.state.shadowsArray;if(Yt.render(it,U,$),bt===!0&&Gt.endShadows(),(nt&&R.hasRenderPass())===!1){let Lt=M.opaque,Et=M.transmissive;if(E.setupLights(),$.isArrayCamera){let Nt=$.cameras;if(Et.length>0)for(let kt=0,re=Nt.length;kt<re;kt++){let le=Nt[kt];Rf(Lt,Et,U,le)}Te&&ie.render(U);for(let kt=0,re=Nt.length;kt<re;kt++){let le=Nt[kt];Af(M,U,le,le.viewport)}}else Et.length>0&&Rf(Lt,Et,U,$),Te&&ie.render(U),Af(M,U,$)}D!==null&&P===0&&(lt.updateMultisampleRenderTarget(D),lt.updateRenderTargetMipmap(D)),nt&&R.end(S),U.isScene===!0&&U.onAfterRender(S,U,$),Ct.resetDefaultState(),B=-1,k=null,y.pop(),y.length>0?(E=y[y.length-1],lt.setTextureUnits(E.state.textureUnits),bt===!0&&Gt.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,L!==null&&L.renderEnd()};function $c(U,$,ot,nt){if(U.visible===!1)return;if(U.layers.test($.layers)){if(U.isGroup)ot=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update($);else if(U.isLightProbeGrid)E.pushLightProbeGrid(U);else if(U.isLight)E.pushLight(U),U.castShadow&&E.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(ut)){nt&&ye.setFromMatrixPosition(U.matrixWorld).applyMatrix4(At);let Lt=dt.update(U),Et=U.material;Et.visible&&M.push(U,Lt,Et,ot,ye.z,null,$)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(ut))){let Lt=dt.update(U),Et=U.material;if(nt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ye.copy(U.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ye.copy(Lt.boundingSphere.center)),ye.applyMatrix4(U.matrixWorld).applyMatrix4(At)),Array.isArray(Et)){let Nt=Lt.groups;for(let kt=0,re=Nt.length;kt<re;kt++){let le=Nt[kt],Ot=Et[le.materialIndex];Ot&&Ot.visible&&M.push(U,Lt,Ot,ot,ye.z,le,$)}}else Et.visible&&M.push(U,Lt,Et,ot,ye.z,null,$)}}let Rt=U.children;for(let Lt=0,Et=Rt.length;Lt<Et;Lt++)$c(Rt[Lt],$,ot,nt)}function Af(U,$,ot,nt){let{opaque:it,transmissive:Rt,transparent:Lt}=U;E.setupLightsView(ot),bt===!0&&Gt.setGlobalState(S.clippingPlanes,ot),nt&&I.viewport(V.copy(nt)),it.length>0&&ia(it,$,ot),Rt.length>0&&ia(Rt,$,ot),Lt.length>0&&ia(Lt,$,ot),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Rf(U,$,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[nt.id]===void 0){let Ot=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[nt.id]=new je(1,1,{generateMipmaps:!0,type:Ot?Gn:Sn,minFilter:Gi,samples:Math.max(4,z.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Rt=E.state.transmissionRenderTarget[nt.id],Lt=nt.viewport||V;Rt.setSize(Lt.z*S.transmissionResolutionScale,Lt.w*S.transmissionResolutionScale);let Et=S.getRenderTarget(),Nt=S.getActiveCubeFace(),kt=S.getActiveMipmapLevel();S.setRenderTarget(Rt),S.getClearColor(q),et=S.getClearAlpha(),et<1&&S.setClearColor(16777215,.5),S.clear(),Te&&ie.render(ot);let re=S.toneMapping;S.toneMapping=kn;let le=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),E.setupLightsView(nt),bt===!0&&Gt.setGlobalState(S.clippingPlanes,nt),ia(U,ot,nt),lt.updateMultisampleRenderTarget(Rt),lt.updateRenderTargetMipmap(Rt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let me=0,ze=$.length;me<ze;me++){let Re=$[me],{object:Se,geometry:an,material:It,group:mn}=Re;if(It.side===se&&Se.layers.test(nt.layers)){let de=It.side;It.side=Xe,It.needsUpdate=!0,Cf(Se,ot,nt,an,It,mn),It.side=de,It.needsUpdate=!0,Ot=!0}}Ot===!0&&(lt.updateMultisampleRenderTarget(Rt),lt.updateRenderTargetMipmap(Rt))}S.setRenderTarget(Et,Nt,kt),S.setClearColor(q,et),le!==void 0&&(nt.viewport=le),S.toneMapping=re}function ia(U,$,ot){let nt=$.isScene===!0?$.overrideMaterial:null;for(let it=0,Rt=U.length;it<Rt;it++){let Lt=U[it],{object:Et,geometry:Nt,group:kt}=Lt,re=Lt.material;re.allowOverride===!0&&nt!==null&&(re=nt),Et.layers.test(ot.layers)&&Cf(Et,$,ot,Nt,re,kt)}}function Cf(U,$,ot,nt,it,Rt){L!==null&&it.isNodeMaterial&&L.setObject(U,it),U.onBeforeRender(S,$,ot,nt,it,Rt),U.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),it.onBeforeRender(S,$,ot,nt,U,Rt),it.transparent===!0&&it.side===se&&it.forceSinglePass===!1?(it.side=Xe,it.needsUpdate=!0,S.renderBufferDirect(ot,$,nt,it,U,Rt),it.side=ii,it.needsUpdate=!0,S.renderBufferDirect(ot,$,nt,it,U,Rt),it.side=se):S.renderBufferDirect(ot,$,nt,it,U,Rt),U.onAfterRender(S,$,ot,nt,it,Rt)}function ra(U,$,ot){$.isScene!==!0&&($=He);let nt=rt.get(U),it=E.state.lights,Rt=E.state.shadowsArray,Lt=it.state.version,Et=yt.getParameters(U,it.state,Rt,$,ot,E.state.lightProbeGridArray),Nt=yt.getProgramCacheKey(Et),kt=nt.programs;nt.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?$.environment:null,nt.fog=$.fog;let re=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;nt.envMap=xt.get(U.envMap||nt.environment,re),nt.envMapRotation=nt.environment!==null&&U.envMap===null?$.environmentRotation:U.envMapRotation,kt===void 0&&(U.addEventListener("dispose",qn),kt=new Map,nt.programs=kt);let le=kt.get(Nt);if(le!==void 0){if(nt.currentProgram===le&&nt.lightsStateVersion===Lt)return If(U,Et),le}else Et.uniforms=yt.getUniforms(U),L!==null&&U.isNodeMaterial&&L.build(U,ot,Et),U.onBeforeCompile(Et,S),le=yt.acquireProgram(Et,Nt),kt.set(Nt,le),nt.uniforms=Et.uniforms;let Ot=nt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ot.clippingPlanes=Gt.uniform),If(U,Et),nt.needsLights=qg(U),nt.lightsStateVersion=Lt,nt.needsLights&&(Ot.ambientLightColor.value=it.state.ambient,Ot.lightProbe.value=it.state.probe,Ot.sunLights.value=it.state.sun,Ot.sunLightShadows.value=it.state.sunShadow,Ot.directionalLights.value=it.state.directional,Ot.directionalLightShadows.value=it.state.directionalShadow,Ot.spotLights.value=it.state.spot,Ot.spotLightShadows.value=it.state.spotShadow,Ot.rectAreaLights.value=it.state.rectArea,Ot.ltc_1.value=it.state.rectAreaLTC1,Ot.ltc_2.value=it.state.rectAreaLTC2,Ot.pointLights.value=it.state.point,Ot.pointLightShadows.value=it.state.pointShadow,Ot.hemisphereLights.value=it.state.hemi,Ot.sunShadowMatrix.value=it.state.sunShadowMatrix,Ot.sunShadowCascade.value=it.state.sunShadowCascade,Ot.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Ot.spotLightMatrix.value=it.state.spotLightMatrix,Ot.spotLightMap.value=it.state.spotLightMap,Ot.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=E.state.lightProbeGridArray.length>0,nt.currentProgram=le,nt.uniformsList=null,le}function Pf(U){if(U.uniformsList===null){let $=U.currentProgram.getUniforms();U.uniformsList=ms.seqWithValue($.seq,U.uniforms)}return U.uniformsList}function If(U,$){let ot=rt.get(U);ot.outputColorSpace=$.outputColorSpace,ot.batching=$.batching,ot.batchingColor=$.batchingColor,ot.instancing=$.instancing,ot.instancingColor=$.instancingColor,ot.instancingMorph=$.instancingMorph,ot.skinning=$.skinning,ot.morphTargets=$.morphTargets,ot.morphNormals=$.morphNormals,ot.morphColors=$.morphColors,ot.morphTargetsCount=$.morphTargetsCount,ot.numClippingPlanes=$.numClippingPlanes,ot.numIntersection=$.numClipIntersection,ot.vertexAlphas=$.vertexAlphas,ot.vertexTangents=$.vertexTangents,ot.toneMapping=$.toneMapping}function Wg(U,$){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;v.setFromMatrixPosition($.matrixWorld);for(let ot=0,nt=U.length;ot<nt;ot++){let it=U[ot];if(it.texture!==null&&it.boundingBox.containsPoint(v))return it}return null}function Xg(U,$,ot,nt,it){$.isScene!==!0&&($=He),lt.resetTextureUnits();let Rt=$.fog,Lt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?$.environment:null,Et=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ce.workingColorSpace,Nt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,kt=xt.get(nt.envMap||Lt,Nt),re=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,le=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ot=!!ot.morphAttributes.position,me=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color,Re=kn;nt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Re=S.toneMapping);let Se=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,an=Se!==void 0?Se.length:0,It=rt.get(nt),mn=E.state.lights;if(bt===!0&&(Ut===!0||U!==k)){let Ae=U===k&&nt.id===B;Gt.setState(nt,U,Ae)}let de=!1;nt.version===It.__version?(It.needsLights&&It.lightsStateVersion!==mn.state.version||It.outputColorSpace!==Et||it.isBatchedMesh&&It.batching===!1||!it.isBatchedMesh&&It.batching===!0||it.isBatchedMesh&&It.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&It.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&It.instancing===!1||!it.isInstancedMesh&&It.instancing===!0||it.isSkinnedMesh&&It.skinning===!1||!it.isSkinnedMesh&&It.skinning===!0||it.isInstancedMesh&&It.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&It.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&It.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&It.instancingMorph===!1&&it.morphTexture!==null||It.envMap!==kt||nt.fog===!0&&It.fog!==Rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Gt.numPlanes||It.numIntersection!==Gt.numIntersection)||It.vertexAlphas!==re||It.vertexTangents!==le||It.morphTargets!==Ot||It.morphNormals!==me||It.morphColors!==ze||It.toneMapping!==Re||It.morphTargetsCount!==an||!!It.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,It.__version=nt.version);let En=It.currentProgram;de===!0&&(En=ra(nt,$,it),L&&nt.isNodeMaterial&&L.onUpdateProgram(nt,En,It));let $n=!1,Ti=!1,Ir=!1,_e=En.getUniforms(),Be=It.uniforms;if(I.useProgram(En.program)&&($n=!0,Ti=!0,Ir=!0),nt.id!==B&&(B=nt.id,Ti=!0),It.needsLights){let Ae=Wg(E.state.lightProbeGridArray,it);It.lightProbeGrid!==Ae&&(It.lightProbeGrid=Ae,Ti=!0)}if($n||k!==U){I.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),_e.setValue(Z,"projectionMatrix",U.projectionMatrix),_e.setValue(Z,"viewMatrix",U.matrixWorldInverse);let Ai=_e.map.cameraPosition;Ai!==void 0&&Ai.setValue(Z,Xt.setFromMatrixPosition(U.matrixWorld)),z.logarithmicDepthBuffer&&_e.setValue(Z,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&_e.setValue(Z,"isOrthographic",U.isOrthographicCamera===!0),k!==U&&(k=U,Ti=!0,Ir=!0)}if(It.needsLights&&(mn.state.sunShadowMap.length>0&&_e.setValue(Z,"sunShadowMap",mn.state.sunShadowMap,lt),mn.state.directionalShadowMap.length>0&&_e.setValue(Z,"directionalShadowMap",mn.state.directionalShadowMap,lt),mn.state.spotShadowMap.length>0&&_e.setValue(Z,"spotShadowMap",mn.state.spotShadowMap,lt),mn.state.pointShadowMap.length>0&&_e.setValue(Z,"pointShadowMap",mn.state.pointShadowMap,lt)),it.isSkinnedMesh){_e.setOptional(Z,it,"bindMatrix"),_e.setOptional(Z,it,"bindMatrixInverse");let Ae=it.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),_e.setValue(Z,"boneTexture",Ae.boneTexture,lt))}it.isBatchedMesh&&(_e.setOptional(Z,it,"batchingTexture"),_e.setValue(Z,"batchingTexture",it._matricesTexture,lt),_e.setOptional(Z,it,"batchingIdTexture"),_e.setValue(Z,"batchingIdTexture",it._indirectTexture,lt),_e.setOptional(Z,it,"batchingColorTexture"),it._colorsTexture!==null&&_e.setValue(Z,"batchingColorTexture",it._colorsTexture,lt));let Ei=ot.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&K.update(it,ot,En),(Ti||It.receiveShadow!==it.receiveShadow)&&(It.receiveShadow=it.receiveShadow,_e.setValue(Z,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&$.environment!==null&&(Be.envMapIntensity.value=$.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=N_()),Ti){if(_e.setValue(Z,"toneMappingExposure",S.toneMappingExposure),It.needsLights&&Yg(Be,Ir),Rt&&nt.fog===!0&&Vt.refreshFogUniforms(Be,Rt),Vt.refreshMaterialUniforms(Be,nt,Y,W,E.state.transmissionRenderTarget[U.id]),It.needsLights&&It.lightProbeGrid){let Ae=It.lightProbeGrid;Be.probesSH.value=Ae.texture,Be.probesMin.value.copy(Ae.boundingBox.min),Be.probesMax.value.copy(Ae.boundingBox.max),Be.probesResolution.value.copy(Ae.resolution)}ms.upload(Z,Pf(It),Be,lt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ms.upload(Z,Pf(It),Be,lt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&_e.setValue(Z,"center",it.center),_e.setValue(Z,"modelViewMatrix",it.modelViewMatrix),_e.setValue(Z,"normalMatrix",it.normalMatrix),_e.setValue(Z,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){let Ae=nt.uniformsGroups;for(let Ai=0,Lr=Ae.length;Ai<Lr;Ai++){let Ff=Ae[Ai];gt.update(Ff,En),gt.bind(Ff,En)}}return En}function Yg(U,$){U.ambientLightColor.needsUpdate=$,U.lightProbe.needsUpdate=$,U.sunLights.needsUpdate=$,U.sunLightShadows.needsUpdate=$,U.directionalLights.needsUpdate=$,U.directionalLightShadows.needsUpdate=$,U.pointLights.needsUpdate=$,U.pointLightShadows.needsUpdate=$,U.spotLights.needsUpdate=$,U.spotLightShadows.needsUpdate=$,U.rectAreaLights.needsUpdate=$,U.hemisphereLights.needsUpdate=$}function qg(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(U,$,ot){let nt=rt.get(U);nt.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),rt.get(U.texture).__webglTexture=$,rt.get(U.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,$){let ot=rt.get(U);ot.__webglFramebuffer=$,ot.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(U,$=0,ot=0){D=U,C=$,P=ot;let nt=null,it=!1,Rt=!1;if(U){let Et=rt.get(U);if(Et.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(Z.FRAMEBUFFER,Et.__webglFramebuffer),V.copy(U.viewport),X.copy(U.scissor),G=U.scissorTest,I.viewport(V),I.scissor(X),I.setScissorTest(G),B=-1;return}else if(Et.__webglFramebuffer===void 0)lt.setupRenderTarget(U);else if(Et.__hasExternalTextures)lt.rebindTextures(U,rt.get(U.texture).__webglTexture,rt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let re=U.depthTexture;if(Et.__boundDepthTexture!==re){if(re!==null&&rt.has(re)&&(U.width!==re.image.width||U.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(U)}}let Nt=U.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Rt=!0);let kt=rt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(kt[$])?nt=kt[$][ot]:nt=kt[$],it=!0):U.samples>0&&lt.useMultisampledRTT(U)===!1?nt=rt.get(U).__webglMultisampledFramebuffer:Array.isArray(kt)?nt=kt[ot]:nt=kt,V.copy(U.viewport),X.copy(U.scissor),G=U.scissorTest}else V.copy(J).multiplyScalar(Y).floor(),X.copy(ht).multiplyScalar(Y).floor(),G=pt;if(ot!==0&&(nt=O),I.bindFramebuffer(Z.FRAMEBUFFER,nt)&&I.drawBuffers(U,nt),I.viewport(V),I.scissor(X),I.setScissorTest(G),it){let Et=rt.get(U.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+$,Et.__webglTexture,ot)}else if(Rt){let Et=$;for(let Nt=0;Nt<U.textures.length;Nt++){let kt=rt.get(U.textures[Nt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Nt,kt.__webglTexture,ot,Et)}}else if(U!==null&&ot!==0){let Et=rt.get(U.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Et.__webglTexture,ot)}B=-1};function Lf(U){let $=rt.get(U);return($.__readFormat!==U.format||$.__readType!==U.type)&&($.__readFormat=U.format,$.__readType=U.type,$.__formatReadable=z.textureFormatReadable(U.format),$.__typeReadable=z.textureTypeReadable(U.type)),$}this.readRenderTargetPixels=function(U,$,ot,nt,it,Rt,Lt,Et=0){if(!(U&&U.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=rt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){I.bindFramebuffer(Z.FRAMEBUFFER,Nt);try{let kt=U.textures[Et],re=kt.format,le=kt.type;U.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Et);let Ot=Lf(kt);if(Ot.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=U.width-nt&&ot>=0&&ot<=U.height-it&&Z.readPixels($,ot,nt,it,St.convert(re),St.convert(le),Rt)}finally{let kt=D!==null?rt.get(D).__webglFramebuffer:null;I.bindFramebuffer(Z.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(U,$,ot,nt,it,Rt,Lt,Et=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=rt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt)if($>=0&&$<=U.width-nt&&ot>=0&&ot<=U.height-it){I.bindFramebuffer(Z.FRAMEBUFFER,Nt);let kt=U.textures[Et],re=kt.format,le=kt.type;U.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Et);let Ot=Lf(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,me),Z.bufferData(Z.PIXEL_PACK_BUFFER,Rt.byteLength,Z.STREAM_READ),Z.readPixels($,ot,nt,it,St.convert(re),St.convert(le),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let ze=D!==null?rt.get(D).__webglFramebuffer:null;I.bindFramebuffer(Z.FRAMEBUFFER,ze);let Re=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await $d(Z,Re,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,me),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Rt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(me),Z.deleteSync(Re),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,$=null,ot=0){let nt=Math.pow(2,-ot),it=Math.floor(U.image.width*nt),Rt=Math.floor(U.image.height*nt),Lt=$!==null?$.x:0,Et=$!==null?$.y:0;lt.setTexture2D(U,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ot,0,0,Lt,Et,it,Rt),I.unbindTexture()},this.copyTextureToTexture=function(U,$,ot=null,nt=null,it=0,Rt=0){let Lt,Et,Nt,kt,re,le,Ot,me,ze,Re=U.isCompressedTexture?U.mipmaps[Rt]:U.image;if(ot!==null)Lt=ot.max.x-ot.min.x,Et=ot.max.y-ot.min.y,Nt=ot.isBox3?ot.max.z-ot.min.z:1,kt=ot.min.x,re=ot.min.y,le=ot.isBox3?ot.min.z:0;else{let Be=Math.pow(2,-it);Lt=Math.floor(Re.width*Be),Et=Math.floor(Re.height*Be),U.isDataArrayTexture?Nt=Re.depth:U.isData3DTexture?Nt=Math.floor(Re.depth*Be):Nt=1,kt=0,re=0,le=0}nt!==null?(Ot=nt.x,me=nt.y,ze=nt.z):(Ot=0,me=0,ze=0);let Se=St.convert($.format),an=St.convert($.type),It;$.isData3DTexture?(lt.setTexture3D($,0),It=Z.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(lt.setTexture2DArray($,0),It=Z.TEXTURE_2D_ARRAY):(lt.setTexture2D($,0),It=Z.TEXTURE_2D),I.activeTexture(Z.TEXTURE0),I.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(Z.UNPACK_ALIGNMENT,$.unpackAlignment);let mn=I.getParameter(Z.UNPACK_ROW_LENGTH),de=I.getParameter(Z.UNPACK_IMAGE_HEIGHT),En=I.getParameter(Z.UNPACK_SKIP_PIXELS),$n=I.getParameter(Z.UNPACK_SKIP_ROWS),Ti=I.getParameter(Z.UNPACK_SKIP_IMAGES);I.pixelStorei(Z.UNPACK_ROW_LENGTH,Re.width),I.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Re.height),I.pixelStorei(Z.UNPACK_SKIP_PIXELS,kt),I.pixelStorei(Z.UNPACK_SKIP_ROWS,re),I.pixelStorei(Z.UNPACK_SKIP_IMAGES,le);let Ir=U.isDataArrayTexture||U.isData3DTexture,_e=$.isDataArrayTexture||$.isData3DTexture;if(U.isDepthTexture){let Be=rt.get(U),Ei=rt.get($),Ae=rt.get(Be.__renderTarget),Ai=rt.get(Ei.__renderTarget);I.bindFramebuffer(Z.READ_FRAMEBUFFER,Ae.__webglFramebuffer),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Lr=0;Lr<Nt;Lr++)Ir&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.get(U).__webglTexture,it,le+Lr),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.get($).__webglTexture,Rt,ze+Lr)),Z.blitFramebuffer(kt,re,Lt,Et,Ot,me,Lt,Et,Z.DEPTH_BUFFER_BIT,Z.NEAREST);I.bindFramebuffer(Z.READ_FRAMEBUFFER,null),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(it!==0||U.isRenderTargetTexture||rt.has(U)){let Be=rt.get(U),Ei=rt.get($);I.bindFramebuffer(Z.READ_FRAMEBUFFER,w),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,F);for(let Ae=0;Ae<Nt;Ae++)Ir?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Be.__webglTexture,it,le+Ae):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Be.__webglTexture,it),_e?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ei.__webglTexture,Rt,ze+Ae):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ei.__webglTexture,Rt),it!==0?Z.blitFramebuffer(kt,re,Lt,Et,Ot,me,Lt,Et,Z.COLOR_BUFFER_BIT,Z.NEAREST):_e?Z.copyTexSubImage3D(It,Rt,Ot,me,ze+Ae,kt,re,Lt,Et):Z.copyTexSubImage2D(It,Rt,Ot,me,kt,re,Lt,Et);I.bindFramebuffer(Z.READ_FRAMEBUFFER,null),I.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else _e?U.isDataTexture||U.isData3DTexture?Z.texSubImage3D(It,Rt,Ot,me,ze,Lt,Et,Nt,Se,an,Re.data):$.isCompressedArrayTexture?Z.compressedTexSubImage3D(It,Rt,Ot,me,ze,Lt,Et,Nt,Se,Re.data):Z.texSubImage3D(It,Rt,Ot,me,ze,Lt,Et,Nt,Se,an,Re):U.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Rt,Ot,me,Lt,Et,Se,an,Re.data):U.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Rt,Ot,me,Re.width,Re.height,Se,Re.data):Z.texSubImage2D(Z.TEXTURE_2D,Rt,Ot,me,Lt,Et,Se,an,Re);I.pixelStorei(Z.UNPACK_ROW_LENGTH,mn),I.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,de),I.pixelStorei(Z.UNPACK_SKIP_PIXELS,En),I.pixelStorei(Z.UNPACK_SKIP_ROWS,$n),I.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ti),Rt===0&&$.generateMipmaps&&Z.generateMipmap(It),I.unbindTexture()},this.initRenderTarget=function(U){rt.get(U).__webglFramebuffer===void 0&&lt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?lt.setTextureCube(U,0):U.isData3DTexture?lt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?lt.setTexture2DArray(U,0):lt.setTexture2D(U,0),I.unbindTexture()},this.resetState=function(){C=0,P=0,D=null,I.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};function Fp(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Dp(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function Np(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var O_=[],wh=new Map,U_=0;function Ao(i){O_=i,wh=new Map(i.flatMap(t=>t.items.map(e=>[B_(t.id,e.id),e]))),U_++}function B_(i,t){return`pack:${i}:${t}`}function Th(i){return i.startsWith("pack:")}function cc(i){return Th(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Eh(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function Op(i){return i==="robot_vacuum"||Th(i)&&i.endsWith(":robot_vacuum")}function Ro(i){return i.z>.05}function Up(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Ro(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var k_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Bp(i){return ve(i)?.parts.find(t=>t.screen)}function ve(i){if(!Th(i))return;let t=wh.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=k_[e];return r?wh.get(`pack:${r}:${n.join(":")}`):void 0}function rn(i,t){let e=ve(t.type);if(t.mount_y!=null)return t.mount_y;let n=Gp(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return uc;if(kp.has(t.type))return Math.max(0,i.height-zp(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Vp(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:vr(t)}}var bs={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Hn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Ah(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Hn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function fc(i){return[...i.rooms,...Ah(i)]}function V_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=s(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function G_(i,t,e,n){return yr(i,t)+bs[t.type]-Co(i,t,e,n)}var Rh=-.2,hc={set:!1,level:Rh};function Wp(i){let t=i?.settings.terrain??null;hc={set:t?.level!=null,level:t?.level??Rh}}function xs(i,t){return hc.level}function Xp(i){return i.elevation>.3?0:hc.set?hc.level-i.elevation:Rh}function yr(i,t){return Xp(i)+(t.offset??0)}function Co(i,t,e,n){return t.type==="pool"?0:V_(t,e,n)}function Yp(i,t,e){let n=(i.outdoor??[]).filter(s=>!Hn(s.type)&&s.type!=="pool"&&jt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?G_(i,r,t,e):Xp(i)}function dc(i,t){return yr(i,t)+(t.above?$p(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function H_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?$p(i):1.5}function Ch(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Hn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>jt(n,e.points)))}function qp(i,t){return!t.above&&!Ch(i,t)?pc(i,t)-.05:dc(i,t)-H_(t)}function pc(i,t){return dc(i,t)-.15}function $p(i){return i.height&&i.height>.3?i.height:1.2}var W_={type:"none",pitch:35,overhang:.4},KA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...W_}};var Zp=.3;var Kp=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),uc=1.75;var kp=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function zp(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var Jp=new Set(["stairs","stairs_u"]);function jp(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:h,rise:e/n}}function Qp(i){return Kp.has(i)||!!ve(i)?.light}var X_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function vr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Hp=.04,Y_=1.2;function Vp(i,t,e,n=0){let r=0;for(let s of i.furniture)!(X_.has(s.type)||ve(s.type)?.surface)||!jt([t,e],Xi(s))||s.type==="worktop"&&n>0&&s.h-Hp>=Y_&&n<=s.h-Hp-.02||(r=Math.max(r,s.h));return r}var mc=new Set(["wall_switch","wall_socket"]),q_=4;function tm(i){let t=(i.gangs??[]).slice(0,q_);return t.length?t:[{entity:null}]}function Gp(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var z_=new Set([...Kp,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var $_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Z_=["standard","bars","glass_wall"];function _r(i,t){return i.type==="door"?i.style&&$_.includes(i.style)?i.style:t?"front":"interior":i.style&&Z_.includes(i.style)?i.style:"standard"}function em(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=s-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function nm(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function wn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Wn(i){return Math.abs(wn(i))}function Tn(i){let t=wn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function im(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function rm(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Xi(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function jt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function Ph(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var Ge=(i,t)=>[i[0]-t[0],i[1]-t[1]],Yi=(i,t)=>[i[0]+t[0],i[1]+t[1]],vi=(i,t)=>[i[0]*t,i[1]*t],ys=(i,t)=>i[0]*t[0]+i[1]*t[1],vs=(i,t)=>i[0]*t[1]-i[1]*t[0],Po=i=>Math.hypot(i[0],i[1]),Cn=i=>{let t=Po(i)||1;return[i[0]/t,i[1]/t]},sm=i=>[-i[1],i[0]],om=i=>[i[1],-i[0]];function ai(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),o=[],a=S=>{for(let T=0;T<o.length;T++)if(Math.abs(o[T][0]-S[0])<=n&&Math.abs(o[T][1]-S[1])<=n)return T;return o.push([S[0],S[1]]),o.length-1},l=[];for(let S of i){let T=S.points;if(T.length<3||Math.abs(wn(T))<1e-6)continue;let L=wn(T)>0,O=T.map(a);for(let w=0;w<T.length;w++){let F=O[w],C=O[(w+1)%T.length];F!==C&&l.push(L?{u:F,v:C,room:S.id,edge:w,forward:!0}:{u:C,v:F,room:S.id,edge:w,forward:!1})}}let c=s.map(S=>[a(S.a),a(S.b)]),h=new Set;for(let S of i){let T=S.points;T.length<3||(S.wall_splits??[]).forEach((L,O)=>{if(!L||O>=T.length)return;let w=T[O],F=Ge(T[(O+1)%T.length],w),C=Po(F);for(let P of L)P>n&&P<C-n&&h.add(a(Yi(w,vi(F,P/C))))})}let u=[];for(let S of l){let T=o[S.u],L=o[S.v],O=Ge(L,T),w=Po(O),F=vi(O,1/w),C=[];for(let D=0;D<o.length;D++){if(D===S.u||D===S.v)continue;let B=Ge(o[D],T),k=ys(B,F);k<=n||k>=w-n||Math.abs(vs(F,B))<=n&&C.push({t:k,id:D})}C.sort((D,B)=>D.t-B.t);let P=[{t:0,id:S.u},...C,{t:w,id:S.v}];for(let D=0;D+1<P.length;D++){let B=P[D],k=P[D+1],V=S.forward?B.t:w-k.t,X=S.forward?k.t:w-B.t;u.push({u:B.id,v:k.id,room:S.room,edge:S.edge,t0:V,t1:X})}}let f=new Map;for(let S of u){let T=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,L=f.get(T);L||f.set(T,L=[]),L.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),p=new Map;for(let S of u){let T=`${S.room}:${S.edge}`;p.set(T,[...p.get(T)??[],S.t0].sort((L,O)=>L-O))}let b=S=>{let T=i.find(O=>O.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(T))return T;let L=p.get(`${S.room}:${S.edge}`)??[];return T[L.indexOf(S.t0)]??null},g=S=>{let T=S.map(b).filter(O=>typeof O=="number"&&O>0);if(T.length)return Math.min(...T);let L=S.map(O=>i.find(w=>w.id===O.room)?.ceiling_height);return L.every(O=>typeof O=="number"&&O>0)?Math.max(...L):void 0},m=S=>{let T=S.map(L=>i.find(O=>O.id===L.room)?.wall_thickness?.[L.edge]).filter(L=>typeof L=="number"&&L>0);return T.length?Math.max(...T):void 0},x=S=>{for(let T of S){let L=i.find(C=>C.id===T.room),O=L?.wall_slopes?.[T.edge];if(!L||!O)continue;let w=L.points[T.edge],F=L.points[(T.edge+1)%L.points.length];return{p:[w[0],w[1]],q:[F[0],F[1]],h0:Math.max(.05,O[0]),h1:Math.max(.05,O[1])}}},_=S=>S.some(T=>b(T)===0),v=S=>{let T=x(S);return T?{height:Math.max(T.h0,T.h1),slope:T}:{height:g(S)}},M=[],E=[];for(let S of f.values()){let T=S[0],L=S.find(O=>O!==T&&O.u===T.v&&O.v===T.u&&O.room!==T.room);for(let O of S)O!==T&&O!==L&&O.room!==T.room&&r.push(`overlap:${T.room}:${O.room}`);if(_(L?[T,L]:[T])){L&&M.push([T.room,L.room]);continue}if(L){let O=m([T,L])??t.interior;E.push({a:T.u,b:T.v,left:O/2,right:O/2,exterior:!1,roomLeft:T.room,roomRight:L.room,sources:[d(T),d(L)],...v([T,L])})}else E.push({a:T.u,b:T.v,left:0,right:m([T])??t.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[d(T)],...v([T])})}let A=S=>Cn(Ge(o[S.b],o[S.a]));for(let S of E){if(S.exterior||S.free)continue;let T=new Set;for(let O of[S.a,S.b])for(let w of E)!w.exterior||w.free||w.a!==O&&w.b!==O||Math.abs(vs(A(S),A(w)))>1e-6||(w.roomLeft===S.roomLeft?T.add("left"):w.roomLeft===S.roomRight&&T.add("right"));if(T.size!==1)continue;let L=S.left+S.right;T.has("left")?(S.left=0,S.right=L):(S.left=L,S.right=0)}s.forEach((S,T)=>{let[L,O]=c[T];if(L===O)return;let w=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],F=i.find(D=>D.points.length>=3&&jt(w,D.points))?.id??null,C=(S.thickness??t.interior)/2,P=typeof S.height=="number"&&S.height>0?S.height:void 0;E.push({free:S.id,a:L,b:O,left:C,right:C,exterior:!1,roomLeft:F,roomRight:F,sources:[],height:P})}),E=J_(E,o,h);let y=Q_(E,o);return{walls:E.map((S,T)=>{let L=o[S.a],O=o[S.b],w=y.get(`${T}:a`),F=y.get(`${T}:b`),C=tM([w.right,F.left,O,F.right,w.left,L],1e-6);return{id:K_(L,O),a:[L[0],L[1]],b:[O[0],O[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:C,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function K_(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function am(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function J_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=am(l)),c.a!==o&&(c=am(c)),l.a===c.b)continue;let h=Cn(Ge(t[l.b],t[l.a])),u=Cn(Ge(t[c.b],t[c.a]));if(Math.abs(vs(h,u))>1e-6||ys(h,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:j_(l.sources,c.sources)},d=n.filter((p,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function j_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function Q_(i,t){let e=new Map;i.forEach((r,s)=>{let o=Cn(Ge(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:vi(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,h)=>c.angle-h.angle);let a=c=>({left:Yi(o,vi(sm(c.d),c.left)),right:Yi(o,vi(om(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let h=s[c],u=s[(c+1)%s.length],f=Yi(o,vi(sm(h.d),h.left)),d=Yi(o,vi(om(u.d),u.right)),p=vs(h.d,u.d);if(Math.abs(p)<1e-4)continue;let b=vs(Ge(d,f),u.d)/p,g=Yi(f,vi(h.d,b));Po(Ge(g,o))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function tM(i,t){let e=i.filter((r,s)=>Po(Ge(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=Ge(o,s),c=Ge(a,o);if(Math.abs(vs(Cn(l),Cn(c)))<1e-7&&ys(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Ih(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=Cn(Ge(r,n));return Yi(n,vi(s,e))}function _s(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=Cn(Ge(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Yi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Ms(i,t,e){if(!t.wall)return eM(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Ih(e.room,0,t.offset);return{wall:n,s:ys(Ge(r,n.a),Cn(Ge(n.b,n.a)))}}function Lh(i,t,e){if(!t.exterior||t.free)return null;let n=e?t.b:t.a,r=Cn(Ge(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,o=null;for(let a of i)if(!(a===t||!(s(a.a)||s(a.b)))){if(o||!a.exterior||a.free||!s(e?a.a:a.b)||ys(Cn(Ge(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;o=a}return o}function eM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Ih(t,e,n);return{wall:r,s:ys(Ge(o,r.a),Cn(Ge(r.b,r.a)))}}return null}function gc(i,t,e,n){let r=t.rotation*Math.PI/180,s=[-Math.sin(r),Math.cos(r)],o=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=s[0]*d[0]+s[1]*d[1]>=0?1:-1;if(Math.abs(s[0]*d[0]+s[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(g+b*(o/2)));if(!m&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,M=m?g+b*(o/2):p,E=c.slope?Ph(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*M,z:v+d[1]*M,top:E,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var Mr=Math.PI/180;function pn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function sn(i){let t=pn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Mr),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Mr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=dm(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}function Fh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Dh=.14;function cm(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Nh(i,t){return sn(i).rh-Dh>t+.01}function um(i,t,e,n){let r=null,s=Math.max(0,i.settings.roof.overhang??0);for(let o of Fh(i)){if(o.open||n!==void 0&&!Nh(o,n))continue;let a=Math.min(o.x0,o.x1),l=Math.max(o.x0,o.x1),c=Math.min(o.z0,o.z1),h=Math.max(o.z0,o.z1);if(t<a-1e-6||t>l+1e-6||e<c-1e-6||e>h+1e-6||o.points&&o.points.length>=3&&!jt([t,e],o.points))continue;let[u,f]=yi(o,t,e),d=o.shape==="flat"||o.shape==="parapet",p=Math.max(0,o.overhang??s),g=((d?null:Fo(wr(o,{u0:p,u1:p,a:p,b:p}),u,f))??sn(o).y(f))-Dh;r=r===null?g:Math.max(r,g)}return r}function vc(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Wn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=lm([a[0]-o[0],a[1]-o[1]]),h=lm([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+p*u[1])/b,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*m,a[1]+p/b*t*m])}return r}function lm(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function hm(i,t){if(i.points&&i.points.length>=3)return vc(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}function fm(i,t,e,n){let r=ai(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])o.set(s(f),[...o.get(s(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(o.get(s(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=s(p.a)===s(d)?p.b:p.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs(Wn(f))>Math.abs(Wn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?vc(h,e):null}var Io=Math.tan(30*Mr);function dm(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+Io*(i-o+s))/(2*Io))),h=a+(c-s)*Io;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*Io:f<=i-o?l+(i-o-f)*Io:e+(i-f)*r}}function wr(i,t){let e=pn(i),n=sn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(D,B)=>[D,B,n.y(B)],h=c(a,-s),u=c(l,-s),f=c(l,r+o),d=c(a,r+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Mr),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Mr);if(i.shape==="pent"){let D=[h,u,f,d],B=[[0,n.y(0)],[r,n.y(r)]];return{faces:[D],rim:D,ridges:[[f,d]],gable:B,gables:[B,B]}}if(i.shape==="pyramid"){let D=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,D],[u,f,D],[f,d,D],[d,h,D]],rim:[h,u,f,d],ridges:[[h,D],[d,D],[u,D],[f,D]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let D=dm(r,i.eave_a,i.eave_b,p,b),B=[[0,n.y(0)],[D.vla,D.yla],[D.vr,D.rh],[r-D.vlb,D.ylb],[r,n.y(r)]],k=[a,D.vla,D.yla],V=[l,D.vla,D.yla],X=[a,r-D.vlb,D.ylb],G=[l,r-D.vlb,D.ylb],q=[a,D.vr,D.rh],et=[l,D.vr,D.rh];return{faces:[[h,u,V,k],[k,V,et,q],[q,et,G,X],[X,G,f,d]],rim:[h,u,V,et,G,f,d,X,q,k],ridges:[[q,et],[k,V],[X,G]],gable:B,gables:[B,B]}}let[g,m]=yc(i)??["gable","gable"],x=Oh(i,[g,m]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],E=[a,x.vbh,x.yh],A=[l,x.vah,x.yh],y=[l,x.vbh,x.yh],R=g==="halfhip",S=m==="halfhip",T=[[h,u,...S?[A]:[],v,_,...R?[M]:[]],[_,v,...S?[y]:[],f,d,...R?[E]:[]]];g==="hip"&&T.push([d,h,_]),R&&T.push([E,M,_]),m==="hip"&&T.push([u,f,v]),S&&T.push([A,y,v]);let L=[h,u,...m==="gable"?[v]:S?[A,y]:[],f,d,...g==="gable"?[_]:R?[E,M]:[]],O=[[_,v]];g==="hip"&&O.push([h,_],[d,_]),R&&O.push([M,_],[E,_]),m==="hip"&&O.push([u,v],[f,v]),S&&O.push([A,v],[y,v]);let w=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],F=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],C=D=>D==="gable"?w:D==="halfhip"?F:null,P=[C(g),C(m)];return{faces:T,rim:L,ridges:O,gable:P[0]??P[1],gables:P}}function yc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Oh(i,t){let e=pn(i),n=sn(i),r=e.w,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Mr),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Mr),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=s>1e-6?Math.min(n.vr,(h-i.eave_a)/s):n.vr,f=o>1e-6?Math.max(n.vr,r-(h-i.eave_b)/o):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,s)),b=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function Fo(i,t,e){let n=null;for(let r of i.faces){if(!jt([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],h=o[1]-s[1],u=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],p=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let m=s[2]-(p*(t-s[0])+g*(e-s[1]))/b;n=n===null?m:Math.min(n,m)}return n}function yi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function xc(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Sr(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=xc(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Uh(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=pn(t),n=sn(t).rh,r=wr(i,{u0:0,u1:0,a:0,b:0}),s=sn(i),o=p=>{let[b,g]=e.at(p,e.w/2),[m,x]=yi(i,b,g);return Fo(r,m,x)??s.y(x)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let p=.5;p<u;p+=.05)if(o(l+h*p)>=n-.02){f=l+h*p;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function pm(i,t){let e=Uh(i,t),n=pn(e),r=sn(e),s=wr(i,{u0:0,u1:0,a:0,b:0}),o=sn(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,g]=yi(i,d,p);return Fo(s,b,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),x=1/0,_=-1/0;for(let y=0;y<=40;y++){let R=n.w*y/40;r.y(R)>m+.02&&(x=Math.min(x,R),_=Math.max(_,R))}if(!(_-x>.05))continue;let v=n.at(b,x),M=n.at(g,_),E=yi(i,v[0],v[1]),A=yi(i,M[0],M[1]);h.push({u0:Math.min(E[0],A[0]),u1:Math.max(E[0],A[0]),v0:Math.min(E[1],A[1]),v1:Math.max(E[1],A[1])})}return h}function li(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c&&s.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function Bh(i,t){let e=li(i,0,t.u0,!0),n=li(i,0,t.u1,!1),r=li(li(i,0,t.u0,!1),0,t.u1,!0),s=li(r,1,t.v0,!0),o=li(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Wn(a.map(l=>[l[0],l[1]])))>1e-6)}function _c(i,t,e){let n=pn(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(h=>r.some(u=>jt(h,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function mm(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function nM(i){return sn(i).rh}function gm(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Sr(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>nM(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return u>=Math.min(h.x0,h.x1)&&u<=Math.max(h.x0,h.x1)&&f>=Math.min(h.z0,h.z1)&&f<=Math.max(h.z0,h.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function bc(i,[t,e,n]){let r=o=>t*o[0]+e*o[1]+n,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&s.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function Lo(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],s=t,o=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(o)&&(o=p,s=d)}if(Math.abs(o)<1e-9)return null;let a=s[0]-t[0],l=s[1]-t[1],c=e[2]-t[2],h=s[2]-t[2],u=(c*l-h*r)/o,f=(n*h-a*c)/o;return[u,f,t[2]-u*t[0]-f*t[1]]}var Ss=i=>Math.abs(Wn(i.map(t=>[t[0],t[1]])));function Mc(i){let t=wn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<1e-7)continue;let a=-(s[1]-r[1])*t/o,l=(s[0]-r[0])*t/o;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function iM(i,t){let e=Lo(i),n=Lo(t.poly);if(!e||!n||Ss(t.poly)<1e-6)return null;let r=[...Mc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function bm(i,t){let e=[i];for(let n of t){let r=[];for(let s of e){let o=iM(s,n),a=o?s:[];for(let c of o??[])a=bc(a,c);if(a.length<3||Ss(a)<1e-6){r.push(s);continue}let l=s;for(let[c,h,u]of Mc(a)){let f=bc(l,[-c,-h,-u]);if(f.length>=3&&Ss(f)>1e-6&&r.push(f),l=bc(l,[c,h,u]),l.length<3)break}}e=r}return e}function kh(i,t,e){let n=[[0,1]],r=s=>[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s,i[2]+(t[2]-i[2])*s];for(let s of e){let o=Lo(s.poly);if(!o||Ss(s.poly)<1e-6)continue;let a=Mc(s.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>o[0]*d[0]+o[1]*d[1]+o[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(s.depth)&&a.push([s.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([s,o])=>[r(s),r(o)])}function xm(i,t){let e=Lo(i),n=Lo(t);if(!e||!n||Ss(t)<1e-6)return null;let r=[...i];for(let c of Mc(t))r=bc(r,c);if(r.length<3)return null;let s=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),o=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=s(h),d=s(u);if(f<0!=d<0){let p=f/(f-d);o.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(o.length<2)return null;let a=o[0],l=o[o.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function vm(i,t){let e=pn(i),n=s=>s.map(([o,a,l])=>{let[c,h]=e.at(o,a);return[c,h,l]}),r=[];for(let s of t){let o=li(li(li(li(s,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);o.length>=3&&Ss(o)>1e-6&&r.push({poly:n(o),depth:1/0});for(let a of Bh(s,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Dh})}return r}function zh(i,t){return t.map(e=>({poly:e.poly.map(([n,r,s])=>[...yi(i,n,r),s]),depth:e.depth}))}function ym(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Sr(i,t)!==e&&Sr(i,e)!==t}function _m(i,t){if(t.dormer||t.open||!yc(t)||Sr(i,t))return null;let e=pn(t),n=sn(t).rh,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.axis===t.axis||o.shape==="flat"||o.shape==="parapet"||o.shape==="pent")continue;let a=sn(o).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(o)>r(t)||r(o)===r(t)&&i.indexOf(o)<i.indexOf(t))))continue;let c=xc(o),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=xc(t),[b,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||g>d+.05)continue;let m=Mm(t,o),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=m+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!s||r(o)>r(s.host))&&(s={host:o,end:x})}return s}function Mm(i,t){let e=pn(t),n=e.at(e.u0,sn(t).vr);return i.axis==="x"?n[0]:n[1]}function Sm(i,t){let e=Mm(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=xc(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function Vh(i,t){return t.rooms.some(e=>e.points.length>=3)?fm(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Gh(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Vh(i,t);return!!e&&e.some(([n,r])=>xs(n,r)-t.elevation>-.15)}function wm(i,t,e,n,r){return!e||!Gh(i,t)?!1:n<Math.min(t.height,xs(r[0],r[1])-t.elevation)-.05}function ws(i,t){let e=wn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function Tm(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Xn=1e-4;function Hh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Em(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Xn&&a<1-Xn&&l>-Xn&&l<1+Xn?a:null}function Wh(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Xn||o>=1-Xn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Xn?o:null}function rM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Em(n,r,o,a)!==null||Wh(o,n,r)!==null||Wh(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Xn)return!0}}return jt(i[0],t)||jt(t[0],i)}function sM(i){let t=i.map(s=>Hh(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],h=[0,1];t.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],g=Em(l,c,p,b)??Wh(p,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Xn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==o&&jt(b,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Xn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Xn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Hh(o)>1e-6&&n.push(o)}return n}function Am(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&rM(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:sM(s))}function oM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Rm(i,t,e=.03){return i.every(n=>jt(n,t)||t.some((r,s)=>oM(n,r,t[(s+1)%t.length])<=e))}function Cm(i,t){let e=Hh(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function Yh(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Ts=(i,t)=>!!i.fix&&i.fix.includes(t);function Im(i,t,e,n){if(i==="h")return e>=n-.01&&t>.01?"hi":"lo";let r=(t+e)/2;return Math.abs(r-n/2)<1e-6?"mid":r<n/2?"lo":"hi"}function Xh(i,t,e,n){let r=0,s=0;for(let o of i){if(!Ts(o,t))continue;let[a,l]=Yh(o,t,e),c=Im(t,a,l,e);c==="lo"?r=Math.max(r,l):c==="hi"&&(s=Math.max(s,e-a))}return r+s>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0}:{s0:e,s:n,lo:r,hi:s}}function Es(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function Pm(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Sc(n))return[Es(t,n),Es(e,n)];let r=Im(i,t,e,n.s0),s=e-t;return r==="mid"?[n.s/2-s/2,n.s/2+s/2]:r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Sc(i){return i.lo>0||i.hi>0}function wc(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:Xh(i.parts,"w",r,t),d:Xh(i.parts,"d",s,e),h:Xh(i.parts,"h",o,n)},l={w:!Sc(a.w)&&i.parts.some(c=>Ts(c,"w")),d:!Sc(a.d)&&i.parts.some(c=>Ts(c,"d")),h:!Sc(a.h)&&i.parts.some(c=>Ts(c,"h"))};return i.parts.map(c=>{let h=x=>{let _=a[x],[v,M]=Yh(c,x,_.s0);return Ts(c,x)&&!l[x]?Pm(x,v,M,_):[Es(v,_),Es(M,_)]},[u,f]=h("w"),[d,p]=h("d"),[b,g]=h("h"),m={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(A,y,R,S,T)=>{let L=a[A],O=y??S,w=R??T,F=(O-w/2+.5)*L.s0,C=(O+w/2+.5)*L.s0;if(!Ts(c,A)||l[A])return[Es(F,L),Es(C,L)];let[P,D]=Yh(c,A,L.s0),[B]=Pm(A,P,D,L),k=B-P;return[F+k,C+k]},[_,v]=x("w",c.tx,c.tw,c.x,c.w),[M,E]=x("d",c.tz,c.td,c.z,c.d);m.tx=(_+v)/2/t-.5,m.tw=(v-_)/t,m.tz=(M+E)/2/e-.5,m.td=(E-M)/e}return m})}var aM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var lM=["wall","pole","pillar","parcel","bank"];function Fm(i){return aM.includes(i.variant??"")?i.variant:"bin240"}function Dm(i){return lM.includes(i.variant??"")?i.variant:"wall"}var ke=["#3a3f47","#3a3f47"],Tr=["#23262b","#23262b"],Yn=["#5a3b25","#5a3b25"],De=["#1f4fa8","#1f4fa8"],qi=["#e3b616","#e3b616"],ue=["#2f7d3b","#2f7d3b"],Lm={default:{rest:ke,bio:Yn,paper:De,plastic:qi,glass:ue,garden:ue,recycling:qi,other:ke},DE:{rest:Tr,bio:Yn,paper:De,plastic:qi,glass:ue,garden:ue,recycling:qi},AT:{rest:ke,bio:Yn,paper:[ke[0],"#c0262d"],plastic:qi,glass:ue,garden:ue},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ue,paper:De,plastic:ke,glass:ue,garden:ue},NL:{rest:ke,bio:ue,paper:De,plastic:["#3a3f47","#e57a1f"],glass:ue,garden:ue},BE:{rest:ke,bio:ue,paper:De,plastic:De,glass:ue,garden:ue},GB:{rest:Tr,bio:["#3a3f47","#5a3b25"],paper:De,plastic:De,glass:Tr,garden:Yn,recycling:De},US:{rest:Tr,bio:ue,paper:De,plastic:De,glass:De,garden:ue,recycling:De},CA:{rest:Tr,bio:ue,paper:De,plastic:De,glass:De,garden:ue,recycling:De},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:ke,bio:Yn,paper:[ke[0],"#e3b616"],plastic:[ke[0],"#e3b616"],recycling:[ke[0],"#e3b616"],glass:ue,garden:ue},IT:{rest:ke,bio:Yn,paper:De,plastic:qi,glass:ue,garden:ue},ES:{rest:ke,bio:Yn,paper:De,plastic:qi,glass:ue,garden:ue},PT:{rest:ke,bio:Yn,paper:De,plastic:qi,glass:ue,garden:ue},DK:{rest:Tr,bio:ue,paper:De,plastic:ke,glass:ue,garden:ue},SE:{rest:Tr,bio:Yn,paper:De,plastic:ke,glass:ue,garden:ue},NO:{rest:ke,bio:Yn,paper:De,plastic:ke,glass:ue,garden:ue},FI:{rest:ke,bio:Yn,paper:De,plastic:ke,glass:ue,garden:ue}},Nm="DE";function Om(){return Nm}function cM(i,t){return Lm[t]?.[i]??Lm.default[i]??ke}function Um(i,t=Nm){let e=cM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var $i=zt(3662079,.95),qh=zt(3662079,1),_i=zt(5995775,.34),Bm=zt(5995775,.22),Tc=[-.55,.83],Kt=-1,Ec=16,Zi=32,km=48,$h=64,ee=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Kt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Wt;return t.setAttribute("position",new Ft(this.p,3)),t.setAttribute("color",new Ft(this.c,3)),t.setAttribute("fold",new Ft(this.f,1)),this.uv&&t.setAttribute("uv",new Ft(this.uv,2)),this.tile&&t.setAttribute("tile",new Ft(this.tile,2)),t.computeBoundingSphere(),t}},Ne=class{p=[];c=[];f=[];seg(t,e,n=$i,r=Kt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Kt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Kt),this.seg(c,a,n,s)}geometry(){let t=new Wt;return t.setAttribute("position",new Ft(this.p,3)),t.setAttribute("color",new Ft(this.c,3)),t.setAttribute("fold",new Ft(this.f,1)),t}};function zm(i,t,e,n){let s=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((p,b)=>p+(f.p[b]-p)*d),c:u.c.map((p,b)=>p+(f.c[b]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let g=0;g<3;g++)i.p[b*3+g]=f[p].p[g],i.c[b*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<s;g++)i.uv[b*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[p].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(y=>y.p[1]>e+1e-6),p=f.map(y=>y.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let y=0;y<3;y++)i.f[u*3+y]=n;continue}let b=i.f[u*3],g=(y,R)=>a(y,R,(e-y.p[1])/(R.p[1]-y.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),_=f[x],v=f[(x+1)%3],M=f[(x+2)%3],E=g(_,v),A=g(M,_);m===1?(l(u,[_,E,A],n),c([E,v,M],b),c([E,M,A],b)):(l(u,[_,E,A],b),c([E,v,M],n),c([E,M,A],n))}}function Vm(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ae=Math.PI/180;function zt(i,t){let e=new Q(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function uM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function Pn(i,t=[]){let e=i.map(([n,r])=>new Jt(n,r));return lo.triangulateShape(e,t.map(n=>n.map(([r,s])=>new Jt(r,s))))}function Gm(i,t,e,n,r,s,o){let a=new Q(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],g=e[d],m=e[(d+1)%4],x=b[0]-p[0],_=b[1]-p[1],v=Math.hypot(x,_);if(v<1e-6)continue;let E=.8+.28*((_/v*Tc[0]-x/v*Tc[1]+1)/2),A=(g[0]+m[0]-p[0]-b[0])/2*(-_/v)+(g[1]+m[1]-p[1]-b[1])/2*(x/v),y=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),R=zt(s,l(n)*E).lerp(a,y),S=zt(s,l(r)*E).lerp(a,y);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],R,S,S),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],n,b[1]],R,S,R)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function Hm(i,t,e,n,r,s,o,a,l,c){let h=new Q(l),u=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;u.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let f=(g,m)=>{let x=t(g,u[m%c].s);return[x[0],u[m%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(g,m,x,_,v)=>{let M=(m[1]-g[1])*(x[2]-g[2])-(m[2]-g[2])*(x[1]-g[1]),E=(m[2]-g[2])*(x[0]-g[0])-(m[0]-g[0])*(x[2]-g[2]),A=(m[0]-g[0])*(x[1]-g[1])-(m[1]-g[1])*(x[0]-g[0]);M*_[0]+E*_[1]+A*_[2]<0?i.tri(g,x,m,v):i.tri(g,m,x,v)};for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,x=zt(a,.62+.4*Math.max(0,Math.cos(m))),_=t((e+n)/2,r+Math.sin(m)*o),v=t((e+n)/2,r),M=[_[0]-v[0],Math.cos(m)*o,_[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,m,x]of[[e,p,d],[n,d,p]]){let _=t(g,r),v=[_[0],s,_[1]],M=[x[0]-m[0],0,x[1]-m[1]];for(let E=0;E<c;E++)b(v,f(g,E),f(g,E+1),M,h)}}function Ie(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=o.aoFrom??e,c=o.fold??Kt,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(o.holes??[]).map(p=>uM(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Pn(t,u);if(o.topFace!==!1){let p=new Q(s);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[_[0],a(_),_[1]],p,p,p,void 0,o.topFold??c)}}if(o.bottom){let p=zt(r,.55);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[v[0],e,v[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let b=0;b<p.length;b++){let g=p[b],m=p[(b+1)%p.length],x=m[0]-g[0],_=m[1]-g[1],v=Math.hypot(x,_);if(v<1e-6||o.skipSide?.(g,m))continue;let E=.8+.28*((_/v*Tc[0]-x/v*Tc[1]+1)/2),A=a(g),y=a(m),R=zt(r,h(e)*E),S=zt(r,h(A)*E),T=zt(r,h(y)*E);i.tri([g[0],e,g[1]],[g[0],A,g[1]],[m[0],y,m[1]],R,S,T,void 0,c),i.tri([g[0],e,g[1]],[m[0],y,m[1]],[m[0],e,m[1]],R,T,R,void 0,c)}}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},mt=zt(5995775,.3),Dt=zt(5995775,.17),Qt=zt(3662079,.45),Ji=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Zm(n)}rotated(t,e,n){let r=n*ae,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let h=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Ie(this.buf,Zh(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Zh(l)&&(l.reverse(),c.reverse()),Gm(this.buf,l,c,n,r,s,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,h);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,h),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,h=12,u=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,p=t==="x"?e:n,b=t==="x"?n:e,g=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(Hm(this.buf,g,p-o/2,p+o/2,b,d,f,l,c,h),u)for(let m of[p-o/2,p+o/2])for(let x=0;x<h;x++){let _=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(g(m,b+Math.sin(_)*f),g(m,b+Math.sin(v)*f),d+Math.cos(_)*f,d+Math.cos(v)*f,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Ie(this.buf,Zh(h),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=mt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Kt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Zm(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Zh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Er(i,t,e,n,r,s,o=N.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function No(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let h=1;h<o;h++){let u=t+c*h;i.seg(u,n,s,u,r,s,Dt)}for(let h=0;h<o;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,s+.012,u+Math.min(.1,c/4),f,s+.012,Qt);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,Qt)}}}function Wm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Er(i,t,e,.07,.05,.05,N.wood,!0),i.pad(s,o,.07,h-.08,a+.02,l,N.fabric,N.fabricTop,.04,mt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],h-.08,n,N.fabric,N.fabricTop,mt),i.pad(s,s+c,h-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,mt),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,mt);let d=(o-c-(s+c))/r;for(let p=0;p<r;p++){let b=s+c+d*p+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,N.cushion,N.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,N.cushion)}}function Xm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(y,R)=>i.loft([y-.015,y+.015,R-.015,R+.015],[y-.025,y+.025,R-.025,R+.025],0,.07,N.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let y of p)b(y*(t/2-.06),l-.06),b(y*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,mt);for(let y of p){let[R,S]=y<0?[s+.02,s+c]:[o-c,o-.02];i.pad(R,S,.07,f-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,mt)}i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],f-.08,n,N.fabric,N.fabricTop,mt);for(let y of p)y<0?i.loft([s,s+h,a+h,l],[s,s+h*.5,a+h,l-.01],f-.08,n,N.fabric,N.fabricTop,mt):i.loft([o-h,o,a+h,l],[o-h*.5,o,a+h,l-.01],f-.08,n,N.fabric,N.fabricTop,mt);for(let y of p){let[R,S]=y<0?[s+h,s+c]:[o-c,o-h];i.pad(R,S,f-.08,d,l-u,l,N.fabric,N.fabricTop,.04,mt)}r||i.pad(o-u,o,f-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,mt);let g=s+h,m=r?o-h:o-u,x=Math.max(1,Math.round((m-g)/.62)),_=(m-g)/x;for(let y=0;y<x;y++){let R=g+_*y+.02,S=R+_-.04;i.pad(R,S,f-.08,f+.05,a+h+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([R+.01,S-.01,a+h*.55,a+h+.14],[R+.03,S-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,N.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let E=Math.max(1,Math.round((M-v)/.62)),A=(M-v)/E;for(let y of p)for(let R=0;R<E;R++){let S=v+A*R+.02,T=S+A-.04;y<0?(i.pad(s+h+.02,s+c-.04,f-.08,f+.05,S,T,N.cushion,N.cushion,.04),i.loft([s+h*.55,s+h+.14,S+.01,T-.01],[s+h*.4,s+h*.4+.06,S+.03,T-.03],f+.03,n*.93,N.cushion)):(i.pad(o-c+.04,o-h-.02,f-.08,f+.05,S,T,N.cushion,N.cushion,.04),i.loft([o-h-.14,o-h*.55,S+.01,T-.01],[o-h*.4-.06,o-h*.4,S+.03,T-.03],f+.03,n*.93,N.cushion))}}function hM(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Er(i,t,e,.08,.06,.03,N.wood,!0),i.box(o,a,.08,l,r+.06,s,N.wood,N.woodTop,mt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,N.white,N.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,mt),i.box(o,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Dt);let c=l+.2,h=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,s-.01,N.cushion,N.fabricTop,.025,Dt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=o+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],[p+.03,p+f-.03,b,b+g],c,c+.06,N.whiteTop),i.loft([p+.03,p+f-.03,b,b+g],[p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Dt)}}function fM(i,t,e,n){let r=Math.min(.46,n*.52);Er(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,mt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,mt)}function dM(i,t,e,n){Er(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,Qt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function pM(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Dt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,Qt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,Qt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function Ki(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),No(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function mM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Dt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=h+.006,c++}}}}function gM(i,t,e,n){let r=Math.max(1,Math.round(t/.6));Ki(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function bM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,mt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Dt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,Qt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,Qt)}var Ac=(i,t)=>zt(parseInt(i.slice(1),16),t).getHex(),Do=!1;function Km(i){Do=i}function Jm(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function xM(i,t,e,n,r,s){let o=f=>{let d=Math.max(...new Q(f).toArray());return Ac(f,d>.05?Math.max(1,.62/d):1)},a=Do?o(s[0]):Ac(s[0],.55),l=Do?o(s[1]):Ac(s[1],.8),c=Ac(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Dt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,mt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Dt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,mt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Dt),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,N.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,N.metal,N.metal,Dt);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,mt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Dt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Dt);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,N.dark,N.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,mt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Dt),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,Qt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Dt))}function vM(i,t,e,n,r,s,o){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,o?N.metal:N.white,o?N.metal:N.whiteTop,mt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Dt),!s)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,N.white,N.whiteTop,Dt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Dt);else if(o)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,N.metal,N.metal,Dt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Dt);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,N.dark,N.dark,14,Dt),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,mt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,mt)}}}function yM(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,mt);let o=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*o,n/2+Math.sin(l)*o,e/2+.002,Math.cos(c)*o,n/2+Math.sin(c)*o,e/2+.002,Dt)}return}let s=Math.min(t,e)/2;i.cyl(0,0,s,0,n,N.white,N.whiteTop,24,mt),i.cyl(0,0,s*.5,n,n+.01,N.metal,N.metal,12)}function _M(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,.05,mt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,N.dark);for(let o of[-t*.2,t*.2])i.cyl(o,0,.012,-.12,0,N.metal,N.metal,6);return}let s=Math.min(t,e)/2;i.cyl(0,0,s,.04,n-.05,N.white,N.whiteTop,20,mt),i.cyl(0,0,s*.85,n-.05,n,N.white,N.whiteTop,20);for(let o=0;o<3;o++){let a=o/3*Math.PI*2;i.cyl(Math.cos(a)*s*.7,Math.sin(a)*s*.7,.03,0,.04,N.dark,N.dark,6)}i.box(-s*.3,s*.3,n*.55,n*.65,s-.01,s+.01,N.dark)}function MM(i,t,e,n,r){let s=N.metal,o=zt(N.metal,1.25).getHex(),a=zt(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,Dt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,mt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,mt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,N.dark,N.dark,Dt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,mt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,N.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Dt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,N.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Dt),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,N.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,mt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,mt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,N.dark)}function SM(i,t,e,n){let r=e/2-jm;i.box(-t/2,t/2,.02,n,-e/2,r,N.body,N.bodyTop,mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,N.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Dt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Dt))}var jm=.06;function Qm(i,t,e,n){let r=t.rotation*ae,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(w,F,C)=>[t.x+w*s-C*o,F,t.z+w*o+C*s],c=(w,F,C,P,D)=>{i.tri(w,F,C,D),i.tri(w,C,P,D),i.tri(w,C,F,D),i.tri(w,P,C,D)},h=(w,F,C,P)=>{let D=l(w[0],w[1],w[2]),B=l(F[0],F[1],F[2]),k=B[0]-D[0],V=B[1]-D[1],X=B[2]-D[2],G=Math.hypot(k,V,X)||1,q=[k/G,V/G,X/G],et=Math.abs(q[1])>.9?[1,0,0]:[0,1,0],j=[q[1]*et[2]-q[2]*et[1],q[2]*et[0]-q[0]*et[2],q[0]*et[1]-q[1]*et[0]],W=Math.hypot(j[0],j[1],j[2])||1,Y=[j[0]/W*C,j[1]/W*C,j[2]/W*C],st=[q[1]*Y[2]-q[2]*Y[1],q[2]*Y[0]-q[0]*Y[2],q[0]*Y[1]-q[1]*Y[0]],at=[[1,1],[-1,1],[-1,-1],[1,-1]],J=(ht,pt)=>[ht[0]+Y[0]*at[pt][0]+st[0]*at[pt][1],ht[1]+Y[1]*at[pt][0]+st[1]*at[pt][1],ht[2]+Y[2]*at[pt][0]+st[2]*at[pt][1]];for(let ht=0;ht<4;ht++){let pt=(ht+1)%4;i.tri(J(D,ht),J(B,ht),J(B,pt),P),i.tri(J(D,ht),J(B,pt),J(D,pt),P)}},u=(w,F,C,P,D,B,k,V)=>{c(l(w,P,D),l(F,P,D),l(F,P,B),l(w,P,B),V),c(l(w,C,B),l(F,C,B),l(F,P,B),l(w,P,B),k),c(l(w,C,D),l(F,C,D),l(F,C,B),l(w,C,B),k),c(l(w,C,D),l(w,C,B),l(w,P,B),l(w,P,D),k),c(l(F,C,D),l(F,C,B),l(F,P,B),l(F,P,D),k)},f=new Q(N.body),d=new Q(N.bodyTop),p=new Q(N.accent),b=new Q(1929098),g=new Q(995141),m=(w,F,C,P,D)=>{let B=(k,V,X)=>[k[0]+(V[0]-k[0])*X,k[1]+(V[1]-k[1])*X,k[2]+(V[2]-k[2])*X];for(let k=0;k<D;k++){let V=B(w,F,k/D),X=B(w,F,(k+1)/D),G=B(C,P,(k+1)/D),q=B(C,P,k/D);c(l(V[0],V[1],V[2]),l(X[0],X[1],X[2]),l(G[0],G[1],G[2]),l(q[0],q[1],q[2]),k%2?b:g)}},x=t.w/2,_=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),E=(t.awning_pitch??12)*Math.PI/180,A=(w,F)=>{t.awning_valance!==!1&&m([-x+.04,w,F+.01],[x-.04,w,F+.01],[-x+.04,w-.2,F+.01],[x-.04,w-.2,F+.01],M)},y=t.variant??"arm";if(y==="side"){let w=e,F=.05,C=0,P=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,w+.05,C-.05,C+.05,f,d),u(x-.06,x,0,w+.05,C-.03,C+.03,f,d),a>.01&&m([-x+.1,w,C],[-x+.1,F,C],[P,w,C],[P,F,C],Math.max(4,Math.round((w-F)/.3))),h([P,F,C],[P,w,C],.02,p);return}if(y==="vertical"){let w=_,F=Math.min(t.d/2,_+v);u(-x,x,e,e+v,w,F,f,d);let C=(w+F)/2;for(let D of[-x+.02,x-.02])h([D,.02,C],[D,e,C],.02,p);let P=e-a*Math.max(0,e-.04);a>.01&&m([-x+.04,e,C],[x-.04,e,C],[-x+.04,P,C],[x-.04,P,C],M),h([-x+.03,P,C],[x-.03,P,C],.025,p);return}if(y==="pergola"){let w=t.d/2-.05,F=e+v,C=F-(w-_)*Math.tan(E);u(-x,x,e,F,_,_+v,f,d);for(let B of[-x+.05,x-.05])h([B,F,_+v],[B,C,w],.035,p),h([B,0,w],[B,C,w],.045,f);h([-x+.05,C,w],[x-.05,C,w],.035,p);let P=_+v+a*(w-_-v),D=F-(P-_)*Math.tan(E)+.04;a>.01&&m([-x+.08,F+.04,_+v],[x-.08,F+.04,_+v],[-x+.08,D,P],[x-.08,D,P],M),h([-x+.08,D,P],[x-.08,D,P],.025,p);return}let R=_,S=_+v;u(-x,x,e,e+v,R,S,f,d);let T=[S-.02,e+v*.35];if(y==="drop"){let w=Math.max(.3,t.d-v),F=[S,T[1]-w],C=a*(Math.PI/2+E),P=[F[0]+Math.sin(C)*w,F[1]+Math.cos(C)*w];for(let D of[-x+.08,x-.08])h([D,F[1],F[0]],[D,P[1],P[0]],.018,p);a>.01&&m([-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],[-x+.04,P[1],P[0]],[x-.04,P[1],P[0]],M),h([-x+.02,P[1],P[0]],[x-.02,P[1],P[0]],.03,p),a>.05&&A(P[1],P[0]);return}let L=Math.max(0,t.d-v)*a,O=[T[0]+L,T[1]-L*Math.tan(E)];if(L>.01){m([-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],[-x+.04,O[1],O[0]],[x-.04,O[1],O[0]],M);let w=Math.max(.3,(t.d-v)/2+.05);for(let F of[-1,1]){let C=F*(x-.12),P=[C,e+.02,S-.04],D=[C,O[1]-.02,O[0]],B=Math.hypot(D[2]-P[2],D[1]-P[1]),k=Math.sqrt(Math.max(0,w*w-(B/2)**2)),V=[C-F*Math.min(k,x-.15),(P[1]+D[1])/2,(P[2]+D[2])/2];h(P,V,.018,p),h(V,D,.018,p)}}h([-x+.02,O[1],O[0]],[x-.02,O[1],O[0]],.03,p),L>.05&&A(O[1],O[0])}function t0(i,t,e,n,r){let s=i.p.length;wM(i,t,e,n,r),t.mirror&&e0(i,s)}function wM(i,t,e,n,r){let s=t.rotation*ae,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],h=e+.05,u=e+t.h-.02,f=new Q(.75,.1,.14),d=new Q(N.dark),p=new Q(N.accent),b=t.w/2-.006,g=(v,M,E)=>{let A=E/m,y=new Q(2043212).lerp(f,A),R=new Q(N.body).lerp(f,A*.8),S=Math.cos(E),T=Math.sin(E),L=(F,C)=>c(v+M*(F*S-C*T),t.d/2+F*T+C*S),O=(F,C,P,D)=>{let[B,k,V,X]=F;i.tri([B[0],C,B[1]],[k[0],C,k[1]],[V[0],P,V[1]],D),i.tri([B[0],C,B[1]],[V[0],P,V[1]],[X[0],P,X[1]],D)},w=(F,C,P,D,B,k,V,X=V)=>{let G=[L(F,k),L(C,k),L(C,B),L(F,B)];O([G[0],G[1],G[1],G[0]],P,D,X),O([G[3],G[2],G[2],G[3]],P,D,V),O([G[0],G[3],G[3],G[0]],P,D,V),O([G[1],G[2],G[2],G[1]],P,D,V),O([G[0],G[1],G[2],G[3]],D,D,V),O([G[3],G[2],G[1],G[0]],P,P,V)};return w(0,b,h,u,-jm,0,R,y),w(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),w},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function TM(i,t,e,n){Ki(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,mt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,N.dark,1451583,12,Qt)}}function EM(i,t,e,n){Ki(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,Qt),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function AM(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,Qt),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function RM(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,Qt),i.seg(r,n,s,o,n,a,Qt),i.seg(o,.05,a,o,n,a,Qt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,Qt)}function CM(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,mt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function PM(i,t,e,n){Ki(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,Qt),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,Qt)}function IM(i,t,e,n){Ki(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,N.dark,N.dark,Qt)}function LM(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,N.pot,N.pot,10,mt),i.cyl(0,0,r*.08,s,n*.55,N.wood,N.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),h=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-s)*.16,N.plant,N.plantTop,8,a===o-1?Dt:null)}}function FM(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,mt)}function DM(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let h=0;h<r;h++){let u=e/2-o*h,f=u-o,d=s*(h+1);i.box(-t/2,t/2,0,d,f,u,N.wood,N.woodTop),i.seg(-t/2,d,u,t/2,d,u,mt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,mt);for(let h of[-t/2,t/2])i.seg(h,s,e/2,h,n,-e/2+o,Dt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),Qt);for(let h=0;h<c;h+=3){let u=e/2-o*(h+.5),f=s*(h+1);i.seg(l,f,u,l,f+a,u,Dt)}}function NM(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:h}=jp(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let A=0;A<s;A++){let y=e/2-c*A,R=h*(A+1);i.box(u,f,0,R,y-c,y,N.wood,N.woodTop),i.seg(u,R,y,f,R,y,mt)}i.seg(u,0,e/2,u,h,e/2,mt);let g=h*r,m=.2;i.box(u,f,0,g,-e/2,b,N.wood,N.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,b,N.wood,N.woodTop),i.seg(u,g,b,f,g,b,mt);for(let A=0;A<o;A++){let y=b+c*A,R=h*(r+1+A);i.box(d,p,Math.max(0,R-h-m),R,y,y+c,N.wood,N.woodTop),i.seg(d,R,y,p,R,y,mt)}i.seg(u,h,e/2,u,g,b,Dt),i.seg(p,g,b,p,n,b+c*(o-1),Dt);let x=.9,_=f-.03,v=d+.03,M=b-.03,E=Math.max(1,o-4);i.seg(_,h+x,e/2-c/2,_,g+x,M,Qt),i.seg(_,g+x,M,v,g+x,M,Qt),i.seg(v,g+x,M,v,h*(r+E)+x,b+c*(E-.5),Qt);for(let A=0;A<s;A+=3){let y=e/2-c*(A+.5);i.seg(_,h*(A+1),y,_,h*(A+1)+x,y,Dt)}for(let A of[_,v])i.seg(A,g,M,A,g+x,M,Dt);for(let A=2;A<E;A+=3){let y=b+c*(A+.5);i.seg(v,h*(r+1+A),y,v,h*(r+1+A)+x,y,Dt)}}function OM(i,t,e,n){Er(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,mt),No(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function UM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Dt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,Qt)}}function BM(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,mt),No(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,mt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function Ym(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,N.wood,N.woodTop,mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,mt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,N.cushion,N.cushion,Dt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,N.wood,N.woodTop,mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,mt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Dt))}function kM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Dt),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,mt)}function zM(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,mt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,mt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function VM(i,t,e,n){Er(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,mt)}function GM(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,mt),No(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function HM(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,Qt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Qt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Dt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Qt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Qt)}function WM(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),No(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function XM(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Qt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function qm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,mt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Dt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,Qt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,Qt),r||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Dt)}}function YM(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Dt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,mt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Dt)}function qM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,mt)}function $M(i,t,e,n){Er(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Dt)}function ZM(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,Qt)}function KM(i,t,e,n){let r=Jh;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,mt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Dt)}}function JM(i,t,e,n){let r=jh;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,mt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Dt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Qt)}function As(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Qt)}}function jM(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,mt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Qt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,mt),As(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Qt);for(let a of[-1,1])As(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Qt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Dt)}function QM(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,mt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Dt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,mt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,Qt)}}function t2(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,s,n*.08,n*.78,N.dark,N.body,18,mt),i.cyl(0,0,s*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,mt),As(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,N.dark,N.metal,16,mt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,Qt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,N.dark,N.body)}function e2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,mt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;As(i,s,o,r,e/2+.004,24),As(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Dt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Dt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Qt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Dt)}function n2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,mt);for(let s of[-1,1])As(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Qt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Dt)}function i2(i,t,e,n){let r=Zp-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,mt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function r2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Qt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Dt)}function s2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,mt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(h)*s,o+Math.sin(h)*s,e/2+.003,Qt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function o2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Dt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Dt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Qt)}function a2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Qt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Dt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Qt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,N.white,N.whiteTop,mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Qt)}}var Jh=.12,jh=2.05;function Qh(i,t){let e=l2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function l2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=Bp(i.type);if(s){let l=t?rn(t,i):0,c=(s.x-s.w/2)*e,h=(s.x+s.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?rn(t,i)-vr(i):0,a=c2(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function c2(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?rn(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Jh+.02,y1:Jh+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:jh+.015,y1:jh+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function u2(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new Q(1-r,1-r,1-r),a=new Q(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],h=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],u=d=>[d[0],l,d[1]],f=i.p.length;i.tri(u(c[0]),u(c[1]),u(c[2]),o),i.tri(u(c[0]),u(c[2]),u(c[3]),o);for(let d=0;d<4;d++){let p=(d+1)%4;i.tri(u(c[d]),u(h[d]),u(h[p]),o,a,a),i.tri(u(c[d]),u(h[p]),u(c[p]),o,a,o)}Zm(t)&&e0(i,f)}function Rc(i,t,e,n,r=0,s=!1){h2(i,t,e,n,r,s)}function e0(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function h2(i,t,e,n,r,s=!1){let o=ve(n.type)?0:r-vr(n);if(ve(n.type)||Math.abs(o)<.001)return $m(i,t,e,n,r,s);let a=i.p.length,l=t.p.length;$m(i,t,r<.05?e:new ee,n,0);for(let c=a+1;c<i.p.length;c+=3)i.p[c]+=o;for(let c=l+1;c<t.p.length;c+=3)t.p[c]+=o}function $m(i,t,e,n,r,s=!1){let o=n.rotation*ae,a=Math.cos(o),l=Math.sin(o),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new Ji(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":Wm(u,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":Wm(u,f,d,p,1);break;case"sofa_l":Xm(u,f,d,p,!1);break;case"sofa_u":Xm(u,f,d,p,!0);break;case"bed":hM(u,f,d,p);break;case"chair":fM(u,f,d,p);break;case"table":dM(u,f,d,p);break;case"desk":pM(u,f,d,p);break;case"nightstand":Ki(u,f,d,p,1,p*.72,!0),u.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Dt);break;case"wardrobe":Ki(u,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":mM(u,f,d,p);break;case"kitchen":gM(u,f,d,p);break;case"fridge":bM(u,f,d,p);break;case"fridge_smart":SM(u,f,d,p);break;case"waste_bin":{let b=i.c.length;xM(u,f,d,p,Fm(n),Um(n,Om())),Do&&Jm(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;MM(u,f,d,p,Dm(n));let m=vr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;if(m>0)return;break}case"wifi_ap":yM(u,f,d,p,n.variant==="wall");return;case"water_heater":if(_M(u,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;vM(u,f,d,p,tm(n).length,n.type==="wall_socket",n.variant==="outdoor");let m=vr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;return}case"awning":return;case"stove":TM(u,f,d,p);break;case"sink":EM(u,f,d,p);break;case"bathtub":AM(u,f,d,p);break;case"shower":RM(u,f,d,p);break;case"wc":CM(u,f,d,p);break;case"washbasin":PM(u,f,d,p);break;case"tv_board":IM(u,f,d,p);break;case"plant":LM(u,f,d,p);break;case"rug":FM(u,f,d);return;case"stairs":DM(u,f,d,p);break;case"stairs_u":NM(u,f,d,p);break;case"stairwell":return;case"sideboard":OM(u,f,d,p);break;case"dresser":UM(u,f,d,p);break;case"tall_cabinet":Ki(u,f,d,p,1,p*.5);break;case"coat_rack":BM(u,f,d,p);break;case"bench":Ym(u,f,d,p,!1);break;case"corner_bench":Ym(u,f,d,p,!0);break;case"bar_stool":kM(u,f,d,p);break;case"office_chair":zM(u,f,d,p);break;case"stool":VM(u,f,d,p);break;case"kitchen_wall":GM(u,f,d,p);return;case"kitchen_tall":HM(u,f,d,p);break;case"island":WM(u,f,d,p);break;case"worktop":u.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,N.whiteTop,N.whiteTop,mt);return;case"dishwasher":XM(u,f,d,p);break;case"washer":qm(u,f,d,p,!1);break;case"dryer":qm(u,f,d,p,!0);break;case"bunk_bed":YM(u,f,d,p);break;case"table_round":qM(u,f,d,p);break;case"coffee_table":$M(u,f,d,p);break;case"tv_wall":ZM(u,f,d,p);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let m=0;m<4;m++)u.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Dt);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,mt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,mt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,N.white,N.whiteTop,mt),u.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,N.accent);return;case"radiator":KM(u,f,d,p);return;case"ac_unit":JM(u,f,d,p);return;case"inverter":jM(u,f,d,p,n.variant??null);return;case"grid_point":r2(u,f,d,p);break;case"wallbox":s2(u,f,d,p);return;case"pool_pump":QM(u,f,d,p);break;case"pool_filter":t2(u,f,d,p,n.variant??null);break;case"pool_heat_pump":e2(u,f,d,p);break;case"pool_dosing":n2(u,f,d,p);break;case"pool_valve":i2(u,f,d,p);return;case"meter":o2(u,f,d,p);return;case"home_battery":if(a2(u,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=ve(n.type);if(b){let g=cc(n.type),m=g?x=>Eh(g,x):Op(n.type)&&!s?Ro:null;if(Oo(u,b,f,d,p,r,null,null,m),r>.05)return}else u.box(-f/2,f/2,0,p,-d/2,d/2,N.body,N.bodyTop,mt)}}u2(e,h,f,d,n.type==="plant"?.35:.5)}function n0(i){return!!ve(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function Kh(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Oo(i,t,e,n,r,s,o,a=null,l=null){let c=!!a;for(let h of wc(t,e,n,r)){if(l?.(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&o!==null,d=f?o:Kh(u.color,!1)??N.body,p=f?o:Kh(u.top,!1)??Kh(u.color,!0)??zt(d,1.25).getHex(),b=s+u.y*r,g=s+Math.min(r,(u.y+u.h)*r),m=i.colors.length,x=u.edges==="glow"?$i:u.edges==="faint"?Dt:u.edges?mt:null,_=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))_.lyingCyl(u.axis,u.x*e,u.z*n,b,g,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,p,14,x);else if(u.shape==="cyl")_.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,g,d,p,14,x);else if(u.shape==="loft"){let v=u.tx??u.x,M=u.tz??u.z,E=u.tw??u.w,A=u.td??u.d;_.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(v-E/2)*e,(v+E/2)*e,(M-A/2)*n,(M+A/2)*n],b,g,d,p,x)}else _.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,g,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,p,x);Do&&!f&&!c&&(u.color?.startsWith("#")||u.top?.startsWith("#"))&&Jm(i.colors,m)}}function i0(i,t,e,n,r,s){let o=s*ae,a=Math.cos(o),l=Math.sin(o),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],h=new Ji(i,new Ne,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function r0(i,t,e,n,r){let s=Up(t)*n,o=new Ji(i,new Ne,(c,h)=>[c,h-s]);Oo(o,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Ro);let a=0,l=0;for(let c of wc(t,e,n,r)){if(!Ro(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Uo(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ae,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Oo(new Ji(i,new Ne,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function s0(i,t,e,n,r,s){let o=f2(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ae,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Oo(new Ji(i,new Ne,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function f2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>Eh(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function o0(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),s=Math.max(.005,t.h),o=0,a=0,l=0,c=0;for(let g of wc(i,n,r,s)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*s,v=Math.min(s,(g.y+g.h)*s),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-_));o+=M,a+=m*M,l+=(_+v)/2*M,c+=x*M}if(!o)return null;let h=a/o,u=c/o,f=t.rotation*ae,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*p,e+l/o,t.z+b*h*p+u*d]}function Cc(i,t,e,n,r){let s=e.rotation*ae,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*o-u*a,e.z+l*h*a+u*o];Oo(new Ji(i,new Ne,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var d2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function p2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-s*u)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function l0(i,t){return t.type==="pool"?pc(i,t):yr(i,t)+(Hn(t.type)?.01:bs[t.type])}function Bo(i){return wn(i)>=0?i:[...i].reverse()}function m2(i,t){let e=i[t];if(Hn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>jt(o,e.points))&&n.push(Bo(s.points))}return n}function a0(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ie(i,Bo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let p=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Kt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Kt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Kt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Kt)},m=new Q(a),x=new Q(zt(o,.9)),_=new Q(zt(o,.6));g([p(s,1),b(s,1),b(s,-1),p(s,-1)],m),g([p(r,1),b(r,1),b(r,-1),p(r,-1)],_),g([p(r,1),b(r,1),b(s,1),p(s,1)],x),g([p(r,-1),b(r,-1),b(s,-1),p(s,-1)],x),g([p(r,1),p(r,-1),p(s,-1),p(s,1)],x),g([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function c0(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=yr(e,s),l=(x,_)=>a-Co(e,s,x,_),c=a-(s.type==="pool"?0:s.slope??0),h=Hn(s.type)&&s.height?s.height:bs[s.type],u={...d2[s.type],top:h},f=Bo(s.points),d=zt(u.edge,u.edgeAlpha),p=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,b=x=>{if(s.outline!==!1)for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],M=f[(_+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Kt)}},g=n??i,m=new Q(n?1734832:u.color);switch(s.type){case"pool":{let x=new Q(u.side),_=new Q(zt(u.side,.55)),v=new Q(932440),M=pc(e,s),E=dc(e,s),A=qp(e,s);for(let[y,R,S]of Pn(f)){let T=f[y],L=f[R],O=f[S];(n?g:i).tri([T[0],M,T[1]],[O[0],M,O[1]],[L[0],M,L[1]],m,m,m,void 0,Kt),i.tri([T[0],A,T[1]],[O[0],A,O[1]],[L[0],A,L[1]],v,v,v,void 0,Kt)}for(let y=0;y<f.length;y++){let R=f[y],S=f[(y+1)%f.length];i.tri([S[0],A,S[1]],[S[0],E,S[1]],[R[0],E,R[1]],_,x,x,void 0,Kt),i.tri([S[0],A,S[1]],[R[0],E,R[1]],[R[0],A,R[1]],_,x,_,void 0,Kt)}if(!s.above&&Ch(e,s)){let y=new Q(660258),R=new Q(396054),S=A-.2,T=Math.min(a,E);for(let L=0;L<f.length;L++){let O=f[L],w=f[(L+1)%f.length];i.tri([O[0],S,O[1]],[O[0],T,O[1]],[w[0],T,w[1]],R,y,y,void 0,Kt),i.tri([O[0],S,O[1]],[w[0],T,w[1]],[w[0],S,w[1]],R,y,R,void 0,Kt)}for(let[L,O,w]of Pn(f)){let F=f[L],C=f[O],P=f[w];i.tri([F[0],S,F[1]],[C[0],S,C[1]],[P[0],S,P[1]],R,R,R,void 0,Kt)}if(s.outline!==!1)for(let L=0;L<f.length;L++){let O=f[L],w=f[(L+1)%f.length];t.seg([O[0],S,O[1]],[w[0],S,w[1]],zt(u.edge,u.edgeAlpha*.35),Kt),t.seg([O[0],S,O[1]],[O[0],T,O[1]],zt(u.edge,u.edgeAlpha*.25),Kt)}}if(E>a+.02){let y=new Q(2044240),R=new Q(1187123);for(let S=0;S<f.length;S++){let T=f[S],L=f[(S+1)%f.length];i.tri([T[0],a,T[1]],[T[0],E,T[1]],[L[0],E,L[1]],R,y,y,void 0,Kt),i.tri([T[0],a,T[1]],[L[0],E,L[1]],[L[0],a,L[1]],R,y,R,void 0,Kt)}b(()=>a+.005)}if(b(()=>E),b(()=>M+.005),s.outline!==!1)for(let y=0;y<f.length;y++){let R=f[y],S=f[(y+1)%f.length];t.seg([R[0],A+.005,R[1]],[S[0],A+.005,S[1]],zt(u.edge,u.edgeAlpha*.4),Kt)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let _=f[x],v=f[(x+1)%f.length],M=Math.hypot(v[0]-_[0],v[1]-_[1]),E=Math.max(1,Math.round(M/2)),A=p>=0&&x===p-1?E:E-1;for(let y=0;y<=A;y++){let R=y/E,S=_[0]+(v[0]-_[0])*R,T=_[1]+(v[1]-_[1])*R,L=l(S,T);Ie(i,Bo([[S-.04,T-.04],[S+.04,T-.04],[S+.04,T+.04],[S-.04,T+.04]]),L,L+u.top,u.side,u.color)}for(let y of[.35,.85])t.seg([_[0],l(_[0],_[1])+y*u.top,_[1]],[v[0],l(v[0],v[1])+y*u.top,v[1]],d,Kt)}break}case"pergola":{let x=u.top;for(let[_,v]of f){let M=l(_,v);Ie(i,Bo([[_-.06,v-.06],[_+.06,v-.06],[_+.06,v+.06],[_-.06,v+.06]]),M,M+x,u.side,u.color)}for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],M=f[(_+1)%f.length],E=l(v[0],v[1])+x;if(a0(i,v,M,.12,E-.16,E,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let A=l(v[0],v[1]),y=l(M[0],M[1]);t.seg([v[0],A+.25,v[1]],[M[0],y+x-.25,M[1]],d,Kt),t.seg([M[0],y+.25,M[1]],[v[0],A+x-.25,v[1]],d,Kt)}}if(im(f)){let _=rm(f),v=_.x1-_.x0,M=_.z1-_.z0,E=v>=M,A=E?v:M,y=Math.max(1,Math.round(A/.6));for(let R=1;R<y;R++){let S=(E?_.x0:_.z0)+A*R/y,T=E?[S,_.z0+.06]:[_.x0+.06,S],L=E?[S,_.z1-.06]:[_.x1-.06,S],O=l(T[0],T[1])+x;a0(i,T,L,.06,O-.04,O+.08,u.side,u.color,l(L[0],L[1])-l(T[0],T[1]))}}b((_,v)=>l(_,v)+x+.004);break}case"balcony":{Ie(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let _=s.height&&s.height>.3?s.height:1,v=zt(9417983,.42),M=zt(3662079,.55);for(let E=0;E<f.length;E++){let A=f[E],y=f[(E+1)%f.length];if(p2(e,A,y))continue;let R=Math.hypot(y[0]-A[0],y[1]-A[1]),S=a+u.top;t.seg([A[0],S+_,A[1]],[y[0],S+_,y[1]],M,Kt),t.seg([A[0],S+.1,A[1]],[y[0],S+.1,y[1]],v,Kt);let T=Math.max(1,Math.round(R/.12));for(let L=0;L<=T;L++){let O=L/T,w=A[0]+(y[0]-A[0])*O,F=A[1]+(y[1]-A[1])*O;t.seg([w,S,F],[w,S+_,F],L===0||L===T?M:v,Kt)}}break}default:{let x=(v,M)=>l(v,M)+u.top,_=m2(r,o);if(Ie(i,f,c,s.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:_}),b((v,M)=>x(v,M)+.004),s.type==="hedge"&&b((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of _)for(let M=0;M<v.length;M++){let E=v[M],A=v[(M+1)%v.length];t.seg([E[0],x(E[0],E[1])+.004,E[1]],[A[0],x(A[0],A[1])+.004,A[1]],d,Kt)}}}})}var Ic=Math.PI/180,g2=1.13,b2=1.72,tf=.025,Ar=.07,u0=.25;function h0(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=ai(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,h=-o/l,u=Math.min(n.height,s.height??n.height),f=s.sources.find(b=>b.room_id===s.roomLeft)?.edge??null,d={floorId:n.id,room:s.roomLeft,edge:f,free:!!s.free},p=(b,g,m,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+h*s.right],[o/l,0,a/l],[c,0,h]),s.free&&p(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-h*s.left],[-o/l,0,-a/l],[-c,0,-h])}}return e}var ef="ground";function nf(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function f0(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=nf(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Yp(s,o,a)):t.base??0;return{key:ef,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function x2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Cr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>v2(x,_c(i,x,x.overhang??t.overhang)));let e=x2(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(_=>_[0])),r=e.rooms.flatMap(x=>x.points.map(_=>_[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=e.elevation+e.height;if(t.type==="flat")return[d0("main",null,o,l,a,c,h+u0)];let u=a-o>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-o)/2,p=d*Math.tan(t.pitch*Ic),b=(x,_,v)=>f?[x,h+v,(l+c)/2+_]:[(o+a)/2+_,h+v,x],[g,m]=f?[o,a]:[l,c];return[-1,1].map(x=>Pc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(m,x*d,0),b(g,0,p),t.pitch,()=>[0,m-g]))}function v2(i,t){let e=pn(i),n=sn(i),r=(_,v,M)=>{let[E,A]=e.at(_,v);return[E,M,A]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-s),v=e.at(l,e.w+o);return[d0(i.id,i.id,Math.min(_[0],v[0]),Math.min(_[1],v[1]),Math.max(_[0],v[0]),Math.max(_[1],v[1]),i.eave_a+u0)]}if(i.shape==="pent")return[Pc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let h=yc(i),u=h?Oh(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+p-a:0,m=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+s,n.rh-n.y(-s));x.push(Pc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/_),c-m*(v/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));x.push(Pc(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,v=>[m*(v/_),c-g*(v/_)]))}if(f||d){let _=n.y(-s),v=n.y(e.w+o),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+o,v),r(a,-s,_),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-s,_),r(l,e.w+o,v),r(e.u1-b,n.vr,n.rh)]);for(let[E,A,y,R,S]of M){let T=y2(E,i.id,A,y,R,S);T&&x.push(T)}}return x}function y2(i,t,e,n,r,s){let o=ko(Rr(r,n));if(o<.3)return null;let a=ji(Rr(r,n)),l=Rr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=ko(h);if(u<.3)return null;let f=ji(h),d=ji(g0(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=ji([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Ic;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:b,span:m=>{let x=Math.min(1,Math.max(0,m/u));return[c*x,o-(o-c)*x]},facing:[p[0],p[2]]}}function Pc(i,t,e,n,r,s,o,a){let l=ji(Rr(r,n)),c=ji(Rr(s,n)),h=ji(g0(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=ji([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:ko(Rr(r,n)),ls:ko(Rr(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function d0(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function p0(i){let t=i.module_w||g2,e=i.module_h||b2;return i.portrait===!1?[e,t]:[t,e]}function _2(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function m0(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Ic:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Ic:0}function M2(i,t){let[,e]=p0(t),n=m0(i,t);return i.wall?e*Math.cos(n)+tf:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+tf}function zo(i,t,e=!1){let[n,r]=p0(t),s=[],o=m0(i,t),a=r*Math.cos(o),l=M2(i,t),c=_2(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,m)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*m],p=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,x]=i.span(g);return b>=m-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let m=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let _=`${g}:${x}`,v=u.has(_);if(v&&!e)continue;let M=t.u+(x+m)*(n+tf),E=t.v+g*l,A=M+n,y=E+(i.flat||i.wall?a:r);if(f){if(!(p((M+A)/2,E)&&p((M+A)/2,y)))continue}else if(![[M,E],[A,E],[A,y],[M,y]].every(([w,F])=>p(w,F)))continue;if(i.wall&&o>.001){let w=Ar+r*Math.sin(o),[F,C]=t.flip?[w,Ar]:[Ar,w],P=[d(M,E,F),d(A,E,F),d(A,y,C),d(M,y,C)],D=t.flip?E:y,B=[M+.05,A-.05].map(k=>[d(k,D,0),d(k,D,w)]);s.push({corners:P,posts:B,cell:_,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,E,Ar),d(A,E,Ar),d(A,y,Ar),d(M,y,Ar)],posts:[],cell:_,skipped:v});continue}let R=.15,S=R+r*Math.sin(o),[T,L]=t.flip?[y,E]:[E,y],O=[d(M,T,R),d(A,T,R),d(A,L,S),d(M,L,S)];s.push({corners:O,posts:[M+.05,A-.05].flatMap(w=>[[d(w,T,0),d(w,T,R)],[d(w,L,0),d(w,L,S)]]),cell:_,skipped:v})}}),s}function Rr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function ko(i){return Math.hypot(i[0],i[1],i[2])}function ji(i){let t=ko(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function g0(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var S2=.78,w2=1.18;function T2(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||S2,module_h:i.h||w2}}function Lc(i,t){let e=zo(i,T2(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Fc(i,t,e){let n=t?Lc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>jt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var Vo=1712952,Go=2239816,y0=1318193,Qi=zt(3662079,.9),Rs=zt(5995775,.45),$e=.14,E2=9427199,A2=13226982,R2=14936565,C2={black:{glass:new Q(329483),edge:zt(9082544,.32),cells:zt(2766160,.22)},blue:{glass:new Q(1386842),edge:zt(10467583,.55),cells:zt(4025599,.35)}},P2=zt(13226982,.5),I2=zt(13226982,.85),L2=zt(16757575,.95),b0=new Q(2845583),x0=new Q(1713986),F2=new Q(3662079).multiplyScalar(.35),v0=new Q(4871791);function D2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function _0(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:U2(i),r=e?.type==="custom"?B2(i,e.sections??[],e.overhang):n?[n]:[];return O2(i,r),N2(i,r,t),r}function N2(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Cr(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Lc(o,s):null;if(!o||!a)continue;let l=o.section?t.find(C=>C.sections?.includes(o.section)):t[0];if(!l)continue;let c=s.float?Fc(i,o,s):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=C=>[C[0],C[1]-u,C[2]],[d,p,b,g]=a.map(f),m=e.get(s.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),_=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new ee,lines:new Ne,glass:new ee}).get(h.id):x?l.win??={solid:new ee,lines:new Ne,glass:new ee}:l.winRoof??={solid:new ee,lines:new Ne,glass:new ee},v=(C,P)=>[C[0]+o.n[0]*P,C[1]+o.n[1]*P,C[2]+o.n[2]*P],M=(C,P,D)=>[C[0]+(P[0]-C[0])*D,C[1]+(P[1]-C[1])*D,C[2]+(P[2]-C[2])*D],E=m.open>.02||m.tilt>.02?L2:I2,A=[d,p,b,g].map(C=>v(C,.06)),y=[d,p,b,g].map(C=>v(C,-.02));for(let C=0;C<4;C++){_.lines.seg(A[C],A[(C+1)%4],E);let P=(C+1)%4;_.solid.tri(y[C],y[P],A[P],v0),_.solid.tri(y[C],A[P],A[C],v0)}let R=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*ae,S=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),T=C=>{let P=o.es;return[C[0]-P[0]*S*Math.cos(R)+o.n[0]*S*Math.sin(R),C[1]-P[1]*S*Math.cos(R)+o.n[1]*S*Math.sin(R),C[2]-P[2]*S*Math.cos(R)+o.n[2]*S*Math.sin(R)]},L=v(g,.065),O=v(b,.065),w=T(L),F=T(O);_.glass.tri(w,F,O,b0),_.glass.tri(w,O,L,b0);for(let[C,P]of[[w,F],[F,O],[O,L],[L,w]])_.lines.seg(C,P,E);if(m.cover>.02){let C=Math.min(1,m.cover),P=v(M(L,w,C),.01),D=v(M(O,F,C),.01),B=v(L,.01),k=v(O,.01);_.solid.tri(P,D,k,x0),_.solid.tri(P,k,B,x0);let V=Math.max(1,Math.round(S*C/.05));for(let X=1;X<=V;X++){let G=X/V;_.lines.seg(v(M(B,P,G),.004),v(M(k,D,G),.004),F2)}}}}function O2(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Cr(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&rf(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function rf(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=C2[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of zo(e,n)){let[h,u,f,d]=c.corners.map(s);i.tri(h,u,f,o.glass),i.tri(h,f,d,o.glass),i.tri(h,f,u,o.glass),i.tri(h,d,f,o.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],b=(m,x,_)=>[m[0]+(x[0]-m[0])*_,m[1]+(x[1]-m[1])*_,m[2]+(x[2]-m[2])*_],g=[h,u,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(p(b(h,u,m/a)),p(b(d,f,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(p(b(h,d,m/l)),p(b(u,f,m/l)),o.cells);for(let[m,x]of c.posts)t.seg(s(m),s(x),P2)}}function U2(i){let t=i.settings.roof,e=D2(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(S=>S.points.map(T=>T[0])),r=e.rooms.flatMap(S=>S.points.map(T=>T[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=new ee,u=new Ne;if(t.type==="flat"){Ie(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,Vo,Go,{bottom:!0});let S=.252;for(let[T,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([T[0],S,T[1]],[L[0],S,L[1]],Qi),u.seg([T[0],0,T[1]],[L[0],0,L[1]],Rs);return{floor:e,base:e.height,solid:h,lines:u,glass:new ee}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-o)/2,b=p*Math.tan(t.pitch*ae),g=(S,T,L)=>d?[S,L,(l+c)/2+T]:[(o+a)/2+T,L,S],[m,x]=d?[o,a]:[l,c],_=new Q(Go),v=new Q(Vo),M=(S,T,L,O,w)=>{h.tri(S,T,L,w),h.tri(S,L,O,w)};for(let S of[-1,1]){M(g(m,S*p,0),g(x,S*p,0),g(x,0,b),g(m,0,b),_),M(g(m,S*p,-$e),g(m,0,b-$e),g(x,0,b-$e),g(x,S*p,-$e),v),M(g(m,S*p,-$e),g(x,S*p,-$e),g(x,S*p,0),g(m,S*p,0),v);for(let T of[m,x])M(g(T,S*p,-$e),g(T,S*p,0),g(T,0,b),g(T,0,b-$e),v);u.seg(g(m,S*p,0),g(x,S*p,0),Rs);for(let T of[m,x])u.seg(g(T,S*p,0),g(T,0,b),Rs)}let E=t.overhang,A=new Q(y0),y=p-E,R=y*Math.tan(t.pitch*ae);for(let S of[m+E,x-E])h.tri(g(S,-y,-$e),g(S,y,-$e),g(S,0,R-$e),A),h.tri(g(S,y,-$e),g(S,-y,-$e),g(S,0,R-$e),A);return u.seg(g(m,0,b+.004),g(x,0,b+.004),Qi),{floor:e,base:e.height,solid:h,lines:u,glass:new ee}}function B2(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,s=new Map(Cr(i).map(l=>[l.key,l])),o=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(o.map(l=>{let c=Sr(t,l),h=c?null:_m(t,l),u=c?Uh(c,l):h?Sm(l,h):l,f=_c(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?vm(u,wr(u,d).faces):[]}]}));for(let l of o){let c=a.get(l),h=mm(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new ee,lines:new Ne,glass:new ee,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(v=>v!==l&&Sr(t,v)===l).flatMap(v=>pm(l,v));for(let v of i.settings.roof.windows??[]){let M=s.get(v.face),E=M&&M.section===l.id?Lc(M,v):null;if(!E)continue;let A=E.map(y=>yi(l,y[0],y[2]));b.push({u0:Math.min(...A.map(y=>y[0])),u1:Math.max(...A.map(y=>y[0])),v0:Math.min(...A.map(y=>y[1])),v1:Math.max(...A.map(y=>y[1]))})}let g=c.drawn,m=c.junction?1-c.junction.end:null;if(d){let v=pn(g),M=wr(d,{u0:0,u1:0,a:0,b:0}),E=A=>{let[y,R]=v.at(A,v.w/2),[S,T]=yi(d,y,R);return Fo(M,S,T)??sn(d).y(T)};m=E(v.u0)<=E(v.u1)?0:1}let x=o.filter(v=>ym(t,l,v)),_=x.length?{covers:zh(g,x.flatMap(v=>a.get(v).covers)),lines:zh(g,x.filter(v=>o.indexOf(v)>o.indexOf(l)).flatMap(v=>a.get(v).covers)),wallU:c.junction?[pn(l).u0,pn(l).u1]:null}:null;k2(f.solid,f.lines,g,c.ov,h.elevation,f.glass,p,b,m,_)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function k2(i,t,e,n,r,s=i,o=!1,a=[],l=null,c=null){let h=pn(e),u=sn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),m=h.u1+Math.max(0,f.u1),x=(C,P,D)=>{let[B,k]=h.at(C,P);return[B,D-r,k]},_=new Q(Go),v=new Q(Vo),M=new Q(y0),E=(C,P)=>{for(let D=1;D+1<C.length;D++)i.tri(C[0],C[D],C[D+1],P)},A=[],y=[],R=[],S=[null,null],T=[];if(e.shape==="flat"||e.shape==="parapet"){let C=e.eave_a,P=e.shape==="parapet",D=e.points&&e.points.length>=3?hm(e,P?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):P?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(m,-d),h.at(m,b+p),h.at(g,b+p)];Ie(i,D,C-r,C-r+.25,Vo,Go,{bottom:!0});for(let B=0;B<D.length;B++){let k=D[B],V=D[(B+1)%D.length];t.seg([k[0],C-r+.252,k[1]],[V[0],C-r+.252,V[1]],Qi),t.seg([k[0],C-r,k[1]],[V[0],C-r,V[1]],Rs)}if(P){let B=G=>Wn(G)>=0?G:[...G].reverse(),k=B(D),V=vc(k,-.2),X=k.length;for(let G=0;G<X;G++){let q=B([k[G],k[(G+1)%X],V[(G+1)%X],V[G]]);Ie(i,q,C-r+.25,C-r+.65,Vo,Go),t.seg([k[G][0],C-r+.652,k[G][1]],[k[(G+1)%X][0],C-r+.652,k[(G+1)%X][1]],Qi),t.seg([V[G][0],C-r+.652,V[G][1]],[V[(G+1)%X][0],C-r+.652,V[(G+1)%X][1]],Qi)}}}else{let C=wr(e,f);A=C.faces;for(let P of a)A=A.flatMap(D=>Bh(D,P));if(y=C.rim,R=C.ridges,S=C.gables,c){for(let P of A)for(let D of c.lines){let B=xm(P,D.poly);if(B)for(let[k,V]of kh(B[0],B[1],c.covers.filter(X=>X!==D)))T.push([k,V])}A=A.flatMap(P=>bm(P,c.covers))}}let L=!!e.open,O=new Q(E2);for(let C of A){if(L){for(let P=1;P+1<C.length;P++)s.tri(x(C[0][0],C[0][1],C[0][2]),x(C[P][0],C[P][1],C[P][2]),x(C[P+1][0],C[P+1][1],C[P+1][2]),O);continue}E(C.map(([P,D,B])=>x(P,D,B)),_),E(C.map(([P,D,B])=>x(P,D,B-$e)),v)}let w=(C,P)=>c?kh(C,P,c.covers):[[C,P]];for(let C=0;C<y.length;C++)for(let[[P,D,B],[k,V,X]]of w(y[C],y[(C+1)%y.length]))L||E([x(P,D,B),x(k,V,X),x(k,V,X-$e),x(P,D,B-$e)],v),t.seg(x(P,D,B),x(k,V,X),L?Qi:Rs);if(L){z2(i,t,h,u,f,x,r);return}for(let[C,P]of R)for(let[[D,B,k],[V,X,G]]of w(C,P))t.seg(x(D,B,k+.004),x(V,X,G+.004),Qi);for(let[[C,P,D],[B,k,V]]of T)t.seg(x(C,P,D+.004),x(B,k,V+.004),Qi);let F=e.base;if(!o){for(let C of[0,1]){let P=S[C];if(!P||l!==null&&l!==C)continue;let D=V2(P,F-$e),B=C===0?h.u0:h.u1;D.length>=3&&E(D.map(([k,V])=>x(B,k,V)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[C,P]=c?.wallU??[h.u0,h.u1];for(let D of[0,b]){let B=u.y(D)-$e;B>F+.02&&E([x(C,D,F),x(P,D,F),x(P,D,B),x(C,D,B)],M)}}else if(e.eave_a>F+.02)for(let[C,P,D,B]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])E([x(C,P,F),x(D,B,F),x(D,B,e.eave_a),x(C,P,e.eave_a)],M)}}function z2(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,x,_,v,M,E)=>{let A=[e.at(m,_),e.at(x,_),e.at(x,v),e.at(m,v)],y=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);Ie(i,y<0?[...A].reverse():A,M-o,E-o,A2,R2,{bottom:!0})},b=o;for(let[m,x]of[[0,h],[a,u]]){if(!x)continue;let _=n.y(m)-.03,v=m===0?0:a-l;p(e.u0,e.u1,v,v+l,_-c,_),t.seg(s(e.u0,m,_-c),s(e.u1,m,_-c),Rs)}for(let[m,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let v=a*_/6,M=a*(_+1)/6,E=Math.min(n.y(v),n.y(M))-.03;p(m,m+l,v,M,E-c,E)}let g=[];for(let[m,x]of[[0,h],[a-l,u]]){if(!x)continue;let _=e.u1-e.u0-l,v=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=v;M++){let E=e.u0+_*M/v;M===0&&!f||M===v&&!d||g.push([E,m])}}if(!h&&!u)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,x]of g){let _=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,b,_)}}function V2(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Ho={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},M0={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},tn=.2,G2=-.06,H2=.01,Wo=8,Dc=.42,sf=.42;function E0(i,t,e,n=[],r=[],s){let{walls:o,open:a}=ai(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(w,F,C,P)=>{let D=P?.slope?Math.min(C,Ph(P.slope,w,F)):C,B=s?s(w,F):null;return B===null?D:Math.max(.05,Math.min(D,B))},c=(w,F)=>{let C=s?s(w,F):null;return C!==null&&C<G2},h=(w,F,C,P,D,B)=>{if(!s&&!B?.slope)return D;let k=D,V=Math.max(2,Math.ceil((P-C)/.25)+1);for(let X=0;X<V;X++){let G=C+(P-C)*X/(V-1);k=Math.min(k,l(w[0]+F[0]*G,w[1]+F[1]*G,D,B))}return k},u=new ee(!0,!0),f=[],d=new Ne,p=[];for(let w of i.rooms){if(w.points.length<3)continue;let F=Nc(w.points),C=M0[w.floor_material]??M0.wood,P=new Q(C.color),D=n.flatMap(q=>{if(Rm(q,F))return[q];if(!Tm(q))return[];let et=ws(F,q);return et.length>=3&&Math.abs(Wn(et))>.01?[Nc(et)]:[]}),B=Am(D).map(q=>Cm(Nc(q),.003));p.push(...B);let k=[...F,...B.flat()],V=u.count;for(let[q,et,j]of Pn(F,B)){let W=k[q],Y=k[et],st=k[j];u.tri([W[0],0,W[1]],[st[0],0,st[1]],[Y[0],0,Y[1]],P,P,P,[W[0],W[1],st[0],st[1],Y[0],Y[1]],Kt,C.tile)}f.push({roomId:w.id,start:V,end:u.count,color:C.color});let X=new Q(Ho.slab),G=q=>{for(let et=0;et<q.length;et++){let j=q[et],W=q[(et+1)%q.length];u.tri([j[0],-tn,j[1]],[j[0],0,j[1]],[W[0],0,W[1]],X),u.tri([j[0],-tn,j[1]],[W[0],0,W[1]],[W[0],-tn,W[1]],X)}};G(F);for(let q of B){G([...Nc(q)].reverse());for(let et=0;et<q.length;et++){let j=q[et],W=q[(et+1)%q.length];d.seg([j[0],.006,j[1]],[W[0],.006,W[1]],$i),d.seg([j[0],-tn,j[1]],[W[0],-tn,W[1]],_i)}}}let b=new Map,g=[],m=new Map;for(let w of o){let F="interior",C=null;if(w.exterior){let D=w.b[0]-w.a[0],B=w.b[1]-w.a[1],k=Math.hypot(D,B)||1,V=[B/k,-D/k],X=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*Wo)%Wo+Wo)%Wo;F=`s${X}`;let G=X/Wo*2*Math.PI;C=[Math.cos(G),Math.sin(G)]}let P=b.get(F);P===void 0&&(P=g.length,b.set(F,P),g.push(C)),m.set(w,P)}let x=new Map,_=[];for(let w of i.openings){let F=_s(w,i.rooms,i.walls??[]);if(!F)continue;let C=Ms(o,w,F);if(!C)continue;let{wall:P,s:D}=C,B=Uc([P.b[0]-P.a[0],P.b[1]-P.a[1]]),k=Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1]),V=D-w.width/2<-1e-6?Lh(o,P,!1):null,X=D+w.width/2>k+1e-6?Lh(o,P,!0):null,G=Xt=>Xt?Math.hypot(Xt.b[0]-Xt.a[0],Xt.b[1]-Xt.a[1]):0,q=-G(V),et=k+G(X),j=Math.min(w.width,et-q),W=Math.max(q,Math.min(et-j,D-j/2)),Y=F.room.points,st=P.free?B[0]*(Y[1][0]-Y[0][0])+B[1]*(Y[1][1]-Y[0][1])>0:P.exterior||P.roomLeft===w.room_id,at=[-B[1],B[0]],J=st?at:[-at[0],-at[1]],ht=Math.min(h(P.a,B,W,W+j,Xo(P,i.height),P)-.02,w.sill+w.height),pt=Math.max(0,Math.min(w.sill,ht-.1)),ut=[J[1],-J[0]],bt=B[0]*ut[0]+B[1]*ut[1]>0,Ut={opening:w,bucket:m.get(P),start:[P.a[0]+B[0]*W,P.a[1]+B[1]*W],axis:B,width:j,toRoom:J,faceRoom:st?P.left:P.right,faceOut:st?P.right:P.left,sill:pt,top:ht,hingeAtStart:w.hinge==="left"===bt,exterior:P.exterior};_.push(Ut);let At=x.get(P);At||x.set(P,At=[]),At.push({s0:W,s1:W+j,sill:pt,top:ht,info:Ut});for(let Xt of[V,X]){if(!Xt)continue;let ye=Z=>(P.a[0]+B[0]*Z-Xt.a[0])*B[0]+(P.a[1]+B[1]*Z-Xt.a[1])*B[1],He=Math.max(0,ye(W)),Te=Math.min(G(Xt),ye(W+j));if(Te-He<1e-4)continue;let Le=x.get(Xt);Le||x.set(Xt,Le=[]),Le.push({s0:He,s1:Te,sill:pt,top:ht,info:Ut,cont:!0})}}let v=Math.min(i.cut_height,i.height),M=new ee;for(let w of o){let F=m.get(w),C=Uc([w.b[0]-w.a[0],w.b[1]-w.a[1]]),P=(x.get(w)??[]).sort((j,W)=>j.s0-W.s0),D=Xo(w,i.height),B=[],k=[-1/0,...new Set(P.flatMap(j=>[j.s0,j.s1])).values(),1/0].sort((j,W)=>j-W);for(let j=0;j+1<k.length;j++){let W=k[j],Y=k[j+1];if(Y-W<1e-6)continue;let st=Number.isFinite(W)&&Number.isFinite(Y)?(W+Y)/2:Number.isFinite(W)?W+1:Y-1,at=P.filter(pt=>pt.s0<st&&pt.s1>st).map(pt=>[pt.sill,pt.top]).sort((pt,ut)=>pt[0]-ut[0]),J=[],ht=-tn;for(let[pt,ut]of at)pt>ht+1e-4&&J.push([ht,pt<1e-4?-H2:pt]),ht=Math.max(ht,ut);D>ht+1e-4&&J.push([ht,D]),B.push({t0:W,t1:Y,ranges:J})}let V=Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1]),X=(s||w.slope)&&h(w.a,C,0,V,D,w)<D-.001,G=X?B.flatMap(j=>{let W=Math.max(j.t0,-.5),Y=Math.min(j.t1,V+.5),st=Math.max(1,Math.ceil((Y-W)/.3));return Array.from({length:st},(at,J)=>({t0:J===0?j.t0:W+(Y-W)*J/st,t1:J===st-1?j.t1:W+(Y-W)*(J+1)/st,ranges:j.ranges,inner0:J>0,inner1:J<st-1}))}):B.map(j=>({...j,inner0:!1,inner1:!1})),q=j=>(j[0]-w.a[0])*C[0]+(j[1]-w.a[1])*C[1],et=j=>{if(!s)return[j];let W=of(w.footprint,w.a,C,j.t0,j.t1),Y=W.filter(([ht,pt])=>c(ht,pt)).length;if(Y===0)return[j];if(Y===W.length)return[];let st=Math.max(j.t0,-.5),at=Math.min(j.t1,V+.5),J=Math.max(1,Math.ceil((at-st)/.05));return Array.from({length:J},(ht,pt)=>({t0:pt===0?j.t0:st+(at-st)*pt/J,t1:pt===J-1?j.t1:st+(at-st)*(pt+1)/J,ranges:j.ranges,inner0:pt>0||j.inner0,inner1:pt<J-1||j.inner1})).filter(ht=>!of(w.footprint,w.a,C,ht.t0,ht.t1).every(([pt,ut])=>c(pt,ut)))};for(let j of X?G.flatMap(et):G){let W=of(w.footprint,w.a,C,j.t0,j.t1);if(W.length<3)continue;let Y=(J,ht)=>Math.abs(q(J)-ht)<1e-4,st=(J,ht)=>j.inner0&&Y(J,j.t0)&&Y(ht,j.t0)||j.inner1&&Y(J,j.t1)&&Y(ht,j.t1),at=X?Math.min(...W.map(([J,ht])=>l(J,ht,D,w))):D;for(let[J,ht]of j.ranges){let pt=Math.min(ht,X?Math.max(...W.map(([At,Xt])=>l(At,Xt,D,w))):ht);if(pt-J<1e-4||at-J<.01)continue;let ut=J>.01,bt=X&&ht>at,Ut=(At,Xt)=>Math.min(ht,l(At,Xt,D,w));if(J<v-1e-6){let At=pt>v+1e-6?km+F:Zi+F,Xt=bt&&at<v?(ye,He)=>Math.min(v,Ut(ye,He)):Math.min(pt,v);Ie(M,W,J,Xt,Ho.wall,Ho.wallTop,{aoFrom:0,bottom:ut,fold:Zi+F,topFold:At,skipSide:st})}pt>v+1e-6&&at>v+1e-6&&Ie(M,W,Math.max(J,v),bt?Ut:pt,Ho.wall,Ho.wallTop,{aoFrom:0,fold:F,bottom:ut&&J>=v,skipSide:st})}}}let E=o.flatMap(w=>w.footprint),A=Y2(o,E),y=new Ne;y.p.push(...d.p),y.c.push(...d.c),y.f.push(...d.f);let R=(w,F)=>(x.get(w)??[]).filter(F);for(let w of A.edges){let F=m.get(w.wall);for(let[P,D]of Oc(w,R(w.wall,B=>B.sill<=.005)))y.seg([P[0],.004,P[1]],[D[0],.004,D[1]],Bm);for(let[P,D]of Oc(w,R(w.wall,B=>B.sill<v&&B.top>v)))y.seg([P[0],v,P[1]],[D[0],v,D[1]],qh,Ec+F);let C=Xo(w.wall,i.height);for(let[P,D]of Oc(w,R(w.wall,B=>B.top>=C-.021))){if(!s&&!w.wall.slope){y.seg([P[0],C,P[1]],[D[0],C,D[1]],$i,C<=v+1e-6?Zi+F:F);continue}let B=Math.max(1,Math.ceil(Math.hypot(D[0]-P[0],D[1]-P[1])/.3));for(let k=0;k<B;k++){let V=[P[0]+(D[0]-P[0])*k/B,P[1]+(D[1]-P[1])*k/B],X=[P[0]+(D[0]-P[0])*(k+1)/B,P[1]+(D[1]-P[1])*(k+1)/B];if(c(V[0],V[1])&&c(X[0],X[1]))continue;let G=l(V[0],V[1],C,w.wall),q=l(X[0],X[1],C,w.wall);y.seg([V[0],G,V[1]],[X[0],q,X[1]],$i,Math.max(G,q)<=v+1e-6?Zi+F:F)}}}let S=(w,F)=>l(F[0],F[1],Xo(w,i.height),w);for(let w of A.corners){if(c(w.p[0],w.p[1]))continue;let F=w.walls.reduce((P,D)=>S(D,w.p)>S(P,w.p)+1e-6?D:P,w.wall),C=l(w.p[0],w.p[1],Xo(F,i.height),F);y.segSplit([w.p[0],.004,w.p[1]],[w.p[0],C,w.p[1]],_i,Math.min(v,C),m.get(F))}for(let w of A.joints){let[F,C]=w.walls,P=[S(F,w.a),S(C,w.a)],D=[S(F,w.b),S(C,w.b)];if(Math.abs(P[0]-P[1])<.01&&Math.abs(D[0]-D[1])<.01)continue;let B=P[1]+D[1]>=P[0]+D[0]?C:F,k=m.get(B),V=Math.max(...P),X=Math.max(...D);y.seg([w.a[0],V,w.a[1]],[w.b[0],X,w.b[1]],$i,Math.max(V,X)<=v+1e-6?Zi+k:k);for(let[G,q]of[[w.a,P],[w.b,D]]){let et=Math.min(...q),j=Math.max(...q);j-et>.01&&y.segSplit([G[0],et,G[1]],[G[0],j,G[1]],_i,v,k)}}for(let w of x.values())for(let F of w)F.cont||W2(y,F,v);let T=q2(A.edges,i.rooms,x),L=new ee;c0(M,y,i,L);for(let w of r)rf(M,y,w.face,w.field,i.elevation);let O=[];for(let w of i.furniture){if(Qp(w.type))continue;let F=M.count,C=y.p.length/6,P=w,D=rn(i,P);if(mc.has(P.type)){let B=gc(o,P,i.height,D);P={...P,x:B.x,z:B.z},D=B.y}Rc(M,y,T,P,D),D+P.h>v+.05&&(zm(M,F,v,$h),Vm(y,C,v,$h)),O.push({id:P.id,start:F,end:M.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:M.geometry(),water:L.geometry(),lines:y.geometry(),shadow:T.geometry(),buckets:g,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(w=>m.get(w)),furnitureTris:O,roofUnder:s}}function W2(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Kt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),_i,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),_i,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),_i,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),_i,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),_i,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),qh,Ec+r)}function of(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=S0(o,a=>s(a)-n)),Number.isFinite(r)&&(o=S0(o,a=>r-s(a))),o}function S0(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var w0=i=>Math.round(i*1e3),Yo=i=>`${w0(i[0])},${w0(i[1])}`,T0=(i,t)=>{let e=Yo(i),n=Yo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function X2(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+o*u,r[1]+a*u];Yo(f)!==Yo(h)&&e.push([h,f]),h=f}e.push([h,s])}return e}function Y2(i,t){let e=i.map(h=>({wall:h,edges:X2(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=T0(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let s=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&s.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let o=[],a=new Map,l=(h,u,f)=>{let d=Yo(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(T0(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;o.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:o,corners:c,joints:s}}function Oc(i,t){if(!t.length)return[[i.a,i.b]];let e=Uc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Uc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>s<=o?[h(u),h(f)]:[h(f),h(u)])}function q2(i,t,e){let n=new ee,r=new Q(sf,sf,sf),s=new Q(1,1,1),o=.002;for(let a of i)for(let[l,c]of Oc(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&jt(p,m.points)))continue;let b=[l[0]+d[0]*Dc,l[1]+d[1]*Dc],g=[c[0]+d[0]*Dc,c[1]+d[1]*Dc];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function A0(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Xi),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>(Jp.has(s.type)||ve(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(Xi);return[...e,...r]}function Xo(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function Uc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Nc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var $2=new Q(1516340),Z2=new Q(527897),af=new Q(1779256),qo=new Q(1120808),K2=new Q(4163256),R0=new Q(5995161),J2=new Q(2240842),j2=new Q(1318704),Q2=.35,Cs=.8,tS=.2,C0=.1;function eS(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||Hn(o.type)||!jt(e,o.points)||(r=Math.max(r,s.elevation+yr(s,o)+bs[o.type]-t.elevation));return r>n?r-n:0}function P0(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Vh(i,t);if(!r)return null;let s=(p,b)=>xs(p,b)-t.elevation,o=n&&r.some(([p,b])=>s(p,b)<-tn-.03);if(!o&&!Gh(i,t))return null;let a=t.height,l=-Q2,c=(p,b)=>Math.min(a,xs(p,b)-t.elevation),h=new ee,u=new ee,f=new Ne,d=(p,b,g,m,x,_,v,M)=>{let E=[b[0]-p[0],b[2]-p[2]];-E[1]*x[0]+E[0]*x[1]>0?(M.tri(p,b,g,_,_,v),M.tri(p,g,m,_,v,v)):(M.tri(p,g,b,_,v,_),M.tri(p,m,g,_,v,v))};for(let p=0;p<r.length;p++){let b=r[p],g=r[(p+1)%r.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<1e-4)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[x[1],-x[0]],v=[(b[0]+g[0])/2+_[0]*.05,(b[1]+g[1])/2+_[1]*.05];jt(v,r)&&(_=[-_[0],-_[1]]);let M=(S,T=.012)=>[b[0]+x[0]*S+_[0]*T,b[1]+x[1]*S+_[1]*T],E=[];for(let S of e){if(S.opening.type!=="window"||!S.exterior||S.opening.well===!1)continue;let T=S.start[0]+S.axis[0]*(S.width/2)-S.toRoom[0]*S.faceOut,L=S.start[1]+S.axis[1]*(S.width/2)-S.toRoom[1]*S.faceOut,O=(T-b[0])*x[0]+(L-b[1])*x[1];Math.abs((T-b[0])*_[0]+(L-b[1])*_[1])>.08||O<-.05||O>m+.05||wm(i,t,S.exterior,S.sill,[T,L])&&E.push({s0:Math.max(0,O-S.width/2-C0),s1:Math.min(m,O+S.width/2+C0),bottom:Math.max(l+.05,S.sill-tS),rim:S.opening.well_rim??0})}let A=new Set([0,m]);for(let S of E)A.add(S.s0),A.add(S.s1);let y=[...A].sort((S,T)=>S-T),R=[];for(let S=0;S<y.length-1;S++){let T=Math.max(1,Math.ceil((y[S+1]-y[S])/.5));for(let L=0;L<T;L++)R.push(y[S]+(y[S+1]-y[S])*L/T)}R.push(m);for(let S=0;S<R.length-1;S++){let T=R[S],L=R[S+1],O=E.find(X=>T>=X.s0-1e-6&&L<=X.s1+1e-6),w=M(T),F=M(L),C=c(w[0],w[1]),P=c(F[0],F[1]),D=O?Math.min(C,O.bottom):C,B=O?Math.min(P,O.bottom):P;if(D>l+.01||B>l+.01){let X=Math.min(D,l),G=Math.min(B,l);d([w[0],X,w[1]],[F[0],G,F[1]],[F[0],Math.max(B,l),F[1]],[w[0],Math.max(D,l),w[1]],_,Z2,$2,h)}let k=s(w[0],w[1]),V=s(F[0],F[1]);if(o&&(k<-tn-.01||V<-tn-.01)&&d([w[0],Math.min(k,-tn),w[1]],[F[0],Math.min(V,-tn),F[1]],[F[0],-tn,F[1]],[w[0],-tn,w[1]],_,j2,J2,h),C>l||P>l||o&&(k<-tn||V<-tn)){let X=o?Math.min(k,Math.max(C,l)):Math.max(C,l),G=o?Math.min(V,Math.max(P,l)):Math.max(P,l);f.seg([w[0],X+.004,w[1]],[F[0],G+.004,F[1]],K2)}}for(let S of E){let T=M(S.s0,0),L=M(S.s1,0),O=[T[0]+_[0]*Cs,T[1]+_[1]*Cs],w=[L[0]+_[0]*Cs,L[1]+_[1]*Cs],F=[(T[0]+L[0]+O[0]+w[0])/4,(T[1]+L[1]+O[1]+w[1])/4],C=eS(i,t,F,c(F[0],F[1])),P=Math.max(S.rim,C>0?C+.02:0),D=q=>c(q[0],q[1])+P,B=S.bottom,k=(q,et)=>[q[0],et,q[1]];u.tri(k(T,B),k(L,B),k(w,B),qo),u.tri(k(T,B),k(w,B),k(O,B),qo);let V=(q,et)=>{u.tri(k(q,B),k(et,B),k(et,D(et)),qo,qo,af),u.tri(k(q,B),k(et,D(et)),k(q,D(q)),qo,af,af)};V(T,O),V(L,w),V(O,w);let X=q=>[q[0],D(q)+.01,q[1]];for(let[q,et]of[[T,L],[L,w],[w,O],[O,T]])f.seg(X(q),X(et),R0);let G=Math.max(3,Math.round((S.s1-S.s0)/.12));for(let q=1;q<G;q++){let et=q/G,j=[T[0]+(L[0]-T[0])*et,T[1]+(L[1]-T[1])*et];f.seg(X(j),X([j[0]+_[0]*Cs,j[1]+_[1]*Cs]),R0)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var I0=i=>Math.round(i*1e3)/1e3;function nS(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function L0(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&jt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=wn(a)>=0?1:-1,c=Xi({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Xi({...t,x:h,z:u});for(let p=0;p<a.length;p++){let b=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<.05)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[-x[1]*l,x[0]*l],v=nS(i,o.id,b,g)?r/2:0,M=0;d.forEach((E,A)=>{let y=(E[0]-b[0])*x[0]+(E[1]-b[1])*x[1];if(y<-.01||y>m+.01)return;let R=(E[0]-b[0])*_[0]+(E[1]-b[1])*_[1]-v,S=c[A];(S[0]-b[0])*_[0]+(S[1]-b[1])*_[1]-v<-s||R<M&&(M=R)}),M<-1e-4&&(h-=_[0]*M,u-=_[1]*M)}}return[I0(h),I0(u)]}var iS=500,rS=1e3;function F0(i,t){let e=t-i.timeStamp;return e>rS&&e<6e4}var D0=.12,N0=1.35,sS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Bc=class{view={target:new H,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=sS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=lf(this.view.phi+this.velocity.phi,D0,N0),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},s=t.theta??r.theta;for(;s-r.theta>Math.PI;)s-=2*Math.PI;for(;s-r.theta<-Math.PI;)s+=2*Math.PI;let o=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:s,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:r,to:o,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},iS)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(F0(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=lf(this.view.phi+c,D0,N0),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!F0(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=lf(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new H(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new H(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function lf(i,t,e){return Math.min(e,Math.max(t,i))}function ci(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var Vc=5,kc=512,O0=.7,zc=class{projectors=new Map;loader=new fr;loggedIds="";depthMaterial=new $t({colorWrite:!1,side:se});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new je(kc,kc);a.depthTexture=new ei(kc,kc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Ke(60,16/9,O0,40),target:a,matrix:new be,uniforms:{uProjMat:{value:new be},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(Vc),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Pe;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){for(let o of this.projectors.values()){let a=o.texture?r(o.id):null;if(o.texture&&!a&&!o.noPoseLogged&&(o.noPoseLogged=!0,console.warn(`NeonPlan lab: ${o.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of o.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of o.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),o.overlays.delete(b));for(let b of n){let g=o.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new Pt(b.geometry,this.material(o,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),o.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${o.aspect.toFixed(3)},${s}`;if(c===o.poseKey)continue;o.poseKey=c;let h=o.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/o.aspect)*180/Math.PI,h.aspect=o.aspect,h.far=a.reach,h.near=O0,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),o.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),o.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(o.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new $t({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?ci(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r?.(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function U0(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function B0(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=U0(s,o),c=U0(o,a),h=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*h,o[1]+u[1]*h,o[2]+u[2]*h],p=[o[0]+f[0]*h,o[1]+f[1]*h,o[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,m=(1-g)*(1-g),x=2*(1-g)*g,_=g*g;n.push([m*d[0]+x*o[0]+_*p[0],m*d[1]+x*o[1]+_*p[1],m*d[2]+x*o[2]+_*p[2]])}}return n.push(i[i.length-1]),n}var k0=new Q(7568261),z0=new Q(4869974),oS=new Q(3116287),V0=new Q(3948872),cf=Pr([.35,.85,.4]),G0=10;function Pr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function $o(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function H0(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Pr($o(i,t));return[e,Pr($o(i,e))]}function Mi(i,t){let e=.5+.5*Math.max(0,t[0]*cf[0]+t[1]*cf[1]+t[2]*cf[2]);return i.clone().multiplyScalar(e)}function Ps(i,t,e,n,r,s=!1){let o=Pr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=H0(o),c=(h,u)=>{let f=u/G0*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<G0;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,Mi(r,u.n),Mi(r,p.n),Mi(r,d.n)),i.tri(u.p,f.p,p.p,Mi(r,u.n),Mi(r,f.n),Mi(r,p.n)),s&&(i.tri([...t],f.p,u.p,Mi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,Mi(r,o)))}}function aS(i,t,e,n,r,s,o,a){let l=Pr($o(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*f*s+l[2]*d*o],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Mi(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function W0(i,t){if(t.points.length<2)return;let e=t.radius,n=B0(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?k0.clone().multiplyScalar(.55):k0;Ps(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);Ps(i,o,a,e*1.22,z0,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);Ps(i,o,a,e*1.08,t.water?new Q(...t.water).multiplyScalar(.9):new Q(10475240),!0);for(let l of s(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Ps(i,c,h,e*1.3,z0,!0)}}else{let[o,a]=s(.055);Ps(i,o,a,e*1.4,V0,!0);let[l]=H0(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Ps(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,V0,!0);let u=r.open===!1?Pr($o(r.dir,c)):r.dir,f=Pr($o(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];aS(i,d,u,f,.1,.028,.012,oS)}}}var uf=1.62,Gc=.2,Zo=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=ai(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=_s(a,e.rooms,e.walls??[]);if(!c)continue;let h=Ms(this.walls,a,c);if(!h)continue;let u=o.get(h.wall)??[];u.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),o.set(h.wall,u);let f=h.wall,d=f.b[0]-f.a[0],p=f.b[1]-f.a[1],b=Math.hypot(d,p)||1,g=d/b,m=p/b,x=[f.a[0]+g*h.s,f.a[1]+m*h.s],_=f.left+.45,v=f.right+.45;this.doors.push({centre:x,p:[[x[0]-m*_,x[1]+g*_],[x[0]+m*v,x[1]-g*v]]})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=Gc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=Gc){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=Gc){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>lS(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=Gc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+b[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+b[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(s[d],s[p]),h.set(b,g)),g};for(;;){let d=-1;for(let p=0;p<o;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<o;p++){if(c[p]||p===d)continue;let b=Math.hypot(s[d][0]-s[p][0],s[d][1]-s[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(s[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=_s(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=Ms(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*o.s,a.a[1]+f*o.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,s)=>X0(s)-X0(r))[0],n=e?this.freeNear(Tn(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function lS(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function X0(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var hf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+uf}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-uf,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Tn(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,h=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],g=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],m=[-g[0],-g[1],-g[2]],x=[p[0]+b[0]*r*u*f+m[0]*s*u,p[1]+b[1]*r*u*f+m[1]*s*u,p[2]+b[2]*r*u*f+m[2]*s*u];if(x[1]>=-.02)return null;let _=uf/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function cS(i,t){let e=ve(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function ff(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?cS(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function df(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=uS(c.id)%1e3/1e3;for(let b of zo(l,c)){let[g,m,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[m,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[E,A,y]=v[M];e.push(E[0],E[1],E[2]),n.push(A,y),r.push(u,f),s.push(d)}}let p=e.length/3-h;p&&o.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new Wt;return a.setAttribute("position",new Ft(e,3)),a.setAttribute("uv",new Ft(n,2)),a.setAttribute("aCells",new Ft(r,2)),a.setAttribute("aPhase",new Ft(s,1)),a.setAttribute("aLevel",new Ft(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function Ko(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function pf(i){let t=new $t({transparent:!0,blending:Fe,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function uS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var q0=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,hS=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,fS=q0,dS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Y0(i,t){let e=[];for(let[r,s,o]of Pn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Wt;return n.setAttribute("position",new Ft(e,3)),n}function $0(i,t){let e=new we;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Pt(Y0(n.points,o),new fn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:q0,fragmentShader:hS,transparent:!0,blending:Fe,depthWrite:!1,side:se}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=ws(n.points,p);if(b.length>=3){let g=new Pt(Y0(b,n.y+.03),new fn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:fS,fragmentShader:dS,transparent:!0,side:se}));g.renderOrder=6,e.add(g);let m=[];for(let _=0;_<b.length;_++){let v=b[_],M=b[(_+1)%b.length];m.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Wt;x.setAttribute("position",new Ft(m,3)),e.add(new Qe(x,new We({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Z0(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var ig={vr:"immersive-vr",ar:"immersive-ar"},pS=new H(0,.75,-.7),mS=new H,gS=1.6,K0=Math.PI/6,bS=1.2,xS=.9,J0=.2,vS=4,j0=4,Q0=5,tg=1,eg=3,ng=.6;async function rg(){let i=typeof navigator>"u"?void 0:navigator.xr;if(!i)return[];let t=[];for(let e of["vr","ar"])try{await i.isSessionSupported(ig[e])&&t.push(e)}catch{}return t}var Hc=class{rig=new we;mode=null;anchor=new H;yaw=0;scale=1;scale0=1;renderer=null;session=null;last=0;snapped=!1;camera;scene;onFrame;onEnd;onPoint=null;onFloor=null;flying=!1;constrain=null;blind=new Pt(new uo(.15,16,8),new $t({color:0,side:Xe,depthTest:!1,depthWrite:!1}));lasers=[];pressed=new WeakMap;head=new H;dir=new H;constructor(t,e,n,r){this.camera=t,this.scene=e,this.onFrame=n,this.onEnd=r,this.blind.renderOrder=100,this.blind.frustumCulled=!1,this.blind.visible=!1}async start(t,e,n){if(this.mode||!navigator.xr)return;let r=await navigator.xr.requestSession(ig[t],{optionalFeatures:["local-floor"]});this.mode=t,this.flying=!1,this.renderer=e,this.session=r,this.anchor.copy(n.anchor),this.yaw=n.yaw,this.scale=this.scale0=n.scale,this.last=0,this.place(),this.scene.add(this.rig),this.rig.add(this.camera),this.camera.add(this.blind),e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.addEventListener("sessionend",this.ended);try{await e.xr.setSession(r)}catch(s){throw r.end().catch(()=>{}),this.ended(),s}r.addEventListener("select",this.onSelect);for(let s=0;s<2;s++){let o=e.xr.getController(s);if(!o.children.length){let a=new Wt;a.setAttribute("position",new Ft([0,0,0,0,0,-vS],3)),o.add(new ss(a,new We({color:10547455,transparent:!0,opacity:.6})))}this.rig.add(o),this.lasers.push(o)}e.setAnimationLoop(s=>this.onFrame(s))}setHeight(t){Math.abs(this.anchor.y-t)<1e-4||(this.anchor.y=t,this.place())}headAt(){return this.camera.getWorldPosition(this.head),[this.head.x,this.head.z]}moveHeadTo(t,e){let[n,r]=this.headAt();this.anchor.x+=t-n,this.anchor.z+=e-r,this.place()}setBlind(t){this.blind.visible=t}get startScale(){return this.scale0}stop(){this.session?.end().catch(()=>{})}step(t){let e=this.last?Math.min(.1,(t-this.last)/1e3):0;if(this.last=t,!this.session||!e)return!1;let n=!1,r=this.renderer?.xr.getFrame();for(let s of this.session.inputSources){let o=s.gamepad?.buttons;if(o&&r){let h=this.pressed.get(s)??[],u=o.map(f=>f.pressed);this.pressed.set(s,u),u[j0]&&!h[j0]&&this.point(r,s,"up"),u[Q0]&&!h[Q0]&&this.point(r,s,"down"),this.mode==="vr"&&u[eg]&&!h[eg]&&(this.flying=!this.flying),this.mode==="ar"&&u[tg]&&!h[tg]&&this.onFloor?.(1)}let a=s.gamepad?.axes;if(!a||a.length<4)continue;let l=Math.abs(a[2])>J0?a[2]:0,c=Math.abs(a[3])>J0?a[3]:0;if(s.handedness!=="right"){if(!l&&!c)continue;this.camera.getWorldDirection(this.dir);let h=this.mode==="vr"&&this.flying?this.dir.y:0,u=Math.hypot(this.dir.x,this.dir.z);if(u<.001)continue;let f=this.dir.x/u,d=this.dir.z/u,p=gS*e*this.scale,b=h?Math.sqrt(1-h*h):1,g=(-c*f*b-l*d)*p,m=(-c*d*b+l*f)*p;this.mode==="vr"&&!this.flying&&this.constrain&&([g,m]=this.constrain(this.headAt(),g,m)),this.anchor.x+=g,this.anchor.z+=m,this.anchor.y+=-c*h*p,n=!0}else if(this.mode==="vr"){let h=Math.abs(l),u=Math.abs(c);if(h<ng&&u<ng)this.snapped=!1;else if(!this.snapped&&u>h)this.snapped=!0,this.onFloor?.(c<0?1:-1);else if(!this.snapped){this.snapped=!0;let f=l>0?-K0:K0;this.camera.getWorldPosition(this.head);let d=this.anchor.x-this.head.x,p=this.anchor.z-this.head.z;this.anchor.x=this.head.x+d*Math.cos(f)+p*Math.sin(f),this.anchor.z=this.head.z-d*Math.sin(f)+p*Math.cos(f),this.yaw+=f,n=!0}}else(l||c)&&(this.yaw-=l*bS*e,this.scale=Math.min(200,Math.max(1,this.scale*Math.exp(c*xS*e))),n=!0)}return n&&this.place(),n}onSelect=t=>{this.point(t.frame,t.inputSource,"toggle")};point(t,e,n){let r=this.renderer?.xr.getReferenceSpace(),s=r?t.getPose(e.targetRaySpace,r):void 0;if(!s||!this.onPoint)return;let o=new be().fromArray(s.transform.matrix).premultiply(this.rig.matrixWorld),a=new dr;a.ray.origin.setFromMatrixPosition(o),a.ray.direction.set(0,0,-1).transformDirection(o),this.onPoint(a,n)}place(){let t=this.mode==="ar"?pS:mS,e=Math.cos(this.yaw),n=Math.sin(this.yaw);this.rig.rotation.set(0,this.yaw,0),this.rig.scale.setScalar(this.scale),this.rig.position.set(this.anchor.x-(t.x*e+t.z*n)*this.scale,this.anchor.y-t.y*this.scale,this.anchor.z-(-t.x*n+t.z*e)*this.scale),this.rig.updateMatrixWorld(!0)}ended=()=>{let t=this.renderer;this.session?.removeEventListener("select",this.onSelect);for(let n of this.lasers)n.removeFromParent();this.lasers.length=0,t&&(t.xr.removeEventListener("sessionend",this.ended),t.setAnimationLoop(null),t.xr.enabled=!1),this.blind.visible=!1,this.blind.removeFromParent(),this.camera.removeFromParent(),this.camera.scale.set(1,1,1),this.rig.removeFromParent(),this.renderer=null,this.session=null;let e=this.mode;this.mode=null,e&&this.onEnd()}};var Is=320,Ls=112,sg=new Map;function yS(i,t,e){let n=`${t}|${i}`,r=sg.get(n);if(r)return r.complete&&r.naturalWidth?r:null;let s=i.replace(/<svg\b/,`<svg style="color:${t}"`);/xmlns=/.test(s)||(s=s.replace(/<svg\b/,'<svg xmlns="http://www.w3.org/2000/svg"'));let o=new Image;return o.onload=e,o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`,sg.set(n,o),null}var Wc=class{group=new we;signs=new Map;specs=[];size=.24;update(t,e){this.specs=t,this.size=e;let n=new Set;for(let r of t){n.add(r.id);let s=this.signs.get(r.id);if(!s){let a=document.createElement("canvas");a.width=Is,a.height=Ls;let l=new Bn(a);l.colorSpace=Pe;let c=new to(new rs({map:l,transparent:!0,depthWrite:!1}));c.userData.entity=r.id,c.renderOrder=10,this.group.add(c),s={sprite:c,canvas:a,texture:l,key:""},this.signs.set(r.id,s)}let o=[r.icon,r.text,r.name,r.active,r.unavailable,r.glow].join("|");s.key!==o&&this.draw(s,r)&&(s.key=o),s.sprite.position.set(r.x,r.y+e*.3,r.z),s.sprite.scale.set(e,e*Ls/Is,1)}for(let[r,s]of this.signs)n.has(r)||(this.drop(s),this.signs.delete(r))}pick(t,e){return t.camera=e,t.intersectObjects([...this.group.children],!1)[0]?.object.userData.entity??null}dispose(){for(let t of this.signs.values())this.drop(t);this.signs.clear(),this.group.removeFromParent()}drop(t){t.texture.dispose(),t.sprite.material.dispose(),t.sprite.removeFromParent()}draw(t,e){let n=e.unavailable?"#7a8796":e.active?e.glow||"#ffd479":"#a0f0ff",r=e.icon?yS(e.icon,n,()=>this.update(this.specs,this.size)):null,s=t.canvas.getContext("2d");s.clearRect(0,0,Is,Ls);let o=Ls/2-4;s.beginPath(),s.roundRect(4,4,Is-8,Ls-8,o),s.fillStyle="rgba(8, 16, 34, 0.82)",s.fill(),s.lineWidth=4,s.strokeStyle=n,s.globalAlpha=e.active?1:.55,s.stroke(),s.globalAlpha=1,r&&s.drawImage(r,22,26,60,60),s.fillStyle=e.unavailable?"#7a8796":"#ffffff",s.textBaseline="middle",s.font="600 40px system-ui, sans-serif";let a=e.icon?98:30;return s.fillText(e.text||"\u2013",a,e.name?42:Ls/2,Is-a-24),e.name&&(s.fillStyle="rgba(220, 240, 255, 0.7)",s.font="24px system-ui, sans-serif",s.fillText(e.name,a,82,Is-a-24)),t.texture.needsUpdate=!0,!e.icon||!!r}};var _S=.08;function og(i,t,e,n){return i.blocked([t[0]+e,t[1]+n])?i.blocked([t[0]+e,t[1]])?i.blocked([t[0],t[1]+n])?[0,0]:[0,n]:[e,0]:[e,n]}function mf(i,t){if(i.roomAt(t)||!i.rooms.length)return i.freeNear(t);let e=i.rooms[0],n=1/0;for(let r of i.rooms){let s=Tn(r.points),o=Math.hypot(s[0]-t[0],s[1]-t[1]);o<n&&(n=o,e=r)}return i.freeNear(Tn(e.points))}function ag(i,t){return i.blocked(t,_S)}var lg=["neon","blueprint","day"];function cg(i){return lg.indexOf(i)}var Fs={value:new H(.22,.88,1)},Ds={value:0};function ug(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var MS=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function en(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=Fs,s.uniforms.uAccentOn=Ds,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${MS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Jo(i){return i==="day"?zi:Fe}var Si=.012,SS=.012;function fg(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],h=[],u=(m,x,_,v,M,E,A)=>{for(let y of[m,x,_,m,_,v])a.push(y[0],y[1],y[2]),l.push(M[0],M[1],M[2]),c.push(E),h.push(A)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let _=m.points.map(T=>T[0]),v=m.points.map(T=>T[1]),M=Math.min(..._),E=Math.min(...v),A=Math.max(..._),y=Math.max(...v),R=Math.max(1,Math.ceil((A-M)/r)),S=Math.max(1,Math.ceil((y-E)/r));for(let T=0;T<R;T++)for(let L=0;L<S;L++){let O=M+T*r,w=E+L*r,F=Math.min(O+r,A),C=Math.min(w+r,y),P=ws(m.points,[[O,w],[F,w],[F,C],[O,C]]),D=P.length>=3?Math.abs(CS(P)):0;if(D<1e-4)continue;let B=PS(P);if(!s.some(k=>jt(B,k))){if(D>(F-O)*(C-w)-1e-6){u([O,Si,w],[O,Si,C],[F,Si,C],[F,Si,w],[0,1,0],x,-1);continue}for(let[k,V,X]of Pn(P)){let G=P[k],q=P[X],et=P[V];(et[1]-G[1])*(q[0]-G[0])-(et[0]-G[0])*(q[1]-G[1])<0&&([G,q]=[q,G]),u([G[0],Si,G[1]],[et[0],Si,et[1]],[q[0],Si,q[1]],[q[0],Si,q[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!Hn(m.type));if(d.length){let m=d.flatMap(y=>y.points.map(R=>R[0])),x=d.flatMap(y=>y.points.map(R=>R[1])),_=Math.floor(Math.min(...m)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),E=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),A=(y,R,S)=>l0(i,y)-Co(i,y,R,S)+Si;for(let y=0;y<M;y++)for(let R=0;R<E;R++){let S=_+y*r,T=v+R*r,L,O=[S+r/2,T+r/2];L=d.find(F=>F.type==="pool"&&jt(O,F.points));for(let F=d.length-1;F>=0&&!L;F--)jt(O,d[F].points)&&(L=d[F]);if(!L)continue;let w=(F,C)=>[F,A(L,F,C),C];u(w(S,T),w(S,T+r),w(S+r,T+r),w(S+r,T),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((m,x)=>{let _=Math.min(i.height,m.height??i.height),v=Math.min(p,_-.02),M=m.b[0]-m.a[0],E=m.b[1]-m.a[1],A=Math.hypot(M,E);if(A<.05)return;let y=[M/A,E/A],R=[-y[1],y[0]],S=e[x],T=TS(m,y,A,n),L=(C,P)=>C?i.rooms.findIndex(D=>D.id===C):P?f:-1;b.push({a:m.a,b:m.b,h:_,ra:L(m.roomLeft,!1),rb:L(m.roomRight,m.exterior),gaps:T});let O=(C,P,D)=>[P,D,...C.filter(B=>B>P+.005&&B<D-.005)].sort((B,k)=>B-k).filter((B,k,V)=>k===0||B>V[k-1]+.005),w=O([v,(v+_)/2,...T.flatMap(C=>[C.y0+.01,C.y1-.01])],.02,_-.02),F=O(T.flatMap(C=>[C.s0,C.s1]),0,A);for(let C of[1,-1]){let P=C>0?m.roomLeft:m.roomRight,D=P?i.rooms.findIndex(G=>G.id===P):m.exterior?f:-1;if(D<0)continue;let B=(C>0?m.left:m.right)+SS,k=[R[0]*C,R[1]*C],V=(G,q)=>[m.a[0]+y[0]*G+k[0]*B,q,m.a[1]+y[1]*G+k[1]*B],X=G=>{let q=V(G,0),et=o?.(q[0],q[2]);return et==null?1/0:et-.02};for(let G=0;G<F.length-1;G++){let q=F[G+1]-F[G],et=Math.max(1,Math.ceil(q/r));for(let j=0;j<et;j++){let W=F[G]+q/et*j,Y=F[G]+q/et*(j+1),st=(W+Y)/2;for(let at=0;at<w.length-1;at++){let J=w[at],ht=w[at+1];if(ht-J<.01)continue;let pt=(J+ht)/2;if(T.some(At=>st>At.s0&&st<At.s1&&pt>At.y0&&pt<At.y1))continue;let ut=J>=p-1e-6?S:Zi+S,bt=Math.min(ht,X(W)),Ut=Math.min(ht,X(Y));bt<=J+.005&&Ut<=J+.005||u(V(W,J),V(Y,J),V(Y,Math.max(J,Ut)),V(W,Math.max(J,bt)),[k[0],0,k[1]],D,ut)}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(M=>dg(M,m)&&wS(M,m));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);_<0||v<0||g.push({id:m.opening.id,a:_,b:v,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b}}function dg(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function wS(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function TS(i,t,e,n){let r=[];for(let s of n){if(!dg(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function ES(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function AS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function hg(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=AS(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*p*(.2+.8*b)*ES(i.kind,l/u)}function pg(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let b=[0,0,0];for(let m of t){if(m.room!==d)continue;let x=m.x-h.x,_=m.y-h.y,v=m.z-h.z,M=Math.hypot(x,_,v)||1,E=hg(m,h.x,h.y,h.z,x/M,_/M,v/M);b[0]+=m.color[0]*E,b[1]+=m.color[1]*E,b[2]+=m.color[2]*E}let g=Math.max(b[0],b[1],b[2]);g<.01||r.push({x:h.x,y:h.y,z:h.z,color:[b[0]/g,b[1]/g,b[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:p})}});let s=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};s.set(h.room,[...s.get(h.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let h=0;h<l.length;h++){let u=s.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,b=0;for(let g of u){if(g.walls.length&&RS(g,g.walls,o[f],o[f+1],o[f+2]))continue;let m=hg(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*m,p+=g.color[1]*m,b+=g.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function RS(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=s*c-o*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*o-f*s)/h;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=a.h)continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&b>m.y0&&b<m.y1))return!0}return!1}function gf(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&jt([t,e],r.points));return n<0?i.rooms.length:n}function jo(i,t){return i&&t>=0&&t<i.length?i[t]:t}function CS(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function PS(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var Qo={open:0,open2:0,tilt:0,tilt2:0,cover:null},mg=2043986,gg=2769520,IS=2242399,bf=1845831,LS=1450554,wi=16758087,Xc=3662079,FS=1.2,DS=1.5,NS=1846349,OS=2572395,US=1120816,BS=1845831,bg=5995775,xg=9085695,Ns=zt(3662079,.08),kS=.2;function Yc(i,t,e,n,r,s,o,a,l,c,h){let u=(d,p,b)=>t(d,p,b),f=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),zt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),zt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),zt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),zt(l.getHex(),.92)]];for(let[d,p,b,g,m]of f)i.tri(d,p,b,m,m,m,void 0,h),i.tri(d,b,g,m,m,m,void 0,h)}function fe(i,t,e,n,r,s,o,a,l,c,h,u){if(a<=h+1e-6)return Yc(i,t,e,n,r,s,o,a,l,c,Kt);if(o>=h-1e-6)return Yc(i,t,e,n,r,s,o,a,l,c,u);Yc(i,t,e,n,r,s,o,h,l,c,Kt),Yc(i,t,e,n,r,s,h,a,l,c,u)}function tr(i,t,e,n,r,s,o,a,l,c,h=0){let u=(f,d,p)=>{let b=v=>h?(o-v)/h:.5,g=t(e,r,f),m=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(g,m,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(g,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};o<=l+1e-6?u(s,o,Kt):s>=l-1e-6?u(s,o,c):(u(s,l,Kt),u(l,o,c))}function zS(i,t,e,n,r,s,o,a,l,c){let h=t(e,r,o),u=t(n,r,o),f=t(n,s,o),d=t(e,s,o),p=0,b=(s-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,b],l),i.tri(h,f,d,a,a,a,[0,p,1,b,0,b],l)}function VS(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let s=e*r.axis[0]+n*r.axis[1];if(Math.abs(s)<.999)continue;let o=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(o*n-a*e)>.03)continue;let l=o*e+a*n,c=s>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function GS(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside"){let r=i.sill>.05;return{inside:r&&e==="inside",outside:r&&e==="outside"}}let n=i.sill>.3&&!VS(i,t);return{inside:n,outside:n&&i.exterior}}function vg(i,t,e){let n=new ee,r=new ee,s=new ee(!0),o=new Q(mg),a=new Q(gg),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=s.count,b=t.get(u.opening.id)??Qo,g=u.width,{sill:m,top:x,bucket:_}=u,v=(y,R,S)=>[u.start[0]+u.axis[0]*y+u.toRoom[0]*R,S,u.start[1]+u.axis[1]*y+u.toRoom[1]*R],M=(u.faceRoom-u.faceOut)/2,E=u.opening.mark==="closed",A=u.opening.type==="door"&&_r(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!A||u.opening.type==="garage"){let y=-u.faceOut-.012,R=u.faceRoom+.012,S=u.opening.type==="garage"&&(E?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),T=S?zt(wi,.8):new Q(mg),L=S?zt(wi,1):new Q(gg);fe(n,v,-.045,.02,y,R,0,x+.045,T,L,e,_),fe(n,v,g-.02,g+.045,y,R,0,x+.045,T,L,e,_),fe(n,v,.02,g-.02,y,R,x-.02,x+.045,T,L,e,_)}if(u.opening.type==="door"){let y=_r(u.opening,u.exterior),R=nm(y),S=u.opening.swing==="out"?-1:1,T=S>0?u.faceRoom:-u.faceOut,L=u.opening.leaves===2,O=.02,w=g-.02,F=em(g,y,u.hingeAtStart,u.opening);if(F){let B=-u.faceOut-.012,k=u.faceRoom+.012,V=T-S*(R?.06:.04)/2,X=.06;for(let[G,q]of F.panels)fe(n,v,G,G+X,B,k,.02,x-.02,o,a,e,_),fe(n,v,q-X,q,B,k,.02,x-.02,o,a,e,_),fe(n,v,G+X,q-X,B,k,.02,.12,o,a,e,_),tr(r,v,G+X,q-X,V,.12,x-.02,Ns,e,_);O=F.x0,w=F.x1}let C=L?(w-O)/2-.004:w-O,P=R?.06:.04;R&&(fe(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new Q(bf),a,e,_),u.exterior&&fe(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,zt(wi,.55),zt(wi,.85),e,Kt));let D=A?[]:[[u.hingeAtStart,b.open]];L&&!A&&D.push([!u.hingeAtStart,b.open2??0]);for(let[B,k]of D){let V=Math.min(1,Math.max(0,k)),X=y==="sliding"?0:V*DS,G=y==="sliding"?V*C:0,q=(pt,ut,bt)=>{let Ut=pt*Math.cos(X)-ut*Math.sin(X)-G,At=T+S*(ut*Math.cos(X)+pt*Math.sin(X)+(G?.05:0));return v(B?O+Ut:w-Ut,At,bt)},et=V>.05?Kt:_,j=E?!!b.sensed&&V<.05:V>.9,W=j?zt(wi,.7):new Q(R?US:NS),Y=j?zt(wi,.9):new Q(R?BS:OS);y==="glass"?(fe(n,q,0,.05,-P,0,.01,x-.01,W,Y,e,et),fe(n,q,C-.05,C,-P,0,.01,x-.01,W,Y,e,et),fe(n,q,.05,C-.05,-P,0,.01,.12,W,Y,e,et),fe(n,q,.05,C-.05,-P,0,x-.08,x-.01,W,Y,e,et),tr(r,q,.05,C-.05,-P/2,.12,x-.08,Ns,e,et)):fe(n,q,0,C,-P,0,.01,x-.01,W,Y,e,et),y==="front_glass"?tr(r,q,.12,C-.12,.001,x*.55,x-.18,Ns,e,et):R&&tr(r,q,.1,.18,.001,.3,x-.3,Ns,e,et);let st=Math.min(1.05,x*.5),at=R?.3:.012,J=R?C-.11:C-.16,ht=R?C-.08:C-.05;fe(n,q,J,ht,.004,.05,st-at,st+at,new Q(bg),new Q(xg),e,et),fe(n,q,J,ht,-P-.05,-P-.004,st-at,st+at,new Q(bg),new Q(xg),e,et),b.unlocked&&B===u.hingeAtStart&&fe(n,q,C-.022,C+.004,-P-.006,.006,.03,x-.03,zt(Xc,.85),zt(Xc,1),e,et)}}else if(u.opening.type==="garage"){let y=Math.min(1,Math.max(0,b.cover??1)),R=new Q(13951231),S=u.faceRoom-.03,T=x*(1-y);y>.01&&tr(s,v,.02,g-.02,S,T,x,R,e,_,.5);let L=(1-y)*x;L>.01&&zS(s,v,.02,g-.02,S,S+L,x+.03,R,_,.5)}else if(_r(u.opening,u.exterior)==="glass_wall"){fe(n,v,0,.04,M-.025,M+.025,m,x,o,a,e,_),fe(n,v,g-.04,g,M-.025,M+.025,m,x,o,a,e,_),fe(n,v,.04,g-.04,M-.025,M+.025,m,m+.03,o,a,e,_),fe(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,o,a,e,_);let S=Math.max(1,Math.round((g-2*.04)/.9)),T=(g-2*.04)/S;for(let L=1;L<S;L++){let O=.04+L*T;fe(n,v,O-.02,O+.02,M-.025,M+.025,m+.03,x-.04,o,a,e,_)}for(let L=0;L<S;L++){let O=.04+L*T+(L?.02:0),w=.04+(L+1)*T-(L<S-1?.02:0);tr(r,v,O,w,M,m+.03,x-.04,Ns,e,_)}}else{fe(n,v,0,.06,M-.035,M+.035,m,x,o,a,e,_),fe(n,v,g-.06,g,M-.035,M+.035,m,x,o,a,e,_),fe(n,v,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),o,a,e,_),fe(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,o,a,e,_);let S=GS(u,i);S.inside&&fe(n,v,-.04,g+.04,M+.035,u.faceRoom+.07,m-.03,m,new Q(bf),a,e,_),S.outside&&fe(n,v,-.03,g+.03,-u.faceOut-.06,M-.035,m-.04,m-.02,new Q(bf),a,e,_);let T=.055,L=m+(m>.05?.06:.03),O=x-.06,w=M+.035,F=M+.035+.06,P=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let D of P){let B=D.open>.02||D.tilt>.02,k=E?!!b.sensed&&!B:B,V=k?zt(wi,.75):new Q(IS),X=k?zt(wi,.95):a,G=D.x0,q=D.x1,et=q-G,j=D.open*FS*(u.opening.swing==="out"?-1:1),W=D.tilt*kS,Y=(at,J,ht)=>{let pt=ht-L,ut=J+pt*Math.sin(W),bt=L+pt*Math.cos(W),Ut=at*Math.cos(j)-(ut-w)*Math.sin(j);ut=w+(ut-w)*Math.cos(j)+at*Math.sin(j);let At=D.atStart?G+Ut:q-Ut;return v(At,ut,bt)},st=Math.abs(j)>.05?Kt:_;if(fe(n,Y,0,T,w,F,L,O,V,X,e,st),fe(n,Y,et-T,et,w,F,L,O,V,X,e,st),fe(n,Y,T,et-T,w,F,L,L+T,V,X,e,st),fe(n,Y,T,et-T,w,F,O-T,O,V,X,e,st),tr(r,Y,T,et-T,(w+F)/2,L+T,O-T,k?zt(wi,.16):Ns,e,st),b.unlocked&&D.atStart===u.hingeAtStart&&fe(n,Y,et-.022,et+.004,w-.006,F+.006,L+.02,O-.02,zt(Xc,.85),zt(Xc,1),e,st),_r(u.opening,u.exterior)==="bars"){let at=(L+O)/2,J=(w+F)/2;fe(n,Y,T,et-T,J-.012,J+.012,at-.012,at+.012,V,X,e,st),fe(n,Y,et/2-.012,et/2+.012,J-.012,J+.012,L+T,O-T,V,X,e,st)}}}if(b.cover!==null){let y=-u.faceOut,R=x+.2;fe(n,v,-.05,g+.05,y-.15,y,x,R,new Q(LS),a,e,_);let S=Math.min(1,Math.max(0,b.cover));if(S>.01){let T=x-S*(x-m);tr(s,v,0,g,y-.07,T,x,new Q(16777215),e,_,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:h}}var HS=.3,yg=2.6;function _g(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),h=c-l>=a-o,u=e*.7071,f=M=>{let E=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...E,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return E.every(y=>jt(y,i))&&!n.some(y=>A.some(R=>jt(R,y)))},d=(M,E)=>f(h?[M,E]:[E,M]),p=(M,E)=>{let A=Math.ceil(Math.hypot(E[0]-M[0],E[1]-M[1])/.05);for(let y=1;y<A;y++)if(!f([M[0]+(E[0]-M[0])*y/A,M[1]+(E[1]-M[1])*y/A]))return!1;return!0},[b,g,m,x]=h?[o,a,l,c]:[l,c,o,a],_=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let E=null,A=null,y=.05;for(let L=m;L<=x+1e-6;L+=y)if(d(M,L)&&(A??=L),(!d(M,L)||L+y>x+1e-6)&&A!==null){let O=d(M,L)?L:L-y;(!E||O-A>E[1]-E[0])&&(E=[A,O]),A=null}if(!E||E[1]-E[0]<.2)continue;let R=L=>{let[O,w]=L?E:[E[1],E[0]];return[h?[M,O]:[O,M],h?[M,w]:[w,M]]},S=R(v),T=_[_.length-1];if(T&&n.length&&!p(T,S[0])){let L=R(!v);if(!p(T,L[0]))continue;S=L,v=!v}_.push(S[0],S[1]),v=!v}return _}function vf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var xf=i=>Math.atan2(Math.sin(i),Math.cos(i));function Mg(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=xf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),yg*e),!0)}let a=Math.atan2(r,s),l=xf(a-i.heading);if(i.heading=xf(i.heading+Math.sign(l)*Math.min(Math.abs(l),yg*e)),Math.abs(l)<.35){let c=Math.min(o,HS*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}function Sg(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}function wg(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var In=null,Tg=new Map;function Ag(i,t=0){let e=new ee,n=new Ne,r=ve(i.type);if(r?.light)Cc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)yf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Rc(e,n,new ee,s,0,!0)}return{buf:e,lines:n}}function WS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Tg.get(r);if(s)return s;e&&Ao(e),In??=new xr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),In.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),In.setSize(t,t,!1),In.setClearColor(0,0);let{buf:o,lines:a}=Ag(i),l=new Ni,c=new Pt(o.geometry(),new $t({vertexColors:!0,color:new Q(n,n,n)})),h=new Qe(a.geometry(),new We({vertexColors:!0,color:new Q(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new hn().setFromObject(c),f=u.getCenter(new H),d=new ni(-1,1,1,-1,.01,100);d.position.copy(f).add(new H(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let m of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let _ of[u.min.z,u.max.z]){let v=new H(m,x,_).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(v.x),Math.abs(v.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),In.render(l,d);let g=In.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),Tg.set(r,g),g}function XS(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=Eg.get(s);if(o)return o;n&&Ao(n);let{buf:a,lines:l}=Ag(i,t),c=new Pt(a.geometry(),new $t({vertexColors:!0,color:new Q(r,r,r)})),h=new Qe(l.geometry(),new We({vertexColors:!0,color:new Q(r*1.8,r*1.8,r*1.8)})),u=new hn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((b-p)*e)));In??=new xr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),In.setPixelRatio(1),In.setSize(g,m,!1),In.setClearColor(0,0);let x=new Ni;x.add(c,h);let _=new ni(f,d,b,p,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),In.render(x,_);let v=In.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:v,x0:f,x1:d,y0:p,y1:b};return Eg.set(s,M),M}var Eg=new Map;var _C={Group:we,Mesh:Pt,MeshBasicMaterial:$t,CanvasTexture:Bn,Color:Q,PlaneGeometry:bi,BufferGeometry:Wt,Float32BufferAttribute:Ft,DoubleSide:se},Cg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},YS=[.22,.88,1],qS=2.4,Pg=1.4,$S=.22,Ig=.94,Lg=140,Fg=1.5;function ZS(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,h=l-o,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-s)*c+(t-o)*h)/u));n=Math.min(n,Math.hypot(i-(s+c*f),t-(o+h*f)))}return n}var Mf=32,KS=500,Dg=160,JS=33,Ng=.028,jS=.026,QS=.012,tw=.09,ne=2767456,ew=2240847,nw=3096944,iw=1911110,rw=1,Og=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),ta=450,sw="neonplan3d:xr-room",ow="neonplan3d:xr-person:",Ug=125,aw=200,lw=.08,na={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},cw=new Q(1714765);function uw(){let i=navigator;return wg(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Sf=class{host;options;renderer;scene=new Ni;camera=new Ke(38,1,.1,400);controls;xr=new Hc(this.camera,this.scene,t=>this.render(t),()=>this.xrEnded());xrSigns=null;xrMaps=new Map;xrMapsOf=null;xrRoom=null;labels;root=new we;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Qe(new Wt,new We({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new os(new Wt,new ur({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Pt(new ro(1,28),new $t({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=fw(),this.blindTexture=pw(),this.haloTexture=bw(),this.ground=new Pt(new bi(1,1),new $t({transparent:!1,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=this.decor(0);t!==null&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t))}decor(t,e){return Sg(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Ao(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,Wp(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>fc(h.floor).some(u=>u.id===t)),n=e?fc(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=Tn(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new H(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[s,o]=Tn(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new H(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new H(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])Ko(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&Ko(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Z0(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=$0(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new we;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of s)if(c.playing)for(let h=0;h<3;h++){let u=new Pt(new co(.92,1,48),new $t({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:se}));u.rotation.x=-Math.PI/2,u.position.set(c.x,o+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of s)for(let h of c.members){let u=s.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,u.x,o+.02,u.z))}if(a.length){let c=new Wt;c.setAttribute("position",new Ft(a,3));let h=new Qe(c,new We({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=ea(r),o=_f(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let s=[],o=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of Pn(c.points))for(let f of u)s.push(c.points[f][0],c.y,c.points[f][1]),o.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Wt;l.setAttribute("position",new Ft(s,3)),l.setAttribute("color",new Ft(o,4)),a.geometry.dispose(),a.geometry=l,a.visible=s.length>0}}}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ee;for(let s of e)W0(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=o=>{let a=[],l=(f,d,p,b,g)=>{let m=Math.hypot(p-f,b-d)||1,x=-(b-d)/m*(g/2+o),_=(p-f)/m*(g/2+o);a.push(f+x,d+_,0,p+x,b+_,0,p-x,b-_,0,f+x,d+_,0,p-x,b-_,0,f-x,d-_,0)},h=.14+o;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Wt;return u.setAttribute("position",new Ft(a,3)),u},n=new Pt(e(0),new $t({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:se})),r=new Pt(e(.05),new $t({color:t,transparent:!0,opacity:.22,blending:Fe,depthWrite:!1,side:se}));n.renderOrder=6,r.renderOrder=5;let s=new we;return s.add(r,n),s.visible=!1,s}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let s=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",s);let o=this.figures.get(n.id);if(s&&(!o||o.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!s&&o&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=ug(t),n=e?1:0;n===Ds.value&&(!e||Fs.value.equals(new H(...e)))||(Ds.value=n,e&&Fs.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=cg(t),Km(t!=="neon"),this.building?.floors.some(s=>s.furniture.some(o=>o.type==="waste_bin"||n0(o.type)))&&this.rebuild();let n=Jo(t),r=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of r)s.blending=n,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new Q(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Js(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([h,u,f],c*3),n&&o.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Wt;l.setAttribute("position",new Ft(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+o*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-o*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(o+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ae,o=(r?t.azimuth+180:t.azimuth)*ae,a=Math.max(10,Math.abs(t.elevation))*ae,l=this.weatherBox,c=new H((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),h=Math.min(300,Math.max(80,this.houseRadius*5)),u=new H(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(u,h),this.skyDisc.scale.setScalar(h*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??Qo,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed&&!!l.unlocked==!!o.unlocked||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Dg),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new ee;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);t0(e,n,rn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Qm(e,n,rn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=cc(n.type),s=r?ve(n.type):void 0;r&&s&&s0(e,s,r,n,rn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}xrModes(){return rg()}enterXR(t){this.xr.onPoint=(o,a)=>this.xrPoint(o,a),this.xr.onFloor=o=>this.xrFloor(o),this.labelsDirty=!0,this.wake();let e=this.controls.view;if(this.xrRoom=null,t==="vr"){let o=new H(e.target.x,this.floorBase(this.xrFloorId()),e.target.z),a=e.theta;for(let c of this.floors){let h=this.roomId?c.floor.rooms.find(d=>d.id===this.roomId):void 0;if(!h)continue;let[u,f]=Tn(h.points);o.set(u,c.floor.elevation+c.ty,f)}let l=this.xrMap(this.xrFloorId());if(l){let[c,h]=mf(l,[o.x,o.z]);o.x=c,o.z=h,a=-Math.PI/2-l.openYaw([c,h])}return this.xr.constrain=(c,h,u)=>{let f=this.xrMap(this.xrFloorId());return f?og(f,c,h,u):[h,u]},this.xr.start(t,this.renderer,{anchor:o,yaw:a,scale:1})}let n=new hn;for(let o of this.floors)if(!(o.to<.99))for(let a of o.floor.rooms)for(let[l,c]of a.points)n.expandByPoint(new H(l,o.floor.elevation+o.ty,c));n.isEmpty()&&n.set(new H(-4,0,-4),new H(4,2.5,4));let r=n.getSize(new H),s=n.getCenter(new H).setY(n.min.y);return this.xr.start(t,this.renderer,{anchor:s,yaw:e.theta,scale:Math.max(1,Math.max(r.x,r.z)/.6)})}xrMap(t){let e=this.building;if(!e||t===null)return null;this.xrMapsOf!==e&&(this.xrMaps.clear(),this.xrMapsOf=e);let n=this.xrMaps.get(t);if(!n){let r=e.floors.find(s=>s.id===t);if(!r)return null;n=new Zo(e,r),this.xrMaps.set(t,n)}return n}xrWalls(){let t=this.xr.mode==="vr"&&!this.xr.flying?this.xrMap(this.xrFloorId()):null,e=this.xr.headAt();this.xr.setBlind(!!t&&ag(t,e));let n=t?.roomAt(e)??null;n!==this.xrRoom&&(this.xrRoom=n,this.labelsDirty=!0)}placeSigns(){this.xrSigns||(this.xrSigns=new Wc,this.scene.add(this.xrSigns.group));let t=[],e=this.xr.mode==="vr"?this.xrRoom:null;if(e){let[r,s]=Tn(e.points);t.push({id:sw,icon:"",text:e.name,name:"",active:!1,unavailable:!1,glow:"",x:r,y:this.floorBase(this.xrFloorId())+2.1,z:s})}let n=this.camera.getWorldPosition(new H);for(let r of this.persons){let s=this.floorMap.get(r.floorId),o=this.figures.get(r.id),a=!!s&&s.to>=.99&&s.o>=.9&&!this.otherFloor(s)&&(!e||jt([r.x,r.z],e.points));o&&(o.visible=a,a&&(o.position.set(r.x,s.floor.elevation+s.y,r.z),o.rotation.y=Math.atan2(n.x-r.x,n.z-r.z))),a&&t.push({id:ow+r.id,icon:"",text:r.tag||r.name,name:"",active:!1,unavailable:!1,glow:r.color??"#ff5fd2",x:r.x,y:s.floor.elevation+s.y+(o?1.95:1.1),z:r.z})}for(let r of this.devices){let s=this.floorMap.get(r.floorId);if(!s||s.to<.99||s.o<.9||r.pin===!1||this.otherFloor(s)||e&&!jt([r.x,r.z],e.points))continue;let o=this.devicePins.get(r.id);t.push({id:r.id,icon:r.icon,text:[r.text,o?.watt].filter(Boolean).join(" \xB7 "),name:r.caption||r.name,active:r.active,unavailable:r.unavailable,glow:o?.glow??"",x:r.x,y:s.floor.elevation+s.y+r.y,z:r.z})}this.xrSigns.update(t,this.xr.mode==="ar"?.06*this.xr.startScale:.24)}xrPoint(t,e){let n=this.xrSigns?.pick(t,this.camera)??this.pickRay(t);!n||typeof n!="string"||n.startsWith("neonplan3d:")||(this.flashes.set(n,performance.now()+ta),this.options.onXrAction?.(n,e))}floorIds(){return[...this.floors].sort((t,e)=>t.floor.elevation-e.floor.elevation).map(t=>t.floor.id)}xrFloorId(){return this.floorId??this.floorIds()[0]??null}xrFloor(t){let e=this.floorIds();if(!e.length)return;if(this.xr.mode==="ar"){let o=this.floorId===null?-1:e.indexOf(this.floorId);o+1>=e.length?this.options.onBack?.():this.options.onFloorTap?.(e[o+1]);return}let n=e.indexOf(this.xrFloorId()??""),r=e[Math.max(0,Math.min(e.length-1,n+t))];if(r===this.floorId)return;this.xr.flying=!1;let s=this.xrMap(r);if(s){let[o,a]=mf(s,this.xr.headAt());this.xr.moveHeadTo(o,a)}this.options.onFloorTap?.(r)}xrEnded(){this.xrSigns?.dispose(),this.xrSigns=null,this.applyWeather(),this.labelsDirty=!0,this.resize()}projections=new zc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ae,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*ae)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new H(e.x,a,e.z),direction:new H(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(Vc);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(Vc),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.xr.stop(),this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||this.xr.mode||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&uw();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new xr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Pe,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Bc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){if(this.xr.mode)return;let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},KS)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=fg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Bg(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=jo(r,a.ra),a.rb=jo(r,a.rb)}t.lightSurface=n;let s=new Wt;s.setAttribute("position",new Ft(n.pos,3)),s.setAttribute("color",new Ft(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Ft(n.fold,1));let o=new lr(new Uint32Array(n.pos.length/3),1);o.setUsage(ju),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=ve(t.pack);if(!e)return null;let[n,r,s]=t.size??na.wall;return o0(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:s,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=gf(t.floor,n.x,n.z),a=jo(t.lightZones,o),[l,,c]=n.size??(n.lamp?na[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],fan:[Math.max(.5,s-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<rw?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ae,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*ae;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(_),y:p+Math.sin(_)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:m||_?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:p,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=jt([h.x,h.z],s)?0:ZS(h.x,h.z,s);if(f>Fg)continue;let d=u.level*(1-f/Fg);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;o+=d}if(o<.02)continue;let[l,c]=Tn(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:jo(t.lightZones,gf(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&_r(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=pg(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:en(new $t({vertexColors:!0}),this.themeUniform),pattern:dw(this.patternTexture),wall:en(ci(new $t({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:ci(new $t({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new $t({vertexColors:!0,blending:mo,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-1}),lines:en(ci(new We({vertexColors:!0,transparent:!0,blending:Jo(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ci(new $t({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:en(ci(new $t({vertexColors:!0,side:se}),t),this.themeUniform),glass:ci(new $t({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:se}),t),blinds:en(ci(new $t({map:this.blindTexture,vertexColors:!0,side:se}),t),this.themeUniform),water:en(new $t({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:se}),this.themeUniform),flow:gw(this.flowTime),pipeLine:mw(this.flowTime),patch:new $t({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new $t({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:pf(this.flowTime),lamps:en(new $t({vertexColors:!0}),this.themeUniform),halos:new ur({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new $t({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:se}),screens:new $t({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:se}),earth:en(new $t({vertexColors:!0}),this.themeUniform),earthWell:en(new $t({vertexColors:!0,side:se}),this.themeUniform),earthLines:en(new We({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=nf(n)?.id===s.id?o.filter(ut=>ut.face===ef).map(ut=>({field:ut,face:f0(n,ut)})):[],l=o.filter(ut=>ut.face.startsWith(`wall:${s.id}:`));if(l.length){let ut=new Map(h0(n,s.id).map(bt=>[bt.key,bt]));for(let bt of l){let Ut=ut.get(bt.face);Ut&&a.push({field:bt,face:Ut})}}let h=Fh(n).some(ut=>cm(ut,s.elevation+s.height)&&Nh(ut,s.elevation))?(ut,bt)=>{let Ut=um(n,ut,bt,s.elevation);return Ut===null?null:Ut-s.elevation}:void 0,u=E0(ff(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,A0(n.floors,s),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new we,b=new Pt(u.floor,d.floor),g=new Pt(u.shadow,d.shadow);g.renderOrder=1;let m=new Pt(u.floor,d.pattern);m.renderOrder=2;let x=new Pt(new Wt,d.glow);x.renderOrder=3,x.visible=!1;let _=new Pt(new Wt,d.frames),v=new Pt(new Wt,d.blinds),M=new Pt(new Wt,d.glass);M.renderOrder=4;let E=new Pt(new Wt,d.lamps);E.visible=!1;let A=new Pt(new Wt,d.cones);A.visible=!1,A.renderOrder=3;let y=new os(new Wt,d.halos);y.visible=!1,y.renderOrder=7;let R=new Pt(new Wt,d.cones);R.visible=!1,R.renderOrder=7;let S=new Pt(new Wt,d.cones);S.visible=!1,S.renderOrder=7;let T=new Pt(new Wt,d.lamps);T.visible=!1;let L=new Pt(new Wt,d.lamps);L.visible=!1;let O=new Pt(new Wt,d.patch);O.visible=!1,O.renderOrder=3;let w=new Pt(new Wt,d.patchGlow);w.visible=!1,w.renderOrder=3;let F=new Pt(new Wt,d.screens);F.visible=!1,F.renderOrder=5;let C=new Pt(new Wt,d.flow);C.renderOrder=5,C.frustumCulled=!1;let P=new Pt(new Wt,d.pipeLine),D=new Pt(new Wt,d.pipeLine),B=new Pt(new Wt,d.pipeLine);for(let ut of[P,D,B])ut.renderOrder=4,ut.frustumCulled=!1,ut.visible=!1;let k=df(a,s.elevation),V=k?new Pt(k.geometry,d.solarLive):null;V&&(V.renderOrder=6,Ko(k,this.solarLevels));for(let ut of[_,v,M])ut.frustumCulled=!1;let X=new Pt(u.walls,d.glassWall),G=new Pt(u.walls,d.wall);X.renderOrder=6;let q=new Pt(u.water,d.water);q.renderOrder=4;let et=Math.min(...n.floors.filter(ut=>ut.rooms.length).map(ut=>ut.elevation)),j=P0(n,s,u.openings,s.elevation===et),W=j?[new Pt(j.earth.geometry(),d.earth),new Pt(j.wells.geometry(),d.earthWell),new Qe(j.lines.geometry(),d.earthLines)]:[];for(let ut of W)ut.userData.earth=!0;p.add(b,g,m,x,G,q,new Qe(u.lines,d.lines),_,v,M,C,P,D,B,E,A,y,R,S,T,L,O,w,F,X,...V?[V]:[],...W),this.root.add(p);let Y=document.createElement("button");Y.className="fp3d-pin fp3d-pin-floor",Y.dataset.floor=s.id;let st=document.createElement("b");st.textContent=s.name||"\u2013";let at=document.createElement("span");at.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",Y.append(st,at),Y.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(Y);let J=t.get(s.id),ht=[],pt=null;for(let ut of fc(s)){let bt=document.createElement("button");bt.className="fp3d-pin",bt.dataset.room=ut.id,bt.dataset.floor=s.id,this.fillRoomPin(bt,ut.name,this.roomInfo.get(ut.id)),bt.addEventListener("click",()=>this.options.onRoomTap?.(s.id,ut.id)),this.labels.append(bt);let[Ut,At]=Tn(ut.points);if(ht.push({pin:bt,room:ut,cx:Ut,cz:At}),!ut.outdoor)for(let[Xt,ye]of ut.points)pt??={x0:Xt,x1:Xt,z0:ye,z1:ye},pt.x0=Math.min(pt.x0,Xt),pt.x1=Math.max(pt.x1,Xt),pt.z0=Math.min(pt.z0,ye),pt.z1=Math.max(pt.z1,ye)}this.floors.push({floor:s,rank:r.indexOf(s),group:p,geo:u,floorMesh:b,shadowMesh:g,patternMesh:m,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:M,blindsMesh:v,flowMesh:C,pipeLineMesh:P,pipeHouseMesh:D,pipeFloorMesh:B,pipeLineSig:"",solarMesh:V,solarLive:k,lampMesh:E,sunMesh:A,sunSig:"",haloMesh:y,coneMesh:R,trailMesh:S,fridgeMesh:T,pipeMesh:L,pipeSig:"",patchMesh:O,patchGlowMesh:w,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:G,screenMesh:F,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:pt,roomPins:ht,labelSize:null,materials:d,mask:f,openings:new Map,y:J?.y??0,o:J?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:Y})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s),this.buildPatches(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Qo);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?_0(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Cr(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=pf(this.flowTime),s=[],o=new we,a=en(new $t({vertexColors:!0,transparent:!0,side:se}),this.themeUniform),l=en(new We({vertexColors:!0,transparent:!0,blending:Jo(this.theme),depthWrite:!1}),this.themeUniform,!0),c=en(new $t({vertexColors:!0,transparent:!0,side:se,depthWrite:!1}),this.themeUniform),h=new we,u=en(new $t({vertexColors:!0,side:se}),this.themeUniform),f=en(new $t({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),d=en(new $t({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),p=en(new We({vertexColors:!0,transparent:!0,blending:Jo(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(m=>{let x=new we;x.add(new Pt(m.solid.geometry(),a),new Qe(m.lines.geometry(),l)),m.glass.count&&x.add(new Pt(m.glass.geometry(),c));let _=n.flatMap(E=>{let A=e.get(E.face);return A&&(A.section?m.sections?.includes(A.section):m===t[0])?[{face:A,field:E}]:[]}),v=df(_,m.floor.elevation+m.base);if(v){let E=new Pt(v.geometry,r);E.renderOrder=9,x.add(E),s.push(v),Ko(v,this.solarLevels)}m.winRoof?.solid.count&&x.add(new Pt(m.winRoof.solid.geometry(),u),new Qe(m.winRoof.lines.geometry(),p)),m.winRoof?.glass.count&&x.add(new Pt(m.winRoof.glass.geometry(),d)),x.renderOrder=8,o.add(x);let M=null;(m.win?.solid.count||m.win?.glass.count)&&(M=new we,M.add(new Pt(m.win.solid.geometry(),u),new Qe(m.win.lines.geometry(),p)),m.win.glass.count&&M.add(new Pt(m.win.glass.geometry(),f)),h.add(M));for(let[E,A]of m.winBelow??[]){if(!A.solid.count&&!A.glass.count)continue;let y=new we;y.add(new Pt(A.solid.geometry(),u),new Qe(A.lines.geometry(),p)),A.glass.count&&y.add(new Pt(A.glass.geometry(),f)),h.add(y),b.push({floorId:E,win:y})}return{group:x,floorId:m.floor.id,rideId:gm(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:M}});o.renderOrder=8,this.scene.add(o),this.scene.add(h),this.roof={group:o,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Ig)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Ig*n:0,o=1-Math.exp(-t/Lg),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*Pg:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*Pg:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:$S)):r=this.explode?n.rank*qS:0,n.ty=r,n.to=s;let a=e===n?Xe:ii;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Lg);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Dg);for(let r of this.floors){let s=!1,o=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??Qo,h=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,g=p-b;Math.abs(g)<.003?u[d]=p:(u[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),s=!0),e||=f,o||=f}if(s){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!o||a-r.lightAt>=aw)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new Q(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*lw+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>ta?.5+.5*Math.sin(f/140):f/ta;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`).join(";"),o=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let h=new ee,u=[],f=[],d=new Map,p=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??p)>Math.min(t.floor.cut_height,p):b.lamp?Og.has(b.lamp)&&(b.top??p)>Math.min(t.floor.cut_height,p):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let m=h.count,x=b.pack?ve(b.pack):void 0,[_,v,M]=b.size??[.3,.3,.3];b.model?i0(h,b.model,b.x,b.model==="camera_ceiling"?p:b.y,b.z,b.rotation??0):x?Cc(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:v,h:M,mirror:b.mirror},b.base??0,65280):yf(h,{...b,lamp:b.lamp},b.top??p,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:m,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:m,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:m,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=Fp(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=o[u],p=d?.55+.45*d.level:0,b=d?new Q(...d.color.map(x=>Math.min(1,x*p))):new Q(iw),g=n(h.id);g>0&&b.lerp(new Q(1,1,1),.7*g);let m=new Q(b.getHex());Dp(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ae,r=this.weather?.cloud??0,s=Bg(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ee;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ae,h=e.azimuth*ae,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],b=p[0]*u[0]+p[1]*u[1];if(b<.05)continue;let g=t.openings.get(d.opening.id),m=d.top-(g?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let x=(T,L)=>{let O=Math.min(7,L*f);return[d.start[0]+d.axis[0]*T+d.toRoom[0]*d.faceRoom-u[0]*O,.02,d.start[1]+d.axis[1]*T+d.toRoom[1]*d.faceRoom-u[1]*O]},_=.14*l*Math.min(1,b*1.5),v=new Q(1*_,.82*_,.55*_),M=v.clone().multiplyScalar(.45),E=t.floor.rooms.findIndex(T=>T.id===d.opening.room_id);if(E<0||t.floor.rooms[E].points.length<3)continue;let A=s[E],y=t.floor.rooms.filter((T,L)=>s[L]===A&&T.points.length>=3).map(T=>T.points),R=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),S=Math.max(1,Math.ceil(d.width/.3));for(let T=0;T<R;T++){let L=d.sill+(m-d.sill)*T/R,O=d.sill+(m-d.sill)*(T+1)/R,w=T/R,F=(T+1)/R,C=v.clone().lerp(M,w),P=v.clone().lerp(M,F);for(let D=0;D<S;D++){let B=d.width*D/S,k=d.width*(D+1)/S,V=x((B+k)/2,(L+O)/2);if(!y.some(j=>jt([V[0],V[2]],j)))continue;let X=x(B,L),G=x(k,L),q=x(k,O),et=x(B,O);a.tri(X,G,q,C,C,P),a.tri(X,q,et,C,P,P)}}}this.pushRoofSun(t,a,s,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Cr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let u of l){let f=c.get(u.face),d=Fc(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,m,x]=d.corners,_=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(_>.95)continue;let v=(w,F,C)=>[w[0]+(F[0]-w[0])*C,w[1]+(F[1]-w[1])*C,w[2]+(F[2]-w[2])*C],M=v(x,b,_),E=v(m,g,_),A=t.floor.rooms.findIndex(w=>w.id===d.roomId);if(A<0)continue;let y=t.floor.rooms.filter((w,F)=>n[F]===n[A]&&w.points.length>=3).map(w=>w.points),R=(w,F)=>{let C=(D,B)=>v(v(w[0],w[1],D),v(w[3],w[2],D),B);for(let D=0;D<6;D++)for(let B=0;B<6;B++){let k=C((D+.5)/6,(B+.5)/6);if(!y.some(et=>jt([k[0],k[2]],et)))continue;let V=C(D/6,B/6),X=C((D+1)/6,B/6),G=C((D+1)/6,(B+1)/6),q=C(D/6,(B+1)/6);e.tri(V,X,G,F,F,F),e.tri(V,G,q,F,F,F)}},S=w=>[w[0],.019,w[2]],T=.06*o;if(R([S(b),S(g),S(E),S(M)],new Q(.75*T,.85*T,1*T)),p<.05)continue;let L=w=>{let F=Math.min(7,(w[1]-t.floor.elevation)/Math.tan(s));return[w[0]-r[0]*F,.02,w[2]-r[1]*F]},O=.16*o*Math.min(1,p*1.5);R([L(b),L(g),L(E),L(M)],new Q(1*O,.84*O,.6*O))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ee,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ae,_=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),E=(l.fov??(v?360:90))*ae/2,A=l.motion?new Q(.9,.12,.16):new Q(.04,.22,.28),y=new Q(0,0,0),R=Math.max(4,Math.round(E/.15)),S=.015,T=t.geo.walls2d,L=P=>{let D=P.b[0]-P.a[0],B=P.b[1]-P.a[1],k=D*D+B*B||1,V=Math.max(0,Math.min(1,((l.x-P.a[0])*D+(l.z-P.a[1])*B)/k));return Math.hypot(l.x-(P.a[0]+D*V),l.z-(P.a[1]+B*V))},O=null;for(let P of T)L(P)<.45&&(!O||L(P)<L(O))&&(O=P);let w=P=>{let D=_[0]*Math.cos(P)-_[1]*Math.sin(P),B=_[1]*Math.cos(P)+_[0]*Math.sin(P),k=M;for(let V of T){let X=V.b[0]-V.a[0],G=V.b[1]-V.a[1],q=D*G-B*X;if(Math.abs(q)<1e-9)continue;let et=((V.a[0]-l.x)*G-(V.a[1]-l.z)*X)/q,j=((V.a[0]-l.x)*B-(V.a[1]-l.z)*D)/q;V===O&&et<=.45||et>.02&&et<k&&j>=0&&j<=1&&(k=et)}return k},F=P=>{let D=w(P);return[l.x+(_[0]*Math.cos(P)-_[1]*Math.sin(P))*D,S,l.z+(_[1]*Math.cos(P)+_[0]*Math.sin(P))*D]},C=s.count;for(let P=0;P<R;P++)s.tri([l.x,S,l.z],F(-E+2*E*(P+1)/R),F(-E+2*E*P/R),A,y,y);o.push({id:l.id,start:C,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Og.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??na[l.lamp],p=l.base??0,b=(l.rotation??0)*ae,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(x,_,v=1)=>{n.push(x,g,_),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*ae;n.push(l.x+Math.cos(b)*u*x*Math.cos(_),g+Math.sin(_)*u*x,l.z+Math.sin(b)*u*x*Math.cos(_)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else m(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(_=>_*c.level*.7))):m(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new Q(...c.color.map(A=>A*.09*c.level)),_=new Q(0,0,0),v=Math.max(.03,u/2),M=.45+.35*c.level,E=16;for(let A=0;A<E;A++){let y=A/E*Math.PI*2,R=(A+1)/E*Math.PI*2,S=[l.x+Math.cos(y)*v,g,l.z+Math.sin(y)*v],T=[l.x+Math.cos(R)*v,g,l.z+Math.sin(R)*v],L=[l.x+Math.cos(y)*M,.02,l.z+Math.sin(y)*M],O=[l.x+Math.cos(R)*M,.02,l.z+Math.sin(R)*M];s.tri(S,L,O,x,_,_),s.tri(S,O,T,x,_,x)}}}let a=new Wt;a.setAttribute("position",new Ft(n,3)),a.setAttribute("color",new Ft(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=ff(t.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),r=(Ds.value?Fs.value.toArray().map(o=>Math.round(o*255)).join(","):"")+"|"+e.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let s=new ee;for(let o of e){let a=this.screens.get(o.id),l=mc.has(o.type)?gc(t.geo.walls2d,o,t.floor.height,rn(t.floor,o)):null,c=l?{...o,x:l.x,z:l.z,mount_y:l.y}:o,h=c.rotation*ae,u=Math.cos(h),f=Math.sin(h),d=(A,y,R)=>[c.x+A*u-R*f,y,c.z+A*f+R*u];if(a.faces){let A=Math.max(.05,c.w)*(c.mirror?-1:1),y=Math.max(.05,c.d),R=Math.max(.005,c.h),S=rn(t.floor,c);for(let T of a.faces){if(T.part==="lights"){let X=ve(c.type),G=q=>["#e8f4ff","#ff3b4f"].includes(q.color.toLowerCase());if(X&&X.parts.some(G)){let q=new Q(...T.color.map(et=>Math.min(1,et*(.4+.6*T.level))));Uo(s,X,c,S,q.getHex(),G)}continue}if(T.part==="cabin"){let X=ve(c.type),G=q=>q.color.toLowerCase()==="#13283a"||q.color==="glass";if(X&&X.parts.some(G)){let q=new Q(...T.color.map(et=>Math.min(1,et*(.3+.5*T.level))));Uo(s,X,c,S,q.getHex(),G);continue}}if(T.part==="burners"&&ve(c.type)){let X=ve(c.type),G=new Q(...T.color.map(q=>Math.min(1,q*(.25+.6*T.level))));Uo(s,X,c,S,G.getHex(),Np);continue}if(T.part==="burners"){let X=new Q(...T.color.map(q=>Math.min(1,q*(.25+.6*T.level)))),G=S+R+.008;for(let[q,et,j]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let W=q*Math.abs(A)/.6,Y=et*y/.62,st=14;for(let at=0;at<st;at++){let J=at/st*Math.PI*2,ht=(at+1)/st*Math.PI*2;s.tri(d(W,G,Y),d(W+Math.cos(J)*j,G,Y+Math.sin(J)*j),d(W+Math.cos(ht)*j,G,Y+Math.sin(ht)*j),X)}}continue}if(T.part==="band"||T.part==="cabin"){let X=T.part==="cabin",G=S+R*(X?.6:.42),q=X?S+R*.86:G+.07,et=new Q(...T.color.map(st=>Math.min(1,st*(.3+.45*T.level)))),j=Math.abs(A)/2+(X?.012:.02),W=y/2+(X?.012:.02),Y=[[-j,-W],[j,-W],[j,W],[-j,W]];for(let st=0;st<4;st++){let at=Y[st],J=Y[(st+1)%4],ht=d(at[0]*Math.sign(A),G,at[1]),pt=d(J[0]*Math.sign(A),G,J[1]),ut=d(J[0]*Math.sign(A),q,J[1]),bt=d(at[0]*Math.sign(A),q,at[1]);s.tri(ht,pt,ut,et),s.tri(ht,ut,bt,et)}continue}if(T.part==="strata"){let X=T.top??T.color,G=.22+.4*T.level,q=new Q(...T.color.map(J=>Math.min(1,J*G))),et=new Q(...X.map(J=>Math.min(1,J*G))),j=S+R*.06,W=S+R*.94,Y=Math.abs(A)/2+.012,st=y/2+.012,at=20;for(let J=0;J<at;J++){let ht=J/at*Math.PI*2,pt=(J+1)/at*Math.PI*2,ut=[Math.cos(ht)*Y,Math.sin(ht)*st],bt=[Math.cos(pt)*Y,Math.sin(pt)*st];s.tri(d(ut[0],j,ut[1]),d(bt[0],j,bt[1]),d(bt[0],W,bt[1]),q,q,et),s.tri(d(ut[0],j,ut[1]),d(bt[0],W,bt[1]),d(ut[0],W,ut[1]),q,et,et)}continue}if(T.part==="apring"){let X=c.variant==="wall",G=Math.abs(A),q=X?Math.min(G,R)*.3:Math.min(G,y)*.3,et=new Q(...T.color.map(st=>Math.min(1,st*(.4+.6*T.level)))),j=new Q(0,0,0),W=24,Y=(st,at)=>X?d(Math.cos(st)*at,S+R/2+Math.sin(st)*at,y/2+.004):d(Math.cos(st)*at,S-.003,Math.sin(st)*at);for(let st=0;st<W;st++){let at=st/W*Math.PI*2,J=(st+1)/W*Math.PI*2;s.tri(Y(at,q*.8),Y(at,q),Y(J,q),et),s.tri(Y(at,q*.8),Y(J,q),Y(J,q*.8),et),s.tri(Y(at,q),Y(at,q*1.5),Y(J,q*1.5),et,j,j),s.tri(Y(at,q),Y(J,q*1.5),Y(J,q),et,j,et)}continue}if(T.part==="drum"){let X=Math.abs(A),G=Math.min(X*.36,(R-.2)*.42),q=S+(R-.14)/2+.04,et=y/2-.006,j=new Q(...T.color.map(J=>Math.min(1,J*(.35+.65*T.level)))),W=j.clone().multiplyScalar(.12),Y=new Q(0,0,0),st=28,at=(J,ht)=>d(Math.cos(J)*ht,q+Math.sin(J)*ht,et);for(let J=0;J<st;J++){let ht=J/st*Math.PI*2,pt=(J+1)/st*Math.PI*2;s.tri(d(0,q,et),at(ht,G*.78),at(pt,G*.78),W),s.tri(at(ht,G*.78),at(ht,G),at(pt,G),j),s.tri(at(ht,G*.78),at(pt,G),at(pt,G*.78),j),s.tri(at(ht,G),at(ht,G*1.18),at(pt,G*1.18),j,Y,Y),s.tri(at(ht,G),at(pt,G*1.18),at(pt,G),j,Y,j)}continue}if(T.part==="gang"){let X=Math.max(1,T.of??1),G=Math.abs(A),q=G/X,et=(-G/2+q*((T.index??0)+.5))*Math.sign(A),j=y/2+(c.variant==="outdoor"?.02:.008),W=T.accent?Ds.value?Fs.value.toArray():YS:T.color,Y=new Q(...W.map(At=>Math.min(1,At*(.35+.65*T.level)))),st=Y.clone().multiplyScalar(.5),at=new Q(0,0,0),J=q*.34,ht=S+R*.16,pt=S+R*.84,ut=[d(et-J,ht,j),d(et+J,ht,j),d(et+J,pt,j),d(et-J,pt,j)];s.tri(ut[0],ut[1],ut[2],Y),s.tri(ut[0],ut[2],ut[3],Y);let bt=.012+.015*T.level,Ut=[d(et-J-bt,ht-bt,j-.001),d(et+J+bt,ht-bt,j-.001),d(et+J+bt,pt+bt,j-.001),d(et-J-bt,pt+bt,j-.001)];for(let At=0;At<4;At++){let Xt=(At+1)%4;s.tri(ut[At],Ut[Xt],Ut[At],st,at,at),s.tri(ut[At],ut[Xt],Ut[Xt],st,st,at)}continue}if(T.part==="beacon"){let X=new Q(...T.color.map(pt=>Math.min(1,pt*(.25+.45*T.level)))),G=new Q(0,0,0),q=S+R+.01,et=.6+.6*T.level,j=Math.min(Math.abs(A),y)*.38;for(let[pt,ut]of[[j,0],[0,j]]){let bt=d(-pt,q,-ut),Ut=d(pt,q,ut),At=d(pt*.4,q+et,ut*.4),Xt=d(-pt*.4,q+et,-ut*.4);s.tri(bt,Ut,At,X,X,G),s.tri(bt,At,Xt,X,G,G)}let W=rn(t.floor,{...c,mount_y:0})+.012,Y=Math.abs(A)/2+.03,st=y/2+.03,at=.22+.18*T.level,J=(pt,ut,bt)=>d(pt*(Y+bt),W,ut*(st+bt)),ht=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let pt=0;pt<4;pt++){let[ut,bt]=ht[pt],[Ut,At]=ht[(pt+1)%4];s.tri(J(ut,bt,0),J(Ut,At,0),J(Ut,At,at),X,X,G),s.tri(J(ut,bt,0),J(Ut,At,at),J(ut,bt,at),X,G,G)}continue}let L=T.part==="right"?.03:-Math.abs(A)/2+.03,O=T.part==="left"?-.03:Math.abs(A)/2-.03,w=S+(T.part==="bottom"?R*.45:R)+.006,F=new Q(...T.color.map(X=>Math.min(1,X*(.35+.65*T.level)))),C=new Q(0,0,0),P=(X,G,q=w)=>d(X*Math.sign(A),q,G),D=[P(L,-y/2+.03),P(O,-y/2+.03),P(O,y/2-.03),P(L,y/2-.03)];s.tri(D[0],D[2],D[1],F),s.tri(D[0],D[3],D[2],F);let B=T.part==="lid"?.025+.02*T.level:.12+.1*T.level,k=F.clone().multiplyScalar(T.part==="lid"?.7:.5),V=[P(L-B,-y/2-B,w+.004),P(O+B,-y/2-B,w+.004),P(O+B,y/2+B,w+.004),P(L-B,y/2+B,w+.004)];for(let X=0;X<4;X++){let G=(X+1)%4;s.tri(D[X],V[G],V[X],k,C,C),s.tri(D[X],D[G],V[G],k,k,C)}}continue}let p=ve(c.type);if(p&&!p.light&&a.ring&&p.parts.some(A=>A.glow)){let A=new Q(...a.color.map(y=>Math.min(1,y*(.45+.55*a.level))));Uo(s,p,c,rn(t.floor,c),A.getHex())}let b=Qh(c,t.floor);if(!b)continue;let g=new Q(...a.color.map(A=>Math.min(1,A*(.35+.65*a.level)))),m=new Q(0,0,0),x=b.z+.004;if(s.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),s.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let _=.18+.12*a.level,v=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],E=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let A=0;A<4;A++){let y=(A+1)%4;s.tri(M[A],E[A],E[y],v,m,m),s.tri(M[A],E[y],M[y],v,m,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Qh(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Pt(new bi(1,1),new $t({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new fr().load(o.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Pe,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,s,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),h=c/o,u=e.rotation*ae,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,h,1),t.rotation.set(0,-u,0),t.position.set(e.x+f*Math.cos(u)-d*Math.sin(u),(n.y0+n.y1)/2,e.z+f*Math.sin(u)+d*Math.cos(u))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(ea).join(";"),n=[],r=[],s=[],o=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(ea(h))??{speed:_f(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(p<1e-4)continue;let b=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p,(h.b[2]-h.a[2])/p],g=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;g.push([-b[2]/x,0,b[0]/x])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[Ng*1.4,1]]:[[tw,.25],[Ng,1]];for(let[x,_]of m)for(let v of g){let M=x*(h.width??1)/2,E=(y,R)=>[y[0]+v[0]*M*R,y[1]+v[1]*M*R,y[2]+v[2]*M*R],A=[[E(h.a,-1),h.dist,0],[E(h.b,-1),h.dist+p,0],[E(h.b,1),h.dist+p,1],[E(h.a,1),h.dist,1]];for(let y of[0,1,2,0,2,3]){let[R,S,T]=A[y];n.push(R[0],R[1],R[2]),r.push(d[0]*_,d[1]*_,d[2]*_),s.push(S,T),o.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Wt;c.setAttribute("position",new Ft(n,3)),c.setAttribute("color",new Ft(r,3)),c.setAttribute("uv",new Ft(s,2)),c.setAttribute("flowSpeed",new Ft(o,1)),c.setAttribute("flowOffset",new Ft(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(ea(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let s=[],o=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(ea(f))??{speed:_f(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let m=jS*(f.width??1),x=f.power>.5?1:.62,_=[[m+QS*2,[.02,.025,.05],.78,2],[m,f.color.map(v=>v*x),1,0]];for(let[v,M,E,A]of _)for(let y of g){let R=v/2,S=A===0?.002:0,T=(O,w)=>[O[0]+y[0]*R*w,O[1]+y[1]*R*w+S,O[2]+y[2]*R*w],L=[[T(f.a,-1),f.dist,A],[T(f.b,-1),f.dist+d,A],[T(f.b,1),f.dist+d,A+1],[T(f.a,1),f.dist,A+1]];for(let O of[0,1,2,0,2,3]){let[w,F,C]=L[O];s.push(w[0],w[1],w[2]),o.push(M[0],M[1],M[2],E),a.push(F,C),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Wt;u.setAttribute("position",new Ft(s,3)),u.setAttribute("color",new Ft(o,4)),u.setAttribute("uv",new Ft(a,2)),u.setAttribute("flowSpeed",new Ft(l,1)),u.setAttribute("flowOffset",new Ft(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=s.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=vg(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let s=new Q(r.color),o=this.roomTint?.get(r.roomId);o&&s.lerp(new Q(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp(cw,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,s.r,s.g,s.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new hn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new H(p,f,b)),e.expandByPoint(new H(p,f+u.floor.height,b))}e.isEmpty()&&e.set(new H(-4,0,-4),new H(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new H),r=e.getSize(new H),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new H(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new hn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=xw();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new H),r=t.getSize(new H),s=Mf*Math.ceil((Math.max(r.x,r.z)+16)/Mf);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-tn-.02,n.z)}distanceFor(t){let e=this.camera.fov*ae,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new dr;return r.setFromCamera(new Jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){return this.pickHit(this.rayAt(t,e))}pickRay(t){let e=this.pickHit(t);return e&&"entity"in e?e.entity:null}pickHit(t){let e=this.activeFloors(),n=e.flatMap(s=>[s.lampMesh,s.coneMesh,s.framesMesh,s.glassMesh,s.blindsMesh,s.wallMesh,s.floorMesh].filter(o=>o.visible)),r=(s,o)=>s.find(a=>o>=a.start&&o<a.end)?.id;for(let s of t.intersectObjects(n,!1)){if(s.faceIndex==null)continue;let o=s.faceIndex,a=e.find(l=>l.group===s.object.parent);if(s.object===a.lampMesh||s.object===a.coneMesh){let l=r(s.object===a.lampMesh?a.lampTris:a.coneTris,o);if(l)return{entity:l}}else if(s.object===a.framesMesh||s.object===a.blindsMesh||s.object===a.glassMesh){if(this.wallMode==="cut"&&s.face){let h=s.object.geometry.getAttribute("fold")?.getX(s.face.a)??Kt;if(h!==Kt&&Math.floor(h/16)===0)continue}let l=r(s.object===a.framesMesh?a.frameTris:s.object===a.glassMesh?a.glassTris:a.blindTris,o),c=l?this.pickOpenings.get(l):void 0;if(c)return{entity:c}}else if(s.object===a.wallMesh){let l=r(a.geo.furnitureTris,o),c=l?this.pickFurniture.get(l):void 0;if(c)return{entity:c};if(!l&&s.face&&s.face.normal.y>.7){let h=Ah(a.floor).find(u=>jt([s.point.x,s.point.z],u.points));if(h)return{floorId:a.floor.id,roomId:h.id}}if(s.face&&!l){let h=a.wallMesh.geometry.getAttribute("fold")?.getX(s.face.a)??32,u=Math.floor(h/16),f=h%16,d=this.wallMode==="cut"&&u===0,p=(a.mask.glass.value&1<<f)!==0;if(!d){let b=t.ray.direction,g=Math.hypot(b.x,b.z)||1,m=[s.point.x-b.x/g*.3,s.point.z-b.z/g*.3],x=a.floor.rooms.find(_=>_.points.length>=3&&jt(m,_.points))?.id??null;if(this.roomId!==null){if(x===this.roomId)return{floorId:a.floor.id,roomId:x}}else if(!p&&x)return{floorId:a.floor.id,roomId:x}}}}else if(s.object===a.floorMesh)return{floorId:a.floor.id,roomId:r(a.geo.roomTris.map(l=>({id:l.roomId,start:l.start,end:l.end})),o)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+ta),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||s(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ae,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,h=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(u=>u.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(s!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new H),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-h.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?L0(s.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ne,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new Q(.25,.9,1):new Q(1,.71,.28)))}n&&(this.ghost=new Qe(e.geometry(),new We({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=ve(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?rn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:rn(e.floor,n),u=n.rotation*ae,f=Math.cos(u),d=Math.sin(u),p=(g,m,x)=>[s+g*f-m*d,x,o+g*d+m*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,x]=b[g],[_,v]=b[(g+1)%4];t.seg(p(m,x,h+.01),p(_,v,h+.01),r),t.seg(p(m,x,h+c),p(_,v,h+c),r),t.seg(p(m,x,h+.01),p(m,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new Q(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new je(s,o);a.texture.colorSpace=Pe;let l=new ni(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),p=document.createElement("canvas");p.width=s,p.height=o;let b=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let O of this.floors)O.group.visible=O===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let x=m.floor.rooms.flatMap(O=>O.points),_=m.floor.elevation,v=new hn(new H(Math.min(...x.map(O=>O[0]))-.3,_,Math.min(...x.map(O=>O[1]))-.3),new H(Math.max(...x.map(O=>O[0]))+.3,_+Math.min(m.floor.cut_height,m.floor.height),Math.max(...x.map(O=>O[1]))+.3)),M=v.getCenter(new H),E=-.6,A=.8,y=new H(Math.sin(A)*Math.sin(E),Math.cos(A),Math.sin(A)*Math.cos(E));l.position.copy(M).addScaledVector(y,100),l.lookAt(M),l.updateMatrixWorld();let R=.5,S=.5;for(let O of[v.min.x,v.max.x])for(let w of[v.min.y,v.max.y])for(let F of[v.min.z,v.max.z]){let C=new H(O,w,F).applyMatrix4(l.matrixWorldInverse);R=Math.max(R,Math.abs(C.x)),S=Math.max(S,Math.abs(C.y))}let T=s/o;R/S>T?S=R/T:R=S*T,l.left=-R*1.05,l.right=R*1.05,l.top=S*1.05,l.bottom=-S*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let L=b.createImageData(s,o);for(let O=0;O<o;O++)L.data.set(d.subarray((o-1-O)*s*4,(o-O)*s*4),O*s*4);b.putImageData(L,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?_g(n.room,void 0,void 0,n.obstacles):vf(n.rest),l=a.length?a:vf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!jt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Cg[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let s of r.own)s.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&ve(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new $t({color:Cg[t.mode]}),r=this.robotModelKey(t),s=t.model?ve(t.model.type):void 0;if(t.model&&s&&r){let{w:a,d:l,h:c}=t.model,h=new ee,{radius:u,top:f}=r0(h,s,a,l,c),d=new ee,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Ie(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new $t({vertexColors:!0});let g=[h.geometry(),d.geometry()],m=new we;return m.add(new Pt(g[0],this.robotMat),new Pt(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new ee,l=(h,u,f,d,p)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Ie(a,b,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new $t({vertexColors:!0});let c=new ee;Ie(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let o=new we;return o.add(new Pt(this.robotGeo,this.robotMat),new Pt(this.robotLedGeo,n)),{info:t,motion:e,group:o,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[s,,o]=n.size??na.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=s/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new ee;zg(h,0,0,0,l,0),this.fanMat??=new $t({vertexColors:!0});let u=new Pt(h.geometry(),this.fanMat),f=new we;f.add(u),f.rotation.y=-((n.rotation??0)*ae),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=kg(a,o),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let s=this.floorMap.get(r.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(s.floor.cut_height,s.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Mg(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new Q(.25-.2*a,.95-.83*a,1-.7*a),r=new Q(0,0,0),s=new Q(.3,1,.6),o=.02;for(let a of this.floors){let l=new ee;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let b=Math.hypot(u-p[0],f-p[1])||1,g=-(f-p[1])/b*.1,m=(u-p[0])/b*.1;l.tri([p[0]+g,o,p[1]+m],[u+g,o,f+m],[u-g,o,f-m],s,s,s),l.tri([p[0]+g,o,p[1]+m],[u-g,o,f-m],[p[0]-g,o,p[1]-m],s,s,s)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,m=(b+1)/10*Math.PI*2;l.tri([u,o,f],[u+Math.cos(m)*.35,o,f+Math.sin(m)*.35],[u+Math.cos(g)*.35,o,f+Math.sin(g)*.35],s,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,o,c.z+p],[h.x+d,o,h.z+p],[h.x-d,o,h.z-p],b,u,u),l.tri([c.x+d,o,c.z+p],[h.x-d,o,h.z-p],[c.x-d,o,c.z-p],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,o,h.z],[h.x+Math.cos(p)*.22,o,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,o,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ae,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ae)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new H(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new H(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+ta;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new H(e,a.floor.elevation+a.ty+r,n),radius:o?.radius??5.5,phi:o?.phi??.78,...o?.theta!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1,r=this.xr.mode;r&&this.xr.step(t),r==="vr"&&!this.xr.flying&&this.xr.setHeight(this.floorBase(this.xrFloorId())),r&&(this.lastWake=t,this.xrWalls()),this.orbitSpeed&&!this.controls.active&&!r?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let s=!r&&this.controls.update(t),o=this.stepFloors(e),a=this.stepOpenings(e)||this.stepFridges(e),l=!1;if(this.flashes.size){let x=new Set;for(let[_,v]of this.flashes){let M=this.deviceFloor.get(_);M&&x.add(M),v<=t&&this.flashes.delete(_)}l=this.flashes.size>0;for(let _ of this.floors)x.has(_.floor.id)&&this.buildLamps(_)}let c=this.placeRoof(e),h=this.stepRobots(t),u=this.stepFans(t),f=this.stepWeather(t),d=s||o||a||l||c,p=[];(s||this.controls.busy)&&p.push("camera"),o&&p.push("floors"),a&&p.push("openings"),l&&p.push("flash"),c&&p.push("roof"),this.flowActive&&p.push("flow"),this.soundActive&&p.push("sound"),this.poolActive&&p.push("pool"),this.solarActive&&p.push("solar"),this.effectTick&&p.push("effect"),h&&p.push("robot"),u&&p.push("fan"),n&&p.push("orbit"),this.tintTick&&p.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=d?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),r==="ar"&&(this.scene.fog=null,this.skyDisc.visible=!1),this.projections.active&&this.updateProjections(),this.renderer.render(this.scene,this.camera),this.disposeRetired(),r?(!this.xrSigns||o||this.labelsDirty)&&(this.labelsDirty=!1,this.placeSigns()):(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,p),d&&this.invalidate();let b=this.flowActive||this.solarActive||this.soundActive||this.poolActive||h||u||this.effectFloors.size>0;b&&!this.decorWas&&(this.lastWake=t),this.decorWas=b;let g=this.effectFloors.size?this.decor(this.lowQuality?2*Ug:Ug):null;if(g!==null&&!this.effectTimer&&!document.hidden){let x=g;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=x/1e3,this.effectTick=!0;for(let _ of this.floors)_.o<.02||!this.effectFloors.has(_.floor.id)||(this.buildLamps(_),this.buildGlow(_));this.decorTimer||this.invalidate()},x)}!d&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let x=h||m||u?this.decor(u?83:0,u?83:void 0):null;!d&&x!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},x));return}!d&&h&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!d&&u&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!d&&m&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},JS))}updateWalls(){let t=this.xr.mode,e=t?this.camera.getWorldPosition(new H):this.camera.position,n=t==="ar"?this.xr.anchor:this.controls.view.target,r=e.x-n.x,s=e.z-n.z,o=Math.hypot(r,s)||1;for(let a of this.floors){let l=this.roomId!==null&&a.floor.rooms.some(u=>u.id===this.roomId),c=this.wallMode==="cut",h=0;a.geo.buckets.forEach((u,f)=>{let d=u?u[0]*r/o+u[1]*s/o>=.25:l;!c&&d&&t!=="vr"&&(h|=1<<f)}),a.mask.standing.value=c?0:65535,a.mask.glass.value=h}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new H,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new H(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new H(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new H,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId),l=this.figures.get(s.id);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(s.id);if(!c||c.floorId!==s.floorId)c={floorId:s.floorId,x:s.x,z:s.z};else{let f=s.x-c.x,d=s.z-c.z;Math.hypot(f,d)>.02?(c={floorId:s.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:s.floorId,x:s.x,z:s.z}}this.personAt.set(s.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:")||s.id.startsWith("hh:")&&s.active;if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("fp3d-dev-full",h==="full"),o.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=hw(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function hw(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function fw(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new Bn(t);return s.flipY=!1,s.wrapS=yn,s.wrapT=yn,s.anisotropy=4,s.colorSpace=Pe,s}function dw(i){let t=new $t({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function pw(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new Bn(i);return e.wrapS=ar,e.wrapT=ar,e.colorSpace=Pe,e}function ea(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function _f(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function mw(i){let t=new $t({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function gw(i){let t=new $t({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Bg(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function bw(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new Bn(t);return r.colorSpace=Pe,r}function xw(){let t=Mf,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new Bn(e);return s.anisotropy=4,s.colorSpace=Pe,s}function BC(i,t){return new Sf(i,t)}function kg(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function zg(i,t,e,n,r,s){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=s+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*h-b*u,n+p*u+b*h]);Ie(i,d,e-.006,e+.006,ew,nw,{aoFrom:0,bottom:!0})}}function yf(i,t,e,n,r=!0){let[s,o,a]=t.size??na[t.lamp],l=t.base??0,c=(t.rotation??0)*ae,h=Math.cos(c),u=Math.sin(c),f=(g,m)=>[t.x+g*h-m*u,t.z+g*u+m*h],d=(g,m,x,_,v,M=14)=>{let E=[];for(let A=0;A<M;A++){let y=A/M*Math.PI*2;E.push([t.x+Math.cos(y)*g,t.z+Math.sin(y)*g])}Ie(i,E,m,x,_,v,{aoFrom:0,bottom:!0})},p=(g,m,x,_,v,M,E,A=E)=>Ie(i,[f(g,x),f(m,x),f(m,_),f(g,_)],v,M,E,A,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(s,o)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,ne,ne,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,ne,ne,8);let m=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,m,e-.02,ne,ne,5),t.variant==="globe")for(let _=0;_<7;_++){let v=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),g+.06*_,g+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,ne,ne,10),d(.012,g+.16,e-.03,ne,ne,6),d(.13,g+.07,g+.16,ne,ne,16),d(.11,g,g+.07,n,n,16),r&&zg(i,t.x,kg(e,a),t.z,s/2,c);break}case"downlight":d(b,e-.012,e,ne,ne,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,ne,ne,10),d(b,e-Math.max(.06,a),e-.02,ne,ne,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-s/2,s/2,-o/2,o/2,e-Math.max(.015,a),e,ne,ne),p(-s/2+.02,s/2-.02,-o/2+.02,o/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,ne,ne),d(.014,l+.03,l+a-.12,ne,ne,6),d(b,l+a-.14,l+a-.02,ne,ne),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,ne,ne,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,ne,ne,10);break;case"garden":d(.012,l,l+a-.08,ne,ne,5),d(b,l+a-.08,l+a-.01,ne,ne,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,ne,ne),d(.014,l+.03,l+a-.28,ne,ne,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,ne,ne),d(.012,l+.03,l+a-.16,ne,ne,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??uc;p(-s/2+.03,s/2-.03,-o/2,-o/2+.02,g,g+a,ne),p(-s/2,s/2,-o/2+.02,o/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),m=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-s/2,s/2,-o/2,o/2,m-g,m,n);break}let x=(t.roll??0)*ae,_=Math.cos(x),v=Math.sin(x),M=t.upright?l+s/2:m-g/2,E=(t.upright?0:t.rise??0)*ae,A=(L,O,w)=>{let F=L,C=O*_-w*v,P=O*v+w*_;return E&&([F,C]=[F*Math.cos(E)-C*Math.sin(E),F*Math.sin(E)+C*Math.cos(E)]),t.upright&&([F,C]=[-C,F]),[t.x+F*h-P*u,M+C,t.z+F*u+P*h]},y=[A(-s/2,-g/2,-o/2),A(s/2,-g/2,-o/2),A(s/2,-g/2,o/2),A(-s/2,-g/2,o/2),A(-s/2,g/2,-o/2),A(s/2,g/2,-o/2),A(s/2,g/2,o/2),A(-s/2,g/2,o/2)],R=new Q(n),S=[t.x,M,t.z],T=(L,O,w,F)=>{let[C,P,D]=[y[L],y[O],y[w]],B=[(P[1]-C[1])*(D[2]-C[2])-(P[2]-C[2])*(D[1]-C[1]),(P[2]-C[2])*(D[0]-C[0])-(P[0]-C[0])*(D[2]-C[2]),(P[0]-C[0])*(D[1]-C[1])-(P[1]-C[1])*(D[0]-C[0])],k=[C[0]-S[0],C[1]-S[1],C[2]-S[2]],V=B[0]*k[0]+B[1]*k[1]+B[2]*k[2]<0,[X,G,q,et]=V?[y[F],y[w],y[O],y[L]]:[y[L],y[O],y[w],y[F]];i.tri(X,G,q,R,R,R),i.tri(X,q,et,R,R,R)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{Zo as FloorMap,Sf as FloorplanViewer,hf as WalkCamera,BC as createViewer,_C as funLib,XS as furnitureFront,WS as furniturePreview,uw as isLowEnd,zg as pushFanBlades,yf as pushLampModel};
