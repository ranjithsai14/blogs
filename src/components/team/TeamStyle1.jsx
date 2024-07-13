'use client'
import React from 'react';
// import CategoriesData from '@/assets/jsonData/team/CategoriesData.json'
import SingleTeam1 from './SingleTeam1';
import TeamTitle from './TeamTitle';
import { useEffect,useState } from 'react';



const TeamStyle1 = ({ sectionClass, fullTeam, teamTitle }) => {
    const [CategoriesData,setCategoriesData]=useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tanyalifestyles.spiderhit.in/admin/api/getCategories');
                const jsonData = await response.json();
                setCategoriesData(jsonData?.data?.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <>
            <div className={`team-style-one-area default-padding-top pb-70 pb-xs-0 bg-contain-center ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: `url(/assets/img/shape/18.png)` }}>

                {teamTitle ? <TeamTitle /> : <></>}

                <div className="container">
                    <div className="row">
                        
                    {CategoriesData.map(category =>
                <div className="col-xl-3 col-md-6" key={category.id}>
                    <SingleTeam1 category={category} />
                </div>
            )}
                          
                           
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamStyle1;