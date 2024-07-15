import toast from "react-hot-toast"
import Modal from "../../Global/Modal"
import { useState } from "react"

interface Props{
    toggleModal: ()=> void
}

const UpdateRate: React.FC<Props> = ({ toggleModal }) => {
    const [rate, setRate] = useState("0.2")
    const updateRate = () => {
        // Alex do what you do here😪
        toast.success(`Price Rate updated to ${rate}% successfuly!`)
        toggleModal()
    }
  return (
      <Modal closeModal={toggleModal} title="Update Rate">
          <div className="mt-4">
              <input type="number" value={rate} onChange={(e)=> setRate(e.target.value )} name="rate" id="rate" className="input-field font-bold w-full" />
              <button onClick={updateRate} className="btn btn-primary mt-4">
                  Update
              </button>
          </div>
    </Modal>
  )
}

export default UpdateRate