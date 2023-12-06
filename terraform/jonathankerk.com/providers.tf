terraform {
  backend "s3" {
    bucket = "jonny-multi-purpose-bucket"
    key    = "terraform/jonathankerk.com/terraform.tfstate"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>5.29.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-1"
}