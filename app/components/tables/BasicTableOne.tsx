// "use client"
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

// export default function BasicTableOne() {
//   const [history,setHistory]=useState([])
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// const idUser="67c0359f5688c67382a063dd"
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
//         console.error("Error fetching  history:", error);
//         // setError(error.message);
//     } finally {
//         setLoading(false);
//     }
//     }
  
//     fetchStatus();
//   }, []);
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
//                   Check out
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Date
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   paymentMethod
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   price
//                 </TableCell>
//               </TableRow>
//             </TableHeader>

//             {/* Table Body */}
//             <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//               {history.map((history) => (
//                 <TableRow key={history.check_in}>
//                   <TableCell className="px-5 py-4 sm:px-6 text-start">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 overflow-hidden rounded-full">
//                         <Image
//                           width={40}
//                           height={40}
//                           src={order.user.image}
//                           alt={order.user.name}
//                         />
//                       </div>
//                       <div>
//                         <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                           {order.user.name}
//                         </span>
//                         <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
//                           {order.user.role}
//                         </span>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {order.projectName}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
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
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <Badge
//                       size="sm"
//                       color={
//                         order.status === "Active"
//                           ? "success"
//                           : order.status === "Pending"
//                           ? "warning"
//                           : "error"
//                       }
//                     >
//                       {order.status}
//                     </Badge>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                     {order.budget}
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
"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HistoryItem {
  check_in: string;
  check_out: string;
  date: string;
  paymentMethod: 'cash' | 'points' | 'subscription' | 'online';
  price: number;
  status: string;
}

export default function BasicTableOne() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const idUser = "67c0359f5688c67382a063dd";

  useEffect(() => {
    if (!idUser) return;

    async function fetchStatus() {
      try {
        const response = await fetch(
          "http://localhost:8000/ELACO/booking/BookingHistory/67c0359f5688c67382a063dd",
          {
            method: "GET",
            credentials: "include",
          }
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch user History status: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("history:", data.data.history);
        setHistory(data.data.history);
      } catch (error) {
        console.error("Error fetching history:", error);
        setError(error instanceof Error ? error.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchStatus();
  }, []);

  if (loading) {
    return <div className="p-4">Loading history...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (history.length === 0) {
    return <div className="p-4">No history data available</div>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Check In
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Check Out
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Date
                </TableCell>
                   <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Price
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Payment Method
                </TableCell>
             
              
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {history.map((item, index) => (
                <TableRow key={`${item.date}-${index}`}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.check_in}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.check_out}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {new Date(item.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.price} TND
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="md"
                      color={
                        item.paymentMethod === 'cash'
                          ? 'success' // Green for cash
                          : item.paymentMethod === 'points'
                          ? 'warning' // Orange for points
                          : item.paymentMethod === 'subscription'
                          ? 'info' // Blue for subscription
                          : 'secondary' // Yellow for online (assuming 'secondary' is yellow in your Badge component)
                      }
                    >
                      {item.paymentMethod}
                    </Badge>
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