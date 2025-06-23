# Step 1: Build Vite app
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files to nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
