# Use a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /workspace

# Copy the entire project into the container
COPY . .


# Install dependencies
RUN npm install

# Use a shell to keep the container running
CMD ["sh", "-c", "while :; do sleep 1; done"]
