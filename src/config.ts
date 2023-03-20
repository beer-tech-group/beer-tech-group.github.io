export interface AppConfig {
  name: string;
  email: `${string}@${string}`;
  social: {
    twitter?: `https://${string}`;
    telegram?: `https://${string}`;
    meetup?: `https://${string}`;
    linkedin?: `https://${string}`;
    github?: `https://${string}`;
  };
}

export const CONFIG: AppConfig = {
  name: "Beer Tech Group",
  email: "beertechgroup@gmail.com",
  social: {
    github: `https://github.com/beer-tech-group`,
  },
};
