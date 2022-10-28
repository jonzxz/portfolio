# Portfolio Site

---

This repository contains the code for my [portfolio site](https://jonathankerk.com)

The frontend is built with pure React v18, and the code is hosted on S3 buckets in AWS. 

The frontend code was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Frontend

Fairly simple React application that attempts to replicate the views of classic text editors, eg. VSC in dark mode.

The frontend is pretty barebones, it's simply a navigation bar/tab that allows you to go to different component/pages.

Some potential future improvements including:
  - Vertical scroll map instead of invisible scroll bar
  - Colored or stylized MD in each page
  - Drag and drop tabs to support split panels
  - Have an actual `error.html` that can elegantly handle bad requests instead of rerouting to `index.html`
  - Actually fix mobile scaling, something's whack here

---

## Hosting

Code is hosted on 2 AWS S3 buckets with static site hosting enabled. Code is packed with `npm run build` and uploaded to S3.

The Terraform version used here is `v1.3.3`, and the AWS Provider is pinned to `4.36.1`.

Terraform code can be found in `terraform/*`

A base module was written `terraform/module/s3` as somewhat a sort of customized base module for myself, for the sake of website hosting.

The module has a switch flag that determines if the bucket created is going to be a "hosted bucket" (ie. containing built package) or "redirect bucket" (redirects traffic to the hosted bucket).

One of the bucket `jonathankerk.com` acts as the hosted bucket, while `www.jonathankerk.com` redirects all requests  to `jonathankerk.com`.

The buckets has a bucket policy to only allow `s3:GetObject` from all Cloudflare IP addresses which can be found [here](https://www.cloudflare.com/ips-v4). The domain names are proxied through Cloudflare with HTTPS redirects and we'd want to avoid anyone accessing the bucket endpoints directly.

There's also a hack of some sort using `aws_s3_object` and a `for_each` loop pointing to a `fileset` directory. This allows Terraform `apply` to actually upload the entire build from `npm run build` to the bucket at one, instead of using `provisioners`, raw AWS CLI or individual `aws_s3_object` for each file. 