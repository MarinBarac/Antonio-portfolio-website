import config from "@/config/site";

const useSiteConfig = () => {
    return {
      url: config.siteUrl,
    };
};

export default useSiteConfig;