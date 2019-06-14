################################################################################
# Kjører bygg i egen byggkontainer: ref: https://github.com/nodejs/docker-node #
################################################################################
FROM node:alpine as builder

WORKDIR /home/app
COPY . .

RUN npm install --loglevel info
RUN npm run build --loglevel info

###################################
# Lager kontainer for deployment. #
###################################
FROM node:alpine

MAINTAINER Gultech

# Sett riktig tidssone for image og container. Ellers vil dette bli en eller annen default som vi ikke har kontroll over.
ENV TZ=Europe/Oslo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Bytt bruker.
USER node
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /home/node

EXPOSE 8080

COPY --from=builder /home/app .

CMD ["npm", "run", "backend", "--loglevel", "info"]
