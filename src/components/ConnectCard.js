import React from "react";
// Material UI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
// Components
import ContactForm from './ContactForm';

export default function ConnectCard() {
    return (
        <div color="primary">
                <Card raised={true}>
                    <CardHeader
                        action={
                            <IconButton>
                                <CloseIcon />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
        </div>
    )
};