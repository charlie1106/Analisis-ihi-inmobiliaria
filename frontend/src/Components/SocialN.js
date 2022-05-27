const SocialN = () => {
  const allNetw = [
    {
      alt: "Facebook",
      src: "https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/Facebook.webp",
    },
    {
      alt: "Twitter",
      src: "https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/Twitter.webp",
    },
    {
      alt: "LinkedIn",
      src: "https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/LinkedIn.webp",
    },
  ];

  var styles = { width: "20px", height: "20px" };

  return allNetw.map((p) => <img alt={p.alt} style={styles} src={p.src}></img>);
};

export default SocialN;
