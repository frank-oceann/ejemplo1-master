import { IAlumno } from "@/Interfaces/IAlumno"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebase";
export const registrarAlumno = async(alumno:IAlumno)=>{

const docRef = await addDoc(collection(db, "alumno"), alumno); //await debe ir un async para indicar que es asincronica
}