###################################
# Stage 1: 종속성 설치 및 nextjs 빌드 #
###################################
FROM node:22-alpine as build

# nextjs를 빌드하고 실행할 위치
WORKDIR /app
COPY . .

# 종속성 설치 및 빌드
RUN yarn install
RUN yarn build

###################################
# Stage 2: nextjs 실행
###################################
FROM node:22-alpine

WORKDIR /app
COPY --from=build /app/.next ./.next
COPY public ./public
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]