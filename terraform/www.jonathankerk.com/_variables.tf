variable "bucket_name" {
  type        = string
  description = "Name of bucket, has to be the same as domain name"
  default     = "www.jonathankerk.com"
}

variable "redirected_host" {
  type        = string
  description = "Host URL / bucket name to redirect bucket traffic to"
  default     = "jonathankerk.com"
}