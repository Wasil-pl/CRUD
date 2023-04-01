import styles from './PageTitle.module.scss';

const PageTitle = ({ children }) => {
  return (<h2 className={styles.pageTitle}>{children}</h2>);
}

export default PageTitle