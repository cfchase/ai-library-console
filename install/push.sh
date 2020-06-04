#!/usr/bin/env bash
printf "\n\n######## ai-library push ########\n"

IMAGE_REPOSITORY=${FRONTEND_IMAGE_REPOSITORY:-quay.io/cfchase/ai-library-console:latest}

echo "Pushing ${IMAGE_REPOSITORY}"
docker push ${IMAGE_REPOSITORY}



