(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{175:function(e,o,i){"use strict";i.r(o);var t=i(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"provisioning-rhel-vms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-rhel-vms","aria-hidden":"true"}},[e._v("#")]),e._v(" Provisioning RHEL VMs")]),i("p",[e._v("The following playbooks are used to provision RHEL VMs:")]),i("ul",[i("li",[i("code",[e._v("playbooks/provision_nodes.yml")]),e._v(" will create all the necessary virtual machines for the environment from the VM Template defined in the "),i("code",[e._v("vm_template")]),e._v(" variable. All Linux VMs are now created in one go, regardless of the number of drives they have. This playbook also has the potential to configure additional network adapters. Note that this\nplaybook will also provision any Linux or Windows bare metal nodes that are configured in the inventory.")]),i("li",[i("code",[e._v("playbooks/config_networking.yml")]),e._v(" will configure the network settings in all the virtual machines.")]),i("li",[i("code",[e._v("playbooks/resize_syspart.yml")]),e._v(" resizes the logical volume that holds the "),i("code",[e._v("/")]),e._v(" partition of the Linux VMs to use all the space available on the drive.")]),i("li",[i("code",[e._v("playbooks/config_subscription.yml")]),e._v(" registers and subscribes all virtual machines to the Red Hat Customer Portal.")]),i("li",[i("code",[e._v("playbooks/config_ntp.yml")]),e._v(" configures the "),i("strong",[e._v("chrony")]),e._v(" client package in all virtual machines in order to have a synchronized clock across the environment. It will use the list of servers specified in the "),i("code",[e._v("ntp_servers")]),e._v(" variable in the file "),i("code",[e._v("group_vars/all/vars")]),e._v(".")])])])}],!1,null,null,null);o.default=n.exports}}]);