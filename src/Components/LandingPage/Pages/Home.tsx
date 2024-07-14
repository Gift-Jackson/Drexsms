import Hero from "../UI/Hero";
import Wrapper from "../UI/Wrapper";
import virtual from "../../../assets/virtual.svg";
import about from "../../../assets/about.svg";
import WaveOne from "../UI/WaveOne";
import Container from "../UI/Container";
import { features, howitworks } from "../../../Constants/data";
import Faq from "../UI/Faq";

const Home = () => {
  document.title =
    "Drexsms - Get your virtual number up and running in minutes";
  return (
    <>
      <Hero />
      <WaveOne />
      <Wrapper
        image={virtual}
        title="virtual numbers"
        subtitle="What is a virtual number?"
        custom_style="flex-col-reverse"
        content="A virtual number is a phone number that functions without a SIM card and is not linked to a specific device. Communication between participants is carried out via the Internet."
      />

      <Container
        title="how it works"
        subtitle="Follow the steps below to learn how to use Drexsms!👇"
        items={howitworks}
      />

      <Wrapper
        image={about}
        title="About Us"
        subtitle="Drexsms Features"
        custom_style="md:flex-row-reverse"
        content="Drexsms is dedicated to simplifying online verifications for individuals and businesses alike. We offer virtual US numbers that ensure smooth and secure verification processes across all major platforms, from WhatsApp and Google Voice to social media and beyond."
      />

      <Container
        items={features}
        title="Why choose us"
        subtitle="What Drexsms has to offer"
      />

      <Faq />
    </>
  );
};

export default Home;
