FROM node:6.10.3

WORKDIR /usr/src/app

# Update the sources to use the archive
RUN echo "deb http://archive.debian.org/debian/ jessie main" > /etc/apt/sources.list \
    && echo "deb-src http://archive.debian.org/debian/ jessie main" >> /etc/apt/sources.list \
    && echo "Acquire::Check-Valid-Until false;" > /etc/apt/apt.conf.d/99ignore-release-date

# Now install Graphviz with --allow-unauthenticated
RUN apt-get update && apt-get install -y --allow-unauthenticated graphviz

COPY . .

RUN npm install async ladda

RUN npm install -g gulp@3.9.0

RUN npm install

EXPOSE 80

ENV NODE_ENV production

CMD ["gulp", "-p"]