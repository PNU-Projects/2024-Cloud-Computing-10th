#!/bin/bash

# Usage: notify-deploy <배포 타입:프론트/백엔드> <이미지명>
# Description: 람다함수 'sendEmailNotification'을 실행하는 쉘 스크립트
# Author: Cotidie (Wonseok)
# Contact: wonspnu@pusan.ac.kr

SERVICE_URL="http://cloud.longliveprofessorkim.com"
CONTENT_TYPE="Content-Type: application/json"
LAMBDA_URL="https://23tbo56ksbbgbs63xvpgyn37ry0kscwu.lambda-url.us-east-1.on.aws/"
API_URL_TOKEN="http://169.254.169.254/latest/api/token"
API_URL_IP="http://169.254.169.254/latest/meta-data/public-ipv4"


if [[ -z $1 ]]; then
  printf '배포 타입이 입력되지 않았습니다. (front/backend)\n'
  exit 1;
fi

if [[ -z $2 ]]; then
  printf '배포한 도커 이미지명이 입력되지 않았습니다.\n'
  exit 1;
fi

function get_instance_ip() {
  TOKEN=$(curl -X PUT $API_URL_TOKEN -H 'X-aws-ec2-metadata-token-ttl-seconds: 21600')
  IPv4=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -v $API_URL_IP)

  echo $IPv4
}

DEPLOY_TYPE=$1
IMAGE=$2
PAYLOAD="{
  \"deployType\": \"$DEPLOY_TYPE\",
  \"instance\": \"$(get_instance_ip)\",
  \"url\": \"$SERVICE_URL\",
  \"image\": \"$IMAGE\"
}"

curl -X POST -H 'Content-Type: application/json' -d "$PAYLOAD" "$LAMBDA_URL"