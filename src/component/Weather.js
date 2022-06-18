import React, { useEffect, useState } from 'react'

function Weather() {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('dehradun')
    const [location, setLoctaion] = useState()
    useEffect(() => {
        const fetchAPI = async () => {
            const url = `http://api.weatherapi.com/v1/current.json?key=ed92291f6fbe4390b80182807221706&q=${search}&aqi=no
`
            const response = await fetch(url);
            //   console.log(response)
            const resJson = await response.json()
            setCity(resJson.current)
            setLoctaion(resJson.location)
        }
        fetchAPI();
    }, [search])
    return (
        <div>
            <div className=''>
                <div className=' weather '>
                    <div className=' input-field text-center my-3 '>
                        <input placeholder='Enter your City' className='  rounded-pill input' typeof={search} onChange={(event) => {
                            setSearch(event.target.value)
                        }} type="search" />
                    </div>
                    {!city ? (
                        <p className='text-center my-3'>Not Found</p>
                    ) : (
                        <div>
                           

                            <div className=' text-center my-2 '>
                                <h1 className='city_temp'>
                                    {city.temp_c}°C</h1>
                            </div>
                              <div className='icon text-center '>
                                <img className=' w-25' src={city.condition.icon} alt="" />
                            </div>

                             <div className='city text-center  my-1'>
                                <h1 className='city_name '><i className=" mx-2 fa fa-street-view "></i>{search}</h1>
                            </div>
                          
                            <div className='country '>
                                <h1 className='country_name'> <span>Country:</span> {location.country}</h1>
                            </div>
                            <div className='region'>
                                <h1 className='region_name'> <span>Region:</span> {location.region}</h1>
                            </div>
                            <div className='local_time'>
                                <h1 className='local_time'> <span>Time:</span> {location.localtime}</h1>
                            </div>
                        </div>
                    )

                    }

                </div>
            </div>
            {/* <div className=''>
                <h1 className=' text-center'>Rate This Project</h1>
               <div className=' text-center '>
               <form className=' bg-primary m-5 p-3'>
                <label for="">Name: </label> <br/>
                    <input /> <br/>
                <label for="">Write: </label> <br/>
                    <input placeholder='eg- Good, Nice etc'/>
                    <br/>
                    <button type="button">
                        Submit
                    </button>
                                    </form>
               </div>
            </div> */}
        </div>
    )
}

export default Weather

