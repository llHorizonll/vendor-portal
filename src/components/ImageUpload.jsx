import PropTypes from "prop-types";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCallback, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import uploadImg from "../assets/cloud-upload.png";
import png from "../assets/png.png";
import jpg from "../assets/jpg.png";
import svg from "../assets/svg.png";
import defaultImage from "../assets/default.png";
import jpeg from "../assets/jpeg.png";

const ImageConfig = {
  png,
  jpg,
  svg,
  "svg+xml": svg,
  default: defaultImage,
  jpeg,
};

const CustomBox = styled(Box)({
  "&.MuiBox-root": {
    backgroundColor: "#fff",
    borderRadius: "2rem",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding: "1rem",
  },
  "&.MuiBox-root:hover, &.MuiBox-root.dragover": {
    opacity: 0.6,
  },
});

const ImageUpload = ({ limit, multiple, name }) => {
  // 👇 State with useState()
  const [singleFile, setSingleFile] = useState([]);
  const [fileList, setFileList] = useState([]);
  const wrapperRef = useRef(null);

  // 👇 Toggle the dragover class
  const onDragEnter = () => wrapperRef.current?.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current?.classList.remove("dragover");

  // 👇 Image Upload Service
  const onFileDrop = useCallback(
    (e) => {
      const target = e.target;
      if (!target.files) return;

      if (limit === 1) {
        const newFile = Object.values(target.files).map((file) => file);
        if (singleFile.length >= 1) return alert("Only a single image allowed");
        setSingleFile(newFile);
      }

      if (multiple) {
        const newFiles = Object.values(target.files).map((file) => file);
        if (newFiles) {
          const updatedList = [...fileList, ...newFiles];
          if (updatedList.length > limit || newFiles.length > 3) {
            return alert(`Image must not be more than ${limit}`);
          }
          setFileList(updatedList);
        }
      }
    },
    [fileList, limit, multiple, singleFile]
  );

  // 👇 remove multiple images
  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
  };

  // 👇 remove single image
  const fileSingleRemove = () => {
    setSingleFile([]);
  };

  // 👇 Calculate Size in KiloByte and MegaByte
  const calcSize = (size) => {
    return size < 1000000 ? `${Math.floor(size / 1000)} KB` : `${Math.floor(size / 1000000)} MB`;
  };

  // 👇 Actual JSX
  return (
    <>
      <CustomBox>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "relative",
            width: "100%",
            height: "13rem",
            border: "2px dashed #4267b2",
            borderRadius: "20px",
          }}
          ref={wrapperRef}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDragLeave}
        >
          <Stack justifyContent="center" sx={{ p: 1, textAlign: "center" }}>
            <Typography sx={{ color: "#ccc" }}>
              {limit > 1 ? "Browse files to upload" : "Browse file to upload"}
            </Typography>
            <div>
              <img src={uploadImg} alt="file upload" style={{ width: "5rem" }} />
            </div>
            <Typography variant="body1" component="span">
              <strong>Supported Files</strong>
            </Typography>
            <Typography variant="body2" component="span">
              JPG, JPEG, PNG
            </Typography>
          </Stack>
          <input
            type="file"
            name={name}
            onChange={onFileDrop}
            multiple={multiple}
            accept="image/jpg, image/png, image/jpeg"
            style={{
              opacity: 0,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        </Box>
      </CustomBox>

      {/* 👇Image Preview 👇 */}
      {fileList.length > 0 || singleFile.length > 0 ? (
        <Stack spacing={2} sx={{ my: 2 }}>
          {(multiple ? fileList : singleFile).map((item, index) => {
            const imageType = item.type.split("/")[1];
            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  backgroundColor: "#f5f8ff",
                  borderRadius: 1.5,
                  p: 0.5,
                }}
              >
                <Box display="flex">
                  <img
                    src={ImageConfig[`${imageType}`] || ImageConfig["default"]}
                    alt="upload"
                    style={{
                      height: "3.5rem",
                      objectFit: "contain",
                    }}
                  />
                  <Box sx={{ ml: 1 }}>
                    <Typography>{item.name}</Typography>
                    <Typography variant="body2">{calcSize(item.size)}</Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={() => {
                    if (multiple) {
                      fileRemove(item);
                    } else {
                      fileSingleRemove();
                    }
                  }}
                  sx={{
                    color: "#df2c0e",
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            );
          })}
        </Stack>
      ) : null}
    </>
  );
};

export default ImageUpload;

ImageUpload.propTypes = {
  limit: PropTypes.number,
  multiple: PropTypes.bool,
  name: PropTypes.string,
};
