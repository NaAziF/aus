# Use Nginx base image
FROM nginx

# Remove default Nginx configuration files
# RUN rm /etc/nginx/conf.d/*

# Copy custom Nginx configuration file
# COPY nginx.conf /etc/nginx/conf.d/mywebsite.conf

# Copy HTML files to Nginx root directory
COPY ./ /usr/share/nginx/html

# Copy error pages to Nginx error pages directory
# COPY error_pages /usr/share/nginx/html/error_pages

# Expose port 80
EXPOSE 80
