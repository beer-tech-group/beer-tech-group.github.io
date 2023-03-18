export interface AppConfig {
  name: string;
  email: `${string}@${string}`;
  social: {
    twitter?: `https://${string}`;
    telegram?: `https://${string}`;
    meetup?: `https://${string}`;
    linkedin?: `https://${string}`;
  };
}

export const CONFIG: AppConfig = {
  name: "Beer Tech Group",
  email: "beertechgroup@gmail.com",
  social: {
    twitter: `https://twitter.com/beertechgroup`,
    telegram: `https://twitter.com/beertechgroup`,
    meetup: `https://twitter.com/beertechgroup`,
    linkedin: `https://twitter.com/beertechgroup`,
  },
};
