export const gitRequest = async name => {
  try {
    const res = await fetch(`https://api.github.com/search/users?q=${name}`);

    const data = await res.json();
    const rateLimit = getLimitApiRate(res.headers.entries());

    return {
      items: data.items,
      rateLimit,
    };
  } catch (error) {
    return null;
  }
};

export const getLimitApiRate = res => {
  for (const pair of res) {
    if (pair[0] === 'x-ratelimit-remaining') return parseInt(pair[1], 10);
  }
};
