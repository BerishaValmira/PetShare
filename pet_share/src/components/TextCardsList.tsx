import DogLogo from "./DogLogo";
import { TextCard } from "./TextCard";

const HOME_PAGE_CONTENT = [
  {
    title: "About Pet Share",
    textBody:
      "At Pet Share, we believe in creating a community that connects pet owners who are willing to share their pets with others. Whether you're a busy professional who wants to spend time with a furry companion or a pet lover who cannot own a pet due to various reasons, Pet Share is here to help you find the perfect pet to spend quality time with.",
  },
  {
    title: "Share Your Pet",
    textBody:
      "If you're a pet owner looking to share the joy of having a pet, you can also create a profile for your pet on our website. Share information about your pet, upload cute pictures, and let others experience the joy of spending time with your furry companion. Join our community of pet lovers and make a difference in someone's life.",
  },
  {
    title: "Browse Pets",
    textBody:
      "Explore our collection of adorable pets available for sharing. From playful dogs to cuddly cats, we have a wide variety of pets waiting for you. Browse through the profiles, read about their personalities, and choose the pet that suits your preferences. Get ready for some unforgettable experiences with our furry friends!",
  },
  {
    title: "About Us",
    textBody:
      "Learn more about Pet Share and our mission to connect pet owners and pet lovers. Discover the story behind our platform and the team working tirelessly to bring joy and companionship to people's lives through pet sharing. Find out how you can get involved and make a positive impact on the pet community.",
  },
  {
    title: "Contact Us",
    textBody:
      "If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. We're here to assist you and make your pet sharing experience as smooth as possible. You can contact us through the form provided or via email and phone.",
  },
];

const TextCardsList = () => {
  return (
    <>
      {HOME_PAGE_CONTENT.map(({ title, textBody }, index) => {
        if (index === 0) {
          return <TextCard title={title} textBody={textBody} />;
        }

        return (
          <>
            <div className="divider divider-vertical h-20" />

            <DogLogo />
            <div className="divider divider-vertical h-20" />
            {/* <DogLogo /> */}

            <TextCard title={title} textBody={textBody} />
          </>
        );
      })}
    </>
  );
};

export { TextCardsList };
