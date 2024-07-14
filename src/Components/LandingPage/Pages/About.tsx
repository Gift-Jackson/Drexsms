import Wrapper from "../UI/Wrapper"
import about from "../../../assets/about.svg";
const About = () => {
    document.title = "About - Drexsms"
  return (
      <>
          <div>
          <Wrapper
        image={about}
        title="About Us"
        subtitle="Drexsms Features"
        custom_style="md:flex-row-reverse"
        content="Drexsms is dedicated to simplifying online verifications for individuals and businesses alike. We offer virtual US numbers that ensure smooth and secure verification processes across all major platforms, from WhatsApp and Google Voice to social media and beyond."
              />
      </div>
      </>
  )
}

export default About