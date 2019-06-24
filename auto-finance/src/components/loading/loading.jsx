import React from 'react'

import styles from './loading.module.scss'

const Loading = () => {
  return (
    <>
      <div className={styles.loading}>
        <img
          src={require('./loading.svg')}
          width='100'
          height='100'
          alt='loading'
        />
      </div>
    </>
  )
}

export default Loading
