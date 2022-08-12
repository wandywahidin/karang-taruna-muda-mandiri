import { useState } from "react";
import {ref} from "firebase/storage";
import { storage } from "../config/firebase";
import {useUploadFile} from 'react-firebase-hooks/storage'
import { v4 } from "uuid";

function Admin() {
  const [imageUpload, setImageUpload] = useState(null)
  const [uploadFile, upLoading, snapshoot, error] = useUploadFile()

  const upload = async () => {
    if(imageUpload) {
      const reference = ref(storage, `galery/${imageUpload.name + v4()}`)
      const results = await uploadFile(reference, imageUpload)
      console.log('Result :', results);
      alert('success upload')
    }
  }
  console.log(imageUpload);

  return (
    <div>
      <p>
        {error && <strong>Eror : {error.message}</strong>}
        {upLoading && <strong>Uploading file ...</strong>}
        {snapshoot && <span>Snapshoot : {JSON.stringify(snapshoot)}</span>}
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={()=> upload()}> Upload Image</button>
      </p>
    </div>
  );
}

export default Admin;