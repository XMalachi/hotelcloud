import React, { useContext } from 'react'
import styles  from './SearchRooms.module.css'

import GlobalContext from '../../Context';


const SearchRooms = () => {
    const {rooms, maxPrice, maxSize, price, pets, breakfast, onChangeHandler, minSize} = useContext(GlobalContext)

    let availableTypes =   new Set(rooms.map((room) => room.type))
    availableTypes = ['all', ...availableTypes]

    const typeOptions = availableTypes.map((option, i) => (<option key={i} value={option}>{option}</option>))

    let availableCapacity = new Set(rooms.map ((room) => room.capacity))
    availableCapacity = [...availableCapacity]
    console.log(availableCapacity, 'availableCapacity')

    
    const capacityOptions = availableCapacity.map((option, i) => (<option key={i} value={option}>{option}</option>))
  return (

                <div className={styles.searchRooms}>
                    <div className={styles.header}>
                        <h2>Search Rooms</h2>
                    </div>

                    <div className={styles.searchArea}>
                        <div className={styles.roomType}>
                        <div>
                            <label htmlFor="searchByType">Room Type</label>
                        </div>
                            <select id="searchByType" className={styles.searchByType} name='type' onChange={onChangeHandler}>
                                {typeOptions}
                            </select>
                        </div>

                        <div className={styles.capacity}>
                            <div>
                                <label htmlFor="searchByCapacity">Capacity:</label>
                            </div>
                            <select id="searchByCapacity" className={styles.searchByType} name='capacity' onChange={onChangeHandler}>
                                {capacityOptions}
                            </select>
                        </div>

                        <div className={styles.searchByPrice}>
                            <div>
                                <label htmlFor="price">Room Price: ${price} </label>
                            </div>
                            <input type="range" id="price" name="price" value={price} onChange={onChangeHandler}
                                    min={0} max={maxPrice} />
                        </div>

                        <div className={styles.searchBySize}>
                            <div>
                                <label htmlFor='price'>Room Size</label>
                            </div>
                            <input type='number' id='size' name='minSize' value={minSize} onChange={onChangeHandler}/>
                            <input type='number' id='size' name='maxSize' value={maxSize}  onChange={onChangeHandler}/>
                        </div>

                        <div className={styles.searchByfeatures}>
                            <div className={styles.sortByBreakfast}>
                                <input  type='checkbox' checked={pets} id='breakfast' name='pets' onChange={onChangeHandler} />
                                <label htmlFor='breakfast'>Breakfast</label>
                            </div>

                            <div className={styles.sortByPetsAllowed}>
                                <input  type='checkbox' id='pets' checked={breakfast} name='breakfast' onChange={onChangeHandler}  />
                                <label htmlFor='pets'>Pets Allowed</label>
                            </div>
                        </div>
                    </div>
                </div>

            )

}


export default SearchRooms