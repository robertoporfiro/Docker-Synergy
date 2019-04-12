(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{198:function(t,e,a){"use strict";a.r(e);var l=a(0),s=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vmware-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vmware-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" VMware configuration")]),a("p",[t._v("All VMware-related variables are mandatory and are described in the table below.")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vcenter_hostname")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("IP or hostname of the vCenter appliance")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vcenter_username")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Username to log in to the vCenter appliance. It might include a domain, for example, '"),a("code",[t._v("administrator@vsphere.local")]),t._v("'.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vcenter_password")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for the "),a("code",[t._v("vcenter_username")]),t._v(" user above.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vcenter_validate_certs")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("‘no’")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("datacenter")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Name of the datacenter where the environment will be provisioned")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vm_username")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Username to log into the VMs. It needs to match the one from the VM Template, so unless you have created a user, you must use 'root'.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vm_password")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for the "),a("code",[t._v("vm_username")]),t._v(" user above.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vm_template")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Name of the RHEL VM Template to be use. Note that this is the name from a vCenter perspective, not the hostname.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("folder_name")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("vCenter folder to deploy the VMs. If you do not wish to deploy in a particular folder, the value should be "),a("code",[t._v("/")]),t._v(". Note: If you want to deploy in a specific folder, you need to create this folder in the inventory of the selected datacenter before starting the deployment.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("datastores")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("List of datastores to be used, in list format, i.e. ['"),a("code",[t._v("Datastore1")]),t._v("','"),a("code",[t._v("Datastore2")]),t._v("'...]. This or these datastore(s) must exist before you run the playbooks. Note that all the datastores should be mounted on all the ESXi hosts.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disk2")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("UNIX® name of the second disk for the Docker VMs. Typically "),a("code",[t._v("/dev/sdb")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disk2_part")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("UNIX name of the partition of the second disk for the Docker VMs. Typically "),a("code",[t._v("/dev/sdb1")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vsphere_plugin_version")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Version of the vSphere plugin for Docker. The default is 0.21.2 which is the latest version at the time of writing this document. The version of the plugin should match the version of the vSphere Installation Bundle (VIB) that you installed on the ESXi servers.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("vm_portgroup")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used by the playbook "),a("code",[t._v("provision_nodes.yml")]),t._v(", this variable specifies the portgroup connected to the network that connects all the VMs. There is currently only one network.")])])])]),a("p",[t._v("It is recommended that the template, which is used as the base for all deployed VMs, specifies a network adapter but it is not required. If a network adapter is specified, you should not attach this adapter to a standard switch if the portgroup designated by "),a("code",[t._v("vm_portgroup")]),t._v(" is connected to a distributed vSwitch. In addition, you should make sure that the adapter specifies "),a("code",[t._v("Connect At Power On")]),t._v(".")])])}],!1,null,null,null);e.default=s.exports}}]);