(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,o,t){"use strict";t.r(o);var r=[function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"monitoring-with-splunk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-with-splunk","aria-hidden":"true"}},[e._v("#")]),e._v(" Monitoring with Splunk")]),r("p",[e._v("Splunk Enterprise allows you to collect and index any data from any source, and to monitor systems and infrastructure in real time to preempt issues before they happen. It allows you to analyze your data to understand trends, patterns of activity and behavior, giving you valuable intelligence across your entire organization.")]),r("p",[r("img",{attrs:{src:t(73),alt:' "Solution architecture: Hybrid Linux and Windows VM workers with Splunk and Sysdig"',title:"Figure. Solution architecture:  Hybrid Linux and Windows VM workers with Splunk and Sysdig"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" Solution architecture: Hybrid Linux and Windows VM workers with Splunk and Sysdig")]),r("p",[e._v("This solution allows you to integrate your Containers-as-a-Service (CaaS) deployment with an existing Splunk Enterprise installation or to deploy a stand-alone Splunk Enterprise demo environment as a Docker stack in your cloud. In both instances, Universal Forwarders are used to collect data from your applications running on your Linux and Windows worker nodes in your cloud, as well as log data from the Docker platform itself and from the infrastructure VMs and servers. The following diagram shows the Splunk architecture.")]),r("p",[r("img",{attrs:{src:t(74),alt:' "Splunk architecture"',title:"Figure 12. Splunk architecture"}})]),r("p",[r("strong",[e._v("Figure 12.")]),e._v(" Splunk architecture")]),r("p",[e._v("All the Universal Forwarders run natively on the operating system to allow greater flexibility in terms of configuration options. Each forwarder sends the data it collects to one or more indexers in the central Splunk.")]),r("p",[r("strong",[e._v("Linux worker nodes:")]),e._v(" The Universal Forwarders on the Linux worker nodes collect log and metrics data. The log data includes:")]),r("ul",[r("li",[r("code",[e._v("/var/log/messages")]),e._v(" from the Docker host (including the daemon engine logs)")]),r("li",[r("code",[e._v("/var/log/secure")]),e._v(" from the Docker hosts")]),r("li",[e._v("container logs via a Splunk technical add-on")])]),r("p",[e._v("The metrics data is collected via a technical add-on and includes:")]),r("ul",[r("li",[r("code",[e._v("docker stats")])]),r("li",[r("code",[e._v("docker top")])]),r("li",[r("code",[e._v("docker events")])]),r("li",[r("code",[e._v("docker service stats")])])]),r("p",[r("strong",[e._v("Windows worker nodes:")]),e._v(" The Universal Forwarders running on the Windows worker nodes collect the following data:")]),r("ul",[r("li",[e._v("Windows logs")]),r("li",[e._v("CPU stats")]),r("li",[e._v("Memory stats")]),r("li",[e._v("Network Interface stats")]),r("li",[e._v("and more")])]),r("p",[e._v("For more information on configuring standalone Splunk for Linux and Windows worker nodes, see the section on "),r("a",{attrs:{href:"#"}},[e._v("Splunk prerequisites")]),e._v(".")]),r("p",[r("strong",[e._v("UCP and ESXi:")]),e._v(" UCP operational logs and ESXi logs are forwarded to the logger VM via TCP ports 1514 and 514 respectively. Port 1514 is assigned a special "),r("code",[e._v("sourcetype")]),e._v(" of "),r("code",[e._v("ucp")]),e._v(" which is then used by the Splunk Docker APP to interpret UCP logs. The Universal Forwarder runs the rsyslog daemon which will record the log messages coming from the ESX machines into the "),r("code",[e._v("/var/log/messages")]),e._v(" file on the VM.")]),r("p",[r("strong",[e._v("Non-Docker VMs:")]),e._v(" Other VMs, for example, NFS, use a Splunk "),r("code",[e._v("monitor")]),e._v(" to collect and forward data from the following files:")]),r("ul",[r("li",[e._v("/var/log/messages")]),r("li",[e._v("/var/log/secure (Red Hat)")])]),r("p",[r("strong",[e._v("Note:")]),e._v(" You can configure the list of files monitored by the Universal Forwarder.")]),r("p",[e._v("Other syslog senders can be configured to send their data to the logger VM or directly to central Splunk.")])])}],n=t(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);o.default=i.exports},73:function(e,o,t){e.exports=t.p+"assets/img/synergy-ops-architecture.0e5515d3.png"},74:function(e,o,t){e.exports=t.p+"assets/img/splunk-architecture.2ac95262.png"}}]);