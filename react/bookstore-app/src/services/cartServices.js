import config from "../config.json";
import http from "./httpServices";

import { ref, db, onValue } from "../Config/firebase";
import { set } from "firebase/database";

const getCart = async () => {
  return await http.get(config.bookAPI + "/cart.json");
};

const postCart = async (book) => {
  var check = 0;
  //  const  db=getDatabase()
  onValue(ref(db, `cart`), async (snapshot) => {
    if (snapshot.exists()) {
      const data = await snapshot.val();
      const propertyValues = Object.values(data);

      for (var i = 0; i < propertyValues.length; i++) {
        //  console.log(propertyValues[i])

        if (book._id === propertyValues[i]._id) {
          check = 1;
        }
      }
    } else {
      // setProductState([]);
    }
    if (check === 0) {
      book["quantity"] = 1;

      // book["Uid"]=newPostKey
      book["quantity"] = 1;

      await set(ref(db, "cart/" + book["_id"]), book);

      // return await http.post(config.bookAPI + "/cart.json", book);
    } else {
      // alert("Already Add To card Increase Quantity")
    }
  });

  //  var res = await
  //  console.log(res)
  // var data =  await http.get(config.bookAPI+"/cart.json");
  // console.log(data.data )

  //
};
const deleteItemCart = async (_id) => {
  return await http.delete(config.bookAPI + `/cart/${_id}.json`);
};
export { getCart, postCart, deleteItemCart };
