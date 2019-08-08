import React from 'react'
import styles from './car-list.module.scss'

const data = [
  {
    key: 'A',
    car: [
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      }
    ]
  },
  {
    key: 'B',
    car: [
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      }
    ]
  },
  {
    key: 'C',
    car: [
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      }
    ]
  },
  {
    key: 'D',
    car: [
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      }
    ]
  },
  {
    key: 'E',
    car: [
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      },
      {
        title: '奥迪'
      }
    ]
  }
]

const CarList = () => {
  return (
    <>
      <div className={styles['car-list']}>
        <ul className={styles['car-brand']}>
          {data.map((item, index) => (
            <li key={index} className={styles['brand-item']}>
              <div className={styles['brand-letter']}>{item.key}</div>
              <ul className={styles['car-type']}>
                {item.car.map((item, index) => (
                  <li key={index} className={styles['type-item']}>
                    <div className={styles['sign']}>
                      <img src={require('./sign.jpg')} alt="sign" />
                    </div>
                    <div className={styles['name']}>{item.title}</div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CarList
