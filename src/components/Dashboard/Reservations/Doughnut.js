import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import GlobalContext from '../../../Context';

ChartJS.register(ArcElement, Tooltip, Legend);


export const DoughnutFunc =  () => {
  const {rooms} = useContext(GlobalContext)
  const roomlen = rooms.length

  const Data = {
    labels: ['Total Rooms', 'Confirmed Booking', 'Check Out', 'Checck In'],
    datasets: [
      {
        label: '# of Votes',
        data: [roomlen, 0, 0, 0],
        backgroundColor: [
          'rgb(42, 57, 83, 0.5)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgb(42, 57, 83)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

    return <Doughnut data={Data} />;
}

