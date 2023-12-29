import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dynamic from "next/dynamic";
import CustomTable from "@/components/shared/listingTable";
const DynamicEditor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  { ssr: false }
);

const Dashboard = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const stakeHolderHeader = ["Header 1", "Header 2", "Header 3", "Header 4"];
  const acceptanceHeader = [
    "Customer Challenges",
    "Impact of challengeg",
    "Solutions and Outcomes",
  ];

  const stakeHolderdata = Array.from({ length: 4 }, (_, index) => {
    return [
      `Row ${index + 1}, Cell 1`,
      `Row ${index + 1}, Cell 2`,
      `Row ${index + 1}, Cell 3`,
      `Row ${index + 1}, Cell 4`,
    ];
  });
  const acceptanceData = Array.from({ length: 3 }, (_, index) => {
    return [
      `» Challenge that your prospect is currently facing`,
      `» The impact of the challenge to your prospects business`,
      ` » How your prospect will achieve success with your solution`,
    ];
  });

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <Container>
      {/* <Grid container mb={10} spacing={5}>
                <Grid item lg={12} md={12} sm={12}>
                    <Paper sx={{ borderRadius: 0, position: "relative" }}>
                        <Box
                            sx={{ width: "100%", backgroundColor: "black", color: "#FFF" }}
                        >
                            <Box paddingLeft={14} paddingY={3}>
                                <Typography variant="h3">Sales Handoff</Typography>
                                <Typography>Company name</Typography>
                            </Box>
                        </Box>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{
                                width: 54,
                                height: 54,
                                position: "absolute",
                                left: 36,
                                bottom: 25,
                            }}
                        />
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
                <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography variant="h4" fontWeight={600}>
                            Introduction
                        </Typography>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </Box>
                    <Divider />
                    <Paper sx={{ borderRadius: 0, marginTop: 6 }}>
                        <Typography variant="body1" fontWeight={600} padding={2}>
                            Welcome!
                        </Typography>
                        <DynamicEditor
                            editorState={editorState}
                            toolbarClassName="toolbar-class"
                            wrapperClassName="custom-wrapper-class"
                            editorClassName="custom-editor-class"
                            onEditorStateChange={onEditorStateChange}
                        />
                    </Paper>
                </Grid>
                <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
                    <Typography variant="h4" fontWeight={600}>
                        Stakeholders
                    </Typography>
                    <Divider />
                    <Grid
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        sx={{ py: 1, background: "#FFF", padding: 3, marginTop: 6 }}
                    >
                        <Typography variant="h6" fontWeight={600}>
                            ACCOUNT Team
                        </Typography>
                    </Grid>
                    <CustomTable headers={stakeHolderHeader} data={stakeHolderdata} />
                </Grid>
                <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
                    <Typography variant="h4" fontWeight={600}>
                        Acceptance Criteria
                    </Typography>
                    <Divider />
                    <Grid
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        sx={{ py: 1, background: "#FFF", padding: 3, marginTop: 6 }}
                    >
                        <Typography variant="h6" fontWeight={600}>
                            Acceptance Criteria
                        </Typography>
                    </Grid>
                    <CustomTable headers={acceptanceHeader} data={acceptanceData} />
                </Grid>
            </Grid> */}
    </Container>
  );
};

export default Dashboard;
