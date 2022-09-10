import React, { useEffect, useState, useContext } from 'react'
import GlobalContext from '../../Context'
import axios from 'axios'
import './BookingList.css'

function BookingList() {

    const {rooms, type} = useContext(GlobalContext)
    let availableTypes =   new Set(rooms.map((room) => room.type))
    availableTypes = [...availableTypes]
    // console.log(availableTypes)

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    
    console.log(dateTime)

    // random number from 1-5
    const randomNumber = Math.floor(Math.random() * 10 <= 3)
    console.log(randomNumber)

    const [customers, setCustomers] = useState([])


    useEffect(()=>{
        getCustomers()
    }, [])

    const getCustomers = async() => {
        try{
            const url = 'https://randomuser.me/api/?results=10'

            const data = await axios.get(url)
    
            const results = data.data.results
            setCustomers(results)
            // console.log('random users', customers)
        }
        catch(err){
            console.log(err)
        }
        

    }
  return (
    <div className='bookinglistTable'>
        <h2>Booking List</h2>

        <table className='table' >
            <thead className='thead'>
                <tr>
                    <th>PHOTO</th>
                    <th>CUSTOMER</th>
                    <th>PHONE</th>
                    <th>EMAIL</th>
                    <th>ROOM TYPE</th>
                    <th>CHECK IN</th>
                    <th>CHECK OUT</th>
                    <th>STATUS</th>
                </tr>
            </thead>

            <tbody className='tbody'>
            {customers.length > 0 && customers.map((customer, i) => (
                <tr key={i} className={i % 2 === 0? 'even' : 'odd' }>
                    <td><img src={customer.picture.thumbnail} alt='customer' /></td>
                    <td>{customer.name.title} {customer.name.first} {customer.name.last}</td>
                    <td>{customer.cell}</td>
                    <td>{customer.email}</td>
                    <td>{availableTypes[randomNumber]}</td>
                    <td>{dateTime}</td>
                    <td>{dateTime}</td>
                    <td>Paid</td>
                </tr>
            ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default BookingList