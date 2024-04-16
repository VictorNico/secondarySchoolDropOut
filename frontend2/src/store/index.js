import { createStore } from "vuex";
// import createPersistedState from "vuex-plugin-persistedstate";
// import { openDB } from 'idb';

// const dbPromise = openDB('leitti', 1, {
//   upgrade(db) {
//     // Créer le magasin d'objets 'leitti' si nécessaire
//     if (!db.objectStoreNames.contains('leitti')) {
//       db.createObjectStore('leitti');
//     }
//   },
// });
// await dbPromise
import base from "./modules/base.js";



// Exporter le store
export default createStore({
      modules:{
        base,
      },
    // plugins: [
    //   createPersistedState({    
    //     key: "leitti",
    //     fetchBeforeUse: true,
    //     storage: {
    //       getItem:  async (cle) => {
    //         console.log(cle,'+++')
    //         await dbPromise.then(async (db)=>{
    //           const tx = db.transaction("leitti", 'readonly');
    //           const store = tx.objectStore("leitti");
    //           const value = await store.get(cle);
    //           return value;
    //         });
            
    //       },
    //       setItem: async (cle, value) => {
    //         console.log(cle,'**')
    //         await dbPromise.then(async (db)=>{
    //           const tx = db.transaction("leitti", 'readwrite');
    //           const store = tx.objectStore("leitti");
    //           await store.put(value, cle);
    //         });
    //       },
    //       removeItem: async (cle) => {
    //         await dbPromise.then(async (db)=>{
    //           const tx = db.transaction("leitti", 'readwrite');
    //           const store = tx.objectStore("leitti");
    //           await store.delete(cle);
    //         });
    //       },
    //     },
    //   }),
    // ],
  });