terraform {
  backend "s3" {
    bucket = "jonny-multi-purpose-bucket"
    key = "terraform/www.jonathankerk.com/terraform.tfstate"
  }
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>4.36.1"
    }
  }
}

provider "aws" {
  region = "ap-southeast-1"
}