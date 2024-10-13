# Use a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /workspace

# Copy the entire project into the container
COPY . .

# Install dependencies
RUN npm install

# Specify the default command to run your app
CMD ["npm", "run", "dev"]
