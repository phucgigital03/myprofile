import styles from './Home.module.scss'
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useRef } from 'react';
import { addItemWithMiddleWare } from '../../featureRedux/middleWare/callApiList';

const cx = classNames.bind(styles)

function Home() {
    const dispatch = useDispatch()
    const listWork = useSelector(state => state.list.listWork)
    const [work,setWork] = useState('')
    const inputRef = useRef()

    const handleSetWork = (e)=>{
        setWork(e.target.value)
    }

    const handleAddWork = ()=>{
        dispatch(addItemWithMiddleWare(work))
        setWork('')
        inputRef.current.focus()
    }

    return ( 
        <>
            <h1 className={cx('title')}>Home page</h1>
            <div className={cx('wrap')}>
                <input ref={inputRef} type="text" value={work} onChange={handleSetWork}/>
                <button onClick={handleAddWork}>add Work</button>
            </div>
            <ul>
                {listWork.map((item,index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
     );
}

export default Home;