// "use client";
// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import Badge from "../ui/badge/Badge";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// interface HistoryItem {
//   check_in: string;
//   check_out: string;
//   date: string;
//   paymentMethod: 'cash' | 'points' | 'subscription' | 'online';
//   price: number;
//   status: string;
// }

// export default function BasicTableOne() {
//   const [history, setHistory] = useState<HistoryItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const idUser = "67c0359f5688c67382a063dd";

//   useEffect(() => {
//     if (!idUser) return;

//     async function fetchStatus() {
//       try {
//         const response = await fetch(
//           "http://localhost:8000/ELACO/booking/BookingHistory/67c0359f5688c67382a063dd",
//           {
//             method: "GET",
//             credentials: "include",
//           }
//         );
        
//         if (!response.ok) {
//           throw new Error(`Failed to fetch user History status: ${response.statusText}`);
//         }
        
//         const data = await response.json();
//         console.log("history:", data.data.history);
//         setHistory(data.data.history);
//       } catch (error) {
//         console.error("Error fetching history:", error);
//         setError(error instanceof Error ? error.message : "An unknown error occurred");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchStatus();
//   }, []);

//   if (loading) {
//     return <div className="p-4">Loading history...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (history.length === 0) {
//     return <div className="p-4">No history data available</div>;
//   }

//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//       <div className="max-w-full overflow-x-auto">
//         <div className="min-w-[1102px]">
//           <Table>
//             {/* Table Header */}
//             <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//               <TableRow>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Check In
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Check Out
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Date
//                 </TableCell>
//                    <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Price
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Payment Method
//                 </TableCell>
             
              
//               </TableRow>
//             </TableHeader>

//             {/* Table Body */}
//             <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//               {history.map((item, index) => (
//                 <TableRow key={`${item.date}-${index}`}>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {item.check_in}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {item.check_out}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {new Date(item.date).toLocaleDateString()}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {item.price} TND
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <Badge
//                       size="md"
//                       color={
//                         item.paymentMethod === 'cash'
//                           ? 'success' // Green for cash
//                           : item.paymentMethod === 'points'
//                           ? 'warning' // Orange for points
//                           : item.paymentMethod === 'subscription'
//                           ? 'info' // Blue for subscription
//                           : 'secondary' // Yellow for online (assuming 'secondary' is yellow in your Badge component)
//                       }
//                     >
//                       {item.paymentMethod}
//                     </Badge>
//                   </TableCell>
                 
                  
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client'
// import React from "react";
// import { useEffect , useState} from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";

// import Badge from "../ui/badge/Badge";
// import Image from "next/image";

// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   projectName: string;
//   team: {
//     images: string[];
//   };
//   status: string;
//   budget: string;
// }

// interface Sububscription{
//   _id: string,
//   start_date : string,
//   end_date: string,
//   id_subscription: any,
//   status: string
// }



// // Define the table data using the interface
// const tableData: Order[] = [
//   {
//     id: 1,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Lindsey Curtis",
//       role: "Web Designer",
//     },
//     projectName: "Agency Website",
//     team: {
//       images: [
//         "/images/user/user-22.jpg",
//         "/images/user/user-23.jpg",
//         "/images/user/user-24.jpg",
//       ],
//     },
//     budget: "3.9K",
//     status: "Active",
//   },
//   {
//     id: 2,
//     user: {
//       image: "/images/user/user-18.jpg",
//       name: "Kaiya George",
//       role: "Project Manager",
//     },
//     projectName: "Technology",
//     team: {
//       images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
//     },
//     budget: "24.9K",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Zain Geidt",
//       role: "Content Writing",
//     },
//     projectName: "Blog Writing",
//     team: {
//       images: ["/images/user/user-27.jpg"],
//     },
//     budget: "12.7K",
//     status: "Active",
//   },
//   {
//     id: 4,
//     user: {
//       image: "/images/user/user-20.jpg",
//       name: "Abram Schleifer",
//       role: "Digital Marketer",
//     },
//     projectName: "Social Media",
//     team: {
//       images: [
//         "/images/user/user-28.jpg",
//         "/images/user/user-29.jpg",
//         "/images/user/user-30.jpg",
//       ],
//     },
//     budget: "2.8K",
//     status: "Cancel",
//   },
//   {
//     id: 5,
//     user: {
//       image: "/images/user/user-21.jpg",
//       name: "Carla George",
//       role: "Front-end Developer",
//     },
//     projectName: "Website",
//     team: {
//       images: [
//         "/images/user/user-31.jpg",
//         "/images/user/user-32.jpg",
//         "/images/user/user-33.jpg",
//       ],
//     },
//     budget: "4.5K",
//     status: "Active",
//   },
// ];

//     // const [subscriptions, setSubscriptions] = useState([]);
//     // const [loading, setLoading] = useState(true);
//     // const [idUser, setIdUser] = useState(null);
//     // const [error, setError] = useState(null);



// export default function BasicTableTwo() {

//   const [subscriptions, setSubscriptions] = useState<Sububscription[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [idUser, setIdUser] = useState(null);
//   const [error, setError] = useState(null);

//   const idUser1 = "67c0359f5688c67382a063dd";

//   // useEffect(() => {
//   //       async function fetchUserId() {
//   //         try {
//   //           const response = await fetch("http://localhost:8000/ELACO/getUserId", {
//   //             method: "GET",
//   //             credentials: "include",
//   //           });
    
//   //           if (!response.ok) {
//   //             throw new Error(`Failed to fetch user ID: ${response.statusText}`);
//   //           }
    
//   //           const userIdData = await response.json();
//   //           setIdUser(userIdData.id_user);
//   //         } catch (error) {
//   //           console.error("Error fetching user ID:", error);
//   //         }
//   //       }
    
//   //       fetchUserId();
//   //     }, []);

//   useEffect(() => {
//     if(!idUser) return;
//     // if (!idUser) return;
  
//     async function fetchSubscriptions() {
//       try {
//         const response = await fetch(
//           "http://localhost:8000/ELACO/userSubscription/getUsersubscriptionByIduser/67c0359f5688c67382a063dd",{
//             method: 'GET',
//             credentials: 'include',
//            }
//             );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch subscriptions: ${response.statusText}`);
//         }
  
//         const data = await response.json();
//         console.log("nopurrrrrr"+data)
//         console.log(data?.data?.userSubscriptions)
//         setSubscriptions(data?.data?.userSubscriptions || []);
//       } catch (error: any) {
//         console.error("Error fetching subscriptions:", error);
//         setError(error.message);
//         // setError(error instanceof Error ? error.message : "An unkwon error")
//       } finally {
//         setLoading(false);
//       }
//     }
  
//     fetchSubscriptions();
//   }, []);

//   if (loading) {
//     return <div className="p-4">Loading history...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (history.length === 0) {
//     return <div className="p-4">No history data available</div>;
//   }
//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//       <div className="max-w-full overflow-x-auto">
//         <div className="min-w-[1102px]">
//           <Table>
//             {/* Table Header */}
//             <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//               <TableRow>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   ID
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Start Date
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   End Date
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Payment Status
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Subscrition Type
//                 </TableCell>
//               </TableRow>
//             </TableHeader>

//             {/* Table Body */}
//             <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//               {subscriptions.map((subscription: Sububscription) => (
//                 <TableRow key={subscription?._id}>
//                   <TableCell className="px-5 py-4 sm:px-6 text-start">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 overflow-hidden rounded-full">
//                         {/* <Image
//                           width={40}
//                           height={40}
//                           src={order.start_date}
//                           alt={order.user.name}
//                         /> */}
//                       </div>
//                       <div>
//                         <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                         {subscription?._id || "N/A"}
//                         </span>
//                         <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
//                           {/* {order.user.role} */}
//                         </span>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {subscription?.start_date?.substring(0, 10) || "N/A"}
//                   </TableCell>
//                   {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <div className="flex -space-x-2">
//                       {order.team.images.map((teamImage, index) => (
//                         <div
//                           key={index}
//                           className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
//                         >
//                           <Image
//                             width={24}
//                             height={24}
//                             src={teamImage}
//                             alt={`Team member ${index + 1}`}
//                             className="w-full"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </TableCell> */}
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {subscription?.end_date?.substring(0, 10) || "N/A"}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <Badge
//                       size="sm"
//                       color={
//                         subscription.status === "Active"
//                           ? "success"
//                           : subscription.status === "unavailable"
//                           ? "warning"
//                           : "error"
//                       }
//                     >
//                       {subscription?.status}
//                     </Badge>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                     {subscription.id_subscription.subscriptionType}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

interface Subscription {
  _id: string;
  start_date: string;
  end_date: string;
  subscription_type: string;
 
  status: string;
}

export default function BasicTableTwo() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const idUser1 = "67c0359f5688c67382a063dd";

  useEffect(() => {
    async function fetchSubscriptions() {
      try {
        const response = await fetch(
          `http://localhost:8000/ELACO/userSubscription/getUsersubscriptionByIduser/${idUser1}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch subscriptions: ${response.statusText}`);
        }

        const data = await response.json();
        setSubscriptions(data?.data?.userSubscriptions || []);
        console.log(subscriptions)
        console.log(data?.data?.userSubscriptions[0])
      } catch (error: any) {
        console.error("Error fetching subscriptions:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscriptions();
  }, []);

  if (loading) {
    return <div className="p-4">Loading history...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (subscriptions.length === 0) {
    return <div className="p-4">No history data available</div>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">ID</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Start Date</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">End Date</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Payment Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Subscription Type</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {subscriptions.map((subscription) => (
                <TableRow key={subscription._id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {subscription._id || "N/A"}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {subscription.start_date?.substring(0, 10) || "N/A"}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {subscription.end_date?.substring(0, 10) || "N/A"}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="md"
                      color={
                        subscription.status === "active"
                          ? "success"
                          : subscription.status === "unavailable"
                          ? "error"
                          : "warning"
                      }
                    >
                      {subscription.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {subscription.subscription_type || "N/A"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}