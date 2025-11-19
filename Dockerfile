FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (if any)
COPY package*.json ./
RUN if [ -f package.json ]; then npm ci --only=production || npm install --production; fi

# Copy app source
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
