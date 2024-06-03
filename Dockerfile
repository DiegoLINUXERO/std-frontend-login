FROM nginx:1.25.5
 
RUN rm -rf /usr/share/nginx/html
RUN sed -i 's/listen       80;/listen 8091;/' /etc/nginx/conf.d/default.conf   

COPY app/dist/*/browser /usr/share/nginx/html