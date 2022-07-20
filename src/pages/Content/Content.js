import styles from './Content.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Content() {
    return ( 
        <h1 className={cx('title')}>Content page</h1>
     );
}

export default Content;