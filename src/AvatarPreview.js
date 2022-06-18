import {useEffect, useState} from 'react'


function AvatarPreview() {
    const [avatar, setAvatar] = useState()
    
    useEffect(() => {
        return (() => {
            avatar && URL.revokeObjectURL(avatar.preview)
        })
    },[avatar]) // thay thể ảnh trước đó thì sẽ dọn dẹp bộ nhớ ,tránh bị dò rỉ

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />    
            {avatar && (
                <img src={avatar.preview} alt = "" width = "50%"/>
            )}        
        </div>
    )
}

export default AvatarPreview