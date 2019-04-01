(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{167:function(e,n,t){"use strict";t.r(n);var r=t(0),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"create-the-ansible-node-on-fedora"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ansible-node-on-fedora","aria-hidden":"true"}},[e._v("#")]),e._v(" Create the Ansible node on Fedora")]),t("p",[e._v("The Docker Synergy playbooks rely on the  "),t("a",{attrs:{href:"https://github.com/HewlettPackard/oneview-ansible",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible Modules for HPE OneView")]),e._v(" project when deploying bare metal resources.\nAs a result, there is a requirement to run a newer version of Python than is available by default on RHEL.\nIn this release of the Docker Synergy solution, it is required to deploy your Ansible contoller on Fedora, to take advantage of the built-in support for Python 3.")]),t("h2",{attrs:{id:"create-fedora-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-fedora-vm","aria-hidden":"true"}},[e._v("#")]),e._v(" Create Fedora VM")]),t("p",[e._v("Create a Virtual Machine with the following characteristics:")]),t("ul",[t("li",[t("strong",[e._v("Guest OS:")]),e._v(" Red Hat Fedora (64-bit)")]),t("li",[t("strong",[e._v("Disk:")]),e._v(" 50G (thin provisioning)")]),t("li",[t("strong",[e._v("CPU:")]),e._v(" 2")]),t("li",[t("strong",[e._v("RAM:")]),e._v(" 4 GB")]),t("li",[t("strong",[e._v("Ethernet Adapter:")]),e._v(" VMXNET 3, connected to your Ansible or management network")])]),t("p",[e._v("Install Fedora Server 29 using the appropriate ISO image for the distro (x86 64 bit) and in\nthe "),t("code",[e._v("Software Selection")]),e._v(" section, choose:")]),t("ul",[t("li",[t("strong",[e._v("Base Environment:")]),e._v(" Fedora Server Edition")]),t("li",[t("strong",[e._v("Add-Ons for Selected Environment:")]),e._v(" Guest Agent")])]),t("p",[e._v("Select your language, keyboard, and timezone settings and re-boot when the installation finishes.")]),t("p",[e._v("Configure your networking and check your connectivity before moving on to the next section. If you  are\noperating behind a proxy, configure DNF by editing "),t("code",[e._v("/etc/dnf/dnf.conf")]),e._v(", as outlined\n"),t("a",{attrs:{href:"https://www.cyberciti.biz/faq/how-to-use-dnf-command-with-a-proxy-server-on-fedora/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(".")]),t("h2",{attrs:{id:"install-ansible-and-required-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-ansible-and-required-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Install Ansible and required modules")]),t("p",[e._v("Login the root account and run the following commands:")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dnf update -y\ndnf install -y git\ndnf install -y ansible\ndnf install -y python3-netaddr\ndnf install -y python3-requests\ndnf install -y python3-pyvmomi\ndnf install -y python3-pip\ndnf install -y python3-winrm\n \ncd /usr/bin\nln -s python3.7 python\n\n \n# install the python HPE OneView SDK\ncd\ngit clone https://github.com/HewlettPackard/python-hpOneView.git\ncd python-hpOneView/\npip3 install .\n\n \n# Install the ONeview Ansible Modules\ncd\ngit clone https://github.com/HewlettPackard/oneview-ansible.git\n \n# Configure ansible\ncat <<EOF >>~/.bashrc\nexport ANSIBLE_LIBRARY=/root/oneview-ansible/library\nexport ANSIBLE_MODULE_UTILS=/root/oneview-ansible/library/module_utils\nEOF\nsource ~/.bashrc\n")])])])}],!1,null,null,null);n.default=o.exports}}]);