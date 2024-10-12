import React from "react";
import styles from "./bannerTag.module.css"

interface BannerTagProps {
  bannerText: string;
  codeText: string;
}

export function BannerTag({ iBannerTag }: { iBannerTag: BannerTagProps }) {
  const { bannerText, codeText } = iBannerTag;
  
  return (
    <p className={styles.bannerText}>
      {bannerText}
      <code className={styles.codeText}>{codeText}</code>
    </p>
  );
}
