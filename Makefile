ENV_FILE := .env
ifneq ("$(wildcard $(ENV_FILE))","")
include ${ENV_FILE}
export $(shell sed 's/=.*//' ${ENV_FILE})
endif

##################################

# DEV - run apps locally for development

.PHONY: dev-frontend
dev-frontend:
	./frontend/install/dev.sh

.PHONY: dev
dev: dev-frontend

##################################

# BUILD - build image locally using s2i

.PHONY: build
build:
	./install/build.sh

##################################

# PUSH - push image to repository

.PHONY: push
push:
	./install/push.sh

##################################

.PHONY: openshift-login
openshift-login:
ifdef OC_TOKEN
	$(info **** Using OC_TOKEN for login ****)
	oc login ${OC_URL} --token=${OC_TOKEN}
else
	$(info **** Using OC_USER and OC_PASSWORD for login ****)
	oc login ${OC_URL} -u ${OC_USER} -p ${OC_PASSWORD} --insecure-skip-tls-verify=true
endif

##################################

# OC-DEPLOY - deploy

.PHONY: openshift-deploy
openshift-deploy: openshift-login
	./install/openshift/deploy.sh

##################################

# OC-UNDEPLOY - undeploy

.PHONY: openshift-undeploy
openshift-undeploy: openshift-login
	./install/openshift/undeploy.sh

##################################
