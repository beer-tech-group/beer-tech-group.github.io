interface AppConfig {
  group: {
    name: string;
  };
}

export const CONFIG: AppConfig = {
  group: {
    name: import.meta.env.SITE_NAME,
  },
};
