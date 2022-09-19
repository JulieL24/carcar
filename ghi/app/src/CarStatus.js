
import React, { useState, useEffect} from 'react'

function CarStatus(props){
    const [state, setState] = useState({
        cars: [],
    });


    useEffect(() => {
        console.log("useffect firing");
        
        async function getInfo(){
            console.log("useEffect!");
            const url = "http://localhost:8090/api/cars/"
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                console.log("data!",data);
                setState({...state, cars: data.cars})
            }
        }
        getInfo();
      }, []);

    


    return (
        <>
            <div className="container">
            <h1>Car Availablity</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                <th>VIN</th>
                <th>Sold ?</th>

                </tr>
                </thead>
                <tbody>
    
                { state.cars.map(car =>{
                    return (
                        <>
                        <tr key={car.id}>
                        <td> { car.vin} </td>
                        <td> { car.is_sold.toString()} </td>
                    </tr>
                        </>
                    )
                    })
                }
                </tbody>
            </table>
            </div>
        </>
      );
    }

  export default CarStatus;

