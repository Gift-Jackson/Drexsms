
import { Link } from "react-router-dom"

interface props {
    title: string,
    subtitle: string,
    content: string,
    image: string,
    custom_style:string
}

const Wrapper = ({ title, subtitle, content, image, custom_style }: props) => {
    
  return (
      <>
          <div className="bg-light">
              <div className={`main flex min-h-screen items-center flex-col-reverse ${custom_style} md:flex-row gap-8 py-20`}>
                  <div
                      data-aos="zoom-in"
                      data-aos-delay="500"
                      className="flex-1 flex-center-center">
                      <img src={image} className="h-[300px]" alt="image" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col gap-8 flex-1">
                      <div>
                          <p className="text-primary font-bold">{title}</p>
                          <h1 className="font-bold text-3xl md:text-4xl mt-6 font-poppins">{subtitle}</h1>
                          <p className="text-subtext text-sm md:text-base mt-6"> {content} </p>
                      </div>
                      <Link to="/register">
                          <button className="btn btn-primary">
                              <span>Get Started</span>
                              <span className="material-symbols-outlined">arrow_forward_ios</span>
                      </button>
                      </Link>
                  </div>
          </div>
      </div>
      </>
  )
}

export default Wrapper