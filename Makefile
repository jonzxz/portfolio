.PHONY: default

define HELP
  _____   ____  _____ _______ ______ ____  _      _____ ____  
 |  __ \ / __ \|  __ \__   __|  ____/ __ \| |    |_   _/ __ \ 
 | |__) | |  | | |__) | | |  | |__ | |  | | |      | || |  | |
 |  ___/| |  | |  _  /  | |  |  __|| |  | | |      | || |  | |
 | |    | |__| | | \ \  | |  | |   | |__| | |____ _| || |__| |
 |_|     \____/|_|  \_\ |_|  |_|    \____/|______|_____\____/ 
                                                              
NAME
	portfolio - Simple Makefile to build my silly portfolio site

SYNOPSIS
	make install - Installs dependencies
	make update - Update all dependencies (potentially breaking)
	make start - Starts local development server
	make update - Updates dependencies
	make build - Builds the project
	make plan - Terraform plans
	make deploy - Terraform apply

endef

export HELP

default:
	@echo "$$HELP"

install:
	npm install

update:
	npm update

start:
	npm start

build:
	npm run build

plan:
	terraform plan

deploy:
	cd terraform/jonathankerk.com && terraform apply