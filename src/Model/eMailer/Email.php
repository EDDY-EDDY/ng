<?php

namespace App\Model\eMailer;


class Email
{

    public function send($to, $msg, $subject)
    {

        $headers  = "From: projectmanager@pglappspot.com\r\n";
        $headers .= "X-Sender: PGL Project Managet < projectmanager@pglappspot.com >\n";
        $headers .= "Return-Path: projectmanager@pglappspot.com \n"; // Return path for errors
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=iso-8859-1\n";

        mail($to, $subject, $msg, $headers);

    }

}