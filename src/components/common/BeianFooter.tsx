import styles from './BeianFooter.module.css';

/** ICP 备案号（需与实际备案域名一致） */
const ICP_BEIAN = '晋ICP备2023020746号-2';
/** 工业和信息化部 ICP/IP地址/域名信息备案管理系统 */
const ICP_BEIAN_URL = 'https://beian.miit.gov.cn/';
/** 公安联网备案号（需与实际备案域名一致） */
const POLICE_BEIAN = '晋公网安备14010602111139号';
/** 公安备案记录编号，用于直达查询页 */
const POLICE_BEIAN_CODE = '14010602111139';
/** 全国互联网安全管理服务平台 */
const POLICE_BEIAN_URL = `https://beian.mps.gov.cn/#/query/webSearch?code=${POLICE_BEIAN_CODE}`;

/**
 * 网站底部备案信息。
 * 合规要点：ICP 备案号链接工信部备案系统；公安备案使用官方 20×20 徽标，
 * 徽标在左、备案号在右，并链接全国互联网安全管理服务平台的对应查询页。
 */
export function BeianFooter() {
  return (
    <footer className={styles.footer} aria-label="网站备案信息">
      <a
        className={styles.item}
        href={ICP_BEIAN_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="工业和信息化部 ICP/IP地址/域名信息备案管理系统"
      >
        {ICP_BEIAN}
        <span className={styles.srOnly}>（在新窗口打开）</span>
      </a>
      <span className={styles.divider} aria-hidden="true">
        ·
      </span>
      <a
        className={styles.item}
        href={POLICE_BEIAN_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="全国互联网安全管理服务平台"
      >
        <img
          className={styles.icon}
          src={`${process.env.basePath || ''}/beian.png`}
          alt="公安备案图标"
          width={20}
          height={20}
          loading="lazy"
          decoding="async"
        />
        <span>{POLICE_BEIAN}</span>
        <span className={styles.srOnly}>（在新窗口打开）</span>
      </a>
    </footer>
  );
}
