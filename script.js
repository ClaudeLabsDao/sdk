const agents = [
{
name:"Treasury Agent",
status:"Active",
role:"Capital Allocation"
},
{
name:"Yield Agent",
status:"Active",
role:"DeFi Optimization"
},
{
name:"Task Agent",
status:"Active",
role:"Task Distribution"
},
{
name:"Payment Agent",
status:"Active",
role:"Reward Execution"
}
];

const container =
document.getElementById("agent-list");

agents.forEach(agent => {

const div =
document.createElement("div");

div.classList.add("agent");

div.innerHTML = `
<h3>${agent.name}</h3>
<p>Status: ${agent.status}</p>
<p>Role: ${agent.role}</p>
`;

container.appendChild(div);

});
