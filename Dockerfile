# Stage 1: Build the Vue.js application
FROM node:18-alpine as node_builder

# Set working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the application files and build the Vue.js app
    

# Stage 2: Set up PHP environment
FROM php:8.2-apache as php_builder

# Install PHP extensions and required dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    libzip-dev \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql gd zip

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set the working directory for the PHP application
WORKDIR /app

# Copy the PHP application files (backend)
COPY . .


# Copy built Vue.js app to PHP's public directory
COPY --from=node_builder /app/dist /var/www/html/public

# Expose port 80 for the Apache server
EXPOSE 80

# Start Apache
CMD ["php","artisan","serve"]