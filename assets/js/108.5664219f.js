(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{106:function(t,e,a){"use strict";a.r(e);var i=a(0),l=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"sysdig-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysdig-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Sysdig configuration")]),a("h2",{attrs:{id:"sysdig-configuration-for-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysdig-configuration-for-kubernetes","aria-hidden":"true"}},[t._v("#")]),t._v(" Sysdig configuration for Kubernetes")]),a("p",[t._v("The following table defines the variables used for configuring the Sysdig deployment on Kubernetes.")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sysdig_collector")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("The URL for the Sysdig SaaS, by default, "),a("code",[t._v("'collector.sysdigcloud.com'")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sysdig_collector_port")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("The port used by the agent, by default,  "),a("code",[t._v("'6666'")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sysdig_access_key")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("After the activation of your account on the Sysdig portal, you will be provided with your access key which will be used by the playbooks to install the agent on each UCP, DTR and Linux Kubernetes worker node.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("k8s_cluster")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("This should match the cluster name - this is displayed when you configure the client bundle")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sysdig_tags")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tagging your hosts is highly recommended. Tags allow you to sort the nodes of your infrastructure into custom groups in Sysdig Monitor. Specify location, role, and owner in the format: "),a("code",[t._v("'location:City,role:Enterprise CaaS,owner:Customer Name'")])])])])]),a("h2",{attrs:{id:"sysdig-configuration-for-docker-swarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysdig-configuration-for-docker-swarm","aria-hidden":"true"}},[t._v("#")]),t._v(" Sysdig configuration for Docker swarm")]),a("p",[t._v("The following table defines the variables used for configuring the Sysdig deployment on Docker swarm.")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sysdig_access_key")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("After the activation of your account on the Sysdig portal, you will be provided with your access key which will be used by the playbooks to install the agent on each UCP, DTR and Linux worker node, as well as the NFS, logger and load balancer VMs.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sysdig_agent")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Specifies the URL to the Sysdig Linux native install agent, for example, "),a("code",[t._v("https://s3.amazonaws.com/download.draios.com/stable/install-agent")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sysdig_tags")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tagging your hosts is highly recommended. Tags allow you to sort the nodes of your infrastructure into custom groups in Sysdig Monitor. Specify location, role, and owner in the format: "),a("code",[t._v("'location:City,role:Enterprise CaaS,owner:Customer Name'")])])])])])])}],!1,null,null,null);e.default=l.exports}}]);