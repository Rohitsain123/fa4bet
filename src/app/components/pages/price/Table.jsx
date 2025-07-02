"use client";
import React, { useState } from "react";
import { tabs, tabsData } from "../../helper/Helper";
import Button from "../../common/Button";

function Table() {
  const [activetab, setActiveTab] = useState("tab1");
  return (
    <>
      <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto mt-10 ">
        {/* tabs */}
        <div className="overflow-x-auto max-w-[1320px]">
          <div className="flex gap-4 justify-center ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-[13px] md:px-[26px] py-[6px] md:py-[12px] rounded-[5px] md:rounded-[10px] transition-all cursor-pointer duration-200 text-nowrap !text-sm md:!text-base ${
                  activetab === tab.id
                    ? "bg-[#FFBB00] text-[#000]"
                    : "bg-[#4A463E] text-[#fff]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>{" "}
        </div>
        <div className="overflow-auto">
          <table className="mt-6   rounded-xl border border-[#171717]">
            <thead>
              <tr>
                <th className="bg-[#4A463E] px-[82px] py-[14px] rounded-tl-xl border-b border-[#171717] border-r"></th>
                <th className="bg-[#4A463E] px-[45px] py-[14px] border-b border-[#171717] border-r border-l">
                  BIG
                </th>
                <th className="bg-[#4A463E] px-[53px] py-[14px] border-b border-[#171717] border-l border-r">
                  SMALL
                </th>
                <th className="bg-[#4A463E] px-[48px] py-[14px] border-b border-[#171717] border-l border-r">
                  A4
                </th>
                <th className="bg-[#4A463E] px-[48px] py-[14px]  border-b border-[#171717] border-l border-r">
                  A
                </th>
                <th className="bg-[#4A463E] px-[42px] py-[14px]  border-b border-[#171717] border-l border-r">
                  ABC
                </th>{" "}
                <th className="bg-[#4A463E] px-[57px] py-[14px]  border-b border-[#171717] border-l border-r">
                  D5
                </th>
                <th className="bg-[#4A463E] px-[65px] py-[14px]  border-b border-[#171717] border-l rounded-tr-xl">
                  D6
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#171717]  ">
              {tabsData[activetab]?.map((row, index) => (
                <tr key={index}>
                  <td className="  px-[82px] text-center py-[14px] border border-[#000] ">
                    {row.list}
                  </td>
                  <td className="text-[#fff] text-center border border-[#000] ">
                    {row.Big}
                  </td>
                  <td className="text-[#fff] text-center border border-[#000]">
                    {row.Small}
                  </td>
                  <td className="text-[#fff] text-center border border-[#000]">
                    {row.A4}
                  </td>
                  <td className="text-[#fff] text-center border border-[#000]">
                    {row.A}
                  </td>
                  <td className="text-[#fff] text-center border border-[#000]">
                    {row.ABC}
                  </td>
                  <td className="text-[#fff] text-center border border-[#000]">
                    {row.D5}
                  </td>
                  <td className="text-[#fff] text-center border border-[#000]">
                    {row.D6}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <Button
            className={
              "!bg-[#FFBB00] !text-[#000] hover:shadow-[0_0_20px_white] transition duration-300"
            }
            title={"LUCKY NOMBOR"}
          />
        </div>
      </div>
    </>
  );
}

export default Table;
