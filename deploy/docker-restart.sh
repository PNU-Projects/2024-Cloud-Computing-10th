#!/bin/bash

# Command: docker-update <컨테이너명>
# Description: 현재 실행중인 컨테이너를 종료하고, 새로운 이미지로 업데이트 후 다시 시작하는 스크립트
# Author: Cotidie(Wonseok)
# Contact: wonspnu@pusan.ac.kr

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" > /dev/null && pwd )"
CONTAINER=$1

if [[ -z "$CONTAINER" ]]; then
  printf '현재 실행중인 컨테이너명을 입력해주세요.\n'
  exit 1;
fi

IMAGE="$(docker container ls -a --filter="name=$CONTAINER" --format='{{.Image}}')"
if [[ -z "$IMAGE" ]]; then
  printf '%s 컨테이너가 실행중이지 않습니다.\n' $CONTAINER
  exit 1;
fi

function docker_stop() {
  printf '컨테이너 %s를 종료합니다' $CONTAINER
  docker stop $CONTAINER
}

function docker_start() {
  printf '새로운 도커 이미지를 불러옵니다.(%s)\n' $IMAGE
  docker pull $IMAGE
  
  printf 'dangling(none) 이미지를 삭제합니다.\n'
  DANGLING="$(docker image ls --filter=dangling=true -q "$IMAGE")"
  if [[ -n "$DANGLING" ]]; then
    docker rmi $DANGLING
  fi

  printf '서비스를 다시 시작합니다.\n'
  docker-compose up -d $CONTAINER
}

docker_stop
docker_start