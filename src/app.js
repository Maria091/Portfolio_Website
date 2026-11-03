import {PROJECTS,FILTERS,filterProjects} from './projects.js';
const filterContainer=document.getElementById('filters');
const grid=document.getElementById('project-grid');
const count=document.getElementById('project-count');
let active='all';
function el(tag,cls='',text='') {
  const node=document.createElement(tag);if(cls)node.className=cls;node.textContent=text;return node;
}
function renderCards(){
  grid.replaceChildren();
  const projects=filterProjects(PROJECTS,active);
  count.textContent=`${projects.length} selected project${projects.length===1?'':'s'}`;
  for(const p of projects){
    const card=el('article',`project-card accent-${p.accent}`);
    const top=el('div','project-top');
    top.append(el('span','project-eyebrow',p.eyebrow),el('span','project-symbol','↗'));
    card.append(top,el('h3','',p.title),el('p','project-copy',p.description));
    const tags=el('div','project-tags');
    for(const tech of p.technologies) tags.append(el('span','tag',tech));
    card.append(tags);
    const link=el('a','project-link','View code on GitHub ↗');
    link.href=p.url;link.target='_blank';link.rel='noopener noreferrer';
    link.setAttribute('aria-label',`View source code for ${p.title} on GitHub`);
    card.append(link);grid.append(card);
  }
}
function renderFilters(){
  filterContainer.replaceChildren();
  for(const option of FILTERS){
    const button=el('button','filter'+(option.id===active?' active':''),option.label);
    button.type='button';button.setAttribute('aria-pressed',String(option.id===active));
    button.addEventListener('click',()=>{active=option.id;renderFilters();renderCards();});
    filterContainer.append(button);
  }
}
renderFilters();renderCards();
document.getElementById('year').textContent=String(new Date().getFullYear());
