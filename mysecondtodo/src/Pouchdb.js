import PouchDb from "pouchdb";


const db = new PouchDb('my_db');

export async function inserttoDB(data){
    try {
        const response = await db.post(data);
    return response;
  } catch (error) {
    
    console.error(error);
  }
  return null;
}
export function getToDB() {
    const val = db
      .allDocs({ include_docs: true, descending: true }, (error, doc) => doc.rows)
      .catch((error) => {
        
        console.error(error);
      });
    return val;
  }
    



export default PouchDb;