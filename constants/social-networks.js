const socialNetworks = {
  github: { name: 'GitHub', url: 'https://github.com/d4vsanchez' },
  dev: { name: 'Dev', url: 'https://dev.to/d4vsanchez' },
  twitter: { name: 'Twitter', url: 'https://twitter.com/d4vsanchez' },
  instagram: { name: 'Instagram', url: 'https://instagram.com/d4vsanchez' },
  linkedin: { name: 'LinkedIn', url: 'https://linkedin.com/juandavidsanchez' },
};

export const socialNetworkList = (() => {
  const list = [];
  const objectEntries = Object.entries(socialNetworks);

  for (const [key, socialNetworkInformation] of objectEntries) {
    list.push({ id: key, ...socialNetworkInformation });
  }

  return list;
})();

export const footerSocialNetworks = ['github', 'dev', 'twitter'];
