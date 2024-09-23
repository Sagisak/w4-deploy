# Dockerfile
FROM node:20 AS base

ARG STUDENT_NAME
ARG STUDENT_NIM

ENV NUXT_STUDENT_NAME=${STUDENT_NAME}
ENV NUXT_STUDENT_NIM=${STUDENT_NIM}

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Install PM2 globally
RUN npm install -g pm2

# Expose port 3000
EXPOSE 3000

# Use PM2 to start the application using ecosystem.config.cjs
CMD ["pm2-runtime", "ecosystem.config.cjs"]

