<?php

namespace App\Model\Logger;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class Log
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

    public function log($user, $status, $project)
    {

        $log = new \App\Entity\Log();

        $log->setDate(new \DateTime('now'));
        $log->setProject($project);
        $log->setStatus($status);
        $log->setUser($user);

        $this->em->persist($log);
        $this->em->flush();

    }

}