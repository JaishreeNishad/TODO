
// import { data } from "autoprefixer";
import PouchDB from "pouchdb";

const db = new PouchDB('pouchdb');

db.info().then((info)=>{
    console.log("show me",info)
});

export async function parentToDB(data){
    try{
        const response = await db.post(data);
        return response;
    }catch(error){
        console.error(error);
    }
    return null
}



export function getToDB(){
    const val = db
    .allDocs({include_docs:true,descending:true},(error,doc)=>doc.rows).catch((error)=>{
        console.error(error);
    });
    return val;
}
export async function removeToDB(id) {
    try {
      const doc = await db.get(id);
      db.remove(doc);
    } catch (error) {
      console.error(error);
    }
  }
  




