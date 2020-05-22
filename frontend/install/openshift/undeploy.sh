#!/usr/bin/env bash
printf "\n\n######## admin-ui undeploy ########\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

PROJECT=${PROJECT:-ai-library}

[[ ! -z "${ROUTE_NAME}" ]] && { ARGS="${ARGS} -p ROUTE_NAME=${ROUTE_NAME}"; }

oc project ${PROJECT}
echo "Undeploying from project ${PROJECT}"

oc process -f ${DIR}/openshift.yml ${ARGS} | oc delete -f -
