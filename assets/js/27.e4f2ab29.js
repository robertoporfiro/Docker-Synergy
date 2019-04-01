(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{131:function(e,t,r){"use strict";r.r(t);var s=r(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"appendix-c-enabling-ssl-between-the-universal-forwarders-and-the-splunk-indexers-using-your-certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#appendix-c-enabling-ssl-between-the-universal-forwarders-and-the-splunk-indexers-using-your-certificates","aria-hidden":"true"}},[e._v("#")]),e._v(" Appendix C: Enabling SSL between the universal forwarders and the Splunk indexers using your certificates")]),r("p",[e._v("The procedure for enabling SSL between the universal forwarders and the Splunk indexers using your certificates is described below. In summary, the following steps are required:")]),r("ol",[r("li",[r("p",[e._v("Set the variable "),r("code",[e._v("splunk_ssl")]),e._v(" to "),r("code",[e._v("yes")]),e._v(" in "),r("code",[e._v("group_vars/all/vars")])])]),r("li",[r("p",[e._v("Put your root CA certificate and your server certificate files in")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/root/Docker-Synergy/files/splunk/linux/SPLUNK_HOME/etc/mycerts\n")])])]),r("li",[r("p",[e._v("Uncomment the "),r("code",[e._v("[sslConfig]")]),e._v(" stanza in the file "),r("code",[e._v("/files/splunk/linux/SPLUNK_HOME/etc/system/local/server.conf")])])])]),r("h2",{attrs:{id:"limitations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[e._v("#")]),e._v(" Limitations")]),r("p",[e._v("SSL only works with Linux worker nodes. The Universal Forwarders verify that the indexers they connect to have a certificate signed by the configured root CA and that the Common Name in the certificate presented by the indexer matches its FQDN as listed by the variable")]),r("p",[r("code",[e._v("splunk_architecture_forward_servers")]),e._v(".")]),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),r("p",[e._v("Configure your indexers to use SSL on port 9998. The following is an example "),r("code",[e._v("inputs.conf")]),e._v(" file located in "),r("code",[e._v("$SPLUNK_HOME/etc/system/local")]),e._v(" that enables SSL on port 9998 and configures the certificate file for use by the indexer itself, in this instance "),r("code",[e._v("/opt/splunk/etc/mycerts/indexer.pem")]),e._v(".")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[splunktcp-ssl://9998]\ndisabled=0\nconnection_host = ip\n\n[SSL]\nserverCert=/opt/splunk/etc/mycerts/indexer.pem\n#requireClientCert = true\n#sslAltNameToCheck = forwarder,forwarder.cloudra.local\n\n[tcp://1514]\nconnection_host = dns\nsourcetype = ucp\n\n")])]),r("p",[e._v("For more information, see the documentation at "),r("a",{attrs:{href:"https://docs.splunk.com/Documentation/Splunk/7.1.2/Security/ConfigureSplunkforwardingtousesignedcertificates",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.splunk.com/Documentation/Splunk/7.1.2/Security/ConfigureSplunkforwardingtousesignedcertificates")]),e._v(". In addition, you can see how to create your own certificates and the content of the file designated with "),r("code",[e._v("serverCert")]),e._v(" at "),r("a",{attrs:{href:"http://docs.splunk.com/Documentation/Splunk/7.1.2/Security/Howtoself-signcertificates",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://docs.splunk.com/Documentation/Splunk/7.1.2/Security/Howtoself-signcertificates")]),e._v(".")]),r("p",[e._v("In this instance, the folder "),r("code",[e._v("mycerts")]),e._v(" was created under "),r("code",[e._v("/opt/splunk/etc")]),e._v(" and the file "),r("code",[e._v("indexer.pem")]),e._v(" was copied to this folder.")]),r("p",[e._v("Indexers are configured with the Root CA cert used to sign all certificates. This can be achieved by editing the file "),r("code",[e._v("server.conf")]),e._v(" in "),r("code",[e._v("$SPLUNK_HOME/etc/system/local")]),e._v(" on your indexer(s). The following code block shows the relevant portion of this file where "),r("code",[e._v("sssRootCaPath")]),e._v(" is pointing to the root CA certificate.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[sslConfig]\nsslRootCAPath = /opt/splunk/etc/mycerts/ca.pem\n")])]),r("p",[r("strong",[e._v("Note:")]),e._v(" In order to be able to download and install additional applications, you may want to append the file "),r("code",[e._v("$SPLUNK_HOME/auth/appsCA.pem")]),e._v(" to your "),r("code",[e._v("ca.pem")]),e._v(" file. If you don't do this, the Splunk UI will make this suggestion when you attempt to "),r("code",[e._v("Find more apps")]),e._v(".")]),r("p",[e._v("Splunk should be restarted on the indexers if you had to make these changes (see the Splunk documentation for more information).")]),r("h2",{attrs:{id:"before-you-deploy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#before-you-deploy","aria-hidden":"true"}},[e._v("#")]),e._v(" Before you deploy")]),r("p",[e._v("Generate the forwarder certificate and name it "),r("code",[e._v("forwarder.pem")]),e._v(". Make sure that you copy the root CA certificate to "),r("code",[e._v("ca.pem")])]),r("p",[e._v("Copy both the "),r("code",[e._v("ca.pem")]),e._v(" and the "),r("code",[e._v("forwarder.pem")]),e._v(" files to "),r("code",[e._v("files/splunk/linux/SPLUNK_HOME/etc/mycerts/")]),e._v(" (overwriting any existing files).")]),r("p",[e._v("Edit the file "),r("code",[e._v("server.conf")]),e._v(" in the folder "),r("code",[e._v("files/splunk/linux/SPLUNK_HOME/etc/system/local")]),e._v(" and uncomment the last two lines as suggested in the file itself. Your file should look like this:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("#\n# uncomment the section below if you want to enable SSL\n#\n[sslConfig]\nsslRootCAPath = /opt/splunkforwarder/etc/mycerts/ca.pem\n")])]),r("p",[e._v("Set "),r("code",[e._v("splunk_ssl")]),e._v(" to "),r("code",[e._v("yes")]),e._v(" in the file "),r("code",[e._v("group_vars/all/vars")]),e._v(", uncommenting the line if required. Make sure that the "),r("code",[e._v("splunk_architecture_forward_servers")]),e._v(" list specifies all your indexers together with the port that was configured to accept SSL:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("monitoring_stack: splunk\nsplunk_ssl: yes\nsplunk_architecture_forward_servers:\n- indexer1.cloudra.local:9998\n- indexer2.cloudra.local:9998\n")])]),r("h2",{attrs:{id:"hybrid-environment-linux-windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hybrid-environment-linux-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Hybrid environment Linux / Windows")]),r("p",[e._v("Currently, you cannot deploy your own certificates for use by the Universal Forwarders deployed on Windows machines. If you want to have your Linux machines in a hybrid deployment to use SSL, proceed as follows.")]),r("p",[e._v("Comment out the "),r("code",[e._v("splunk_architecture_forward_servers")]),e._v(" variable (and its values) from "),r("code",[e._v("group_vars/all/vars")])]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("monitoring_stack: splunk\nsplunk_ssl: yes\n#splunk_architecture_forward_servers:\n#  - hpe2-ansible.cloudra.local:9998\n")])]),r("p",[e._v("Create a file named "),r("code",[e._v("vms.yml")]),e._v(" in the folder "),r("code",[e._v("group_vars")]),e._v(" and specify the list of forward servers to use by the Linux servers. This list is typically the same as the one used for Windows servers but specifies a TCP port that enables SSL.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("splunk_architecture_forward_servers:\n- hpe2-ansible.cloudra.local:9998\n")])]),r("p",[e._v("Edit the "),r("code",[e._v("group_vars/windows_box.yml")]),e._v(" file and specify the list of forward servers to be used by the Windows servers. This list is typically the same as the one used for Linux servers but specifies a TCP port that does not enable SSL.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("splunk_architecture_forward_servers:\n- hpe2-ansible.cloudra.local:9997\n")])])])}],!1,null,null,null);t.default=n.exports}}]);