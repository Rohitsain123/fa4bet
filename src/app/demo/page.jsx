"use client";
import React, { useState } from "react";

function TabsTable() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabData = {
    tab1: [
      { name: "PRICE", age: 1.0, city: "1.00" },
      { name: "Priya", age: 24, city: "Mumbai" },
    ],
    tab2: [
      { name: "Aman", age: 25, city: "Pune" },
      { name: "Sara", age: 23, city: "Bangalore" },
    ],
    tab3: [
      { name: "Nikhil", age: 27, city: "Chennai" },
      { name: "Tina", age: 26, city: "Kolkata" },
    ],
    tab4: [
      { name: "Yash", age: 24, city: "Hyderabad" },
      { name: "Kavita", age: 22, city: "Jaipur" },
    ],
    tab5: [
      { name: "Raj", age: 30, city: "Surat" },
      { name: "Meena", age: 29, city: "Noida" },
    ],
    tab6: [
      { name: "Ankit", age: 21, city: "Ahmedabad" },
      { name: "Simran", age: 20, city: "Lucknow" },
    ],
  };

  const tabs = [
    { id: "tab1", label: "Tab 1" },
    { id: "tab2", label: "Tab 2" },
    { id: "tab3", label: "Tab 3" },
    { id: "tab4", label: "Tab 4" },
    { id: "tab5", label: "Tab 5" },
    { id: "tab6", label: "Tab 6" },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded font-medium transition-all ${
              activeTab === tab.id
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#000] border border-gray-300 rounded">
          <thead>
            <tr className="bg-blue-500 text-left">
              <th className="px-4 py-2 border-b">name</th>
              <th className="px-4 py-2 border-b">age</th>{" "}
              <th className="px-4 py-2 border-b">city</th>{" "}
            </tr>
          </thead>
          <tbody>
            {tabData[activeTab]?.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.age}</td>
                <td className="px-4 py-2">{row.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabsTable;
