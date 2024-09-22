FROM node:20 AS base

ARG STUDENT_NAME
ARG STUDENT_NIM

ENV NUXT_STUDENT_NAME ${STUDENT_NAME}
ENV NUXT_STUDENT_NIM ${STUDENT_NIM}

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install pm2@latest -g

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Expose the port that Nuxt serves on (default is 80 now)
EXPOSE 3000

# Start the application using PM2
CMD ["pm2-runtime", "ecosystem.config.cjs"]

