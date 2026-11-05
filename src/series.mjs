export function compareIndicatorSeries(points){
 const fail=()=>{throw new TypeError('FR: Série indicateur invalide. / EN: Invalid indicator series. / ES: Serie de indicador inválida.');};
 if(!Array.isArray(points)||points.length<2||points.length>1000)fail();
 const seen=new Set();
 for(const p of points){if(!p||typeof p.indicator!=='string'||!p.indicator||typeof p.facility!=='string'||!p.facility||typeof p.scope!=='string'||!p.scope||!Number.isFinite(p.value)||!Number.isInteger(p.year)||seen.has(p.year))fail();seen.add(p.year);}
 const first=points[0];const comparable=points.every(p=>p.indicator===first.indicator&&p.facility===first.facility&&p.scope===first.scope);
 const sorted=[...points].sort((a,b)=>a.year-b.year);return {comparable,firstYear:sorted[0].year,lastYear:sorted.at(-1).year,delta:comparable?sorted.at(-1).value-sorted[0].value:null,successiveDeltas:comparable?sorted.slice(1).map((p,i)=>({from:sorted[i].year,to:p.year,delta:p.value-sorted[i].value})):[],clinicalConclusion:false};
}
