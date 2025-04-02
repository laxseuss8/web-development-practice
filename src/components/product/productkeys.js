import TwitterImage from "../../assets/images/products/twitter.png";
import WalmartImage from "../../assets/images/products/walmart.png";
import YoutubeImage from "../../assets/images/products/youtube.png";
import GenericImage from "../../assets/images/products/image.png";
import Image1 from "../../assets/images/products/R1345557-01.png";
import Image2 from "../../assets/images/products/LOra-1.png";

const ProductKeys = [
  {
    id: 1,
    title: "Facebook Ads Manager",
    category: "Social Media",
    price: 100,
    description:
      "Facebook Ads Manager is a powerful tool that enables businesses and marketers to create, manage, and analyze their advertising campaigns on Facebook. It provides detailed audience targeting, real-time performance tracking, and a variety of ad formats to help maximize reach and engagement. With advanced analytics and insights, users can optimize their campaigns to improve conversions and reduce costs. Whether you’re a small business owner or a large enterprise, Facebook Ads Manager provides a scalable solution to enhance brand visibility and increase customer interaction.",
    image: Image1,
    type: "solution",
  },
  {
    id: 2,
    title: "Adobe Photoshop",
    category: "Software",
    price: 100,
    description:
      "Adobe Photoshop is the industry-leading software for image editing, graphic design, and digital art. It offers a vast array of tools for professionals and beginners alike, including advanced layer management, customizable brushes, and powerful AI-powered features like content-aware fill and neural filters. Whether you're creating social media graphics, designing websites, or retouching high-resolution photos, Photoshop provides the versatility and precision needed to bring your creative visions to life. With its seamless integration with Adobe Creative Cloud, users can easily sync their work across multiple devices and collaborate with teams in real time.",
    image: Image2,
    type: "solution",
  },
  {
    id: 3,
    title: "Twitter Marketing Suite",
    category: "Social Media",
    price: 90,
    description:
      "The Twitter Marketing Suite is a collection of tools designed to help brands and influencers maximize their presence on Twitter. It includes advanced scheduling options, audience analytics, and engagement tracking to ensure that your tweets reach the right people at the right time. With automated posting, hashtag suggestions, and sentiment analysis, businesses can craft high-performing tweets that drive more interactions and conversions. Whether you’re running a paid ad campaign or growing your organic reach, Twitter Marketing Suite provides the insights and automation needed to make informed marketing decisions and enhance your brand’s online influence.",

    image: TwitterImage,
    type: ["solution", "product"],
  },
  {
    id: 4,
    title: "Walmart Plus Membership",
    category: "Service",
    price: 120,
    description:
      "Walmart Plus Membership is a subscription-based service that offers a range of benefits to frequent Walmart shoppers. Members enjoy free unlimited delivery on groceries and everyday essentials, making shopping more convenient than ever. Additional perks include fuel discounts at participating gas stations, exclusive deals on products, and early access to special sales events. With Walmart Plus, customers can save both time and money while enjoying a premium shopping experience. The membership also integrates with the Walmart app, allowing for quick checkout, contactless payment options, and real-time price comparisons to ensure the best value for every purchase.",

    image: WalmartImage,
    type: "solution",
  },
  {
    id: 5,
    title: "YouTube Premium",
    category: "Social Media",
    price: 120,
    description:
      "YouTube Premium is a subscription service that enhances the YouTube experience by removing ads, enabling background play, and allowing offline downloads of videos. Subscribers also gain access to YouTube Music Premium, a feature-rich music streaming service with millions of tracks, personalized playlists, and offline playback options. With YouTube Premium, users can enjoy their favorite content without interruptions, making it ideal for those who consume a lot of video content daily. Additionally, members can explore exclusive YouTube Originals, featuring high-quality series and movies produced by YouTube. Whether for entertainment, education, or relaxation, YouTube Premium offers a seamless, ad-free experience.",
    image: YoutubeImage,
    type: ["solution", "product"],
  },
  {
    id: 6,
    title: "Boss Phoenix",
    category: "Software",
    price: 120,
    description:
      "This generic software license provides access to premium features of a digital product. It can be used to unlock full functionality, remove restrictions, and gain access to customer support and regular updates. The license key is valid for a single user and can be activated on multiple devices, depending on the terms of the software provider. Ideal for businesses and professionals looking for cost-effective licensing solutions, this key ensures compliance with software usage policies while maximizing productivity. Whether for security applications, design software, or office utilities, this software license guarantees access to a legitimate and fully functional product.",
    image: GenericImage,
    type: ["solution", "product"],
  },
];

export default ProductKeys;
