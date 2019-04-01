(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{112:function(t,e,n){"use strict";n.r(e);var i=n(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"sizing-considerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sizing-considerations","aria-hidden":"true"}},[t._v("#")]),t._v(" Sizing considerations")]),n("p",[t._v("A node is a machine in the cluster (virtual or physical) with Docker Engine running on it. There are two types of nodes: managers and workers. UCP will run on the manager nodes. Although DTR runs on a worker node, Docker does not recommend running other application containers on these nodes.")]),n("p",[t._v("To decide what size the node should be in terms of CPU, RAM, and storage resources, consider the following:")]),n("ol",[n("li",[t._v("All nodes should at least fulfil the minimal requirements, for UCP 3.1, 8GB of RAM and 4GB of storage. For production systems, 16GB of RAM is recommended for manager nodes. More detailed requirements are in the Docker EE UCP documentation at "),n("a",{attrs:{href:"https://docs.docker.com/ee/ucp/admin/install/system-requirements/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/ee/ucp/admin/install/system-requirements/")]),t._v(".")]),n("li",[t._v("UCP controller nodes should be provisioned with more than the minimal requirements if other workloads run on them.")]),n("li",[t._v("Ideally, worker node size will vary based on your workloads so it is impossible to define a universal standard size.")]),n("li",[t._v("Other considerations like target density (average number of containers per node), whether one standard node type or several are preferred, and other operational considerations might also influence sizing.")])]),n("p",[t._v("If possible, node size should be determined by experimentation and testing actual workloads; and they should be refined iteratively. A good starting point is to select a standard or default machine type in your environment and use this size only. If your standard machine type provides more resources than the UCP controller nodes need, it makes sense to have a smaller node size for these. Whatever the starting choice, it is important to monitor resource usage and cost to improve the model.")]),n("p",[t._v("For this solution, the following tables describe sizing configurations, assuming 3 Linux workers and 3 Windows workers. The vCPU allocations are described in Table 1 while the memory allocation is described in Table 2.")]),n("p",[n("strong",[t._v("Table 1.")]),t._v(" vCPU")]),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("vCPUs")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("node01")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("node02")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("node03")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("ucp1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("ucp2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("ucp3")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("dtr1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("dtr2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("dtr3")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("worker1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("worker2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("worker3")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("win-worker1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("win-worker2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("win-worker3")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("lb1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("lb2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("nfs")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("logger")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Total vCPU per node")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("16")])])])]),n("p",[n("strong",[t._v("Note:")]),t._v("\nIn the case of one ESX host failure, 2 nodes are enough to accommodate the amount of vCPU required.")]),n("p",[n("strong",[t._v("Table 2.")]),t._v(" Memory allocation")]),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("RAM (GB)")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("node01")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("node02")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("node03")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("ucp1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("ucp2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("ucp3")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("16")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("dtr1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("dtr2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("dtr3")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("16")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("lb1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("lb2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("nfs")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("logger")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("worker1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("worker2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("worker3")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("64")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("win-worker1")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("win-worker2")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),n("td",{staticStyle:{"text-align":"center"}})]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("win-worker3")]),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}}),n("td",{staticStyle:{"text-align":"center"}},[t._v("64")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Total RAM required (per node)")])]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("164")])]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("168")])]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("164")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Available RAM")])]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("384")])]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("384")])]),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("384")])])])])]),n("p",[n("strong",[t._v("Note:")])]),n("p",[t._v("In the case of one ESX host failure, the two surviving hosts can accommodate the amount of RAM required for all VMs.")])])}],!1,null,null,null);e.default=a.exports}}]);