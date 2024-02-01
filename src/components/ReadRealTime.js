import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import React, {useEffect, useState} from 'react'

export default function ReadRealTime() {
    const [data, setData] = useState({})

    useEffect(()=> {
        const col = collection(db, 'test2')
        const unsubscribe = onSnapshot(col, (snapshot) => {
            snapshot.forEach((doc) => {
                const newData = doc.data();
                if (newData) {
                    setData({
                        born: newData.born,
                        first: newData.first,
                        last: newData.last
                    })
                }
            })
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <>
            {data ? data.first : ''}
        </>
      )
}