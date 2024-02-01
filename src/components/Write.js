import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";

export default function Write() {
    const testWrite = async () => {
        try {
            const docRef = await addDoc(collection(db, "test2"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            })
            console.log( "doc written with id: ", docRef.id);
        } catch (e) {
            console.log("Error: ", e)
        }
    }
    return (
        <>
        <div>
            <button onClick={()=>testWrite()}>Write</button>
        </div>
        </>
    )
}