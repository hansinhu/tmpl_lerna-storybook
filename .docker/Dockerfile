FROM TODO: add nginx image

ADD .docker/nginx.conf /etc/nginx/conf.d/default.conf
ADD .docker /
COPY storybook-static /www

RUN chmod -R 755 /www
