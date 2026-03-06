import axios from "axios";
import type { UserInfo } from "@/lib/data_models";
import {v4 as uuidv4} from "uuid"

const api_url = "http://127.0.0.1:8080/api/inference"


export const runInference = async ({ userInfo, selectedFile }: { userInfo: UserInfo, selectedFile: File }) => {
    const user_info = {
        "user_id": uuidv4(),
        "name": userInfo.name,
        "age": userInfo.age,
        "location": userInfo.location,
        "favorite_genres": userInfo.favoriteGenres,
        "favorite_authors": userInfo.favoriteAuthors,
    }

    const form_data = new FormData()
    form_data.append("image", selectedFile)
    form_data.append("user_info", JSON.stringify(user_info))
    
    
    const response = await axios.post(api_url, form_data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return response;
}


