#!/usr/bin/env bash
printf "\n\n######## ai-library frontend push ########\n"

IMAGE_REPOSITORY=${FRONTEND_IMAGE_REPOSITORY:-quay.io/cfchase/ai-library-frontend:latest}

echo "Pushing ${IMAGE_REPOSITORY}"
docker push ${IMAGE_REPOSITORY}



