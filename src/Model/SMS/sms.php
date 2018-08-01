<?php

namespace App\Model\SMS;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class sms
{


    protected $em;
    protected $pw;
    protected $log;
    protected $user;

    public function __construct(EntityManagerInterface $entityManager,  TokenStorageInterface $tokenStorage)
    {
        $this->em = $entityManager;
        $this->user = $tokenStorage->getToken()->getUser();

    }

    public function send($number, $message)
    {

        $message = strip_tags(urldecode($message));


        $sms_body = array(
            "username" => "eddygudom@gmail.com",
            "password" => "confirm23",
            "message" => $message,
            "sender" => "PGL",
            "mobiles" => $number
        );


        return $this->CallAPI('GET','http://login.betasms.com/api/',$sms_body);



    }

    function CallAPI($method, $url, $data = false)
    {
        $curl = curl_init();

        switch ($method)
        {
            case "POST":
                curl_setopt($curl, CURLOPT_POST, 1);

                if ($data)
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                break;
            case "PUT":
                curl_setopt($curl, CURLOPT_PUT, 1);
                break;
            default:
                if ($data)
                    $url = sprintf("%s?%s", $url, http_build_query($data));
        }

        // Optional Authentication:
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($curl, CURLOPT_USERPWD, "username:password");

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);

        curl_close($curl);

        return $result;
    }


}