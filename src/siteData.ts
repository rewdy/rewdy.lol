export const siteTitle = "rewdy.lol";
export const description = "Rewdy on the internet: links, blog, joy";
export const salutation = "Hi, I'm Rewdy.";
export const author = {
  name: "Andrew Meyer",
  summary: "Live, laugh, LEARN. 🌟",
};
export const siteUrl = "https://rewdy.lol/";

export type SocialLinkType = {
  label: string;
  name: string;
  url: string;
  title?: string;
};

/**
 * Social links
 */
export const socialLinks: Record<string, SocialLinkType> = {
  twitter: {
    label: "Twitter",
    name: "rewdy",
    url: "https://twitter.com/rewdy",
    title: "Lol. It's not 'X'.",
  },
  threads: {
    label: "Threads",
    name: "rewdymeyer",
    url: "https://www.threads.net/@rewdymeyer",
  },
  instagram: {
    label: "Instagram",
    name: "rewdymeyer",
    url: "https://instagram.com/rewdymeyer",
  },
  github: {
    label: "Github",
    name: "rewdy",
    url: "https://github.com/rewdy",
  },
  gitlab: {
    label: "Gitlab",
    name: "rewdy",
    url: "https://gitlab.com/rewdy",
  },
  linkedin: {
    label: "LinkedIn",
    name: "rewdy",
    url: "https://www.linkedin.com/in/rewdy/",
  },
};

/**
 * Hot projects
 */
export const projectLinks = [
  {
    label: "Rewdy's Recipes",
    description: "A little site where I share some recipes I invent",
    url: "http://recipes.rewdy.lol",
  },
  {
    label: "Zoom Wow",
    description: "Make zooming text gifs to wow your frenemies!",
    url: "https://zoom-wow.rewdy.lol",
  },
  {
    label: "Scroll Wow",
    description: "Make scrolling text gifs to wow your frenemies!",
    url: "https://scroll-wow.com",
  },
  {
    label: "Hackernews Reader",
    description: "Prettier reader for hackernews",
    url: "https://hn-reader.rewdy.lol",
  },
  {
    label: "JSON Smile",
    description: "Quick, web-based, ad-free JSON formatter",
    url: "https://json-smile.rewdy.lol",
  },
  {
    label: "Password BAM!",
    description: "Easy random-ish password generator",
    url: "https://password-bam.rewdy.lol",
  },
  {
    label: "ForTheDay.org",
    description: "A daily dose of Psalms or Proverbs",
    url: "https://fortheday.org",
  },
];
