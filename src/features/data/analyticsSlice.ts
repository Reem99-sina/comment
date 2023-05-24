import { commentsinterface, datainterface, imageinterface, userinterface } from "@/data/interface";
import { createSlice } from "@reduxjs/toolkit";
import dataresult  from "@/data/data.json"
interface datareduxinterface {
  data:datainterface
}
const initialState: datareduxinterface = {
 data:{
  currentUser: {
    image:{
      image: {
        png: "",webp:""
      },
      username: ""
    } ,
    username: "juliusomo"
  },
  comments: [
    {
      id: 1,
      content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: { 
          png: "/images/avatars/image-amyrobson.png",
          webp: "/images/avatars/image-amyrobson.webp"
        },
        username: "amyrobson"
      },
      replies: []
    }
      
  ]
}
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addnnewdata: (state, action) => {
      state.data = action.payload;
    },
    
  },
});

export const { addnnewdata } = dataSlice.actions;
export default dataSlice.reducer;
