<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Email sent!'
	);

    $name = @trim(stripslashes($_POST['name'])); 
    $email = @trim(stripslashes($_POST['email'])); 
    $subject = @trim(stripslashes($_POST['subject'])); 
    $message = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
    $email_to = '111113070@nitt.edu';

    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' . $message;

    if (mail($email_to, $subject, $body, 'From: <'.$email_from.'>')){
        $status = array(
        'type'=>'success',
        'message'=>'Email sent!'
        );
        echo json_encode($status);
    }else{
        $status = array(
        'type'=>'error',
        'message'=>'Email could not be sent! Please try again'
        );
        echo json_encode($status);
    }

    die;