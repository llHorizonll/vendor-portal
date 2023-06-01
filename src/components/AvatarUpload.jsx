import PropTypes from "prop-types";
import { Avatar, Box, Icon, Typography } from "@mui/material";
import { useState } from "react";
import { css } from "@emotion/css";

const avartarCamera = css`
  position: absolute !important;
  z-index: 2 !important;
  bottom: 0px !important;
  right: 0px !important;
`;

const AvatarUpload = ({ width, height, field }) => {
  const [image, setImage] = useState(null);

  const handleOnChange = (e) => {
    const target = e.target;
    console.log(target);
    
    if (!target.files) return;

    const newImage = target.files?.[0];
    if (newImage) {
      const fileSize = newImage.size / 1024 / 1024; // in MiB
      if (fileSize > 5) {
        alert(" Maximum upload file size : 5 MB.");
        setImage();
      }
      field.onChange(newImage);
      setImage(URL.createObjectURL(newImage));
    }
  };

  const handleClick = (e) => {
    console.log("in");

    if (image) {
      e.preventDefault();
    }
  };

  const handleDelete = () => {
    field.onChange();
    setImage();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        type="file"
        name={field?.name}
        onBlur={field?.onBlur}
        ref={field?.ref}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        onChange={handleOnChange}
      />
      <label
        htmlFor="avatar-image-upload"
        style={{
          overflow: "hidden",
          position: "relative",
          width: width ? width : 128,
          height: height ? height : 128,
          cursor: "pointer",
        }}
      >
        <Avatar
          sx={{ width: width ? width : 128, height: height ? height : 128, mb: 2 }}
          src={image}
          onClick={handleClick}
        />
        <Avatar
          sx={{ width: width / 2.1, height: height / 2.1, backgroundColor: image ? "error.main" : "primary.dark" }}
          className={avartarCamera}
          onClick={image ? handleDelete : handleClick}
        >
          {image ? (
            <Icon sx={{ fontSize: width / 3.6 }}>delete</Icon>
          ) : (
            <Icon sx={{ fontSize: width / 3.6 }}>photo_camera</Icon>
          )}
        </Avatar>
      </label>

      {/* <label htmlFor="avatar-image-upload">
        <Avatar
          sx={{ width: width ? width : 128, height: height ? height : 128, mb: 2 }}
          alt="Avatar"
          src={image}
          onClick={handleClick}
         
        >
          <Icon sx={{ fontSize: width ? width / 2 : 52 }}>photo_camera</Icon>
        </Avatar>
      </label> */}
      <Typography variant="caption" display="block" gutterBottom>
        Maximum upload file size : 5 MB.
      </Typography>
    </Box>
  );
};

export default AvatarUpload;

AvatarUpload.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  field: PropTypes.object,
};
