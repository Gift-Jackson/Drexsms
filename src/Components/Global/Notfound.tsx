import { Link } from "react-router-dom"

const Notfound = () => {
  return (
      <>
          <div className="min-h-screen flex-center-center bg-white">
              <div className="text-center">
                  <h1 className="text-6xl font-bold text-primary">404</h1>
                  <p className="text-subtext">No vex chief, I never cook finish! 🙄</p>
                  <Link to="/" className="btn mt-8">
                      <span className="material-symbols-outlined">arrow_back</span>
                      Go Back
                  </Link>
              </div>
      </div>
      </>
  )
}

export default Notfound