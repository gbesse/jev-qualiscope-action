import test from 'node:test';import assert from 'node:assert/strict';
import {alignIndicatorSeries}from '../src/index.mjs';const p=(year,value)=>({year,value,indicator:'i',facility:'f',scope:'same'});
test('only matched years contribute deltas',()=>{const x=alignIndicatorSeries([p(2024,10),p(2025,20)],[p(2025,23),p(2026,40)]);assert.deepEqual(x.matched,[{year:2025,left:20,right:23,delta:3}]);assert.deepEqual(x.leftOnlyYears,[2024]);assert.deepEqual(x.rightOnlyYears,[2026]);});
test('different indicator scope not numerically compared',()=>assert.throws(()=>alignIndicatorSeries([p(2025,1)],[{...p(2025,1),scope:'other'}])));
test('duplicates cannot inflate comparison',()=>assert.throws(()=>alignIndicatorSeries([p(2025,1),p(2025,2)],[p(2025,1)])));
