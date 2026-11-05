import test from 'node:test';import assert from 'node:assert/strict';import {compareIndicatorSeries}from '../src/index.mjs';const p={indicator:'example',facility:'f',scope:'adult',year:2024,value:80};
test('sorted chronology with preserved input',()=>{const rows=[{...p,year:2025,value:75},p];const x=compareIndicatorSeries(rows);assert.equal(x.delta,-5);assert.equal(rows[0].year,2025);});
test('changed scope blocks trend',()=>assert.equal(compareIndicatorSeries([p,{...p,year:2025,scope:'all',value:90}]).delta,null));
test('duplicate campaign rejected',()=>assert.throws(()=>compareIndicatorSeries([p,p]),TypeError));
