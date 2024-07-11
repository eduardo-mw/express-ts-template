FROM node:20.11.1-bookworm-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the app
RUN npm run build

# Remove the source code
RUN rm -rf src && rm -f tsconfig.json && rm -f package*.json

# Expose the port on which the app will run
EXPOSE 5002

HEALTHCHECK CMD curl --fail http://localhost:5002/api/health || exit 1

# Create a non-root user
RUN groupadd -r expresso && useradd --no-log-init -r -g expresso expresso

# Set permissions for the non-root user
RUN chown -R expresso:expresso /app

# Change to non-root user
USER expresso

# Start the app with node DO NOT RUN WITH NPM START as it will not work
# as the script runs as user node
CMD [ "node", "dist/index.js" ]