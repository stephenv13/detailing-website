import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../database.js"

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
        date: new Date().toUTCString(),
        service: body.service_name,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        phone: body.phone,
        make: body.make,
        model: body.model,
        year: body.year,
        comments: body.comments
      }

      const add = await addDoc(dbInstance, transaction)
      return res.status(200).json(add);
    }
  }