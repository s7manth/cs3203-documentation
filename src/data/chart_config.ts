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
      columnWidth: '35%',
      horizontal: false,
      borderRadius: 5,
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
    type: 'string',
    categories: COLUMN_X_AXIS,
  },
  legend: {
    position: 'right',
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
  colors: ['#123522', '#2e8555', '#60c88e'],
  dropShadow: {
    enabled: false,
  },
  background: {
    dropShadow: false,
  },
  title: {
    text: 'Test Cases Over Milestones',
    align: 'left',
  }
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
  colors: ['#123522', '#2e8555', '#60c88e', '#9eddba'],
  plotOptions: {
    pie: {
      expandOnClick: false,
      customScale: 0.7,
      donut: {
        size: '70%',
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total'
          }
        }
      }
    }
  },
  title: {
    text: 'Unit Test Breakdown',
    align: 'left',
  }
}
