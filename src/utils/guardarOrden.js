import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"

const guardarOrden = async(cartContent, orden) => {
    const outOfStock = []
    const batch = writeBatch(db)
    let returnValue = {success: false, value: ''}

    await Promise.all(cartContent.map(async(producto) => {
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
            returnValue.success = false;
            returnValue.value = `La id del producto ${producto.title} no se encontró en la base de datos.`
        }
    })).then(async() => {
        if(outOfStock.length === 0){
            try{
                const savedOrder = await addDoc(collection(db, "orders"), orden);
                await batch.commit();
                returnValue.success = true;
                returnValue.value = savedOrder.id;
            }
            catch(error){
                returnValue.success = false;
                returnValue.value = `No se guardó la orden: ${error}`;
            }
        }
        else{
            returnValue.success = false;
            let messageString = ''
            outOfStock.length === 1? messageString = 'Producto fuera de stock: ' : messageString = 'Productos fuera de stock: ';
            outOfStock.forEach((item) => {
                messageString = messageString + `${item.title}, `;
            })
            returnValue.value = messageString.slice(0,-2);
        };
    });
    return returnValue;
}

export default guardarOrden;