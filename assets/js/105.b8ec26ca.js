(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{109:function(e,s,t){"use strict";t.r(s);var a=t(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"deploying-sysdig-monitoring-on-docker-swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-sysdig-monitoring-on-docker-swarm","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying Sysdig monitoring on Docker Swarm")]),t("p",[e._v("The playbook "),t("code",[e._v("playbooks/install_sysdig.yml")]),e._v(" is used to automate the configuration of the SaaS setup. By default, this playbook is commented out in "),t("code",[e._v("site.yml")]),e._v(" and must be explicitly enabled. An access key variable must be set in the "),t("code",[e._v("group_vars/all/vault")]),e._v(" file as detailed in the section "),t("code",[e._v("Sysdig configuration for Docker swarm")]),e._v(".")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# cd Docker-Synergy\n# ansible-playbook -i hosts playbooks/install_sysdig.yml --vault-password-file .vault_pass\n\n")])]),t("p",[e._v("Using the Sysdig software as a solution (SaaS) website "),t("a",{attrs:{href:"https://app.sysdigcloud.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://app.sysdigcloud.com")]),e._v(", you are able to view, analyze and inspect various different dashboards.")])])}],!1,null,null,null);s.default=o.exports}}]);