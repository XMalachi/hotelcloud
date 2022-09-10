import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './TopFourCustomer.css'

function TopFourCustomer() {
    const [customers, setCustomers] = useState([])


    useEffect(()=>{
        getCustomers()
    }, [])

    const getCustomers = async() => {
        try{
            const url = 'https://randomuser.me/api/?results=4'

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
    <div className='topFourContainer'>
        <h2 className='topFourContainerHeader'>Top Four Customers For The Past Six Months</h2>
        
        <div className='topFour'>
            {customers.length > 0 && customers.map((customer, i) => (
                <div key={i} className={i % 2 === 0? 'topFourEven' : 'topFourOdd' }>
                    <div className='topFourAll'>
                        <div><img src={customer.picture.large} alt={customer.name.first} /></div>
                        
                        <div className='topFourAllTxt'>
                            <div className='topFourName'>{customer.name.title} {customer.name.first} {customer.name.last}</div>
                            <div>{customer.cell}</div>
                            <div>{customer.email}</div>
                        </div>
                    </div>
                    
                    <hr />
                </div>
                
            ))}
        </div>
        


    </div>
  )
}

export default TopFourCustomer