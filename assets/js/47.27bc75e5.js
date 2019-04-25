(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{197:function(e,t,r){"use strict";r.r(t);var s=r(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"introduction-to-bare-metal-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-bare-metal-workers","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction to bare metal workers")]),t("p",[this._v("This solution leverages HPE Synergy OneView 4.10 and HPE Image Streamer 4.10 to provision bare metal servers with an operating system so they can be added to a Docker/Kubernetes cluster as worker nodes. Before you can provision servers using the playbooks, you need to create one or more Image Streamer Operating System Deployment Plans (OSDP) and one or more OneView Server Profile Templates (SPT).")]),t("p",[this._v("HPE OneView Server Profile Templates are used to create the OneView Server Profiles (SP) that are applied to the Synergy compute modules, also known as bare metal servers.  Each bare metal server listed in the Ansible inventory maps to exactly one OneView Server Profile Template. Depending on the environment, you may need to create one or more SPTs depending on the type of servers available in your Synergy environment. In the simplest case, where all servers are of the same Server Hardware Type and there is a single enclosure group, a single SPT can be used. If, on the other hand, the pool of compute modules consists of different server types (for example Gen9 and Gen10 compute modules), then a separate SPT must be created for each Server Hardware Type. When creating the SPT, an OSDP is specified. In most cases, the same OSDP can be used for all compute modules running the same operating system.  If you want to deploy both Windows and Linux worker nodes in the same cluster, you need to create a minimum of two SPTs and two OSDPs.  One SPT will specify an OSDP that deploys Linux, while a separate SPT will specify a different OSDP that deploys Windows.")]),t("p",[this._v("Image Streamer Operating System Deployment Plans leverage Operating System Build Plans (OSBP), each of which contains one or more Plan Scripts that are used to configure the deployed Operating System.  Each Plan Script may expose one or more OS custom attributes.  Custom attributes are parameters that can either be hard-coded to specific values or exposed to the deployment plan and configured by the SPT using the deployment plan.  Custom attributes can hold various data types such as IP addresses, host names, product keys etc.  The OSDP also specifies a golden image, which will be used when deploying the OS on the server.")]),t("p",[this._v("When it comes to the provisioning of bare metal servers, the Ansible playbooks create Server Profiles (SP) based on specified SPT and assign the server profiles to physical compute modules in the Synergy enclosures. The provisioning of the operating system is done when the server profile is applied using the Image Streamer OSDP specified in the SPT. Once the servers are provisioned, they are powered on by the playbooks.")])])}],!1,null,null,null);t.default=o.exports}}]);