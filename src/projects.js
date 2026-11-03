/** Content and filtering helpers: no DOM dependencies. */
export const PROJECTS = Object.freeze([
  {
    id:'banking',title:'Enterprise Banking Lakehouse',category:'data',eyebrow:'DATA PLATFORM',
    description:'Synthetic transaction processing through Bronze, Silver and Gold datasets, including quality checks, reconciliation and a separate Databricks/Delta reference implementation.',
    technologies:['Python','PySpark','Databricks','Delta Lake'],
    url:'https://github.com/Maria091/enterprise-banking-lakehouse',featured:true,accent:'mint'
  },
  {
    id:'events',title:'Real-Time AI Event Processing Pipeline',category:'ai',eyebrow:'STREAMING + ML',
    description:'Portfolio implementation combining synthetic transaction events, Kafka integration, AWS Lambda reference code, anomaly scoring and Snowflake/dbt analytical models.',
    technologies:['Kafka','Python','AWS Lambda','Snowflake','dbt'],
    url:'https://github.com/Maria091/real-time-ai-event-pipeline',featured:true,accent:'peach'
  },
  {
    id:'civiclink',title:'CivicLink Resource Matcher',category:'web',eyebrow:'CIVIC TECH DEMO',
    description:'Interactive, explainable matching over a fictional resource directory. Designed as a privacy-minded hackathon-style prototype, with automated tests.',
    technologies:['JavaScript','UX','Ranking logic','Testing'],
    url:'https://github.com/Maria091/Yhack-Project',featured:false,accent:'blue'
  },
  {
    id:'weather',title:'SkyCast Weather Dashboard',category:'web',eyebrow:'API + FRONTEND',
    description:'Responsive global city search, live forecast displays, unit conversion and seven-day outlooks powered by the Open-Meteo public API.',
    technologies:['JavaScript','Open-Meteo','REST APIs','CSS'],
    url:'https://github.com/Maria091/Weather-App',featured:false,accent:'lavender'
  },
  {
    id:'risk',title:'AI Risk Analysis Report',category:'ai',eyebrow:'APPLIED AI',
    description:'An additional repository showcasing work related to AI risk analysis and responsible evaluation.',
    technologies:['AI','Risk analysis','Reporting'],
    url:'https://github.com/Maria091/AI-Risk-Analysis-Report',featured:false,accent:'peach'
  }
]);
export const FILTERS = Object.freeze([
  {id:'all',label:'All work'},{id:'data',label:'Data engineering'},
  {id:'ai',label:'AI & ML'},{id:'web',label:'Web apps'}
]);
export function filterProjects(projects,category='all') {
  if (!Array.isArray(projects)) throw new TypeError('projects must be an array');
  if (!FILTERS.some(item=>item.id===category)) throw new RangeError('Unknown category');
  return category==='all'?[...projects]:projects.filter(p=>p.category===category);
}
export function featuredProjects(projects) {return projects.filter(p=>Boolean(p.featured));}
