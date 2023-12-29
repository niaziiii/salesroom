import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import AddIcon from "@mui/icons-material/Add";
import AddSectionModal from "@/components/shared/addSectionModal";
import EditIcon from "@mui/icons-material/Edit";

const CreateNew = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/static/images/avatar/1.jpg");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <AddSectionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addNewElement={() => console.log("Hello")}
      />
      <Grid container mb={10}>
        <Grid item lg={12} md={12} sm={12}>
          <Paper sx={{ borderRadius: 0, position: "relative" }}>
            <Box
              sx={{ width: "100%", backgroundColor: "black", color: "#FFF" }}
            >
              <Box paddingLeft={14} paddingY={3}>
                <Typography variant="h3" contentEditable>
                  Sales Handoff
                </Typography>
                <Typography contentEditable>Company name</Typography>
              </Box>
            </Box>
            <label htmlFor="image-upload">
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <Avatar
                alt="Remy Sharp"
                src={imageSrc}
                sx={{
                  width: 54,
                  height: 54,
                  position: "absolute",
                  left: 36,
                  bottom: 25,
                  cursor: "pointer",
                }}
              >
                <EditIcon sx={{ zIndex: 10 }} />
              </Avatar>
            </label>
            <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
              <Box
                display={"flex"}
                alignItems={"end"}
                paddingLeft={14}
                paddingY={1}
              >
                <Typography variant="h6">Sales Handoff</Typography>
                <Typography variant="h6" marginLeft={4}>
                  Sales Handoff
                </Typography>
                <Typography
                  variant="body1"
                  marginLeft={4}
                  sx={{ textDecoration: "underline" }}
                >
                  carollinemirandaf@gmail.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
          <Button
            startIcon={<AddIcon />}
            sx={{ color: "#0036C7", fontSize: 16 }}
            onClick={() => setIsModalOpen(true)}
          >
            Add Section
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateNew;
