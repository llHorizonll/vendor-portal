import { Avatar, Box, Icon, Typography } from "@mui/material";
import { createRef, useState } from "react";

const AvatarUpload = () => {
  const [image, _setImage] = useState(null);
  const inputFileRef = createRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];

    const fileSize = newImage.size / 1024 / 1024; // in MiB
    if (fileSize > 5) {
      alert(" Maximum upload file size : 5 MB.");
      setImage();
    }

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  /**
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        onChange={handleOnChange}
      />
      <label htmlFor="avatar-image-upload">
        <Avatar sx={{ width: 128, height: 128, mb: 2 }} alt="Avatar" src={image} onClick={handleClick} variant="square">
          <Icon sx={{ fontSize: 52 }}>photo_camera</Icon>
        </Avatar>
      </label>
      <Typography variant="caption" display="block" gutterBottom>
        Maximum upload file size : 5 MB.
      </Typography>
    </Box>
  );
};

export default AvatarUpload;
