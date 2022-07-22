import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryDetails() {
    // const param = useParams();
    const {strCategory} = useParams();
    const [datas, setDatas] = useState([])
    // console.log(param, ",,,,, param")
    useEffect(() => {
        const getCategoryDetails = async () => {
            const categorydetails = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
            const value = await categorydetails.json()
            console.log(value)
            setDatas(value.meals)
            // console.log(datas)
        }
        getCategoryDetails()
    }, [])

    return (
        <div className="container">
            <div className="col-12">
            <p className="text-dark">Category </p>
            <h1 className="text-dark fw-bold">{strCategory}</h1>
            {/* {JSON.stringify(datas)} */}
            </div>
            <div className="row py-5">
                {datas.map(data => {
                    return (
                        <div className="col-md-3 col-12 px-md-3 pt-md-5  py-md-1 px-4 pt-5 py-3">
                            <a href={`/category/${data.strMeal}`}>
                            <div className="card bg-white rounded-5  shadow ">
                                <img src={data.strMealThumb} className="card-img"   alt="..." />
                                <div className="row card-img-overlay bg-dark bg-opacity-25 text-white " style={{width:'100%',left:'11px'}} >
                                    <h5 className="align-self-center card-title fw-bold">{data.strMeal}</h5>
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

export default CategoryDetails;