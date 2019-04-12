(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{118:function(e,n,s){"use strict";s.r(n);var t=s(0),o=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"redeploying-splunk-demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redeploying-splunk-demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Redeploying Splunk demo")]),n("p",[this._v("The Splunk demo deployment, whilst fully featured, is severely restricted in the amount of data it can process. Once this limit has been reached, often after running for just one or two days, it is necessary to re-deploy the application if you want to continue experimenting with the demo.")]),n("p",[this._v("Before you redeploy, it is necessary to remove the corresponding Docker stack and delete the associated volumes.")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# ssh hpe-ucp02\n\n# docker stack rm splunk_demo\nRemoving service splunk_demo_splunkenterprise\nRemoving network splunk_demo_default\n\n# docker volume ls | grep splunk\nvsphere:latest      splunk_demo_vsplunk-opt-splunk-etc@Docker_GAB\nvsphere:latest      splunk_demo_vsplunk-opt-splunk-var@Docker_GAB\n\n# docker volume rm splunk_demo_vsplunk-opt-splunk-etc@Docker_GAB\nsplunk_demo_vsplunk-opt-splunk-etc@Docker_GAB\n\n# docker volume rm splunk_demo_vsplunk-opt-splunk-var@Docker_GAB\nsplunk_demo_vsplunk-opt-splunk-var@Docker_GAB\n\n\n")])]),n("p",[this._v("Then re-run the playbook on your Ansible node.")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("ansible-playbook -i hosts playbooks/splunk_demo.yml --vault-password-file .vault_pass\n")])])])}],!1,null,null,null);n.default=o.exports}}]);