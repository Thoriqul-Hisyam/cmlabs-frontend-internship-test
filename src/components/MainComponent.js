import React from "react";
import { useEffect, useState } from "react";


function MainDisplay() {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const getCategory = async () => {
            const category = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            const value = await category.json()
            // console.log(value)
            setDatas(value.categories)
            // console.log(datas)
        }
        getCategory()
    }, [])

    return (
        <div className="container">
            <div className="col-12">
            <p className="text-dark">mealapp API website</p>
            <h1 className="text-dark fw-bold">See All The Delicious Foods</h1>
            </div>
            <div className="row py-5">
                {datas.map(data => {
                    return (
                        <div className="col-md-3 col-12 px-md-3 pt-md-5  py-md-1 px-4 pt-5 py-3">
                            <a href={`/category/${data.strCategory}`}>
                            <div className="card bg-white rounded-5  shadow ">
                                <img src={data.strCategoryThumb} className="card-img-top " alt="..." />
                                <div className="row card-img-overlay bg-dark bg-opacity-25 text-white " style={{width:'100%',left:'11px'}}>
                                    <h5 className="align-self-center card-title fw-bold ">{data.strCategory}</h5>
                                </div>  
                            </div>
                        </a>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MainDisplay;