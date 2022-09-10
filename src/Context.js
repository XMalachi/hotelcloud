import React, { useEffect, useState } from 'react'
import Data from './Data'

// console.log('Data',Data)
const GlobalContext = React.createContext()
const Provider = (props) => {
    const [state, setState] = useState({
        rooms: localStorage.getItem('Rooms') ? JSON.parse(localStorage.getItem('Rooms')) : [],
        featuredRooms: [],
        filteredRooms: [],
        loading:true,
        type: "all",
        price: 0,
        maxPrice:0,
        maxSize:0,
        minSize: 0,
        capacity: 1,
        pets: false,
        breakfast: false,
        
    })
    
    console.log("the rooms length", state.rooms.length)
    useEffect(()  => {
        roomsArr()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const roomsArr = () => {
        const tempData =  [...Data]
        const Rooms = tempData.map(room => (
            {
                id: room.sys.id,
                ...room.fields, 
                images: room.fields.images.map((img) => img.fields.file.url)
            }
        ))
        
        const prices = Rooms.map((room)=> room.price)
        const maxPrice = Math.max(...prices)
    
        const sizes = Rooms.map((room)=> room.size)
        const maxSize = Math.max(...sizes)
        const minSize = Math.min(...sizes)
            // console.log(minSize)

        let featured = Rooms.filter(room => room.featured === true)

        setState({...state, 
            rooms: Rooms,
            featuredRooms:featured,
            filteredRooms: Rooms,
            loading:false,
            maxPrice,
            maxSize,
            minSize,
            price:maxPrice,
        })

        localStorage.setItem("Rooms", JSON.stringify(Rooms))

    }
    

    const onChangeHandler = (e) => {
        const {name, type} = e.target
        // console.log('e.target', name, value, type)
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        // console.log('the valued chief', value)
        setState({
            ...state,
            [name]: value,
        })

        let filteredRoom = [...state.rooms]
        

        if(name === 'type' && value !== 'all'){

            filteredRoom = filteredRoom.filter((item) => item.type === value)
            
            setState({
                ...state,
                filteredRooms: filteredRoom,
            })
        }
        
        if(name === 'capacity' && parseInt(value) !== 1){
            filteredRoom = filteredRoom.filter(item => item.capacity === parseInt(value))
            
        }
        if(name === 'price'){
            filteredRoom = filteredRoom.filter(item => item.price <= state.price && item.price <= state.maxPrice  )
            
        }
        
            filteredRoom = filteredRoom.filter(item => item.size >= parseInt(state.minSize) &&  item.size <= parseInt(state.maxSize))
            // console.log('the sizes',filteredRoom)

            if(type === 'checkbox'){
                filteredRoom = filteredRoom.filter(item => item.pets === true && item.breakfast === true)
            }
        
        setState((prev)=> ({
            ...prev,
            filteredRooms: filteredRoom,
        }))


        
    }



    const getSingleRoom = (slug) => {
        const copy = state.rooms

        const foundRoom = copy.find(copied => copied.slug === slug)

        return foundRoom
    } 

    return (
        <GlobalContext.Provider value={{...state, onChangeHandler, getSingleRoom}}>
            {props.children}
        </GlobalContext.Provider>
    )

}

const Consumer = GlobalContext.Consumer

export  {Provider, Consumer}
export default GlobalContext