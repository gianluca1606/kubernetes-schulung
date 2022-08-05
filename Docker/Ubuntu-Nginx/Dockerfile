FROM ubuntu

LABEL MAINTAINER test

RUN apt update && apt upgrade -y
RUN apt install nginx -y

WORKDIR /var/www/html

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]

