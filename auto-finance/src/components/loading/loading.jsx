import React from 'react'

import styles from './loading.module.scss'

const Loading = () => {
  return (
    <>
      <div className={styles.loading}>
        <div className={styles.wrapper}>
          <img src={require('./loading.svg')} alt="loading" />
        </div>
      </div>
    </>
  )
}

export default Loading
