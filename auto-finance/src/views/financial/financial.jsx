import React, { useRef } from 'react'
import useBottomOffset from '@/assets/hooks/bottom-offset';

const Financial = () => {
  const financialEl = useRef(null)
  useBottomOffset(financialEl)
  return (
    <>
      <div ref={financialEl}>Financial</div>
    </>
  )
}

export default Financial
