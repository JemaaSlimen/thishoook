import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';
const Addmovie = ({handelAdd}) => {

const [form, setForm] = useState({
    name:"",
    image:"",
    date:"",
    rate:1
})


const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      const [modalIsOpen, setIsOpen] = useState(false);
      Modal.setAppElement('#root');
      function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }
const handlChange=(event)=>{
setForm({...form,[event.target.name]:event.target.value})
}
const handlsubmit=(e) => {
    e.preventDefault();
    let film ={...form,id:Math.random()};
    handelAdd(film);
    closeModal();
    setForm({
      name:"",
      date:"",
      image:"",
      rate:1,
  }) 
}
const handlrate=(rate) => {
    setForm({...form,rating:rate})
}


    return (
        <div>
         <button onClick={openModal} className="btn add-movie-btn" >Add movie</button>
      <Modal
        isOpen={modalIsOpen}
     
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <form onSubmit={handlsubmit} >
          <label>Name movie</label>
          <input type="text" value={form.name} name ="name" onChange={handlChange}/>
          <label>Image</label>
          <input type="url"value={form.image} name="image"onChange={handlChange}/>
          <label>Date</label>
          <input type="date"value={form.date} name="date" onChange={handlChange}/>
          <label>Rate</label>
         <StarRating rate={form.rating} handlrate={handlrate}/>
          
          <button className="btn btn-danger">Add</button>
         <button  className="btn btn-primary" onClick={closeModal}>cancel</button>
        </form>
      </Modal>   
        </div>
    )
}

export default Addmovie
