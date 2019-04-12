(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{193:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"backup-ucp-and-dtr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-ucp-and-dtr","aria-hidden":"true"}},[t._v("#")]),t._v(" Backup UCP and DTR")]),a("p",[t._v("The playbooks support backing up the swarm, UCP, DTR metadata and DTR images.")]),a("h2",{attrs:{id:"backup-configuration-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-configuration-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Backup configuration variables")]),a("p",[t._v("The following table shows the variables related to backing up UCP and DTR. All these variables are defined in the file "),a("strong",[t._v("group_vars/all/backups")]),t._v(". All the data that is backed up is streamed over an SSH connection to the backup server. Currently, the playbooks only support the use of the Ansible box as the backup server.")]),a("p",[a("strong",[t._v("Table 21.")]),t._v(" Backup variables")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("backup_server")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/backups")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Currently, the playbooks only support the use of the Ansible box as the backup server.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("backup_dest")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/backups")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("This variable should point to an existing folder on your Ansible box where the "),a("code",[t._v("root")]),t._v(" user has write access. All the backups will be stored in this folder. For example, "),a("code",[t._v("/root/backup")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("backup_passphrase")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("This variable is used to encrypt the tar file with a passphrase that must be at least 12 characters long.")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("swarm_offline_backups")]),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/backups")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("This variable is commented out by default. More information on this variable is provided below.")])])])]),a("h2",{attrs:{id:"backing-up-the-swarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-the-swarm","aria-hidden":"true"}},[t._v("#")]),t._v(" Backing up the Swarm")]),a("p",[t._v("When you backup the swarm, your services and stack definitions are backed up together with the networks definitions. However, Docker volumes or their contents will not be backed up. (If Docker volumes are defined in stacks, they will be re-created when you restore the stacks, but their content will be lost). You can backup the swarm using the playbook named "),a("code",[t._v("backup_swarm.yml")]),t._v(" which is located in the "),a("code",[t._v("playbooks")]),t._v(" folder on your Ansible server. The playbook is invoked as follows:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i hosts playbooks/backup_swarm.yml\n")])]),a("p",[t._v("This playbook creates two archives in the folder specified by the variable "),a("code",[t._v("backup_dest")]),t._v(" in "),a("code",[t._v("group_vars/all/backups")]),t._v(". By default, the file is named using the following pattern:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<backup_dest>/backup_swarm_<vmname>_<timestamp>.tgz\n<backup_dest>/backup_swarm_<vmname>_<timestamp>.vars.tgz\n")])]),a("p",[a("code",[t._v("<vmname>")]),t._v(" is the name of the host (in the inventory) that was used to take the backup, and "),a("code",[t._v("<timestamp>")]),t._v(" is the time at which the backup was taken. The file with the extension "),a("code",[t._v(".vars.tgz")]),t._v(" contains information regarding the system that was backed up.")]),a("p",[t._v("You can override the generated file name by defining the variable "),a("strong",[t._v("backup_name")]),t._v(" on the command line when running the playbook. In the example below:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i hosts playbooks/backup_swarm.yml -e backup_name=my_swarm_backup\n")])]),a("p",[t._v("The generated files won't have "),a("code",[t._v("<vmname>")]),t._v(" or "),a("code",[t._v("<timestamp>")]),t._v(" appended:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<backup_dest>/my_swarm_backup.tgz\n<backup_dest>/my_swarm_backup.vars.tgz\n")])]),a("p",[a("strong",[t._v("Warning: Online versus offline backups:")]),t._v(" By default, the playbook performs online backups. You can take offline backups by setting the variable "),a("code",[t._v("swarm_backup_offline")]),t._v(" to "),a("code",[t._v('"true"')]),t._v(". The playbook will then stop the Docker daemon on the machine used to take the backup (a manager or UCP node). Before it does so, the playbook will verify that enough managers are running in the cluster to maintain the quorum. If this is not the case, the playbook will exit with an error. For more information, see the Docker documentation at "),a("a",{attrs:{href:"https://docs.docker.com/engine/swarm/admin_guide/#recover-from-disasterv",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/engine/swarm/admin_guide/#recover-from-disasterv")])]),a("h2",{attrs:{id:"backing-up-the-universal-control-plane-ucp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-the-universal-control-plane-ucp","aria-hidden":"true"}},[t._v("#")]),t._v(" Backing up the Universal Control Plane (UCP)")]),a("p",[t._v("When you backup UCP, you save the data/metadata outlined in Table 22:")]),a("p",[a("strong",[t._v("Table 22.")]),t._v(" UCP data backed up")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Data")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Configurations")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("The UCP cluster configurations, as shown by "),a("code",[t._v("docker config ls")]),t._v(", including Docker EE license and swarm and client CAs")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access control")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Permissions for team access to swarm resources, including collections, grants, and roles")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Certificates and keys")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("The certificates, public keys, and private keys that are used for authentication and mutual TLS communication")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Metrics data")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monitoring data gathered by UCP")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Organizations")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Your users, teams, and orgs")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Volumes")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("All "),a("a",{attrs:{href:"https://docs.docker.com/datacenter/ucp/2.2/guides/architecture/#volumes-used-by-ucp",target:"_blank",rel:"noopener noreferrer"}},[t._v("UCP named volumes")]),t._v(", which include all UCP component certs and data")])])])]),a("p",[t._v("To make a backup of UCP, use "),a("code",[t._v("playbook/backup_ucp.yml")]),t._v(" as follows:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i vm_host playbooks/backup_ucp.yml\n")])]),a("p",[t._v("This playbook creates two archives in the folder specified by the variable "),a("code",[t._v("backup_dest")]),t._v(" in "),a("code",[t._v("group_vars/all/backups")]),t._v(". By default, the files are named using the following pattern:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<backup_dest>/backup_ucp_<ucpid>_<vmname>_<timestamp>.tgz\n<backup_dest>/backup_ucp_<ucpid>_<vmname>_<timestamp>.vars.tgz\n")])]),a("p",[a("code",[t._v("<ucpid>")]),t._v(" is the ID of the UCP instance, "),a("code",[t._v("<vmname>")]),t._v(" is the name of the host (in the inventory) that was used to take the backup, and "),a("code",[t._v("<timestamp>")]),t._v(" is the time at which the backup was taken. The file with the extension "),a("code",[t._v(".vars.tgz")]),t._v(" contains information regarding the system which was backed up.")]),a("p",[t._v("You can override the generated file name by defining the variable "),a("strong",[t._v("backup_name")]),t._v(" on the command line when running the playbook. In the example below:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i hosts playbooks/backup_ucp.yml -e backup_name=my_ucp_backup\n")])]),a("p",[t._v("The generated files won't have "),a("code",[t._v("<vmname>")]),t._v(" or "),a("code",[t._v("<timestamp>")]),t._v(" appended:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<backup_dest>/my_ucp_backup.tgz\n<backup_dest>/my_ucp_backup.vars.tgz\n")])]),a("p",[a("strong",[t._v("Warning:")]),t._v(" To create a consistent backup, the backup command "),a("strong",[t._v("temporarily stops the UCP containers running on the node where the backup is being performed")]),t._v(". User resources, such as services, containers, and stacks are not affected by this operation and will continue to operate as expected. Any long-lasting "),a("code",[t._v("docker exec")]),t._v(", "),a("code",[t._v("docker logs")]),t._v(", "),a("code",[t._v("docker events")]),t._v(", or "),a("code",[t._v("docker attach")]),t._v(" operations on the affected manager node will be disconnected.")]),a("p",[t._v("For more information on UCP backup, see the Docker documentation at "),a("a",{attrs:{href:"https://docs.docker.com/ee/ucp/admin/backups-and-disaster-recovery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/ee/ucp/admin/backups-and-disaster-recovery/")])]),a("h2",{attrs:{id:"backing-up-the-docker-trusted-registry-dtr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-the-docker-trusted-registry-dtr","aria-hidden":"true"}},[t._v("#")]),t._v(" Backing up the Docker Trusted Registry (DTR)")]),a("p",[t._v("When you backup DTR, you save the data/metadata outlined in Table 23:")]),a("p",[a("strong",[t._v("Table 23.")]),t._v(" DTR data backed up")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Data")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Backed up?")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Configurations")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("DTR settings")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Repository metadata")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Metadata like image architecture and size")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Access control to repos and images")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data about who has access to which images")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Notary data")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Signatures and digests for images that are signed")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Scan results")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Information about vulnerabilities in your images")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Certificates and keys")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("TLS certificates and keys used by DTR")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Image content")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Needs to be backed up separately, depends on DTR configuration")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Users, orgs, teams")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Create a UCP backup to backup this data")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Vulnerability database")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("no")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Can be re-downloaded after a restore")])])])]),a("p",[t._v("To make a backup of DTR metadata, use "),a("code",[t._v("playbook/backup_dtr_metadata.yml")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i vm_host playbooks/backup_dtr_metadata.yml\n")])]),a("p",[t._v("This playbook creates two archives in the folder specified by the variable "),a("code",[t._v("backup_dest")]),t._v(" in "),a("code",[t._v("group_vars/all/backups")]),t._v(". By default, the file is named using the following pattern:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<backup_dest>/backup_dtr_meta_<replica_id>_<vmname>_<timestamp>.tgz\n<backup_dest>/backup_dtr_meta_<replica_id>_<vmname>_<timestamp>.vars.tgz\n")])]),a("p",[a("code",[t._v("<replica_id>")]),t._v(" is the ID of the DTR replica that was backed up, "),a("code",[t._v("<vmname>")]),t._v(" is the name of the host (in the inventory) that was used to take the backup, and "),a("code",[t._v("<timestamp>")]),t._v(" is the time at which the backup was taken. The file with the extension "),a("code",[t._v(".vars.tgz")]),t._v(" contains information regarding the system that was backed up.")]),a("p",[t._v("You can override the generated file name by defining the variable "),a("strong",[t._v("backup_name")]),t._v(" on the command line when running the playbook. In the example below:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i hosts playbooks/backup_dtr_metadata.yml -e backup_name=my_dtr_metadata_backup\n")])]),a("p",[t._v("The generated files won't have "),a("code",[t._v("<vmname>")]),t._v(" or "),a("code",[t._v("<timestamp>")]),t._v(" appended:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<backup_dest>/my_dtr_metadata_backup.tgz\n<backup_dest>/my_dtr_metadata_backup.vars.tgz\n")])]),a("p",[t._v("For more information on DTR backups, see the Docker documentation at "),a("a",{attrs:{href:"https://docs.docker.com/ee/dtr/admin/disaster-recovery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/ee/dtr/admin/disaster-recovery/")])]),a("h2",{attrs:{id:"backing-up-dtr-data-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-dtr-data-images","aria-hidden":"true"}},[t._v("#")]),t._v(" Backing up DTR data (images)")]),a("p",[t._v("To make a backup of the images that are inventoried in DTR and stored on the NFS server, use "),a("code",[t._v("playbooks/backup_dtr_images.yml")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i vm_host playbooks/backup_dtr_images.yml\n")])]),a("p",[t._v("This playbook creates two archives in the folder specified by the variable "),a("code",[t._v("backup_dest")]),t._v(" in "),a("code",[t._v("group_vars/all/backups")]),t._v(". By default, the files are named using the following pattern:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<backup_dest>/backup_dtr_data_<replica_id>_<vmname>_<timestamp>.tgz\n<backup_dest>/backup_dtr_data_<replica_id>_<vmname>_<timestamp>.vars.tgz\n")])]),a("p",[a("code",[t._v("<replica_id>")]),t._v(" is the ID of the DTR replica that was backed up, "),a("code",[t._v("<vmname>")]),t._v(" is the name of the host (in the inventory) that was used to take the backup, and "),a("code",[t._v("<timestamp>")]),t._v(" is the time at which the backup was taken.")]),a("p",[t._v("You can override the generated file names by defining the variable "),a("strong",[t._v("backup_name")]),t._v(" on the command line when running the playbook, as shown in the example below:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ansible-playbook -i hosts playbooks/backup_dtr_images.yml -e backup_name=my_dtr_data_backup\n")])]),a("p",[t._v("The generated files won't have "),a("code",[t._v("<vmname>")]),t._v(" or "),a("code",[t._v("<timestamp>")]),t._v(" appended:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<backup_dest>/my_dtr_data_backup.tgz\n<backup_dest>/my_dtr_data_backup.vars.tgz\n")])]),a("p",[t._v("For more information on DTR backups, see the Docker documentation at "),a("a",{attrs:{href:"https://docs.docker.com/ee/dtr/admin/disaster-recovery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/ee/dtr/admin/disaster-recovery/")])]),a("h2",{attrs:{id:"backing-up-other-metadata-including-passwords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backing-up-other-metadata-including-passwords","aria-hidden":"true"}},[t._v("#")]),t._v(" Backing up other metadata, including passwords")]),a("p",[t._v("The backup playbooks do not backup the sensitive data in your "),a("code",[t._v("group_vars/all/vault")]),t._v(" file. The information stored in the "),a("code",[t._v(".vars.tgz")]),t._v(" files includes backups of the following files:")]),a("ul",[a("li",[a("strong",[t._v("hosts")]),t._v(", a copy of the "),a("code",[t._v("hosts")]),t._v(" file at the time the backup was taken")]),a("li",[a("strong",[t._v("vars")]),t._v(", a copy of your "),a("code",[t._v("group_vars/all/vars")]),t._v(" file at the time the backup was taken")]),a("li",[a("strong",[t._v("meta.yml")]),t._v(", a generated file containing information pertaining to the backup")])]),a("p",[t._v("The "),a("strong",[t._v("meta.yml")]),t._v(" file contains the following information:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('backup_node="<node that took the backup>"\nreplica_id="<ID of DTR replica if DTR backup>"\nbackup_source=""\nucp_version="<UCP version if UCP backup>"\ndtr_version="<DTR version of DTR backup>"\n')])]),a("h2",{attrs:{id:"backup-utility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-utility","aria-hidden":"true"}},[t._v("#")]),t._v(" Backup Utility")]),a("p",[t._v("The script "),a("code",[t._v("backup.sh")]),t._v(" can be used to take a backup of the swarm, UCP, DTR metadata and the DTR images in one go. You can pass this script an argument (tag) that will be used to prefix the backup filenames, thereby overriding the default naming. Table 24 shows the file names produced by "),a("code",[t._v("backup.sh")]),t._v(" based on the argument passed in the command line.")]),a("p",[a("strong",[t._v("Table 24.")]),t._v(" Backup utility")]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Example")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Command line")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Generated filenames")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Default")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("./backup.sh")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("backup_swarm_<vmname>"),a("em",[t._v("<timestamp>.tgz, backup_ucp")]),t._v("<ucpid>"),a("em",[t._v("<vmname>")]),t._v("<timestamp>.tgz, backup_dtr_meta_<replica_id>"),a("em",[t._v("<vmname>")]),t._v("<timestamp>.tgz, backup_dtr_data_<replica_id>"),a("em",[t._v("<vmname>")]),t._v("<timestamp>.tgz and the corresponding "),a("code",[t._v(".vars.tgz")]),t._v(" files")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Custom")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("./backup.sh my_backup")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("my_backup_swarm.tgz, my_backup_ucp.tgz, my_backup_dtr_meta.tgz, my_backup_dtr_data.tgz, and the corresponding "),a("code",[t._v(".vars.tgz")]),t._v(" files")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("./backup.sh $(date '+%Y_%m_%d_%H%M%S')")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("<date>_swarm.tgz, <date>_ucp.tgz, <date>_dtr_meta.tgz, <date>_dtr_data.tgz, and the corresponding "),a("code",[t._v(".vars.tgz")]),t._v(" files")])])])]),a("p",[t._v("In addition, the "),a("code",[t._v("backup.sh")]),t._v(" script accepts an optional switch that will let you specify the location of the password file that will be passed to the "),a("code",[t._v("ansible-playbook")]),t._v(" commands in the script. This is required if you have encrypted the "),a("code",[t._v("group_vars/all/vault")]),t._v(" file. The general syntax for this script is as follows:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./backup.sh [ -v <Vault Password File> ] [ tag ]\n")])]),a("h2",{attrs:{id:"related-playbooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-playbooks","aria-hidden":"true"}},[t._v("#")]),t._v(" Related playbooks")]),a("ul",[a("li",[a("code",[t._v("playbooks/backup_swarm.yml")]),t._v(" is used to back up the swarm data")]),a("li",[a("code",[t._v("playbooks/backup_ucp.yml")]),t._v(" is used to back up UCP")]),a("li",[a("code",[t._v("playbooks/backup_dtr_meta.yml")]),t._v(" is used to back up DTR metadata")]),a("li",[a("code",[t._v("playbooks/backup_dtr_images.yml")]),t._v(" is used to back up DTR images")])])])}],!1,null,null,null);e.default=i.exports}}]);