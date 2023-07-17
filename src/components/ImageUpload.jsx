import PropTypes from "prop-types";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCallback, useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import uploadImg from "../assets/cloud-upload.png";
import { useTheme } from "@mui/material/styles";

const CustomBox = styled(Box)({
  "&.MuiBox-root": {
    backgroundColor: "#fff",
    borderRadius: "2rem",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding: "0.5rem",
  },
  "&.MuiBox-root:hover, &.MuiBox-root.dragover": {
    opacity: 0.6,
  },
});

const ImageUpload = ({ fileList, setFileList, limit, name, notShowList }) => {
  const theme = useTheme();
  // 👇 State with useState()
  const wrapperRef = useRef(null);
  // 👇 Toggle the dragover class
  const onDragEnter = () => wrapperRef.current?.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current?.classList.remove("dragover");

  // 👇 Image Upload Service
  const onFileDrop = useCallback(
    (e) => {
      const target = e.target;
      if (!target.files) return;
      const newFiles = Object.values(target.files).map((file) => URL.createObjectURL(file));
      if (newFiles) {
        const updatedList = [...fileList, ...newFiles];
        if (updatedList.length > limit || newFiles.length > 3) {
          return alert(`Image must not be more than ${limit}`);
        }
        setFileList(updatedList);
      }
    },
    [fileList, setFileList, limit]
  );

  // 👇 remove multiple images
  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
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
            backgroundColor: theme.palette.background.default,
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
            multiple
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
      {fileList.length > 0 && !notShowList ? (
        <Stack spacing={2} sx={{ my: 2 }}>
          {fileList.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  backgroundColor: "#f5f8ff",
                  color: theme.palette.mode === "dark" ? theme.palette.background.default : theme.palette.text.default,
                  borderRadius: 1.5,
                  p: 0.5,
                }}
              >
                <Box display="flex">
                  <img
                    src={item}
                    alt="upload"
                    style={{
                      height: "3.5rem",
                      objectFit: "contain",
                    }}
                  />
                  <Box sx={{ ml: 1 }}>
                    <Typography>{item.name}</Typography>
                    <Typography variant="body2">image {index + 1}</Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={() => {
                    fileRemove(item);
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
  fileList: PropTypes.array,
  setFileList: PropTypes.func,
  limit: PropTypes.number,
  name: PropTypes.string,
  notShowList: PropTypes.bool,
};
