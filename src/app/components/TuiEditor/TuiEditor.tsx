import { Box, Button, FormControl, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';


export const TuiEditor = (props: any) => {
    const editorRef = useRef();
    
    return (
        <Stack>
            <Stack
            direction={"row"}
            style={{margin: "40px"}}
            justifyContent={"space-evenly"}
            >
                <Box className={"form_row"} style={{ width: "300px"}}>
                    <Typography 
                    style={{color: "rgb(225 255 233)", margin: "10px"}}
                    variant="h3"
                    >
                        Category
                   </Typography>
                   <FormControl sx={{width: "100%", background: "white"}}>
                    <Select
                    value={"celebrity"}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label"}}
                    >
                        <MenuItem value="">
                            <span>Choose Category</span>
                        </MenuItem>
                        <MenuItem value={"celebrity"}> Mashhurlar </MenuItem>
                        <MenuItem value={"evaluation"}> Restaurant baho </MenuItem>
                        <MenuItem value={"story"}> Mening Hikoyam </MenuItem>
                    </Select>
                   </FormControl>
                </Box>

                <Box className={"form_row"} style={{  width: "300px"}}>
                    <Typography
                    style={{color: "rgb(225 255 233)", margin: "10px"}}
                    variant="h3"
                    >
                        Mavzu
                    </Typography>
                    <TextField
                    id="filled-basic"
                    label="Mavzu"
                    variant="filled"
                    style={{width: "300px", background: "white"}}
                    />
                </Box>
            </Stack>
            
            <Editor
            initialValue="  "
            placeholder="Type Here"
            previewStyle="vertical"
            height="640px"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
            // @ts-ignore
            ref={editorRef}
            toolbarItems={[
                ["heading", "bold", "italic", "strike"],
                ["image", "table", "link"],
                ["ul", "ol", "task"],
            ]}
            hooks={{
                addImageBlobHook: async (image: any, callback: any) => {
                    return false;
                },
            }}
            events={{
                load: function (param:any) {},
            }}
            />
              <Stack direction={"row"} justifyContent={"center"}>
                <Button
                variant="contained"
                color="primary"
                style={{margin: "30px", width: "250px", height: "45px"}}
                >
                    Register
                </Button>
                </Stack>  
        </Stack>
    );
};