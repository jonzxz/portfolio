# <clrgn>JobExperience.md</clrgn>
---

## DevOps Engineer | *Jan 2023 - Present*
### <clrcy>Government Technology Agency</clrcy>
- Part of the Government Paid Leave Schemes (GPLS) Portal team as an individual contributor

- Led migration of CICD workflows from Atlassin BitBucket / Bamboo to GitLab CICD

- Architected and implemented full-fledged CICD templates and pipelines in GitLab for EKS based microservices and EC2 services, creating a workflow from source to deploy via `Helm`, `Kubectl` and `Ansible`.

- Authored technical documentation for CICD templates and workflows

- Initiated and co-hosted sharing sessions on CICD templates within and across projects

- Migration of ~300 legacy vanilla Terraform resources to Terragrunt wrapper, along with creation of new Terraform modules

- Championed major AWS RDS version upgrades, including drafting of technical runbook to be used by members of the team and rollout scheduling

- Performed upgrading of `AWS EKS` clusters, inclusive of schedule planning, communication with team, technical runbooks

- Led initiative to improve team’s operational processes by introducing formal multiple playbooks, enforcing clear code review processes with templates to improve traceability and accountability of work

- Initiated tracking sheet and provided initial analysis on cloud infrastructure security findings based on security reports

- Part of operations support to provide BAU support, inclusive of OS patching via AMI refreshes, COTS software upgrades via automation and production DevOps support.

- Prepared technical challenges and conducted technical interviews for potential candidates

- Provided training and guidance to new and existing colleagues in DevOps / automation technologies.

----

## DevOps Engineer | *Jul 2022 – Jan 2023*
### <clrrd>S&P Global, Market Intelligence</clrrd>
-	Leading infrastructure team, hosting monthly infrastructure reviews and leading discussions for improvements and optimizations

-	Sole contributor in maintenance of 4 AWS Accounts, including security compliance, tagging, financial forecasting with score of <clrgn>95 points</clrgn> based on internal metrics for all accounts

-	Creation of custom `Docker` agent images for Mend and Sonarqube

-	Integration of Product source code to corporate-hosted `Mend` and `Sonarqube` from CI pipelines

-	Solutions design and implementation of cross region service for multiple AWS based products, enabling trade reporting to Hong Kong Trade Repository (HKTR)

-	Implementing reusable `Terraform` modules for various AWS resources such as `IAM Group`, `Users`, `Roles`, `Auto Scaling Groups`, `Elastic File System`, `Transfer`

-	Technical documentation for existing and new infrastructure stack

-	Engagement with external vendors and corporate Cloud team on new infrastructure building blocks

-	Provided technical rectifications for on-premise client, including `NGINX` reverse-proxy configurations and security related flags

- Conducted hiring interviews for potential candidates

----

## Software Developer | *Jul 2021 – Jul 2022*
### <clrgn>IHS Markit</clrgn> (now S&P Global)
-	Contributor in Delivery team to implement enhancements and defect fixes to `Spring Boot` application

-	Rotation-based Level 2 Support for Trade Reporting application in Spring Boot, providing in-depth troubleshooting, root cause analysis and resolution to Level 1 Support and clients

-	Participated in Agile based development cycles, acting as Sprint lead for development sprints on rotation basis

-	Part of infrastructure team creating and enhancing existing AWS resources using `Terraform` and AWS CLI

-	Cost analysis of cloud billing to reduce monthly overheads, resulting in 30% cost savings in AWS operational costs by rightsizing and optimizations

-	Redesigning of AWS `Security Groups` using `Terraform` modules to introduce security segregation of outbound connectivity

-	Executing estate-wide deployments in for over 80 servers in UAT and Production environments

-	Security and compliance fixes for AWS resources based on AWS `Security Hub` and internal compliance directives

-	Created AWS `Session Manager` (SSM) automation for refreshing AWS `Simple Email Service` (SES) SMTP credentials for servers utilizing Postfix relay design

-	Designed and implemented weekly scheduled pipeline to build custom `EC2 AMIs` for applications using Gitlab CI and `Hashicorp Packer`

-	Developed automation in `Lambda` to identify and update AWS `Auto Scaling Groups` with updated `AMIs` built by scheduled pipelines

-	Responsible for Availability-Zone scoped Disaster Recovery exercise in AWS, including drafting of proposals, execution and post mortem reports

-	Authoring technical documentations for Day 2 operations for infrastructure resources in product

---

## Java Developer | *Mar 2021 – Jul 2021*
### <clrmg>DXC Technology</clrmg>
-	Part of delivery team to provide enhancements to `Spring` application

-	Performed on-site remediation of Oracle database records with `SQL` Procedures

-	Creation of Docker database images for local integration testing for developers

---

## Associate Engineer | *Sep 2018 – Feb 2021*
### <clrrd>ST Engineering (Electronics) (Infosoft)</clrrd>
-	Deployment, maintenance and administration of `VMWare ESXi` hosts and virtualized application servers

-	Administration of Microsoft Active Directory with Group Policy enforcements

-	Network configuration and troubleshooting for IPv4 networks

-	Providing technical consultancy and troubleshooting for on-premise systems

-	Developed system report generation automation initiative in `VBScript` and `Microsoft Batch`, resulting in reduction of maintenance time cost by <clrgn>90%</clrgn> for legacy Windows systems

-	Developed `Python` GUI application for customizing client-based application on Windows based machines, reducing time taken for client configurations by <clrgn>90%</clrgn> for Windows 7 systems

-	Creation of golden Windows 7 images for client machines and estate-wide deployments to 700 laptops over local network

-	Initiation of improved workflow by introducing on-premise Jenkins server and JFrog Artifactory for automated builds 

- Assessment and maintenance of legacy Java codebases for security vulnerabilities based on HPE Fortify Static Code Analyzer

-

<style>
/* @group Block Quotes */

blockquote {
	border-left: 5px solid #333;
	padding-left: 1rem;
	
}
/* @end */

/* @group Pre-formatted and Code */

pre {
	overflow: auto;
	margin: 1rem 0;
	padding: .5rem;

	font-size: .875em;
	white-space: pre;
	
	background-color: #1e2326;
	border: 1px solid #bbc3c5;
	border-radius: 3px;
}

code {
	padding: 0 .25em;
	
	white-space: pre;
	font-family: Source Code Pro, monospace;
	
	background-color: #1e2326;
	/* border: 1px solid #bbc3c5; */
	border-radius: 3px;
}

pre code {
	padding: 0;

	word-wrap: normal;
	white-space: pre-wrap;
}

pre code, pre tt {
	background-color: transparent;
	border: none;
}
/* @end */

clrog {
  color: #d19a66;
}

clrgn {
  color: #8cc265;
}

clrbl {
	color: #4aa5f0;
}

clrrd {
	color: #e05561;
}

clrmg {
	color: #c162de;
}

clrcy {
	color: #42b3c2;
}
</style>