import './Result.scss';
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";

const Nav = styled.nav`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
    border-radius: 6px;
    background: #ffffff7e;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

function Result(props) {

  let records = JSON.parse(localStorage.getItem('records'));
  let toDoLists = JSON.parse(localStorage.getItem('toDoLists'));
  let period = JSON.parse(localStorage.getItem('records')).length;
  let counter;
  let allResults = [];

  //toDoList 목록별 counter
  toDoLists.map(list => {
    counter = 0

    records.map((dailyRecords, index) => (
      dailyRecords.map(dailyRecord => (
        dailyRecord.text === list && dailyRecord.checked === true ? counter++ : counter
      ))
    ))

    const eachListResult = {
      text: list,
      counter: counter
    };
    allResults.push(eachListResult);
  })

  let percentage;

  return (
    <div className='Result' >
      <span className='title'>Records</span>
      <Nav>
        <div className='content'>
          <ul>
            {allResults.map((eachResult, index) => (
              <li key={index}>
                <div className='title_area'>
                  <p>
                    {eachResult.text}
                    <HiCursorClick />
                  </p>
                  <span className='description'>
                    총 {period}일 중 {eachResult.counter}일 <br />목표달성!
                  </span>
                  <p className='percentage'>
                    {percentage = Math.round((eachResult.counter / period) * 100)}
                  </p>
                </div>

                <div className='pieChart'>
                  <PieChart
                    data={[
                      {
                        name: eachResult.text,
                        value: percentage,
                        color: '#fb4e4e',
                      },
                    ]}
                    reveal={percentage}
                    lineWidth={18}
                    background="#f3f3f3"
                    lengthAngle={360}
                    rounded
                    animate
                    label={({ dataEntry }) =>
                      dataEntry.value + "%"}
                    labelStyle={{
                      fontSize: "26px",
                      fill: "#33333",
                    }}
                    labelPosition={0}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Nav>
    </div >
  )
}

export default Result;