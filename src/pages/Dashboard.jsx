import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Users, UserCheck, UserX, CalendarClock } from "lucide-react";

const Dashboard = () => {
  const [data, setData] = useState({
    totalEmployees: 0,
    presentToday: 0,
    absentToday: 0,
    totalLeavesPending: 0,
    recentAttendance: [],
  });

  const dashboardCards = [
    {
      title: "Total Employees",
      value: data.totalEmployees,
      icon: <Users className="text-blue-600 w-5 h-5" />,
    },
    {
      title: "Present Today",
      value: data.presentToday,
      icon: <UserCheck className="text-green-600 w-5 h-5" />,
    },
    {
      title: "Absent Today",
      value: data.absentToday,
      icon: <UserX className="text-red-500 w-5 h-5" />,
    },
    {
      title: "Pending Leave Requests",
      value: data.totalLeavesPending,
      icon: <CalendarClock className="text-yellow-500 w-5 h-5" />,
    },
  ];

  useEffect(() => {
    // Replace with actual API call later
    setData({
      totalEmployees: 18,
      presentToday: 15,
      absentToday: 3,
      totalLeavesPending: 4,
      recentAttendance: [
        { empName: "Raj Sharma", time: "09:10 AM", status: "In" },
        { empName: "Amit Patil", time: "09:25 AM", status: "In" },
      ],
    });
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      {/* Title */}
      <Title
        title="Admin Dashboard"
        subTitle="Monitor attendance, employees and leave activity in real-time"
      />

      {/* Dashboard Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-5xl">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor bg-white shadow-sm"
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title}</h1>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Attendance */}
      <div className="bg-white p-4 rounded-md border border-borderColor shadow-sm max-w-3xl">
        <h2 className="text-md font-semibold mb-4">Recent Check-ins</h2>
        <div className="divide-y text-sm text-gray-700">
          {data.recentAttendance.map((att, idx) => (
            <div key={idx} className="py-2 flex justify-between">
              <span>{att.empName}</span>
              <span className="text-sm text-gray-500">
                {att.time} ({att.status})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
