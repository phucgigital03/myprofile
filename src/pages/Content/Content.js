import styles from './Content.module.scss'
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles)

function Content() {
    const users = useSelector(state => state.user.users)
    console.log(users)
    return ( 
        <div>
            <h1 className={cx('title')}>Content page</h1>
            <ul>

            </ul>
        </div>
     );
}

export default Content;