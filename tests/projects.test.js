import test from 'node:test';
import assert from 'node:assert/strict';
import {PROJECTS,FILTERS,filterProjects,featuredProjects} from '../src/projects.js';

test('all projects have unique IDs and real GitHub links',()=>{
  assert.equal(new Set(PROJECTS.map(x=>x.id)).size,PROJECTS.length);
  assert.ok(PROJECTS.every(x=>x.url.startsWith('https://github.com/Maria091/')));
});
test('all filter returns every project without mutating original',()=>{
  const list=filterProjects(PROJECTS);assert.equal(list.length,PROJECTS.length);assert.notEqual(list,PROJECTS);
});
test('data filter finds banking lakehouse',()=>{
  const list=filterProjects(PROJECTS,'data');assert.ok(list.some(x=>x.id==='banking'));assert.ok(list.every(x=>x.category==='data'));
});
test('AI filter finds the streaming project',()=>assert.ok(filterProjects(PROJECTS,'ai').some(x=>x.id==='events')));
test('web filter finds weather app and Yhack concept',()=>{
  const list=filterProjects(PROJECTS,'web');assert.deepEqual(list.map(x=>x.id).sort(),['civiclink','weather']);
});
test('invalid category is rejected',()=>assert.throws(()=>filterProjects(PROJECTS,'unknown'),RangeError));
test('invalid project argument is rejected',()=>assert.throws(()=>filterProjects(null),TypeError));
test('featured projects appear in main portfolio data',()=>{
  assert.deepEqual(featuredProjects(PROJECTS).map(x=>x.id),['banking','events']);
});
test('every project category is selectable',()=>{
  assert.ok(PROJECTS.every(x=>FILTERS.some(y=>x.category===y.id)));
});
