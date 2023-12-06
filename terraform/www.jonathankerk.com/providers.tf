terraform {
  required_version = ">= 1.6.5"
  backend "s3" {
    bucket = "jonny-multi-purpose-bucket"
    key    = "terraform/www.jonathankerk.com/terraform.tfstate"
    region = "ap-southeast-1"
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