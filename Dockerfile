FROM node:20 AS base

### <JANGAN DIGANTI>
ARG STUDENT_NAME
ARG STUDENT_NIM

ENV NUXT_STUDENT_NAME ${STUDENT_NAME}
ENV NUXT_STUDENT_NIM ${STUDENT_NIM}

### </JANGAN DIGANTI>

# TODO: code disini

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Vite runs on (default is 5173)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
