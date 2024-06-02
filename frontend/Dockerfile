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
ENV NEXT_PUBLIC_API_URL cloud.longliveprofessorkim.com/api

WORKDIR /app
COPY --from=build /app/yarn.lock .
COPY --from=build /app/package.json .
COPY --from=build /app/next.config.mjs .
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next/ ./.next

EXPOSE 3000

CMD ["yarn", "start"]