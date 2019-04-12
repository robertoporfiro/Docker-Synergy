(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{138:function(o,e,n){"use strict";n.r(e);var t=n(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"playbooks-for-installing-prometheus-and-grafana-on-swarm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#playbooks-for-installing-prometheus-and-grafana-on-swarm","aria-hidden":"true"}},[o._v("#")]),o._v(" Playbooks for installing Prometheus and Grafana on Swarm")]),n("p",[o._v("The following playbooks are used to deploy Prometheus and Grafana on Docker Swarm.")]),n("ul",[n("li",[n("code",[o._v("playbooks/install_logspout.yml")]),o._v(" installs and configures "),n("strong",[o._v("Logspout")]),o._v(" on all Docker nodes. Logspout is responsible for sending logs produced by containers running on the Docker nodes to the central logger VM. By default, this playbook is commented out in "),n("code",[o._v("site.yml")]),o._v(".")]),n("li",[n("code",[o._v("playbooks/config_monitoring.yml")]),o._v(" configures a monitoring system for the Docker environment based on Grafana, Prometheus, cAdvisor and node-exporter Docker containers. By default, this playbook is commented out in "),n("code",[o._v("site.yml")]),o._v(", so if you want to use the solution to automatically deploy a Prometheus/Grafana monitoring system, you must explicitly uncomment both this and the "),n("code",[o._v("playbooks/install_logspout.yml")]),o._v(" playbook in "),n("code",[o._v("site.yml")]),o._v(" or run these playbooks post-deployment.")])])])}],!1,null,null,null);e.default=s.exports}}]);