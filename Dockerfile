FROM node:alpine

WORKDIR /app 
COPY . . 

# RUN set -eux && \
#     npm install

RUN set -eux && \
    npm install && \
    npm run build

# Expose the port
EXPOSE 3000
# Run the app
CMD ["npm", "start"]

# FROM docker.io/library/nginx:stable 
# COPY --from=builder /out /usr/share/nginx/html
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf