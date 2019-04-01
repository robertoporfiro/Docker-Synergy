(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{146:function(e,t,o){"use strict";o.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"monitoring-with-sysdig"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-with-sysdig","aria-hidden":"true"}},[e._v("#")]),e._v(" Monitoring with Sysdig")]),r("p",[e._v("Sysdig's approach to Docker monitoring uses transparent instrumentation to see inside containers from the outside, with no need for agents in each container. Metrics from Docker containers, and from your applications running inside them, are aggregated in real-time across each service to provide meaningful monitoring dashboards and alerts for your application.")]),r("p",[e._v("Figure 3 provides an overview of the Sysdig architecture.")]),r("p",[r("img",{attrs:{src:o(92),alt:' "Sysdig architecture"',title:"Figure 3. Sysdig architecture"}})]),r("p",[r("strong",[e._v("Figure 3.")]),e._v(" Sysdig architecture")]),r("p",[r("strong",[e._v("Sysdig Monitor")]),e._v(" allows you to analyze response times, application performance metrics, container and server utilization metrics, and network metrics. You can build dashboards across applications, micro-services, container and networks, and explore metadata from Docker, Kubernetes, Mesos and AWS. For more information, see the "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=NR9XLZw0ndo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sysdig Container Monitoring")]),e._v(" video overview and the "),r("a",{attrs:{href:"https://sysdig.teachable.com/p/sysdig-101",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sysdig Monitor 101")]),e._v(" training course.")]),r("p",[r("strong",[e._v("Sysdig Secure")]),e._v(" provides security at the orchestrator as well as the container level. You create service-aware policies that allow you to take actions (like killing a container) or send alerts (to Slack, Splunk, etc) whenever a policy violation occurs. All commands are audited to help you identify anomalous actions, along with taking snapshots of all activities pre-and-post a policy violation. For more information, see the "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=e_kdjHjK7mY",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sysdig Container Monitoring")]),e._v(" video overview and the "),r("a",{attrs:{href:"https://sysdig.teachable.com/p/sysdig-secure-101",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sysdig Secure 101")]),e._v(" training course.")]),r("p",[e._v("The implementation in this solution uses the Software as a Service (SaaS) version of Sysdig. The playbooks deploy Sysdig Agent software on each UCP, DTR and Linux worker node, as well as the NFS, logger and load balancer VMs and captured data is relayed back to your Sysdig SaaS Cloud portal. The deployment provides access to a 90 day try-and-buy, fully featured version of the Sysdig software.")]),r("p",[r("strong",[e._v("Note:")]),e._v(" The Sysdig functionality is not turned on by default in this solution - see the section on Configuration for more information on how to enable Sysdig. For more information on how to access the 90 day try-and-buy version, see the section "),r("code",[e._v("Registering for Sysdig trial")]),e._v(".")])])}],i=o(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);t.default=a.exports},92:function(e,t,o){e.exports=o.p+"assets/img/sysdig-architecture.5ee9035f.png"}}]);