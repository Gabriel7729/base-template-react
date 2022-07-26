FROM node:18-alpine3.15 AS onboarding-admin

WORKDIR /onboarding-admin

RUN ls

COPY ./package*.json ./

RUN npm i --no-optional

COPY ./ ./
 
RUN npm run build \
	&& npm prune --production

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "rum", "dev"]