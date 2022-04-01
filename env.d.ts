declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_343OKEN: string;
      MONGODB: string;
      GUILD_ID: string;
      INVITE: string;
      WEBHOOK_URL: string;
      WEBHOOK_ID: string;
      PORT: string;
      SERVER_KEY: string;
    }
  }
}

export {}
