

interface Props {
  closeModal:React.MouseEventHandler<HTMLButtonElement>;
}

const Love = ({closeModal}:Props) => {

 
  
  
  return (
    <div className="bg-yellow-200 w-80 p-3 transition fixed z-10">
      <button className="w-full h-10 cursor-pointer bg-pink-400 text-white outline-none font-bold" onClick={closeModal}>Close Modal</button>
      <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi explicabo voluptatum sit dolore asperiores soluta tempora. Ut maxime dignissimos rerum dolore delectus ab architecto, eum nesciunt eveniet ipsum labore voluptate itaque maiores cumque, sit quae placeat odit, debitis excepturi? Dolorum labore est praesentium harum quaerat fugit perferendis expedita aspernatur, ratione voluptas magnam consectetur neque nobis consequuntur! Repellendus molestias ad neque, quibusdam dolorum ab. Blanditiis, beatae error libero enim placeat eveniet fugit iure facilis asperiores itaque minus! Ex similique mollitia iste ratione error, vel sed porro quod corrupti at a minus soluta itaque repellat accusantium totam perspiciatis voluptatem odit blanditiis tempora.
      </div>
      <div className="loader"></div>

      
    </div>
  )
}

export default Love
