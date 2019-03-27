import React from 'react'
import { Icon } from 'antd-mobile'

import styles from './loading.module.sass'

const Loading = () => (
  <div className={styles.loading}>
    <Icon type='loading' size='lg' />
  </div>
)

export default Loading
