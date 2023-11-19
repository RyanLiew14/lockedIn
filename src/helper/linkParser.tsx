export const videoName = (url: string) => {
  const split1 = url.split("%2F");
  const split2 = split1[1].split("?");

  return split2[0];
};
