'use client'

import { useEffect, useState } from 'react'

import styles from './page.module.css'
import { HoursEnum, MinutesEnum, SecondsEnum } from '../enums/date'

function formatWithLeadingZero(num: number): string {
  return num < 10 ? "0" + num : String(num);
}

export default function Home() {
  const [time, setTime] = useState(new Date())
  const currentHours = time.getHours();
  const currentMinutes = time.getMinutes();
  const currentSeconds = time.getSeconds();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }

  }, [time])

  return (
    <main className={styles.container}>
      <section className={styles.timer}>
        <span>{formatWithLeadingZero(time.getHours())}:{formatWithLeadingZero(time.getMinutes())}:{formatWithLeadingZero(time.getSeconds())}</span>
        <span> - </span>
        <span>{HoursEnum[currentHours]}, {MinutesEnum[currentMinutes]}, {SecondsEnum[currentSeconds]}.</span>
      </section>
    </main>
  )
}
