# MoiBot

> A Community Discord Bot Built on the ERIS Library and NodeJS

## Introduction

MoiBot is a Community Discord for NodeGG and D-z Discord built to service the needs of these two communites and potentially more!

## How To Get Started

- Download (Docker)[http:www.docker.com]

- Download Dependencies

```
npm i

# or

yarn
```

- Starting the Container for Development

```
npm run dev:docker

# or

yarn dev:docker
```

- Starting Container for Production

```
npm run start:docker

# or

yarn start:docker
```

- Start Dev Server without Docker

```
npm run dev

# or

yarn dev
```

- Start Prod Server without Docker

```
npm start

# or

yarn start
```

## Create a Command

- All Bot Commands are automatically added to the bot if placed in the formats below

```
export default function exampleCommand(command){
  // Place Code Here

  /* Example Code
    command.registerCommand("ping", "Pong!", { // Make a ping command
      // Responds with "Pong!" when someone says "!ping"
      description: "Pong!",
      fullDescription: "This command could be used to check if the bot is up. Or entertainment when you're bored."
    });

  */
}
```
