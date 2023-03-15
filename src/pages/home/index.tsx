import React from 'react'
import style from './index.module.css'
import InputJW from '@/pages/home/inputJW'
import Card from '@/pages/home/card'
import TextBtnCard from '@/pages/home/textBtnCard'
import styleBG from '@/style/theme/bg1.module.css'

export default function index() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div>logo</div>
        <div className={style.right}>
          <span>About us</span>
          <span style={{ display: 'inline-block', width: '20px' }} />
          <span>Contact</span>
        </div>
      </header>
      <article className={style.main + ' ' + styleBG.bg}>
        <section className={style.main__section}>
          <div className={style.capture__1}>
            <p>Everyone matters. All data counts.</p>
            <p>Decentralized</p>
            <p>Data Banking</p>
            <p>Sign up to visualize, assetize and monetize your social data</p>
            <InputJW />
          </div>
          <div className={style.capture__2}>
            <Card />
            <Card />
            <Card />
          </div>
          <div className={style.capture__3}>
            <TextBtnCard />
            <TextBtnCard />
          </div>
        </section>
      </article>
      <footer className={style.footer}>

      </footer>

    </div>
  )
}
