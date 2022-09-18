import axios from "axios"
import {useCallback, useEffect, useState} from "react"
import {useDropzone} from "react-dropzone"
import "./App.css"

const UserProfiles = () => {

  const [profiles, setProfiles] = useState([])

  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/api/v1/user-profile")
         .then(res => setProfiles(res.data))
  }

  useEffect(() => {
    fetchUserProfiles()
  }, [])

  return (
    <div>
      {profiles.map((profile, index) => {
        return (
          <div key={index} style={{margin: "30px 0"}}>
            {profile.userProfileImageLink
              ? <img src={`http://localhost:8080/api/v1/user-profile/${profile.userProfileId}/image/download`}
                     height="200px"
                     width="200px"
                     style={{objectFit: "cover", borderRadius: "50%"}}
              />
              : null
            }
            <Dropzone {...profile}/>
            <h1>{profile.username}</h1>
            <p>{profile.userProfileId}</p>
          </div>
        )
      })}
    </div>
  )
}

function Dropzone({userProfileId}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    const formData = new FormData()
    formData.append("file", file)
    axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(() => {
      console.log("file uploaded successfully")
    }).catch(err => {
      console.log(err)
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the image here ...</p>
          : <p>Drag 'n' drop profile images here, or click to select images</p>
      }
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <UserProfiles/>
    </div>
  )
}

export default App
