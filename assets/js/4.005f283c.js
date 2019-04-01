(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{163:function(e,t,r){"use strict";r.r(t);var s=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"os-deployment-plan-custom-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-deployment-plan-custom-attributes","aria-hidden":"true"}},[e._v("#")]),e._v(" OS Deployment Plan Custom Attributes")]),s("h2",{attrs:{id:"rhel-os-deployment-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rhel-os-deployment-plan","aria-hidden":"true"}},[e._v("#")]),e._v(" RHEL OS Deployment Plan")]),s("p",[e._v("Currently, the code responsible for the provisioning of server profiles expects the OS Deployment Plans to expose two and\nonly two custom attributes named 'NIC1' and 'NIC2'. This means the server profiles templates using the OSBP will only\nsee the NIC1 and NIC2 attributes as shown in the figure below, which illustrates the OS Deployment section of the "),s("code",[e._v("RedHat760_fcoe_gen9_4_v1.0.3")]),e._v(" server profile template.")]),s("p",[s("img",{attrs:{src:r(43),alt:' "Server Profile Template - OS Deployment"'}})]),s("p",[s("strong",[e._v("Figure.")]),e._v(" Server Profile Template - OS Deployment")]),s("p",[e._v('The IPV4 configuration should be configured using "User-specified" because the\nplaybooks will assign the IP addresses from the data in the '),s("code",[e._v("hosts")]),e._v(" inventory file."),s("br"),e._v("\nAll other attributes are populated automatically.")]),s("p",[e._v("It is possible to specify additional custom attributes in the OS Deployment Plan and the underlying OS Build Plan but these attributes should be hard-coded to the desired values and should not be made visible on deployment.")]),s("p",[e._v("For example, the Red Hat OS Deployment Plan includes four custom attributes used by the underlying OS Build Plan that are not exposed by the OS Deployment Plan.")]),s("ul",[s("li",[s("strong",[s("code",[e._v("NewRootPassword:")])]),e._v(" This attribute is used to configure the password for the root account.")]),s("li",[s("strong",[s("code",[e._v("NewUser")])]),e._v(" and "),s("strong",[s("code",[e._v("NewUserPassword:")])]),e._v(" These two custom attributes are used to configure an additional user.")]),s("li",[s("strong",[s("code",[e._v("ssh:")])]),e._v(" The underlying OS Build Plan specifies that SSH is enabled since this is required for Ansible to work.")])]),s("p",[e._v("Again, these non-visible custom attributes are all hard-coded to specific values in the OS Build Plan, which effectively means any compute module deployed using this OS Deployment Plan will have these custom attributes set to these hard-coded values.")]),s("p",[s("img",{attrs:{src:r(44),alt:' "Deployment Plan attributes"'}})]),s("p",[s("strong",[e._v("Figure.")]),e._v(" Deployment Plan attributes")]),s("h2",{attrs:{id:"windows-2016-os-deployment-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-2016-os-deployment-plan","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows 2016 OS Deployment Plan")]),s("p",[e._v("The following figure shows the Windows 2016 OS Deployment Plan shipping with this solution where only the NIC1 and NIC2 attributes are exposed but additional custom attributes are present and used to configure the Windows OS during deployment.  Among other things, the password for the administrative user, the desired Power Plan, Remote Desktop settings, and the Windows Product Key are specified using custom attributes.")]),s("p",[s("img",{attrs:{src:r(45),alt:' "Windows 2016 Deployment Plan attributes"'}})]),s("p",[s("strong",[e._v("Figure.")]),e._v(" Windows 2016 Deployment Plan attributes")]),s("h3",{attrs:{id:"windows-proxy-server-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-proxy-server-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows Proxy Server Configuration")]),s("p",[e._v("This Deployment Plan includes the ability to configure a Proxy server if needed.  There are four custom attributes related to proxy server configuration:")]),s("table",[s("thead",[s("tr",[s("th",[e._v("Custom attribute name")]),s("th",[e._v("Purpose")]),s("th",[e._v("Default value")])])]),s("tbody",[s("tr",[s("td",[e._v("EnableProxy")]),s("td",[e._v("Controls whether the remaining proxy-related custom attributes are applied to the server during OS deployment")]),s("td",[e._v("false")])]),s("tr",[s("td",[e._v("ProxyServerAddress")]),s("td",[e._v("The hostname or IP address of the proxy server")]),s("td",[e._v("none")])]),s("tr",[s("td",[e._v("ProxyServerPort")]),s("td",[e._v("The numeric port number used by the proxy server")]),s("td",[e._v("none")])]),s("tr",[s("td",[e._v("ProxyServerSkipForAddresses")]),s("td",[e._v("Hostnames or IP addresses that are excluded from the proxy server")]),s("td",[e._v("none")])])])]),s("p",[e._v("By default the "),s("code",[e._v("EnableProxy")]),e._v(' custom attribute is set to "false" which causes the other three proxy-related custom attributes to be ignored.  However, all of these custom attributes require a string value be configured (i.e. they cannot be left blank), which is why the remaining proxy attributes are set to "none".  In environments where a proxy server is required to reach the Internet, the '),s("code",[e._v("EnableProxy")]),e._v(' attribute must be set to "true" and the '),s("code",[e._v("ProxyServerAddress")]),e._v(", "),s("code",[e._v("ProxyServerPort")]),e._v(", and "),s("code",[e._v("ProxyServerSkipForAddresses")]),e._v(" attributes should be configured with their appropriate values.")]),s("p",[e._v("For more information about custom attributes and the type of attributes available, see the"),s("br"),s("a",{attrs:{href:"https://support.hpe.com/hpsc/doc/public/display?docId=emr_na-a00039930en_us&docLocale=en_US",target:"_blank",rel:"noopener noreferrer"}},[e._v("HPE Synergy Image Streamer 4.1 User's Guide")]),e._v(".")])])}],o=r(0),n=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);t.default=n.exports},43:function(e,t,r){e.exports=r.p+"assets/img/bm-osbp-nic1-nic2.61c3bd03.png"},44:function(e,t,r){e.exports=r.p+"assets/img/bm-osdp-nic1-nic2.bb11536f.png"},45:function(e,t,r){e.exports=r.p+"assets/img/bm-win-deployment-plan.b7e55095.png"}}]);