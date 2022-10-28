module "bucket" {
  source          = "../module/s3"
  bucket_name     = var.bucket_name
  redirected_host = var.redirected_host
}