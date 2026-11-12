export function alignIndicatorSeries(left,right){
 const fail=()=>{throw new TypeError('Séries incompatibles / Incompatible series / Series incompatibles');};
 const index=points=>{if(!Array.isArray(points)||!points.length||points.length>1000)fail();const map=new Map();for(const p of points){if(!Number.isInteger(p.year)||!Number.isFinite(p.value)||typeof p.facility!=='string'||!p.facility||typeof p.indicator!=='string'||!p.indicator||typeof p.scope!=='string'||!p.scope||map.has(p.year))fail();map.set(p.year,p);}return map;};
 const a=index(left),b=index(right),all=[...left,...right],first=all[0];if(!all.every(p=>p.facility===first.facility&&p.indicator===first.indicator&&p.scope===first.scope))fail();
 const years=[...new Set([...a.keys(),...b.keys()])].sort((x,y)=>x-y);return {matched:years.filter(y=>a.has(y)&&b.has(y)).map(year=>({year,left:a.get(year).value,right:b.get(year).value,delta:b.get(year).value-a.get(year).value})),leftOnlyYears:years.filter(y=>a.has(y)&&!b.has(y)),rightOnlyYears:years.filter(y=>b.has(y)&&!a.has(y)),missingValuesImputed:false,clinicalConclusion:false};
}
