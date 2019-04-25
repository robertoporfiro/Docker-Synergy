(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{210:function(t,e,a){"use strict";a.r(e);var r=a(0),l=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"docker-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker configuration")]),a("p",[t._v("All Docker-related variables are mandatory and are described in the following table.")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("docker_ee_url")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Note: This is a private link to your Docker EE subscription. The value for "),a("code",[t._v("docker_ee_url")]),t._v(" is the URL documented at the following address: "),a("a",{attrs:{href:"https://docs.docker.com/engine/installation/linux/docker-ee/rhel/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/engine/installation/linux/docker-ee/rhel/")]),t._v(".")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("docker_ee_reponame")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Specifies the repo to use. For Docker EE 2.1, this variable should be set to the value "),a("code",[t._v("stable-18.09")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("docker_ee_version")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Can be used to download an exact version of Docker EE from the repo specified in "),a("code",[t._v("docker_ee_reponame")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rhel_version")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("For the Docker installation, this sets the version of your RHEL OS, such as "),a("code",[t._v("7.6")]),t._v(". The playbooks were tested with RHEL 7.6.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("dtr_version")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Version of the Docker DTR you wish to install. You can use a numeric version or "),a("code",[t._v("latest")]),t._v(" for the most recent one. The playbooks were tested with 2.6.4")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ucp_version")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Version of the Docker UCP you wish to install. You can use a numeric version or "),a("code",[t._v("latest")]),t._v(" for the most recent one. The playbooks were tested with UCP 3.1.4.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("images_folder")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Directory in the NFS server that will be mounted in the DTR nodes and that will host your Docker images.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("license_file")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Full path to your Docker EE license file on your Ansible host. The license file is available from the Docker Store")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ucp_username")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Username of the administrator user for UCP and DTR, typically "),a("code",[t._v("admin")]),t._v(".")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ucp_password")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for the "),a("code",[t._v("ucp_username")]),t._v(" account.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("docker_storage_driver")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Storage driver for Docker nodes. The only accepted value is "),a("code",[t._v("overlay2")]),t._v(" (Previously, "),a("code",[t._v("devicemapper")]),t._v(" was supported but this has been deprecated as it is no longer supported by Docker on RHEL 7.5 and 7.6)")])])])]),a("p",[t._v("To see how to use customer-supplied certificates with UCP and DTR, see Appendix B.")]),a("h2",{attrs:{id:"storing-dtr-images-on-external-nfs-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storing-dtr-images-on-external-nfs-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Storing DTR images on external NFS server")]),a("p",[t._v("Using a combination of "),a("code",[t._v("images_folder")]),t._v(" and "),a("code",[t._v("nfs_external_server")]),t._v(" variables, you can host your DTR images\non an NFS server. If the variable "),a("code",[t._v("nfs_external_server")]),t._v(" is unset or commented out, the NFS VM is used by default.")]),a("p",[t._v("When using an external NFS server such as the one hosted by 3PAR, you need to create the file share matching the name stored in "),a("code",[t._v("images_folder")]),t._v(" manually, as\nshown in the section "),a("code",[t._v("Using HPE 3PAR when deploying NFS provisioner for Kubernetes")]),t._v(". If you are using the NFS VM, the file share is created automatically by the playbooks.")])])}],!1,null,null,null);e.default=l.exports}}]);