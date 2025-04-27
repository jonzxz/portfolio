module "bucket" {
  #source     = "github.com/jonzxz/jonnywritesterraform/bucket-static-site"
  source      = "../../../jonnywritesterraform/bucket-static-site"
  bucket_name = var.bucket_name
}