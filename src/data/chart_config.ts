import { COLUMN_X_AXIS, PIE_LABELS } from './test'

export const COLUMN_OPTION = {
  chart: {
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    type: 'datetime',
    categories: COLUMN_X_AXIS,
  },
  legend: {
    position: 'right',
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
}

export const PIE_OPTION = {
  labels: PIE_LABELS,
  responsive: [
    {
      options: {
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
}
