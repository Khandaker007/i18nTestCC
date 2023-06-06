'use client';

import {useTranslations} from 'next-intl';
import Link from 'next-intl/link';
import styles from './page.module.css'

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
    <div className={styles.linkContainer}>
      <Link href="/" locale="en">Switch to English</Link>
      <Link href="/" locale="de">Switch to German</Link>
    </div>
      <h1>{t('title')}</h1>
    </>
  )
};
