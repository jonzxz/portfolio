module "bucket" {
  source          = "../module/s3"
  bucket_name     = "www.jonathankerk.com"
  redirected_host = "jonathankerk.com"
}