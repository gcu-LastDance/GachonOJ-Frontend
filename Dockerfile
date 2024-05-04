# # 1단계: 환경 설정 및 종속성 설치
# FROM node:20-alpine AS deps
# RUN apk add --no-cache libc6-compat

# # pnpm 설치
# RUN npm install -g pnpm

# # 명령어를 실행할 디렉터리 지정
# WORKDIR /usr/src/app

# # 종속성 파일 복사
# COPY package.json pnpm-lock.yaml ./

# # 종속성 설치 (lock 파일을 기반으로)
# RUN pnpm install --frozen-lockfile

# # 2단계: 애플리케이션 빌드
# FROM node:20-alpine AS builder
# WORKDIR /usr/src/app

# # pnpm 설치
# RUN npm install -g pnpm

# # 빌드 종속성 복사
# COPY --from=deps /usr/src/app/node_modules ./node_modules
# COPY . .

# # Next.js 빌드 실행
# RUN pnpm build

# # 3단계: 실행 이미지 준비
# FROM node:20-alpine AS runner
# WORKDIR /usr/src/app

# # 시스템 사용자 설정
# RUN addgroup --system --gid 1001 nodejs \
#     && adduser --system --uid 1001 nextjs

# # 소유권 설정 및 최소 필수 파일 복사
# COPY --from=builder /usr/src/app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

# # 사용자 설정
# USER nextjs

# # 포트 노출
# EXPOSE 3000

# # 애플리케이션 실행
# CMD ["node", "server.js"]

# 1단계: 기본 환경 설정 및 종속성 설치
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat && \
    npm install -g pnpm
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 2단계: 애플리케이션 빌드
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN pnpm build

# 3단계: 실행 이미지 준비
FROM node:20-alpine AS runner
WORKDIR /usr/src/app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs --ingroup nodejs
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
