import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"

const guardarOrden = async(cartContent, orden) => {
    const outOfStock = []
    const batch = writeBatch(db)

    cartContent.forEach(async(producto) => {
        let docRef = doc(db, "products", producto.id);
        let docSnap = await getDoc(docRef);
        let productoDb = {id: docSnap.id , ...docSnap.data()};
        if (docSnap.exists()) {
            if(producto.quantity <= productoDb.stock){
                batch.update(docRef , {
                    stock: productoDb.stock - producto.quantity
                })
            }
            else{
                outOfStock.push(producto);
            }
          } else {
            console.log("La id del producto en el carrito no se encontró en la base de datos.");
            console.log(producto);
          }
    });
    if(outOfStock.length === 0){
        try{
            const savedOrder = await addDoc(collection(db, "orders"), orden);
            await batch.commit();
            console.log(`Se guardó la orden con la id: ${savedOrder.id}`);
        }
        catch(error){
            console.log(`No se guardó la orden: ${error}`);
        }
    }
    else{
        console.log(`Productos fuera de stock: ${outOfStock}`);
    }
}

export default guardarOrden;