// ===== JOB DATA =====

const jobs = [

{
id: 1,
company: "Mobile First Corp",
position: "Mobile App Developer",
location: "Remote",
type: "Full-time",
salary: "$70k-$90k",
desc: "Build mobile apps using Flutter and modern tools.",
status: "all"
},

{
id: 2,
company: "Webflow Agency",
position: "Web Designer",
location: "USA",
type: "Part-time",
salary: "$40k-$60k",
desc: "Design responsive and modern websites.",
status: "all"
},

{
id: 3,
company: "DataViz Solutions",
position: "Data Analyst",
location: "Remote",
type: "Full-time",
salary: "$60k-$80k",
desc: "Analyze business data using SQL and Excel.",
status: "all"
},

{
id: 4,
company: "CloudFirst Inc",
position: "Cloud Engineer",
location: "Germany",
type: "Full-time",
salary: "$90k-$120k",
desc: "Manage cloud infrastructure.",
status: "all"
},

{
id: 5,
company: "Innovation Lab",
position: "UX Designer",
location: "UK",
type: "Full-time",
salary: "$65k-$85k",
desc: "Create modern user experience design.",
status: "all"
},

{
id: 6,
company: "MegaCorp",
position: "Backend Developer",
location: "Canada",
type: "Full-time",
salary: "$85k-$110k",
desc: "Develop scalable backend APIs.",
status: "all"
},

{
id: 7,
company: "StartupXYZ",
position: "Full Stack Developer",
location: "Remote",
type: "Full-time",
salary: "$75k-$95k",
desc: "Build complete full stack apps.",
status: "all"
},

{
id: 8,
company: "TechCorp Industries",
position: "Frontend Developer",
location: "USA",
type: "Full-time",
salary: "$70k-$90k",
desc: "Develop UI using modern frameworks.",
status: "all"
}

];


// ===== CURRENT TAB =====

let currentTab = "all";


// ===== RENDER FUNCTION =====

function renderJobs(){

const list = document.getElementById("jobList");

const empty = document.getElementById("emptyState");

list.innerHTML = "";

let filteredJobs;

if(currentTab === "all")
filteredJobs = jobs;
else
filteredJobs = jobs.filter(job => job.status === currentTab);


// update count

document.getElementById("jobCount").innerText =
filteredJobs.length + " jobs";


// empty state

if(filteredJobs.length === 0)
empty.classList.remove("hidden");
else
empty.classList.add("hidden");


// render cards

filteredJobs.forEach(job => {

let statusHTML = "";

// default

if(job.status === "all"){

statusHTML =
`<div class="status not-applied">Not Applied</div>`;

}

// interview

if(job.status === "interview"){

statusHTML =
`<div class="status interview">Interview</div>`;

}

// rejected

if(job.status === "rejected"){

statusHTML =
`<div class="status rejected">Rejected</div>`;

}


list.innerHTML +=

`
<div class="job-card">

<img src="icons/delete-icon-vector.jpg"
class="delete-icon"
onclick="deleteJob(${job.id})">

<div class="company">${job.company}</div>

<div class="position">${job.position}</div>

<div class="info">
${job.location} • ${job.type} • ${job.salary}
</div>

${statusHTML}

<div class="desc">${job.desc}</div>

<div class="buttons">

<button class="interview-btn"
onclick="updateStatus(${job.id}, 'interview')">
Interview
</button>

<button class="rejected-btn"
onclick="updateStatus(${job.id}, 'rejected')">
Rejected
</button>

</div>

</div>
`;

});

updateDashboard();

}


// ===== UPDATE STATUS =====

function updateStatus(id, status){

const job = jobs.find(j => j.id === id);

if(job.status === status)
job.status = "all";
else
job.status = status;

renderJobs();

}


// ===== DELETE JOB =====

function deleteJob(id){

const index = jobs.findIndex(j => j.id === id);

jobs.splice(index,1);

renderJobs();

}


// ===== DASHBOARD COUNT =====

function updateDashboard(){

document.getElementById("totalCount").innerText =
jobs.length;

document.getElementById("interviewCount").innerText =
jobs.filter(j => j.status === "interview").length;

document.getElementById("rejectedCount").innerText =
jobs.filter(j => j.status === "rejected").length;

}


// ===== TAB SWITCH =====

document.querySelectorAll(".tab").forEach(tab=>{

tab.addEventListener("click", function(){

document.querySelectorAll(".tab")
.forEach(btn => btn.classList.remove("active"));

this.classList.add("active");

currentTab = this.dataset.tab;

renderJobs();

});

});


// ===== INITIAL LOAD =====

renderJobs();