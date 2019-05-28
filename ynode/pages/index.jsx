import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Content from '../components/content'
import { topics } from '../api/home'

import '../common/sass/reset.sass'

const Index = ({ topic }) => {
  return (
    <div>
      <Head>
        <meta name='description' content='YNode：Node.js专业中文社区' />
        <link
          rel='icon'
          href='../static/cnode_icon_32.png'
          type='image/x-icon'
        />
        <title>YNode：Node.js专业中文社区</title>
      </Head>

      <Header />
      <main style={{ padding: '10px 80px', background: '#ddd' }}>
        <Content topic={topic} />
      </main>
    </div>
  )
}

Index.getInitialProps = async ({ req, query }) => {
  const res = await topics(query.name)
  return { topic: res }
}

export default Index
