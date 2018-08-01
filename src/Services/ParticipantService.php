<?php
/**
 * Created by PhpStorm.
 * User: eddyudom
 * Date: 08/05/2018
 * Time: 10:18 AM
 */

namespace App\Services;

use App\Entity\Designation;
use App\Entity\Organization;
use App\Entity\Participant;
use App\Entity\Session;
use App\Entity\User;
use App\Model\AppException\AppException;
use App\Model\AppException\AppExceptionMessages;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\Uuid;
use Symfony\Flex\Response;
use Throwable;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;


class ParticipantService
{

    protected $em;
    protected $log;
    protected $user;

    public function __construct(EntityManagerInterface $entityManager, TokenStorageInterface $tokenStorage)
    {
        $this->em = $entityManager;
        $this->user = $tokenStorage->getToken()->getUser();

    }


    public function add_participant($fname, $lname, $sex, $address, $phone,$email, $organization, $organization_text, $designation, $designation_text, $location)
    {

        try {

            if(!empty($fname) && !empty($lname) && !empty($sex)  && !empty($phone))
            {

                if(!empty($organization) || !empty($organization_text))
                {

                    if(!empty($designation) || !empty($designation_text))
                    {

                        if(!empty($location))
                        {


                        $participant = new Participant();


                        $uuid = Uuid::uuid1();


                        if(!empty($organization))
                        {
                            $organization = $this->em->getRepository(Organization::class)
                                ->findOneBy([
                                    'selector' => $organization
                                ]);
                            $participant->setOrganization($organization);
                        }else{

                            $org = new Organization();

                            $uuid2 = Uuid::uuid1();

                            $org->setSelector($uuid2->toString());
                            $org->setName($organization_text);

                            $this->em->persist($org);
                            $this->em->flush();

                            $participant->setOrganization($org);
                        }


                        if(!empty($designation))
                        {
                            $designation = $this->em->getRepository(Designation::class)
                                ->findOneBy([
                                    'selector' => $designation
                                ]);
                            $participant->setDesignation($designation);
                        }else{

                            $des = new Designation();

                            $uuid3 = Uuid::uuid1();

                            $des->setSelector($uuid3->toString());
                            $des->setCategory($designation_text);

                            $this->em->persist($des);
                            $this->em->flush();

                            $participant->setDesignation($des);
                        }

                        $participant->setSelector($uuid->toString());
                        $participant->setAddress($address);
                        $participant->setEmail($email);
                        $participant->setFirstName($fname);
                        $participant->setLastName($lname);
                        $participant->setLocation($location);
                        $participant->setPhone($phone);
                        $participant->setRecordStatus('active');
                        $participant->setSex($sex);
                        $participant->setCode(time());



                        $this->em->persist($participant);
                        $this->em->flush();


                        $response['status'] = "Participant Registered";
                        $response['selector'] = $uuid->toString();



                        }else{
                            throw new AppException("Location Cannot be empty");
                        }

                    }else{
                        throw new AppException("Designation Cannot be empty");
                    }


                }else{
                    throw new AppException("Organization Cannot be empty");
                }


            } else {
                throw new AppException("Fill in all details");
            }


            return $response;

        }catch(Throwable $e)
        {
            throw new AppException($e->getMessage());
        }

    }



    public function edit_participant($participant, $fname, $lname, $sex, $address, $phone,$email, $organization, $organization_text, $designation, $designation_text, $location)
    {

        try {

            if(!empty($fname) && !empty($lname) && !empty($sex)  && !empty($phone))
            {

                if(!empty($organization) || !empty($organization_text))
                {

                    if(!empty($designation) || !empty($designation_text))
                    {

                        if(!empty($location))
                        {



                            if(!empty($organization))
                            {
                                $organization = $this->em->getRepository(Organization::class)
                                    ->findOneBy([
                                        'selector' => $organization
                                    ]);
                                $participant->setOrganization($organization);
                            }else{

                                $org = new Organization();

                                $uuid2 = Uuid::uuid1();

                                $org->setSelector($uuid2->toString());
                                $org->setName($organization_text);

                                $this->em->persist($org);
                                $this->em->flush();

                                $participant->setOrganization($org);
                            }


                            if(!empty($designation))
                            {
                                $designation = $this->em->getRepository(Designation::class)
                                    ->findOneBy([
                                        'selector' => $designation
                                    ]);
                                $participant->setDesignation($designation);
                            }else{

                                $des = new Designation();

                                $uuid3 = Uuid::uuid1();

                                $des->setSelector($uuid3->toString());
                                $des->setCategory($designation_text);

                                $this->em->persist($des);
                                $this->em->flush();

                                $participant->setDesignation($des);
                            }

                            $participant->setAddress($address);
                            $participant->setEmail($email);
                            $participant->setFirstName($fname);
                            $participant->setLastName($lname);
                            $participant->setLocation($location);
                            $participant->setPhone($phone);
                            $participant->setSex($sex);



                            $this->em->flush($participant);


                            $response['status'] = "Participant Info Updated";




                        }else{
                            throw new AppException("Location Cannot be empty");
                        }

                    }else{
                        throw new AppException("Designation Cannot be empty");
                    }


                }else{
                    throw new AppException("Organization Cannot be empty");
                }


            } else {
                throw new AppException("Fill in all details");
            }


            return $response;

        }catch(Throwable $e)
        {
            throw new AppException($e->getMessage());
        }

    }


    public function delete_participant($user)
    {

        try {

            if($user)
            {

                 $this->em->remove($user);
                 $this->em->flush();

                $response['status'] = "Participant Deleted";

                return $response;


            }

        }catch(Throwable $e)
        {
            throw new AppException($e->getMessage());
        }

    }

}