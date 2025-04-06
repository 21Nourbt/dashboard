'use client'
import UserAddressCard from "./../../components/user-profile/UserAddressCard";
import UserInfoCard from "./../../components/user-profile/UserInfoCard";
import UserMetaCard from "./../../components/user-profile/UserMetaCard";
import { Metadata } from "next";
import React from "react";
import {useState , useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };



// interface User{
//     _id: string,
//     firstName : string,
//     lastName: string,
//     email: string,
//     phone: number,
//     photo: string,
//     points: number,
//     status: string
//   }



export default function Profile() {

    const [userDataAll , setUserDataAll] = useState(null)
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(true)
    const [idUser, setIdUser] = useState(null);

    useEffect(() => {
      async function fetchUserId() {
        try {
          const response = await fetch("http://localhost:8000/ELACO/getUserId", {
            method: "GET",
            credentials: "include",
          });
  
          if (!response.ok) {
            throw new Error(`Failed to fetch user ID: ${response.statusText}`);
          }
  
          const userIdData = await response.json();
          setIdUser(userIdData.id_user);
        } catch (error) {
          console.error("Error fetching user ID:", error);
        }
      }
  
      fetchUserId();
    }, []);

    useEffect(() => {

        if (!idUser) return;

            async function gettingUser(){

        try{

                const response = await fetch(`http://localhost:8000/ELACO/userSubscription/currentSubscriptions/${idUser}`)
    
                if(!response.ok){
                  throw new Error(`Failed to fetch user details: ${response.statusText}`);
              }
                else{
                    const resData = await response.json()
                    console.log(resData.data)
                    // const user = resData.user
                    setUserDataAll(resData.data)
                    
                }
        }catch(error:any){
            console.error("Error fetching userData:", error);
            setError(error.message);
          }finally{
            setLoading(false)
          }
        }
        gettingUser()
      } , [idUser])

    //   console.log(userDataAll?.firstName)
    if (loading) {
        return <div className="p-4">Loading profile...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-500">Error: {error}</div>;
    }

    
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard all={userDataAll}/>
          <UserInfoCard all={userDataAll}/>
          <UserAddressCard all={userDataAll}/>
        </div>
      </div>
    </div>
  );
}