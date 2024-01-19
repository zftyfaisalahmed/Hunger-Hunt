import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const baseUrl = 'http://localhost:4000'

const ContactDetails = (props) => {
    const [contactDeta, setContactDeta] = useState([]);
  const {id} = useParams()

  useEffect(() => {
      axios
      .get(`${baseUrl}/contact/${id}`)
      .then((res) => {
          console.log(res.data)
          setContactDeta(res.data);
      })
      .catch((err) => console.log(err))
  }, [id])
    return (
    
        <div>{contactDeta.Contactinfo}</div>
  )
}

export default ContactDetails