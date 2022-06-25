import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../database.js"

const dbInstance = collection(db, "transactions")

export default async (req, res) => {
    const { method } = req;
  
    if (method === "GET") {
      let transaction = {
        date: "1/2/22",
        service: "external",
        first_name: "Ty",
        last_name: "Roop",
        email: "blah@gmail.com",
        make: "ford",
        model: "mustang",
        year: "2022"
      }
      let docs = []
      
      const querySnapshot = await getDocs(dbInstance);
      querySnapshot.forEach((doc) => {
          docs.push(doc.data())
      });
      return res.status(200).json(docs);
    }
  
    if (method === "POST") {
      const { body } = req;
      let transaction = {
        date: "1/2/22",
        service: "external",
        first_name: "Ty",
        last_name: "Roop",
        email: "blah@gmail.com",
        make: "ford",
        model: "mustang",
        year: "2022"
      }
      const add = await addDoc(dbInstance, transaction)
      return res.status(200).json(add);
    }
  }